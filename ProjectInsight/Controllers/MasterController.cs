using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectInsight.Controllers
{
    public class MasterController : Controller
    {
        // GET: Master
        public ActionResult Company()
        {
            return View();
        }
    }
}