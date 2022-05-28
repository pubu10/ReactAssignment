using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Assignment.MODEL
{
    [Table("Students")]
    public class StudentsModel
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int StudentID { get; set; }

        [Key]
        [Column(Order = 1)]
        public int ClassroomID { get; set; }

        [MaxLength(200)]
        public string FirstName { get; set; }

        [MaxLength(200)]
        public string LastName { get; set; }

        [MaxLength(200)]
        public string ContactPerson { get; set; }

        [MaxLength(200)]
        public string ContactNo { get; set; }

        [MaxLength(200)]
        public string EmailAddress { get; set; }

        public DateTime Dateofbirth { get; set; }

        public int Age { get; set; }

    }
}