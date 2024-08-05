using System;
using System.ComponentModel.DataAnnotations;

namespace DeparmentAPI.Model
{
    public class SignInDto
    {
        public int RollNo { get; set; }
        public string FullName { get; set; }
        //public string FatherName { get; set; }
        public string Gender { get; set; }
        //public Category Category { get; set; }
        public DateTime DOB { get; set; }
        //public string FileName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        //public string Role { get; set; }
        //public AdmissionFee AdmissionFee { get; set; }
        //public ExamFrom ExamForm { get; set; }

        [Compare("ConfirmPassword")]
        public string Password { get; set; }
     
        public string ConfirmPassword { get; set; }
    }
}