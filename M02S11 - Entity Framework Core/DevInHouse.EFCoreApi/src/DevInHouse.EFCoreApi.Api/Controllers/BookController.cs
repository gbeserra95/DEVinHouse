using Microsoft.AspNetCore.Mvc;
using src.DevInHouse.EFCoreApi.Api.DTOs.Request;
using src.DevInHouse.EFCoreApi.Core.Entities;
using src.DevInHouse.EFCoreApi.Core.Interfaces;

namespace src.DevInHouse.EFCoreApi.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        public ActionResult<List<Book>> GetBooks(string title)
        {
            var books = _bookService.GetBooks(title);
            if (books == null || books.Count == 0)
                return NoContent();

            return Ok(books);
        }
        [HttpGet("{id}")]
        public ActionResult<Book> GetBookById(int id)
        {
            var book = _bookService.GetBookById(id);
            if (book == null)
                return NotFound();

            return Ok(book);
        }

        [HttpPost]
        public ActionResult CreateBook(BookRequest book)
        {
            var id = _bookService.CreateBook(book.ConvertToEntity());
            return CreatedAtAction(nameof(GetBookById), new { Id = id }, id);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateBook(int id, Book book)
        {
            var originalBook = _bookService.GetBookById(id);

            if (originalBook == null)
                return NotFound();

            _bookService.UpdateBook(originalBook, book);

            return NoContent();
        }

        [HttpPatch("{id}/price/{price}")]
        public ActionResult UpdatePrice(int id, decimal price)
        {
            var originalBook = _bookService.GetBookById(id);

            if (originalBook == null)
                return NotFound();

            _bookService.UpdatePrice(originalBook, price);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteBook(int id)
        {
            try
            {
                _bookService.RemoveBook(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("is null"))
                    return NotFound();

                return StatusCode(StatusCodes.Status500InternalServerError, new { Message = ex.Message });
            }
        }
    }
}