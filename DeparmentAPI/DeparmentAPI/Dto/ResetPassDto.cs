using System.ComponentModel.DataAnnotations;

namespace DeparmentAPI.Dto
{
    public class ResetPassDto
    {
        [Required]
        public string Password { get; set; }

        [Required]
        [Compare("Password")]
        public string ConformPassword { get; set; }
        public string Email {  get; set; }
        public string Token {  get; set; }
    }
}
