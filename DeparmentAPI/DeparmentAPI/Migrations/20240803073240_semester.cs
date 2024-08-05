using Microsoft.EntityFrameworkCore.Migrations;

namespace DeparmentAPI.Migrations
{
    public partial class semester : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Semster",
                table: "ResultModels",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Semster",
                table: "ResultModels");
        }
    }
}
