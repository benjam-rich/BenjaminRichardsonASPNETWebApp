using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BenjaminRichardsonASPNETWebApp.Models
{
    public class FormModel
    {
        [Required]
        [Range(1, 100)]
        public decimal asnmts { get; set; }
        [Required]
        [Range(1, 100)]
        public decimal gp { get; set; }
        [Required]
        [Range(1, 100)]
        public decimal quiz { get; set; }
        [Required]
        [Range(1, 100)]
        public decimal exam { get; set; }
        [Required]
        [Range(1, 100)]
        public decimal intex { get; set; }

    }
}
