using LegaSysDataAccess;
using LegaSysDataEntities;
using LegaSysUOW.Interface;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysUOW.Repository
{
  public   class UOWCoClient : IUOWCoClient
    {
        private readonly LegaSysEntities db;

        public UOWCoClient(IDbFactory dbFactory)
        {
            db = dbFactory.Init();

        }
       
        public Boolean AddCoClient(List<CoClient> objCoClient, int ClientID)
        {
            try
            {
                for (int i = 0; i < objCoClient.Count; i++)
                {
                    var coClientModel = new LegaSys_CoClientDetails
                    {
                        CoClientName = objCoClient[i].Name,
                        ClientDetailID = ClientID,
                        Address = objCoClient[i].Address,
                        Country = objCoClient[i].Country,
                        EmailID = objCoClient[i].Email,
                        Created_By = objCoClient[i].Created_By,
                        Updated_By = objCoClient[i].Updated_By,
                        Created_Date = System.DateTime.UtcNow,
                        Updated_Date = System.DateTime.UtcNow,
                        phone = objCoClient[i].Phone,
                        IsActive = true,
                        countryCode = objCoClient[i].countryCode


                    };
                    db.LegaSys_CoClientDetails.Add(coClientModel);
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                return false;
            }
            return true;



        }

        public List<CoClient> GetAllCoClientByClientID(Int32 ClientID)
        {
            try
            {

                List<CoClient> coClientList = db.LegaSys_CoClientDetails.Where(x => x.ClientDetailID == ClientID && x.IsActive == true).Select(x =>
                  new CoClient
                  {
                      CoClientID = x.CoClientID,
                      ClientDetailID = x.ClientDetailID,
                      Name = x.CoClientName,
                      Address = x.Address,
                      Email = x.EmailID,
                      Country = x.Country,
                      Updated_By = x.Updated_By,
                      Updated_Date = x.Updated_Date,
                      Created_Date = x.Created_Date,
                      Created_By = x.Created_By,
                      Phone = x.phone,
                      IsActive = x.IsActive,
                      countryCode = x.countryCode


                  }).ToList();
                return coClientList;
            }
            catch(Exception e)
            {
                return null;
            }
            
        }
        public Boolean UpdateCoClientByClientID(List<CoClient> objCoClient, Int32 ClientID)
        {
            try
            {
                for (int i = 0; i < objCoClient.Count; i++)
                {
                    if (Convert.ToInt32(objCoClient[i].CoClientID) > 0)
                    {
                        LegaSys_CoClientDetails coClientDetailsObj = new LegaSys_CoClientDetails();
                        coClientDetailsObj.CoClientID = objCoClient[i].CoClientID.Value;
                        coClientDetailsObj.ClientDetailID = objCoClient[i].ClientDetailID.Value;
                        coClientDetailsObj.Address = objCoClient[i].Address;
                        coClientDetailsObj.CoClientName = objCoClient[i].Name;
                        coClientDetailsObj.Country = objCoClient[i].Country;
                        coClientDetailsObj.EmailID = objCoClient[i].Email;
                        coClientDetailsObj.phone = objCoClient[i].Phone;
                        coClientDetailsObj.Created_By = objCoClient[i].Created_By;
                        coClientDetailsObj.Created_Date = objCoClient[i].Created_Date;
                        coClientDetailsObj.Updated_By = objCoClient[i].Updated_By;
                        coClientDetailsObj.Updated_Date = objCoClient[i].Updated_Date;
                        coClientDetailsObj.IsActive = objCoClient[i].IsActive;
                        coClientDetailsObj.countryCode = objCoClient[i].countryCode;
                        db.LegaSys_CoClientDetails.AddOrUpdate(coClientDetailsObj);


                    }
                    else
                    {
                        var coClientModel = new LegaSys_CoClientDetails
                        {
                            CoClientName = objCoClient[i].Name,
                            ClientDetailID = ClientID,
                            Address = objCoClient[i].Address,
                            Country = objCoClient[i].Country,
                            EmailID = objCoClient[i].Email,
                            Created_By = objCoClient[i].Created_By,
                            Updated_By = objCoClient[i].Updated_By,
                            Created_Date = System.DateTime.UtcNow,
                            Updated_Date = System.DateTime.UtcNow,
                            phone = objCoClient[i].Phone,
                            IsActive = true
                        };
                        db.LegaSys_CoClientDetails.Add(coClientModel);
                    }



                }
                db.SaveChanges();
                return true;

            }
            catch (Exception e)
            {
                return false;
            }

        
        }
    }
}
