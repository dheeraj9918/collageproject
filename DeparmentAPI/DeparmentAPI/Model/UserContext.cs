using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DeparmentAPI.Model
{
    public class UserContext:IdentityDbContext<SignInModel>
    {
        public UserContext(DbContextOptions<UserContext> options)
            : base(options) { }
        public DbSet<SignInModel> ApplictionUsers { get; set; }
        public DbSet<ResultModel> ResultModels { get; set; }
        public DbSet<FileModel> fileModels { get; set; }
        public DbSet<SemPaper> semPapers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure the one-to-one relationship between ResultModel and SignInModel
            modelBuilder.Entity<ResultModel>()
                .HasOne(r => r.ApplictionUser)
                .WithOne(s => s.ResultModel)
                .HasForeignKey<ResultModel>(r => r.SignInModelId)
                .OnDelete(DeleteBehavior.Cascade); // Configure delete behavior as needed
        }
    }
}
