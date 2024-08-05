using DeparmentAPI.Model;
using DeparmentAPI.Ripository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeparmentAPI.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class ResultController : ControllerBase
    {
        private readonly IResultRepository _resultRepository;
        private readonly UserContext _context;

        public ResultController(IResultRepository resultRepository,UserContext context)
        {
            _resultRepository = resultRepository;
            _context = context;
        }


        [HttpPost]
        [Authorize(Policy = "AdminPolicy")]
        public async Task<bool> UploadResult(ResultDto resultDto)
        {
            var res = await _resultRepository.ResultAsync(resultDto);
            return true;
        }

        
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ResultModel> getResultById(string id)
        {
            var res = await _resultRepository.getResultByIdAsync(id);
            return res;
        }


        
        [HttpGet("allStudentResult")]
        [Authorize(Policy = "AdminPolicy")]
        public async Task<List<ResultModel>> allStudentsResult()
        {
            return await _resultRepository.getAllStudentResultAsync();
        }
        //[HttpPut("updateResult")]
        //public async Task<bool> updateResult(string id , ResultDto resultDto)
        //{
        //    return await _resultRepository.updateResultAsync(id, resultDto);
        //}

        //[HttpDelete]
        //public async Task<string> deleteRes(string id)
        //{
        //    var std = await _context.ResultModels.FirstOrDefaultAsync(i => i.SignInModelId == id);
        //    if (std != null)
        //    {
        //        _context.ResultModels.Remove(std);
        //        _context.SaveChanges();
        //        return "deleted";
        //    }
        //    return "not deleted";
        //}
    }
}
