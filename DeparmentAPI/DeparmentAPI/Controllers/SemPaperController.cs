using DeparmentAPI.Model;
using EmailRecovery.Services.EmailService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Threading.Tasks;

namespace DeparmentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SemPaperController : ControllerBase
    {
        private readonly UserContext _dbContext;
        private readonly IEmailService _emailService;

        public SemPaperController(UserContext dbContext, IEmailService emailService)
        {
            _dbContext = dbContext;
            _emailService = emailService;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");

            var imageEntity = new SemPaper
            {
                FileName = file.FileName
            };
          

            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);
                imageEntity.Data = memoryStream.ToArray();
            }

            await _dbContext.semPapers.AddAsync(imageEntity);
            await _dbContext.SaveChangesAsync();

            return Ok(imageEntity.Id);
        }

        [HttpGet("allNotification")]
        public async Task<IActionResult> getAllNotification()
        {
            var res = await _dbContext.semPapers.ToListAsync();
            return Ok(res);
        }

        [HttpGet("download/{id}")]
        public async Task<IActionResult> Download(int id)
        {
            var imageEntity = await _dbContext.semPapers.FirstOrDefaultAsync(i => i.Id == id);

            if (imageEntity == null)
                return NotFound();

            var fileContentResult = new FileContentResult(imageEntity.Data, "application/octet-stream")
            {
                FileDownloadName = imageEntity.FileName
            };
            return fileContentResult;
        }

        [HttpDelete]
        public async Task<string> deleteRes(int id)
        {
            var std = await _dbContext.semPapers.FirstOrDefaultAsync(i => i.Id == id);
            if (std != null)
            {
                _dbContext.semPapers.Remove(std);
                _dbContext.SaveChanges();
                return "deleted";
            }
            return "not deleted";
        }
    }
}
