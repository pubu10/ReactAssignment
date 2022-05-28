using Assignment.BL;
using Assignment.MODEL;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Assignment.API.Controllers
{
    [Consumes("application/json")]
    [Produces("application/json")]
    [Route("api/Student/[action]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private StudentBL _BL = null;

        public StudentController()
        {
            _BL = new StudentBL();
        }

        [HttpPost]
        [ActionName("Add")]
        public bool Add([FromBody] StudentsModel _oBooksModel)
        {
            return _BL.Add(_oBooksModel);
        }

        [HttpPut]
        [ActionName("Edit")]
        public bool Edit([FromBody] StudentsModel _oBooksModel)
        {
            return _BL.Edit(_oBooksModel);
        }

        [HttpDelete("{StudentID}/{ClassroomID}")]
        [ActionName("Delete")]
        public bool Delete([FromRoute] int StudentID, int ClassroomID)
        {
            return _BL.Delete(StudentID, ClassroomID);
        }

        [HttpPost]
        [ActionName("BulkRemove")]
        public bool BulkRemove([FromBody] List<StudentsModel> data)
        {
            return _BL.BulkDelete(data);
        }

        [HttpGet("{StudentID}")]
        [ActionName("GetById")]
        public StudentsModel GetById([FromRoute] int StudentID)
        {
            return _BL.GetById(StudentID);
        }

        [HttpGet]
        [ActionName("GetAll")]
        public List<StudentsModel> GetAll()
        {
            return _BL.GetAll();
        }
    }
}