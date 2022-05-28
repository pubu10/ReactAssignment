using Assignment.MODEL;
using System;

namespace Assignment.REPOSITORY
{
    public class DataInjector : IDisposable
    {
        private readonly DataContext _context = new DataContext();
        private bool disposed = false;
        private string errorMessage = string.Empty;

        public bool Save()
        {
            try
            {
                return _context.SaveChanges() > 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        #region Students

        private IGenericRepository<StudentsModel> IStudentsModelRepository;

        public IGenericRepository<StudentsModel> StudentsRepository
        {
            get
            {
                if (this.IStudentsModelRepository == null)
                    this.IStudentsModelRepository = new GenericRepository<StudentsModel>(_context);
                return IStudentsModelRepository;
            }
        }

        #endregion Students

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}