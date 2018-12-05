using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using LegaSysUOW.Interface;
using LegaSysUOW.Repository;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace LegaSysServices.App_Start
{
    public class AutofacWebapiConfig
    {
        public static IContainer Container;

        public static void Initialize(HttpConfiguration config)
        {
            Initialize(config, RegisterServices(new ContainerBuilder()));
        }


        public static void Initialize(HttpConfiguration config, IContainer container)
        {
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }

        private static IContainer RegisterServices(ContainerBuilder builder)
        {
            //Register your Web API controllers.  
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            builder.RegisterType<DbFactory>().As<IDbFactory>().InstancePerRequest();
            builder.RegisterType<UOWResources>().As<IUOWResources>().InstancePerRequest();
            builder.RegisterType<UOWExceptionLogger>().As<IUOWExceptionLogger>().InstancePerRequest();
            builder.RegisterType<UOWRoles>().As<IUOWRoles>().InstancePerRequest();
            builder.RegisterType<UOWShifts>().As<IUOWShifts>().InstancePerRequest();
            builder.RegisterType<UOWLocations>().As<IUOWLocations>().InstancePerRequest();
            builder.RegisterType<UOWUsers>().As<IUOWUsers>().InstancePerRequest();
            builder.RegisterType<UOWDomains>().As<IUOWDomains>().InstancePerRequest();
            builder.RegisterType<UOWTechnologies>().As<IUOWTechnologies>().InstancePerRequest();
            builder.RegisterType<UOWLeaves>().As<IUOWLeaves>().InstancePerRequest();

            Container = builder.Build();

            return Container;
        }

        public static T ResolveRequestInstance<T>()
        {
            if (DependencyResolver.Current.GetType() != typeof(AutofacDependencyResolver))
            {
                var context = HttpContext.Current.GetOwinContext();
                var lifetimeScopeKey = context.Environment.Keys.Single(w => w.StartsWith("autofac:OwinLifetimeScope"));

                return context.Get<Autofac.Core.Lifetime.LifetimeScope>(lifetimeScopeKey).Resolve<T>();
            }

            return AutofacDependencyResolver.Current.GetService<T>();
        }
    }
}