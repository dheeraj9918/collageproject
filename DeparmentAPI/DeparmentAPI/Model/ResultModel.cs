using System.Text.Json.Serialization;

namespace DeparmentAPI.Model
{
    public class ResultModel
    {
        public int Id { get; set; }
        public int Semster { get; set; }
        public string Subject1 { get; set; }
        public int OptMarks1 { get; set; }
        public string Subject2 { get; set; }
        public int OptMarks2 { get; set; }
        public string Subject3 { get; set; }
        public int OptMarks3 { get; set; }
        public string Subject4 { get; set; }
        public int OptMarks4 { get; set; }
        public string Subject5 { get; set; }
        public int OptMarks5 { get; set; }
        public int OptTotalMarks { get; set; }
        public string SignInModelId { get; set; }
        [JsonIgnore]
        public SignInModel ApplictionUser { get; set; } = null!;
        
    }
}
