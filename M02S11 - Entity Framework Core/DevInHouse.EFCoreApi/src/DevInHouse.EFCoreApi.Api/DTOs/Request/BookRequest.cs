using src.DevInHouse.EFCoreApi.Core.Entities;

namespace src.DevInHouse.EFCoreApi.Api.DTOs.Request
{
    public class BookRequest
    {
        public string Title { get; set; }
        public int CategoryId { get; set; }
        public int AuthorId { get; set; }
        public DateTime PublishDate { get; set; }
        public decimal Price { get; set; }

        public Book ConvertToEntity()
        {
            return new Book(Title, CategoryId, AuthorId, PublishDate, Price);
        }
    }
}