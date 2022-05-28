using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Assignment.MODEL
{
    [Table("ClassRoom")]
    public class ClassRoom
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClassroomID { get; set; }

        [Column(Order = 0)]
        public string ClassroomName { get; set; }
    }
}