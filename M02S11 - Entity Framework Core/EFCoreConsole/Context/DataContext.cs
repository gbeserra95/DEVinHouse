using Entities;
using Microsoft.EntityFrameworkCore;

namespace EFCoreConsole
{
    public class DataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(
                "Host=localhost;Port=5432;Database=EFCore;User Id=postgres;Password=Postgres0407#"
            );
        }
        public DbSet<Book> Books { get; set; } // Repository
    }
}