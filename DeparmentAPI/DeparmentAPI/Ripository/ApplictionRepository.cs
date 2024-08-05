using AutoMapper;
using DeparmentAPI.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace DeparmentAPI.Ripository
{
    public class ApplictionRepository : IApplictionRepository
    {
        private readonly UserManager<SignInModel> _userManager;
        private readonly SignInManager<SignInModel> _signInManager;
        private readonly UserContext _userContext;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public ApplictionRepository(UserManager<SignInModel> userManager,
            SignInManager<SignInModel> signInManager, UserContext userContext,
            IConfiguration configuration, IMapper mapper
            )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _userContext = userContext;
            _configuration = configuration;
            _mapper = mapper;
        }

        public async Task<IdentityResult> SignUpAsync(SignInDto signInModel)
        {
            var user = _mapper.Map<SignInModel>(signInModel);
            return await _userManager.CreateAsync(user, signInModel.Password);
        }

        //public async Task<string> LogInAsync(LoginModel loginModel)
        //{
        //    var result = await _signInManager.PasswordSignInAsync(loginModel.Id, loginModel.Password, false, false);
        //    if (!result.Succeeded)
        //    {
        //        return null;
        //    }
        //    var authClaim = new List<Claim>
        //        {
        //            new Claim(ClaimTypes.Name , loginModel.Id),
        //            new Claim(JwtRegisteredClaimNames.Jti ,Guid.NewGuid().ToString() )
        //    };

        //    var authSigninKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_configuration["JWT:Secret"]));

        //    var token = new JwtSecurityToken(
        //        issuer: _configuration["JWT:ValidIssuer"],
        //        audience: _configuration["JWT:ValidAudience"],
        //        expires: DateTime.Now.AddDays(1),
        //        claims: authClaim,
        //        signingCredentials: new SigningCredentials(authSigninKey, SecurityAlgorithms.HmacSha256Signature)
        //        );

        //    return new JwtSecurityTokenHandler().WriteToken(token);
        //}

        public async Task<string> LogInAsync(LoginModel loginModel)
        {
            var result = await _signInManager.PasswordSignInAsync(loginModel.Id, loginModel.Password, false, false);
            if (!result.Succeeded)
            {
                return null;
            }

            // Retrieve the user
            var user = await _userManager.FindByIdAsync(loginModel.Id);
            if (user == null)
            {
                return null;
            }

            // Retrieve roles
            var roles = user.Role;

            // Create the claims
            var authClaim = new List<Claim>
    {
        new Claim(ClaimTypes.Name, loginModel.Id),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
    };

            // Add role claims
            
                authClaim.Add(new Claim(ClaimTypes.Role, roles));
            

            var authSigninKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddDays(1),
                claims: authClaim,
                signingCredentials: new SigningCredentials(authSigninKey, SecurityAlgorithms.HmacSha256Signature)
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }




        public async Task<SignInModel> GetUserbyIdAsync(string UserId)
        {
            var record = await _userContext.ApplictionUsers.FindAsync(UserId);
            return _mapper.Map<SignInModel>(record);
        }
        public async Task<bool> UpdateUserDetails(string id, SignInDto signInDto)
        {

            var userDetails = _userContext.ApplictionUsers.FirstOrDefault(d => d.Id == id);

            if (userDetails == null)
            {
                return false;
            }
            _mapper.Map(signInDto, userDetails);
            _userContext.Entry(userDetails).State = EntityState.Modified;
            await _userContext.SaveChangesAsync();
            return true;
        }

        public async Task<List<SignInModel>> TeacherAssistentAsync(string inp)
        {

            var result = _userContext.ApplictionUsers.Where(u => u.FullName.Contains(inp)
                    || u.Email.Contains(inp) || u.PhoneNumber.Contains(inp) || u.RollNo.ToString() == inp).ToListAsync();
            return await result;
            
        }

    }
}
