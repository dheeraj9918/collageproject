using AutoMapper;
using DeparmentAPI.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeparmentAPI.Ripository
{
    public class ResultRepository:IResultRepository
    {
        private readonly UserContext _context;
        private readonly IMapper _mapper;

        public ResultRepository(UserContext context , IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<bool> ResultAsync(ResultDto resultDto)
        {
            var marks = _mapper.Map<ResultModel>(resultDto);
                         await _context.ResultModels.AddAsync(marks);
                         await _context.SaveChangesAsync();
            return true;
        }

        public async Task<ResultModel> getResultByIdAsync(string id)
        {
            var res = await _context.ResultModels.Include(a=>a.ApplictionUser)
                            .FirstOrDefaultAsync(i=>i.SignInModelId==id);
            return  res;
        }

        public async Task<List<ResultModel>> getAllStudentResultAsync()
        {
            var res = await _context.ResultModels.Include(r=>r.ApplictionUser).ToListAsync();
            return res;
        }

        public async Task<bool> updateResultAsync(string id,ResultDto resultDto)
        {
            var stdId = await _context.ResultModels.FirstOrDefaultAsync(i=> i.SignInModelId==id);
            if(stdId==null)
            {
                return false;
            }
            _mapper.Map(resultDto, stdId);
            _context.Entry(stdId).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;
        }

    }
}
