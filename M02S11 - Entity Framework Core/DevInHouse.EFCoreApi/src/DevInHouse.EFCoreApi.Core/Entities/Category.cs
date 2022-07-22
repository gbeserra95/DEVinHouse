using System.Text.Json.Serialization;
using src.DevInHouse.EFCoreApi.Core.Entities.Shared;

namespace src.DevInHouse.EFCoreApi.Core.Entities
{
    public class Category : Entity
    {
        public string Name { get; private set; }

        [JsonIgnore]
        public ICollection<Book> Books { get; private set; } // the books we will have within a category

        public Category(string name)
        {
            Name = name;
        }
    }
}