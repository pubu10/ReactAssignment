namespace Assignment.REPOSITORY
{
    using Assignment.MODEL;
    using Microsoft.EntityFrameworkCore;

    public class DataContext : DbContext
    {
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        public DataContext()
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("data source=PE4-PC07; initial catalog=Assignment_Db;persist security info=True;user id=sa;password=#compaq123; ");
        }

        public virtual DbSet<ClassRoom> ClassRoom { get; set; }
        public virtual DbSet<StudentsModel> StudentsModel { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ClassRoom>()
            .HasKey(o => new { o.ClassroomID });

            modelBuilder.Entity<StudentsModel>()
            .HasKey(o => new { o.StudentID, o.ClassroomID });
        }
    }
}