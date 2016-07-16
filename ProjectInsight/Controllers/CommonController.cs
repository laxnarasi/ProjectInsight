using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectInsight.Controllers
{
    /// <summary>
    /// Controller used to get the values which used across the screens like dropdown etc
    /// </summary>
    public class CommonController : Controller
    {
        // GET: Common
        public ActionResult Index()
        {
            return View();
        }
    }
}