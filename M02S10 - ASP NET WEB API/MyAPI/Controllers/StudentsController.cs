using MyApi;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
    [ApiController]
    [Route("api/students/[controller]")]
    public class StudentsController : ControllerBase
    {
        /// <summary>
        /// Returns a list of all students based on a name query
        /// </summary>
        /// <param name="name">Filtered by name</params>
        /// <returns> Returns a list of students</returns>
        /// <response code="200">Returns students that matched with the query</response>
        /// <response code="500">Returns possible errors</response>
        [ProducesResponseType(typeof(List<Student>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [HttpGet]
        public ActionResult<List<Student>> GetStudents(string? name)
        {
            var list = new List<Student>();
            var student_1 = new Student(1, "Gabriel", "Beserra", new DateTime(1995, 08, 27));
            var student_2 = new Student(2, "Gabrielle", "Caigara", new DateTime(1999, 08, 31));

            list.Add(student_1);
            list.Add(student_2);

            if (!string.IsNullOrWhiteSpace(name))
            {
                var filteredList = list.Where(student => student.Name.Contains(name, StringComparison.InvariantCultureIgnoreCase));
                return Ok(filteredList);
            }

            return Ok(list);

        }

        /// <summary>
        /// Returns a student based on its id
        /// </summary>
        /// <param name="name">Student id</params>
        /// <returns> Returns the student</returns>
        /// <response code="200">Returns the student</response>
        /// <response code="500">Returns possible errors</response>
        [ProducesResponseType(typeof(Student), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [HttpGet("{id}")]
        public ActionResult<Student> GetStudent(int id)
        {
            var student = new Student(1, "Gabriel", "Beserra", new DateTime(1995, 08, 27));

            return Ok(student);
        }

        /// <summary>
        /// Created a new student
        /// </summary>
        /// <param name="student">Student data</params>
        /// <returns> Returns the student id </returns>
        /// <response code="201">Returns the student id</response>
        /// <response code="400">Returns parameters validation error</response>
        [ProducesResponseType(typeof(int), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPost]
        public IActionResult CreateStudent(Student student)
        {
            // Simulate creating a new student within the Data Base
            return CreatedAtAction(nameof(GetStudent), new { id = student.Id }, student.Id);
        }

        /// <summary>
        /// Updates student data
        /// </summary>
        /// <param name="name">Student data</params>
        /// <returns></returns>
        /// <response code="200">Returns success</response>
        /// <response code="400">Returns parameters validation error</response>
        /// <response code="500">Returns possible errors</response>
        [ProducesResponseType(typeof(Student), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [HttpPut]
        public IActionResult UpdateStudent()
        {
            // Simulate updating student within the Data Base
            return NoContent();
        }

        /// <summary>
        /// Deletes student by its id
        /// </summary>
        /// <param name="name">Student Id</params>
        /// <returns></returns>
        /// <response code="200">Returns success</response>
        /// <response code="500">Returns possible errors</response>
        [ProducesResponseType(typeof(Student), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [HttpDelete]
        public IActionResult DeleteStudent()
        {
            // Simulate deleting a student within the Data Base
            return Ok();
        }
    }
}