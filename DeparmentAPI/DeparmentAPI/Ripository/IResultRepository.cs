using DeparmentAPI.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeparmentAPI.Ripository
{
    public interface IResultRepository
    {
         Task<bool> ResultAsync(ResultDto resultDto);
        Task<ResultModel> getResultByIdAsync(string id);
        Task<List<ResultModel>> getAllStudentResultAsync();
        Task<bool> updateResultAsync(string id, ResultDto resultDto);
    }
}
