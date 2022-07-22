using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using src.DevInHouse.EFCoreApi.Core.Entities;

namespace src.DevInHouse.EFCoreApi.Core.Data.Mappings
{
    public class BookMap : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder.ToTable("Books");

            // Optional: it is not really necessary if the Id is named as Id, use it if the primary key has another name.
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Title)
                .HasMaxLength(255)
                .IsUnicode(false)
                .IsRequired();

            builder.Property(p => p.PublishDate)
                .HasColumnType("date");

            builder.Property(p => p.Price)
                .HasColumnType("decimal(18,2)");

            builder.HasOne(p => p.Author)
                .WithMany(p => p.Books)
                .HasForeignKey(p => p.AuthorId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(p => p.Category)
                .WithMany(p => p.Books)
                .HasForeignKey(p => p.CategoryId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}