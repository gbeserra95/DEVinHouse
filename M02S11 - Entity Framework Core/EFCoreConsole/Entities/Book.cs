namespace Entities
{
    public class Book
    {
        public Book(string title, string author, int year)
        {
            Author = author;
            Title = title;
            Author = author;
            Year = year;
        }
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int Year { get; set; }
    }
}