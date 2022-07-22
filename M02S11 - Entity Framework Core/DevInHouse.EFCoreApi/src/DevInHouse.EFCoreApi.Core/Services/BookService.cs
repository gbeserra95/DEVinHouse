using Microsoft.EntityFrameworkCore;
using src.DevInHouse.EFCoreApi.Core.Data.Context;
using src.DevInHouse.EFCoreApi.Core.Entities;
using src.DevInHouse.EFCoreApi.Core.Interfaces;

namespace src.DevInHouse.EFCoreApi.Core.Services
{
    public class BookService : IBookService
    {
        private readonly DataContext _context;
        public BookService(DataContext context)
        {
            _context = context;
        }
        public List<Book> GetBooks(string title)
        {
            return _context.Books
                .Include(p => p.Category)
                .Include(p => p.Author)
                .Where(p => string.IsNullOrWhiteSpace(title) || p.Title.Contains(title))
                .ToList();
        }
        public Book? GetBookById(int id)
        {
            return _context.Books
                .Include(p => p.Category)
                .Include(p => p.Author)
                .FirstOrDefault(p => p.Id == id);
        }
        public int CreateBook(Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();

            return book.Id;
        }
        public void UpdateBook(Book originalBook, Book updatedBook)
        {
            originalBook.UpdateBook(
                updatedBook.Title,
                updatedBook.CategoryId,
                updatedBook.AuthorId,
                updatedBook.PublishDate,
                updatedBook.Price
            );

            _context.SaveChanges();
        }
        public void UpdatePrice(Book originalBook, decimal price)
        {
            originalBook.UpdatePrice(price);

            _context.SaveChanges();
        }

        public void RemoveBook(int id)
        {
            var book = GetBookById(id);

            if (book == null)
                throw new Exception("Informed book id is null.");

            _context.Books.Remove(book);
            _context.SaveChanges();
        }
    }
}