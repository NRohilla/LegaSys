using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LegaSysDataEntities;
using LegaSysDataAccess;
using LegaSysUOW.Interface;
using System.Data.Entity;

//Test

namespace LegaSysUOW.Repository
{
   public class UOWClient:IUOWClient
    {
        public ClientDetail AddClientDetails(ClientDetail Objclient)
        {
            //Declare the object to return
           
            ClientDetail obj = new ClientDetail();
            try
            {
                using (LegaSysEntities db = new LegaSysEntities())
                {
                    //Insert User details
                    obj.ClientDetailID = Objclient.ClientDetailID;
                    obj.ClientName = Objclient.ClientName;
                    obj.Address = Objclient.Address;
                    obj.Country = Objclient.Country;
                    obj.CoClient = Objclient.CoClient;
                    obj.CoClient2 = Objclient.CoClient2;
                    obj.CoClient3 = Objclient.CoClient3;
                    obj.CoClient4 = Objclient.CoClient4;
                    obj.EmailID = Objclient.EmailID;
                    obj.EmailID2 = Objclient.EmailID2;
                    obj.EmailID3 = Objclient.EmailID3;
                    obj.EmailID4 = Objclient.EmailID4;
                    obj.Created_By = Objclient.Created_By;
                    obj.Updated_By = Objclient.Updated_By;
                    obj.Created_Date = System.DateTime.UtcNow;
                    obj.Updated_Date = System.DateTime.UtcNow;
                    obj.IsActive = true;

                    //db.LegaSys_ClientDetails.Add(Objclient);
                   // db.LegaSys_ClientDetails.Add(obj);
                    db.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return obj;
        }


        // Get client by Id
        public ClientDetail GetClientById(Int32 Id)
        {
            //declare the object to return
            ClientDetail ObjClientInfo = null;

            try
            {
                using (LegaSysEntities db = new LegaSysEntities())
                {
                    var ClientDetail = db.LegaSys_ClientDetails.Where(p => p.ClientDetailID == Id).FirstOrDefault();
                    if (ClientDetail != null)
                    {
                        ObjClientInfo = new ClientDetail()
                        {
                            ClientDetailID = ClientDetail.ClientDetailID,
                            ClientName = ClientDetail.ClientName,
                            Address = ClientDetail.Address,
                            Country = ClientDetail.Country,
                            CoClient = ClientDetail.CoClient,
                            CoClient2 = ClientDetail.CoClient2,
                            CoClient3 = ClientDetail.CoClient3,
                            CoClient4 = ClientDetail.CoClient4,
                            EmailID = ClientDetail.EmailID,
                            EmailID2 = ClientDetail.EmailID2,
                            EmailID3 = ClientDetail.EmailID3,
                            EmailID4 = ClientDetail.EmailID4,
                            Created_By = ClientDetail.Created_By,
                            Updated_By = ClientDetail.Updated_By
                        };
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return ObjClientInfo;
        }

        //Update client details

        public string UpdateClientDetails(ClientDetail objClient)
        {
            //declare the object to return
            string Result = string.Empty;

            try
            {
                using (LegaSysEntities db = new LegaSysEntities())
                {
                    //Write update Query
                    db.Entry(objClient).State = EntityState.Modified;
                    db.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return Result;
        }

        //Delete client

        public string DeleteClientById(Int32 Id)
        {
            string Result = string.Empty;
            try
            {
                using (LegaSysEntities db = new LegaSysEntities())
                {
                    var ClientDetail = db.LegaSys_ClientDetails.Where(p => p.ClientDetailID == Id).FirstOrDefault();
                    if (ClientDetail != null)
                    {
                        db.Entry(ClientDetail).State = EntityState.Deleted;
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return Result;
        }

        // Get All client details

        public List<ClientDetail> GetAllClient()
        {
            List<ClientDetail> lstClient = null;
            //declare the object to return
            try
            {
                using (LegaSysEntities db = new LegaSysEntities())
                {
                    lstClient = db.LegaSys_ClientDetails.Select(s =>
                     new ClientDetail()
                     {
                         ClientDetailID = s.ClientDetailID,
                         ClientName = s.ClientName,
                         Address = s.Address,
                         Country = s.Country,
                         CoClient = s.CoClient,
                         //CoClient2 = s.CoClient2,
                         //CoClient3 = s.CoClient3,
                         //CoClient4 = s.CoClient4,
                         EmailID = s.EmailID,
                         //EmailID2 = s.EmailID2,
                         //EmailID3 = s.EmailID3,
                         //EmailID4 = s.EmailID4,
                         //Created_By = s.Created_By,
                         //Updated_By = s.Updated_By,
                         IsActive=   (bool)s.IsActive
                     }).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
                return lstClient;
            }
    }
}
