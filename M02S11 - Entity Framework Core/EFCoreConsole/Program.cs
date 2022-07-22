using EFCoreConsole;
using Entities;
using Microsoft.EntityFrameworkCore;

using (var db = new DataContext())
// Establishes a connection with our Database
// Automatically disposes (closes the connection) when the code within using() is finished
{
    db.Database.EnsureCreated(); // Ensures DataBase was created

    if (db.Books.Any()) // Check if Database has any data
    {
        // Deletes all table registers and restarts the auto incremental id counting
        db.Database.ExecuteSqlRaw("TRUNCATE ONLY \"Books\" RESTART IDENTITY;");
    }

    // Adds a elements in our Database
    db.Books.Add(new Book("Clean Code: A Handbook of Agile Software Craftsmanship", "Robert C. Martin", 2008));
    db.Books.Add(new Book("Domain-Driven Design: Tackling Complexity in the Heart of Software", "Eric Evans", 2003));
    db.Books.Add(new Book("Agile Principles, Patterns, and Practices in C#", "Robert C. Martin", 2006));
    db.Books.Add(new Book("Clean Code: A Handbook of Agile Software Craftsmanship", "Robert C. Martin", 2008));
    db.Books.Add(new Book("Implementing Domain-Driven Design", "Vaughn Vernon", 2013));
    db.Books.Add(new Book("Patterns, Principles, and Practices of Domain-Driven Design", "Scott Millet", 2015));
    db.Books.Add(new Book("Refactoring: Improving the Design of Existing Code ", "Martin Fowler", 2012));

    db.SaveChanges(); // Commits
}