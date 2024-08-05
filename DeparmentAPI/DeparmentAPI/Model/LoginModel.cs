using System.ComponentModel.DataAnnotations;

namespace DeparmentAPI.Model
{
    public class LoginModel
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string Password { get; set; }
    }

}
