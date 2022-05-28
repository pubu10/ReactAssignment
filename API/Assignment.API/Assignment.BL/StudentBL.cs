using Assignment.MODEL;
using Assignment.REPOSITORY;
using System.Collections.Generic;

namespace Assignment.BL
{
    public class StudentBL
    {
        public bool Add(Assignment.MODEL.StudentsModel oBooksModel)
        {
            bool status = false;

            using (DataInjector oDataInjector = new DataInjector())
            {
                oDataInjector.StudentsRepository.Add(oBooksModel);
                status = oDataInjector.Save();
            }

            return status;
        }

        public bool Edit(Assignment.MODEL.StudentsModel oBooksModel)
        {
            bool status = false;

            using (DataInjector oDataInjector = new DataInjector())
            {
                oDataInjector.StudentsRepository.Edit(oBooksModel);
                status = oDataInjector.Save();
            }

            return status;
        }

        public System.Collections.Generic.List<Assignment.MODEL.StudentsModel> GetAll()
        {
            using (DataInjector oDataInjector = new DataInjector())
            {
                return oDataInjector.StudentsRepository.GetAll();
            }
        }

        public bool Delete(int StudentID, int ClassroomID)
        {
            bool status = false;
            using (DataInjector oDataInjector = new DataInjector())
            {
                oDataInjector.StudentsRepository.DeleteByPram(x => x.StudentID == StudentID && x.ClassroomID == ClassroomID);
                status = oDataInjector.Save();
            }
            return status;
        }

        public bool BulkDelete(List<StudentsModel> data)
        {
            bool status = false;
            using (DataInjector oDataInjector = new DataInjector())
            {
                oDataInjector.StudentsRepository.BulkDelete(data);
                status = oDataInjector.Save();
            }
            return status;
        }

        public StudentsModel GetById(int StudentID)
        {
            StudentsModel studentsModel = new StudentsModel();
            using (DataInjector oDataInjector = new DataInjector())
            {
                studentsModel = oDataInjector.StudentsRepository.GetById(x => x.StudentID == StudentID);
            }
            return studentsModel;
        }
    }
}