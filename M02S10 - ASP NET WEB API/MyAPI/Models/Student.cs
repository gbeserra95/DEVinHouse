using System.ComponentModel.DataAnnotations;

namespace MyApi
{
    public class Student
    {
        public Student(int id, string name, string lastName, DateTime dateOfBirth)
        {
            Id = id;
            Name = name;
            LastName = lastName;
            DateOfBirth = dateOfBirth;

        }
        [Required(ErrorMessage = "{0} is required.")]
        public int Id { get; set; }

        [Required(ErrorMessage = "{0} is required.")]
        [StringLength(100, ErrorMessage = "{0} length must be at range of {2} and {1}.", MinimumLength = 1)]
        public string Name { get; set; }

        [Required(ErrorMessage = "{0} is required.")]
        [StringLength(100, ErrorMessage = "{0} length must be at range of {2} and {1}.", MinimumLength = 1)]
        public string LastName { get; set; }

        [Required(ErrorMessage = "{0} is required.")]
        public DateTime DateOfBirth { get; set; }
    }
}