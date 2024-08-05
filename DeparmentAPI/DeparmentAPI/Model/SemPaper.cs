using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace DeparmentAPI.Model
{
    public class SemPaper
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string FileName { get; set; }
        public byte[] Data { get; set; }
    }
}
