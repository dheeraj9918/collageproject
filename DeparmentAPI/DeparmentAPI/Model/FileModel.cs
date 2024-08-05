using System.ComponentModel.DataAnnotations;

namespace DeparmentAPI.Model
{
    public class FileModel
    {
        [Key]
        public int Id { get; set; }
        public string FileName { get; set; }
        public byte[] Data { get; set; }
    }
}
