using LegaSysDataAccess;

namespace LegaSysUOW.Interface
{
    public interface IDbFactory
    {
        LegaSysEntities Init();
    }
}
