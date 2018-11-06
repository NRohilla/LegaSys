using LegaSysDataAccess;
using LegaSysUOW.Interface;

namespace LegaSysUOW.Repository
{
    public class DbFactory: IDbFactory
    {
        LegaSysEntities dbContext;

        public LegaSysEntities Init()
        {
            return dbContext ?? (dbContext = new LegaSysEntities());
        }
    }
}
