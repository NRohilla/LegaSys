using LegaSysServices.App_Start;
using LegaSysUOW.Interface;
using System.Web.Http.ExceptionHandling;

namespace LegaSysServices.ExceptionHandling
{
    public class LegaSysExceptionLogger : ExceptionLogger
    {
        public override void Log(ExceptionLoggerContext context)
        {
            AutofacWebapiConfig.ResolveRequestInstance<IUOWExceptionLogger>().RegisterException(context);
        }
    }
}