using System.Text.Json.Serialization;
using src.DevInHouse.EFCoreApi.Core.Entities.Shared;

namespace src.DevInHouse.EFCoreApi.Core.Entities
{
    public class Author : Entity
    {
        public string Name { get; private set; }
        public string LastName { get; private set; }
        [JsonIgnore]
        public ICollection<Book> Books { get; private set; } // an author has a list of books

        public Author(string name, string lastName)
        {
            Name = name;
            LastName = lastName;
        }
    }
}