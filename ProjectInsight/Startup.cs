using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ProjectInsight.Startup))]
namespace ProjectInsight
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
