using DeparmentAPI.Dto;
using DeparmentAPI.Model;
using DeparmentAPI.Ripository;
using EmailRecovery.Services.EmailService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace DeparmentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IApplictionRepository _applictionRepository;
        private readonly UserContext _userContext;
        private readonly IEmailService _emailService;

        public UserManager<SignInModel> _UserManager { get; }

        public AccountController(IApplictionRepository applictionRepository, UserContext userContext,
                                     UserManager<SignInModel> userManager, IEmailService emailService
            )
        {
            _applictionRepository = applictionRepository;
            _userContext = userContext;
            _UserManager = userManager;
            _emailService = emailService;
        }


        [HttpPost("signUp")]

        public async Task<IActionResult> SignUp([FromBody] SignInDto model)
        {
            try
            {
                var result = await _applictionRepository.SignUpAsync(model);
                if (result.Succeeded)
                {
                    return Ok(result.Succeeded);
                }
            }
            catch (Exception ex)
            {
                return null;

            }
            return Unauthorized();

        }

        [HttpPost("login")]

        public async Task<IActionResult> SignIn([FromBody] LoginModel loginModel)
        {
            var result = await _applictionRepository.LogInAsync(loginModel);

            if (string.IsNullOrEmpty(result))
            {
                return Unauthorized();
            }
            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<SignInModel>> GetAllUsers()
        {
            return Ok(await _userContext.ApplictionUsers.ToListAsync());
        }

        [Authorize]
        [HttpGet("getOneUser/{id}")]

        public async Task<IActionResult> GetOneUser([FromRoute] string id)
        {
            var result = await _applictionRepository.GetUserbyIdAsync(id);
            return Ok(result);
        }

        [Authorize]
        [HttpGet("allStudent")]
        public async Task<ActionResult<List<SignInModel>>> getAllStudent()
        {
            var std = await _userContext.ApplictionUsers.ToListAsync();
            return Ok(std);
        }

        [HttpGet("result/{id}")]
        public async Task<IActionResult> getResult([FromRoute] string id)
        {
            var result = await _applictionRepository.GetUserbyIdAsync(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpPut]
        [Route("UpdateUserDetails/{id}")]
        public async Task<bool> UpdateUserDetails(string id, SignInDto applictionUser)
        {
            return await _applictionRepository.UpdateUserDetails(id, applictionUser);
        }

        [HttpPut("UpdatePassword/{id}")]
        public async Task<IActionResult> UpdatePassword(string id, [FromBody] PasswordUpdateModel model)
        {
            var user = await _UserManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound("User not found");
            }

            var result = await _UserManager.ChangePasswordAsync(user, model.OldPassword, model.NewPassword);
            if (result.Succeeded)
            {
                return Ok("Password updated successfully");
            }
            else
            {
                return BadRequest("Failed to update password");
            }
        }


        [HttpPost("forgetpassword")]
        public async Task<IActionResult> ForgetPassword([FromBody] forgetPassDto forgetPassDto)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }
            var user = await _UserManager.FindByEmailAsync(forgetPassDto.Email);
            if(user == null)
            {
                return BadRequest("Invalid User");
            }
            var token = await _UserManager.GeneratePasswordResetTokenAsync(user);
            var param = new Dictionary<string, string>
            {
                {"token",token },
                {"email", forgetPassDto.Email}
            };
            var callBack = QueryHelpers.AddQueryString(forgetPassDto.ClientUrl, param);
            //var message = new EmailDto([user.Email],"Reset password Token",callBack,null);
            var emailDto = new EmailDto
            {
                To = user.Email,
                Subject = "Reset Password Token",
                Body = $"Please reset your password using the following link: {callBack}"
            };
             _emailService.emailSender(emailDto);
            return Ok(emailDto);
        }

        
        [HttpPatch("resetPassword")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPassDto resetPassDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var user = await _UserManager.FindByEmailAsync(resetPassDto.Email);
            if (user == null)
            {
                return BadRequest("Invalid Request");
            }

            var result = await _UserManager.ResetPasswordAsync(user, resetPassDto.Token, resetPassDto.Password);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(error => error.Description);
                return BadRequest(errors);
            }

            return Ok(result);
        }

        [HttpDelete]
        public async Task<string> deleteRes(string id)
        {
            var std = await _userContext.ApplictionUsers.FirstOrDefaultAsync(i => i.Id == id);
            if (std != null)
            {
                _userContext.ApplictionUsers.Remove(std);
                _userContext.SaveChanges();
                return "deleted";
            }
            return "not deleted";
        }

        [HttpGet("assistent")]
        public async Task<ActionResult<List<SignInModel>>> Assistent(string inp)
        {
            var res = await _applictionRepository.TeacherAssistentAsync(inp);
            if(res == null || res.Count() == 0)
            {
                return NotFound("Not any Student Found");
            }
            return Ok(res);
        } 

    }
}
