using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LegaSysDataEntities;
using LegaSysDataAccess;
using LegaSysUOW.Interface;
using System.Data.Entity;
using System.Data.Entity.Migrations;

//Testbyvs

namespace LegaSysUOW.Repository
{
    public class UOWClient : IUOWClient
    {
       
        private readonly LegaSysEntities db;
        private readonly IUOWCoClient _CoClientRepository;
        public UOWClient(IDbFactory dbFactory, IUOWCoClient COClientRepository)
        {
            db = dbFactory.Init();
            _CoClientRepository = COClientRepository;

        }
       
     




        public int AddClientDetails(ClientDetail Objclient)
        {

            //Insert User details
            int Result = 0;

            try
            {


                var model = new LegaSys_ClientDetails
                {
                    ClientDetailID = Objclient.ClientDetailID,
                    ClientName = Objclient.ClientName,
                    Address = Objclient.Address,
                    Country = Objclient.Country,
                    CoClient = Objclient.CoClient,
                    CoClient2 = Objclient.CoClient2,
                    CoClient3 = Objclient.CoClient3,
                    CoClient4 = Objclient.CoClient4,
                    EmailID = Objclient.EmailID,
                    EmailID2 = Objclient.EmailID2,
                    EmailID3 = Objclient.EmailID3,
                    EmailID4 = Objclient.EmailID4,
                    Created_By = Objclient.Created_By,
                    Updated_By = Objclient.Updated_By,
                    Created_Date = System.DateTime.UtcNow,
                    Updated_Date = System.DateTime.UtcNow,
                    IsActive = true,
                    ClientCompanyFax = Objclient.ClientCompanyFax,
                    ClientCountryZip = Objclient.ClientCountryZip,
                    CompanyName = Objclient.CompanyName,
                    CompanyAddress = Objclient.CompanyAddress,
                    CompanyPhone = Objclient.CompanyPhone,
                    countrytTelephoneCodeClientOffice = Objclient.countrytTelephoneCodeClientOffice,
                    ClientCountry = Objclient.ClientCountry,
                    ClientPhone= Objclient.ClientPhone,
                    ClientPhone2 = Objclient.ClientPhone2,
                    ClientExtension=Objclient.ClientExtension,
                    countrytTelephoneCodeClient =Objclient.countrytTelephoneCodeClient
                };
                db.LegaSys_ClientDetails.Add(model);
                db.SaveChanges();
                Result = model.ClientDetailID;
                Boolean coCLientResult = _CoClientRepository.AddCoClient(Objclient.CoClientDetails, Result);
                if (!coCLientResult)
                {
                   Result = 0;
                }




            }


            catch (Exception e)
            {

                Result = 0;


            }

            return Result;
        }
        // Get client by Id
        public ClientDetail GetClientById(Int32 Id)
        {
            //declare the object to return
            ClientDetail ObjClientInfo = null;

            try
            {
                List<CoClient> coClientList = _CoClientRepository.GetAllCoClientByClientID(Id);


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
                        Created_Date = ClientDetail.Created_Date,
                        IsActive = ClientDetail.IsActive,
                        Updated_By = ClientDetail.Updated_By,
                        CompanyName = ClientDetail.CompanyName,
                        CompanyAddress = ClientDetail.CompanyAddress,
                        CompanyPhone = ClientDetail.CompanyPhone,
                        ClientCompanyFax = ClientDetail.ClientCompanyFax,
                        ClientCountry = ClientDetail.ClientCountry,
                        ClientCountryZip = ClientDetail.ClientCountryZip,
                        CoClientDetails = coClientList,
                        ClientPhone= ClientDetail.ClientPhone,
                        ClientPhone2 = ClientDetail.ClientPhone2,
                        ClientExtension=ClientDetail.ClientExtension,
                        countrytTelephoneCodeClient =ClientDetail.countrytTelephoneCodeClient,
                        countrytTelephoneCodeClientOffice= ClientDetail.countrytTelephoneCodeClientOffice





                    };
                }

            }
            catch (Exception)
            {
                throw;
            }
            return ObjClientInfo;
        }

        //Update client details
        public Boolean UpdateClientDetails(ClientDetail objClient)
        {
            //declare the object to return
            Boolean Result;
            LegaSys_ClientDetails obj = new LegaSys_ClientDetails();
            try
            {
                obj.ClientDetailID = objClient.ClientDetailID;
                obj.ClientName = objClient.ClientName;
                obj.Address = objClient.Address;

                obj.Country = objClient.Country;
                obj.CoClient = objClient.CoClient;
                obj.CoClient2 = objClient.CoClient2;
                obj.CoClient3 = objClient.CoClient3;
                obj.CoClient4 = objClient.CoClient4;
                obj.EmailID = objClient.EmailID;
                obj.EmailID2 = objClient.EmailID2;
                obj.EmailID3 = objClient.EmailID3;
                obj.EmailID4 = objClient.EmailID4;
                obj.Created_By = objClient.Created_By;
                obj.Updated_By = objClient.Updated_By;
                obj.CompanyName = objClient.CompanyName;
                obj.CompanyAddress = objClient.CompanyAddress;
                obj.CompanyPhone = objClient.CompanyPhone;
                obj.ClientExtension = objClient.ClientExtension;
                obj.ClientCompanyFax = objClient.ClientCompanyFax;
                obj.ClientCountry = objClient.ClientCountry;
                obj.ClientCountryZip = objClient.ClientCountryZip;
                obj.countrytTelephoneCodeClient = objClient.countrytTelephoneCodeClient;
                obj.countrytTelephoneCodeClientOffice = objClient.countrytTelephoneCodeClientOffice;
                obj.Created_Date = objClient.Created_Date;
                obj.Updated_Date = System.DateTime.UtcNow;
                obj.IsActive = true;
                obj.ClientPhone = objClient.ClientPhone;
                obj.ClientPhone2 = objClient.ClientPhone2;
                db.LegaSys_ClientDetails.AddOrUpdate(obj);
                if(_CoClientRepository.UpdateCoClientByClientID(objClient.CoClientDetails, objClient.ClientDetailID))
                {
                    db.SaveChanges();
                    Result = true;

                }
                else
                {
                    Result = false;
                }
                

            }
            catch (Exception)
            {
                Result = false;
                throw;
            }
            return Result;
        }

        //Delete client
        public Boolean DeleteClientById(Int32 Id, Int32 userId)
        {
            Boolean Result = false;
            LegaSys_ClientDetails obj = new LegaSys_ClientDetails();
            try
            {
                var ClientDetail = db.LegaSys_ClientDetails.Where(p => p.ClientDetailID == Id).FirstOrDefault();
                if (ClientDetail != null)
                {
                    obj.ClientDetailID = ClientDetail.ClientDetailID;
                    obj.ClientName = ClientDetail.ClientName;
                    obj.Address = ClientDetail.Address;
                    obj.Country = ClientDetail.Country;
                    obj.CoClient = ClientDetail.CoClient;
                    obj.CoClient2 = ClientDetail.CoClient2;
                    obj.CoClient3 = ClientDetail.CoClient3;
                    obj.CoClient4 = ClientDetail.CoClient4;
                    obj.EmailID = ClientDetail.EmailID;
                    obj.EmailID2 = ClientDetail.EmailID2;
                    obj.EmailID3 = ClientDetail.EmailID3;
                    obj.EmailID4 = ClientDetail.EmailID4;
                    obj.Created_By = ClientDetail.Created_By;
                    obj.Updated_By = userId;
                    obj.ClientPhone = ClientDetail.ClientPhone;
                    obj.ClientExtension = obj.ClientExtension;
                    obj.ClientPhone2 = ClientDetail.ClientPhone2;
                    obj.countrytTelephoneCodeClient = ClientDetail.countrytTelephoneCodeClient;
                    obj.countrytTelephoneCodeClientOffice = ClientDetail.countrytTelephoneCodeClientOffice;
                    obj.Updated_Date = System.DateTime.UtcNow;
                    obj.IsActive = false;
                    db.LegaSys_ClientDetails.AddOrUpdate(obj);

                    db.SaveChanges();
                    var proJectDetails = db.LegaSys_Projects.Where(s => s.Client_ID == Id).Select(s =>
                     new ClientProjects()
                     {
                         ProjectID = s.ProjectID,
                         Client_ID = s.Client_ID,
                         Title = s.Title,
                         Start_Date = s.Start_Date,
                         End_Date = s.End_Date,
                         Status = s.Status,
                         No_of_resource = db.LegaSys_ProjectResources.Count(x => x.Project_ID == s.ProjectID),
                         Description = s.Description,
                         ProjectDomain_ID = s.ProjectDomain_ID,
                         Created_By = s.Created_By,
                         Updated_By = s.Updated_By,
                         Updated_Date = s.Updated_Date,
                         Created_Date = s.Created_Date
                         


                     }).ToList();
                    if (proJectDetails != null)
                    {
                        foreach (var item in proJectDetails)
                        {
                            if (item.End_Date == null)
                            {
                                LegaSys_Projects objProject = new LegaSys_Projects();

                                objProject.ProjectID = item.ProjectID;
                                objProject.Client_ID = item.Client_ID;
                                objProject.Title = item.Title;
                                objProject.Start_Date = item.Start_Date;
                                objProject.End_Date = System.DateTime.Now;
                                objProject.Status = 1;
                                objProject.Updated_By = userId;
                                objProject.Updated_Date = System.DateTime.UtcNow;
                                objProject.Description = item.Description;
                                objProject.Created_By = item.Created_By;
                                objProject.Created_Date = item.Created_Date;
                                objProject.ProjectDomain_ID = item.ProjectDomain_ID;

                                db.LegaSys_Projects.AddOrUpdate(objProject);



                            }
                        }
                    }
                    db.SaveChanges();
                    Result = true;
                }


            }
            catch (Exception)
            {
                Result = false;
                throw;
            }
            return Result;
        }

        // Get All client details
        public List<ClientDetail> GetAllClient()
        {
            List<ClientDetail> lstClient = null;
            //declare the object to return
            //.Where(s=>s.IsActive==true)
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
                             ClientPhone=s.ClientPhone,
                             countrytTelephoneCodeClient = s.countrytTelephoneCodeClient,
                             EmailID = s.EmailID,
                          
                             IsActive = (bool)s.IsActive
                         }).OrderByDescending(x => x.ClientDetailID).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return lstClient;
        }
        public List<ClientProjects> GetAllProjectOfClient(Int32 Id)
        {

            List<ClientProjects> clientProjectList = null;
            try
            {
                using (LegaSysEntities db = new LegaSysEntities())
                {
                    clientProjectList = db.LegaSys_Projects.Where(s => s.Client_ID == Id).Select(s =>
                     new ClientProjects()
                     {
                         ProjectID = s.ProjectID,
                         Client_ID = s.Client_ID,
                         Title = s.Title,
                         Start_Date = s.Start_Date,
                         End_Date = s.End_Date,
                         Status = s.Status,
                         No_of_resource = db.LegaSys_ProjectResources.Count(x => x.Project_ID == s.ProjectID)


                     }).ToList();
                }
            }
            catch (Exception e)
            {
                throw;
            }
            return clientProjectList;
        }
        public Boolean UpdateClientProjectDetailsWithId(ClientProjects objClientProject)
        {
            var objProjectDetail = db.LegaSys_Projects.Where(x => x.ProjectID == objClientProject.ProjectID).FirstOrDefault();
            if (objProjectDetail != null)
            {
                objProjectDetail.ProjectID = objClientProject.ProjectID;
                objProjectDetail.Title = objClientProject.Title;
                objProjectDetail.Start_Date = objClientProject.Start_Date;
                objProjectDetail.End_Date = objClientProject.End_Date;
                objProjectDetail.Status = objClientProject.Status;
                objProjectDetail.Updated_Date = DateTime.Now;
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }

        }
        public Boolean ChangeClientStatus(Int32 ID, Int32 userId)
        {
            var objClientDetail = db.LegaSys_ClientDetails.Where(x => x.ClientDetailID == ID).FirstOrDefault();
            if (objClientDetail != null)
            {
                if (objClientDetail.IsActive)
                {
                    objClientDetail.IsActive = false;
                }
                else
                {
                    objClientDetail.IsActive = true;
                }

                objClientDetail.Updated_By = userId;
                objClientDetail.Updated_Date = DateTime.Now;
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }
        //added by MohitK for fetching all the ClientStatus
        public List<LegaSys_ClientStatus> GetClientStatus()
        {
            try
            {
                using (LegaSysEntities db = new LegaSysEntities())
                {

                    var status = db.LegaSys_ClientStatus.AsEnumerable().Select(x => new LegaSys_ClientStatus
                    {
                        ClientStatusId = x.ClientStatusId,
                        ClientStatus = x.ClientStatus
                    }).ToList();
                    return status;
                }

            }
            catch (Exception)
            {
                throw;
            }

        }

        public List<ClientDetail> GetAllActiveClient()
        {
            List<ClientDetail> lstClient = null;            
            try
            {
                using (LegaSysEntities db = new LegaSysEntities())
                {
                    lstClient = db.LegaSys_ClientDetails.Where(x=>x.IsActive==true).Select(s =>
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
                             IsActive = (bool)s.IsActive
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