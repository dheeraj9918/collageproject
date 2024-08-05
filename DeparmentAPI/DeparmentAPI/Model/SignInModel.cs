using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Text.Json.Serialization;

namespace DeparmentAPI.Model
{
    public class SignInModel:IdentityUser
    { 
        public int RollNo { get; set; }
        public string FullName { get; set; }
        //public string? FatherName { get; set; }
        public string Gender { get; set; }
        //public string? Category { get; set; }
        public DateTime? DOB { get; set; }
        //public string? FileName { get; set; }
        //public bool? AdmissionFee { get; set; }
        //public bool? ExamForm { get; set; }
        public string? Role { get; set; }
        [JsonIgnore]
        public ResultModel? ResultModel { get; set; }

    }
}
