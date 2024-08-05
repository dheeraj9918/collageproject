using System.ComponentModel.DataAnnotations;

namespace DeparmentAPI.Dto
{
    public class forgetPassDto
    {
        [Required]
        [EmailAddress]
        public string? Email { get; set; }
        [Required]
        public string? ClientUrl { get; set; }
    }
}
