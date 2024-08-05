using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;
using System;
using DeparmentAPI.Model;
using Microsoft.EntityFrameworkCore;
using System.IO.Compression;
using System.Linq;
using EmailRecovery.Services.EmailService;
using System.Collections.Generic;

namespace DeparmentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private readonly UserContext _dbContext;
        private readonly IEmailService _emailService;

        public FilesController(UserContext dbContext , IEmailService emailService)
        {
            _dbContext = dbContext;
            _emailService = emailService;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");

            var imageEntity = new FileModel
            {
                FileName = file.FileName
            };
            if(file.Length > 0)
            {
              var allEmail =  await _dbContext.ApplictionUsers.Select(x => x.Email).ToListAsync();
                foreach(string em in allEmail){
                    string email = em;
                    var emailDto = new EmailDto
                    {
                        To = em,
                        Subject = "New Notification Added by IT Department RMLAU",
                        Body = $"Some new Notification related to {file.FileName} is added by IT Department Please Check it on www.rmlau.com"
                    };
                    _emailService.emailSender(emailDto);
                }

                
            }

            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);
                imageEntity.Data = memoryStream.ToArray();
            }

            await _dbContext.fileModels.AddAsync(imageEntity);
            await _dbContext.SaveChangesAsync();

            return Ok(imageEntity.Id);
        }

        [HttpGet("allNotification")]
        public async Task<IActionResult> getAllNotification()
        {
            var res= await _dbContext.fileModels
                 .Select(c => new {
                     id= c.Id,
                     fileName = c.FileName,
                 })
                .ToListAsync();
            return Ok(res);
        } 

        [HttpGet("download/{id}")]
        public async Task<IActionResult> Download(int id)
        {
            var imageEntity = await _dbContext.fileModels.FirstOrDefaultAsync(i => i.Id == id);

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
            var std = await _dbContext.fileModels.FirstOrDefaultAsync(i => i.Id == id);
            if (std != null)
            {
                _dbContext.fileModels.Remove(std);
                _dbContext.SaveChanges();
                return "deleted";
            }
            return "not deleted";
        }
    }
}
