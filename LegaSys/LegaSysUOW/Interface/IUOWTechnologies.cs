using LegaSysDataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysUOW.Interface
{
    public interface IUOWTechnologies
    {
        IEnumerable<Technology> GetAllTechnologies();
        IEnumerable<Technology> GetAllActiveTechnologies();
        Technology GetTechnologyById(int id);
        bool ChangeStatus(int id);
        int CreateTechnology(Technology model, int userId);
        bool UpdateTechnology(Technology model, int userId);
    }
}
