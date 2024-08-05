using MailKit.Security;
using Microsoft.AspNetCore.Mvc;
using MimeKit.Text;
using MimeKit;
using MailKit.Net.Smtp;
using DeparmentAPI.Model;
using Microsoft.Extensions.Configuration;

namespace EmailRecovery.Services.EmailService
{
    public class EmailService:IEmailService
    {
        private readonly IConfiguration _conf;

        public EmailService(IConfiguration conf) 
        {
            _conf = conf;
        }
        public void emailSender(EmailDto request)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(_conf.GetSection("EmailUserName").Value));
            email.To.Add(MailboxAddress.Parse(request.To));
            email.Subject = request.Subject;
            string emailBody = request.Body;

            email.Body = new TextPart(TextFormat.Text)
            {
                Text = emailBody
            };
            using var smtp = new SmtpClient();
            smtp.Connect(_conf.GetSection("EmailHost").Value, 587, SecureSocketOptions.StartTls);
            smtp.Authenticate(_conf.GetSection("EmailUserName").Value, _conf.GetSection("EmailPassword").Value);
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}
