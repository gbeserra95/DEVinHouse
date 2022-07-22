using src.DevInHouse.EFCoreApi.Core.Entities;

namespace src.DevInHouse.EFCoreApi.Core.Interfaces
{
    public interface IBookService
    {
        public List<Book> GetBooks(string title);
        public Book? GetBookById(int id);
        public int CreateBook(Book book);
        public void UpdateBook(Book originalBook, Book updatedBook);
        public void UpdatePrice(Book originalBook, decimal price);
        public void RemoveBook(int id);
    }
}