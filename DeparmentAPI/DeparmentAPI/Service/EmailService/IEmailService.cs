using DeparmentAPI.Model;
using Microsoft.AspNetCore.Mvc;

namespace EmailRecovery.Services.EmailService
{
    public interface IEmailService
    {
        public void emailSender(EmailDto request);
    }
}
