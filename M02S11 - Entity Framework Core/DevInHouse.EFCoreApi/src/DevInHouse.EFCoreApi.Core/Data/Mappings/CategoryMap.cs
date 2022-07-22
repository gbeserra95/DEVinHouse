using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using src.DevInHouse.EFCoreApi.Core.Entities;

namespace src.DevInHouse.EFCoreApi.Core.Data.Mappings
{
    public class CategoryMap : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.ToTable("Categories");

            // Optional: it is not really necessary if the Id is named as Id, use it if the primary key has another name.
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Name)
                .HasMaxLength(100)
                .IsUnicode(false)
                .IsRequired();
        }
    }
}