using System.Web;
using System.Web.Optimization;

namespace ProjectInsight
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));
           // "~/Scripts/respond.js"

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/fontawesome").Include(
                      "~/Content/font-awesome.min.css"));

            bundles.Add(new StyleBundle("~/Content/menu").Include(
                      "~/Content/menu/dash.css"));

            bundles.Add(new ScriptBundle("~/bundles/touchSwipe").Include(
                       "~/Scripts/menu/jquery.touchSwipe.min.js" ));

            bundles.Add(new ScriptBundle("~/bundles/dash").Include(
                      "~/Scripts/menu/dash.js" ));

            bundles.Add(new ScriptBundle("~/bundles/demo").Include(                   
                     "~/Scripts/menu/demo.js" ));
        }
    }
}
