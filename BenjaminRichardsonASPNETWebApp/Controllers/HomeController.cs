using Microsoft.AspNetCore.Mvc;
using BenjaminRichardsonASPNETWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BenjaminRichardsonASPNETWebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Form")]
        public IActionResult Form()
        {
            return View();
        }

        [HttpPost("Form")]
        public IActionResult Form (FormModel model)
        {
            return View();
        }
    }
}
