using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using src.DevInHouse.EFCoreApi.Core.Entities;

namespace src.DevInHouse.EFCoreApi.Core.Data.Mappings
{
    public class AuthorMap : IEntityTypeConfiguration<Author>
    {
        public void Configure(EntityTypeBuilder<Author> builder)
        {
            builder.ToTable("Authors");

            // Optional: it is not really necessary if the Id is named as Id, use it if the primary key has another name.
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Name)
                .HasMaxLength(150)
                .IsUnicode(false)
                .IsRequired();

            builder.Property(p => p.LastName)
                .HasMaxLength(150)
                .IsUnicode(false)
                .IsRequired();
        }
    }
}