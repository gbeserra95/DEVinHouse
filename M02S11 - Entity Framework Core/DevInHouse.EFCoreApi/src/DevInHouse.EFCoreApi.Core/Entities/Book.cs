using src.DevInHouse.EFCoreApi.Core.Entities.Shared;

namespace src.DevInHouse.EFCoreApi.Core.Entities
{
    public class Book : Entity
    {
        public string Title { get; private set; }
        public int CategoryId { get; private set; } // Setting a foreign key from the Category entity
        public int AuthorId { get; private set; } // Setting a foreign key from the Author entity
        public DateTime PublishDate { get; private set; }
        public decimal Price { get; private set; }

        public Author? Author { get; private set; }
        public Category? Category { get; private set; }
        public Book(string title, int categoryId, int authorId, DateTime publishDate, decimal price)
        {
            Title = title;
            CategoryId = categoryId;
            AuthorId = authorId;
            PublishDate = publishDate;
            Price = price;
        }

        public void UpdateBook(string title, int categoryId, int authorId, DateTime publishDate, decimal price)
        {
            Title = title;
            CategoryId = categoryId;
            AuthorId = authorId;
            PublishDate = publishDate;
            Price = price;
        }

        public void UpdatePrice(decimal price)
        {
            Price = price;
        }
    }
}