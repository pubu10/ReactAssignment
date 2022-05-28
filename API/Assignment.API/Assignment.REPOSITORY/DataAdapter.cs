using System;

namespace Assignment.REPOSITORY
{
    public class DataAdapter : IDisposable
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

        //#region MainClassifications

        //private IGenericRepository<MainClassifications> IMainClassificationsRepository;

        //public IGenericRepository<MainClassifications> MainClassificationsRepository
        //{
        //    get
        //    {
        //        if (this.IMainClassificationsRepository == null)
        //            this.IMainClassificationsRepository = new GenericRepository<MainClassifications>(_context);
        //        return IMainClassificationsRepository;
        //    }
        //}

        //#endregion MainClassifications

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