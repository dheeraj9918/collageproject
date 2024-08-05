using DeparmentAPI.Model;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeparmentAPI.Ripository
{
    public interface IApplictionRepository
    {
        Task<IdentityResult> SignUpAsync(SignInDto signInModel);
        Task<string> LogInAsync(LoginModel loginModel);
        Task<SignInModel> GetUserbyIdAsync(string UserId);
        Task<bool> UpdateUserDetails(string id, SignInDto signInDto);
        Task<List<SignInModel>> TeacherAssistentAsync(string inp);
    }
}
