using LegaSysDataAccess;
using LegaSysDataEntities;
using LegaSysUOW.Interface;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace LegaSysUOW.Repository
{
    public class UOWResources : IUOWResources
    {
        private readonly LegaSysEntities db;

        public UOWResources(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }

        public bool CheckEmail(string email)
        {
         var emailExists=   db.LegaSys_UserDetails.Any(x => x.EmailId == email);

            if (emailExists)
            {

                return true;
            }
            else

                return false;
            
        }



        public int CreateResoure(UserDetail userDetail)
        {
            var model = new LegaSys_UserDetails
            {
                Firstname = userDetail.Firstname,
                Middlename = userDetail.Middlename,
                Lastname = userDetail.Lastname,
                TotalExp = userDetail.TotalExp,
                EmailId = userDetail.EmailId,
                MobileNumber = userDetail.MobileNumber,
                Master_Location_ID = userDetail.Master_Location_ID,
                Master_Shift_ID = userDetail.Master_Shift_ID,
                ReportingHead_ID = userDetail.ReportingHead_ID,
                Master_Role_ID = userDetail.Master_Role_ID,
                Remarks = userDetail.Remarks,
                Created_Date = DateTime.Now,
                Created_By = userDetail.Created_By,
                IsExperienced = false,
                IsActive = true,
                DateOfJoining=DateTime.Now,
                CountryCode=userDetail.CountryCode
            };                             

            db.LegaSys_UserDetails.Add(model);
            db.SaveChanges();

            db.LegaSys_UserLogin.Add(new LegaSys_UserLogin
            {
                UserDetailID = model.UserDetailID,
                Username = userDetail.EmailId,
                Password = "pass@123",
                LastLogin = DateTime.Now,               
                IsActive = true,
                Remarks = userDetail.Remarks,
                Created_By = userDetail.Created_By,
                Created_Date = DateTime.Now,

            });

            db.SaveChanges();

            return model.UserDetailID;
        }
        public bool AddSkillById(UserDetail userDetail)
        {
            var existingUser = db.LegaSys_UserDetails.FirstOrDefault(x => x.UserDetailID == userDetail.UserDetailID);
            if (existingUser == null)
                return false;
            existingUser.PrimarySkillSet = userDetail.PrimarySkillSet;
            existingUser.SecondarySkillSet = userDetail.SecondarySkillSet;
           
           // db.LegaSys_UserDetails.Add(existingUser);
            db.SaveChanges();

            return true;

        }
        public bool DeleteResource(int id, int userId)
        {
            var existingUserDetail = db.LegaSys_UserDetails.FirstOrDefault(x => x.UserDetailID == id && x.IsActive);
           // var existingUser = db.LegaSys_UserLogin.FirstOrDefault(x => x.UserDetailID == id && x.IsActive.Value);

            if (existingUserDetail == null )
                return false;

            existingUserDetail.IsActive = false;
            existingUserDetail.Updated_Date = DateTime.Now;
            existingUserDetail.Updated_By = userId;

            //existingUser.IsActive = false;
            //existingUser.Updated_Date = DateTime.Now;
            //existingUser.Updated_By = userId;

            db.SaveChanges();

            return true;
        }

        public IEnumerable<UserDetail> GetAllActiveResources()
        {
            return (from user in db.LegaSys_UserDetails.Where(x => x.IsActive)
                    join shift in db.LegaSys_Master_Shifts.Where(x => x.IsActive) on user.Master_Shift_ID equals shift.ShiftID
                    join location in db.LegaSys_Master_Locations.Where(x => x.IsActive) on user.Master_Location_ID equals location.LocationID
                    join role in db.LegaSys_Master_Roles.Where(x => x.IsActive) on user.Master_Role_ID equals role.UserRoleID
                    join head in db.LegaSys_UserDetails.Where(x => x.IsActive) on user.ReportingHead_ID equals head.UserDetailID into reportinghead
                    from reporting in reportinghead.DefaultIfEmpty()
                    select new { user, shift, location, role, reporting }).AsEnumerable()
                    .Select(x => new UserDetail
                    {
                        UserDetailID = x.user.UserDetailID,
                        Firstname = x.user.Firstname,
                        Middlename = x.user.Middlename,
                        Lastname = x.user.Lastname,
                        TotalExp = x.user.TotalExp,
                        EmailId = x.user.EmailId,
                        LocationAddress = x.location.LocationAddress,
                        Shift = $"{x.shift.StartTimeIST} - {x.shift.EndTimeIST}",
                        ReportingHead = $"{x.reporting.Firstname} {x.reporting.Lastname}",
                        IsExperienced = x.user.IsExperienced,
                        PrimarySkillSet = x.user.PrimarySkillSet,
                        SecondarySkillSet = x.user.SecondarySkillSet,
                        Qualification = x.user.Qualification,
                        DateOfJoining=x.user.DateOfJoining,
                        

                    });
        }

        public UserDetail GetResourceById(int id)
        {
            var resource= (from user in db.LegaSys_UserDetails.Where(x => x.IsActive)
                    join shift in db.LegaSys_Master_Shifts.Where(x => x.IsActive) on user.Master_Shift_ID equals shift.ShiftID
                    join location in db.LegaSys_Master_Locations.Where(x => x.IsActive) on user.Master_Location_ID equals location.LocationID
                    join role in db.LegaSys_Master_Roles.Where(x => x.IsActive) on user.Master_Role_ID equals role.UserRoleID
                    join head in db.LegaSys_UserDetails.Where(x => x.IsActive) on user.ReportingHead_ID equals head.UserDetailID into reportinghead
                    from reporting in reportinghead.DefaultIfEmpty()
                    where user.UserDetailID == id
                    select new { user, shift, location, role, reporting }).AsEnumerable()
                    .Select(x => new UserDetail
                    {
                        UserDetailID = x.user.UserDetailID,
                        Firstname = x.user.Firstname,
                        Middlename = x.user.Middlename,
                        Lastname = x.user.Lastname,
                        TotalExp = x.user.TotalExp,
                        EmailId = x.user.EmailId,
                        IsActive = x.user.IsActive,
                        Master_Location_ID = x.user.Master_Location_ID,
                        LocationAddress = x.location.LocationAddress,
                        Master_Shift_ID = x.user.Master_Shift_ID,
                        Shift = $"{x.shift.StartTimeIST} - {x.shift.EndTimeIST}",
                        ReportingHead_ID = x.user.ReportingHead_ID,
                        ReportingHead = $"{x.reporting.Firstname} {x.reporting.Lastname}",
                        Master_Role_ID = x.user.Master_Role_ID,
                        RoleName = x.role.Role,
                        Remarks = x.user.Remarks,
                        MobileNumber = x.user.MobileNumber,
                        IsExperienced = x.user.IsExperienced,
                        DateOfJoining = x.user.DateOfJoining,
                        PrimarySkillSet=x.user.PrimarySkillSet,
                        SecondarySkillSet=x.user.SecondarySkillSet,
                        CountryCode=x.user.CountryCode
                        //Qualification=x.user.Qualification
                    }).FirstOrDefault();
            return resource;
        }

        public bool UpdateResource(UserDetail userDetail)
        {
            var existingModel = db.LegaSys_UserDetails.FirstOrDefault(x => x.UserDetailID == userDetail.UserDetailID);

            if (existingModel == null)
                return false;

            existingModel.Firstname = userDetail.Firstname;
            existingModel.Middlename = userDetail.Middlename;
            existingModel.Lastname = userDetail.Lastname;
            existingModel.TotalExp = userDetail.TotalExp;
            existingModel.EmailId = userDetail.EmailId;
            existingModel.MobileNumber = userDetail.MobileNumber;
            existingModel.Master_Location_ID = userDetail.Master_Location_ID;
            existingModel.Master_Shift_ID = userDetail.Master_Shift_ID;
            existingModel.ReportingHead_ID = userDetail.ReportingHead_ID;
            existingModel.Master_Role_ID = userDetail.Master_Role_ID;
            existingModel.Remarks = userDetail.Remarks;
            existingModel.Updated_Date = DateTime.Now;
            existingModel.Updated_By = userDetail.Created_By;
            existingModel.CountryCode = userDetail.CountryCode;

            db.SaveChanges();

            return true;
        }


        public IEnumerable<UserBackground> GetUserBackground(int id)
        {

            return db.LegaSys_UserBackground.Where(x => x.UserDetailID == id).Select(y => new UserBackground
            {
                BackgroundID = y.BackgroundID,
                UserDetailID = y.UserDetailID,
                CompanyName = y.CompanyName,
                Designation = y.Designation,
                JoiningDate = y.JoiningDate,
                
                LeavingDate = y.LeavingDate,
            }).ToList();

        }


        public bool CreateUserBackground(int id, bool isExp,decimal totExp, List<UserBackground> userBackground)
        {
            
            var user = db.LegaSys_UserDetails.FirstOrDefault(x => x.UserDetailID == id);           
              user.IsExperienced = isExp;
            user.TotalExp = totExp;
            if (isExp)
            {
               

                foreach (var ub in userBackground)
                {
                    var exUser = db.LegaSys_UserBackground.Where(x => x.BackgroundID == ub.BackgroundID).FirstOrDefault();
                    if (exUser != null)
                    {
                        //update the rows
                        exUser.CompanyName = ub.CompanyName;
                        exUser.Designation = ub.Designation;
                        exUser.JoiningDate = ub.JoiningDate;
                        exUser.LeavingDate = ub.LeavingDate;

                    }
                    else
                    {

                        //insert the new row here
                        var model = new LegaSys_UserBackground
                        {

                            BackgroundID = ub.BackgroundID,
                            CompanyName = ub.CompanyName,
                            UserDetailID = ub.UserDetailID,
                            Designation = ub.Designation,
                            //JoiningDate = x.JoiningDate.ToString();
                            JoiningDate = Convert.ToDateTime(ub.JoiningDate.ToString("yyyy-MM-dd HH:mm:ss.fff")),
                            LeavingDate = Convert.ToDateTime(ub.LeavingDate.ToString("yyyy-MM-dd HH:mm:ss.fff")),
                        };
                        db.LegaSys_UserBackground.Add(model);
                    }
                }

                //var models = userBackground.Select(x => new LegaSys_UserBackground
                //{

                //    BackgroundID = x.BackgroundID,
                //    CompanyName = x.CompanyName,
                //    UserDetailID = x.UserDetailID,
                //    Designation = x.Designation,
                //    //JoiningDate = x.JoiningDate.ToString();
                //    JoiningDate = Convert.ToDateTime(x.JoiningDate.ToString("yyyy-MM-dd HH:mm:ss.fff")),
                //    LeavingDate = Convert.ToDateTime(x.LeavingDate.ToString("yyyy-MM-dd HH:mm:ss.fff")),
                //});
                //string s = "2013-07-22T08:51:38.000-07:00";
                //var dateTimeOffset = DateTimeOffset.Parse(s, null);
                //Console.WriteLine(dateTimeOffset.DateTime);
                //db.BulkMerge(models);

            }

            db.SaveChanges();

            return true;
        }
        public IEnumerable<UserEducationModel> GetUserQualification(int id)
        {

            var data = (from user in db.LegaSys_UserDetails
                        join qualify in db.LegaSys_UserQualification on user.UserDetailID equals qualify.UserDetailID
                        // join certify in db.LegaSys_UserCertification on qualify.UserDetailID equals certify.UserDetailID
                        where user.UserDetailID == id
                        select new { user, qualify }).AsEnumerable()
                       .Select(x => new UserEducationModel
                       {
                           PrimarySkillSet = x.user.PrimarySkillSet,
                           SecondarySkillSet = x.user.SecondarySkillSet,
                           HQualification = x.user.Qualification,
                           QualificationID = x.qualify.QualificationID,
                           Qualification = x.qualify.Qualification,
                           QStream = x.qualify.Stream,
                           QYear = x.qualify.Year,
                           BoardUniversity = x.qualify.BoardUniversity,
                           QMarks = x.qualify.Marks,
                           UserDetailID = x.qualify.UserDetailID,
                           //CertificationID = x.certify.CertificationID,
                           //CertificateNumber = x.certify.CertificateNumber,
                           //Type = x.certify.Type,
                           //CStream = x.certify.Stream,
                           //CYear = x.certify.Year,
                           //Institution = x.certify.Institution,
                           //CMarks = x.certify.Marks


                       }).ToList();

            return data;
            ////var skill = db.LegaSys_UserDetails.Where(y => y.UserDetailID == id).Select(x => new UserDetail
            //var userQualification = db.LegaSys_UserDetails.Where(y => y.UserDetailID == id).Select(x => new UserEducationModel
            //{
            //     PrimarySkillSet = x.PrimarySkillSet,
            //     SecondarySkillSet = x.SecondarySkillSet,
            //     HQualification = x.Qualification
            //});

            ////List<UserQualification> q = db.LegaSys_UserQualification.Where(x => x.UserDetailID == id).Select(y => new UserQualification
            //  userQualification= db.LegaSys_UserQualification.Where(x => x.UserDetailID == id).Select(y => new UserEducationModel
            //{


            //    QualificationID = y.QualificationID,
            //    Qualification = y.Qualification,
            //    Stream = y.Stream,
            //    Year = y.Year,
            //    BoardUniversity = y.BoardUniversity,
            //    Marks = y.Marks
            // }).ToList();

            //List<UserCertification> c = db.LegaSys_UserCertification.Where(x => x.UserDetailID == id).Select(y => new UserCertification
            //{
            //    CertificationID = y.CertificationID,
            //    CertificateNumber = y.CertificateNumber,
            //    Type = y.Type,
            //    Stream = y.Stream,
            //    Year = y.Year,
            //    Institution = y.Institution,
            //    Marks = y.Marks

            //}).ToList();




            //return db.LegaSys_UserQualification.Where(x => x.UserDetailID == id).Select(y => new UserQualification
            //{
            //    QualificationID = y.QualificationID,
            //    UserDetailID = y.UserDetailID,
            //    Qualification = y.Qualification,
            //    Stream = y.Stream,
            //    Year = y.Year,
            //    BoardUniversity = y.BoardUniversity,
            //    Marks = y.Marks
            //}).ToList();

        }

        public IEnumerable<UserEducationModel> GetUserCertification(int id)
        {

            var data = (from user in db.LegaSys_UserDetails
                            //join qualify in db.LegaSys_UserQualification on user.UserDetailID equals qualify.UserDetailID
                        join certify in db.LegaSys_UserCertification on user.UserDetailID equals certify.UserDetailID
                        where user.UserDetailID == id
                        select new { user, certify }).AsEnumerable()
                      .Select(x => new UserEducationModel
                      {
                          PrimarySkillSet = x.user.PrimarySkillSet,
                          SecondarySkillSet = x.user.SecondarySkillSet,
                          HQualification = x.user.Qualification,
                          //QualificationID = x.qualify.QualificationID,
                          //Qualification = x.qualify.Qualification,
                          //QStream = x.qualify.Stream,
                          //QYear = x.qualify.Year,
                          //BoardUniversity = x.qualify.BoardUniversity,
                          //QMarks = x.qualify.Marks,
                          CertificationID = x.certify.CertificationID,
                          CertificateNumber = x.certify.CertificateNumber,
                          Type = x.certify.Type,
                          CStream = x.certify.Stream,
                          CYear = x.certify.Year,
                          Institution = x.certify.Institution,
                          CMarks = x.certify.Marks,
                          UserDetailID = x.certify.UserDetailID,



                      }).ToList();

            return data;

            //return db.LegaSys_UserCertification.Where(x => x.UserDetailID == id).Select(y => new UserCertification
            //{
            //    CertificationID=y.CertificationID,
            //    UserDetailID=y.UserDetailID,
            //    Type=y.Type,
            //    CertificateNumber=y.CertificateNumber,
            //    Stream=y.Stream,
            //    Year=y.Year,
            //    Institution=y.Institution,
            //    Marks=y.Marks

            //}).ToList();
        }

        public bool CreateUserQualification(int id, List<UserEducationModel> models)
        {
            //var user = db.LegaSys_UserDetails.FirstOrDefault(x => x.UserDetailID == id);

            //var skills = models.FirstOrDefault();

            //user.PrimarySkillSet = skills.PrimarySkillSet;
            //user.SecondarySkillSet = skills.SecondarySkillSet;
            //user.Qualification = skills.HQualification;

            //qualification//
            var qualifications = models.Select(x => new LegaSys_UserQualification
            {
                QualificationID = x.QualificationID ?? -10,
                Qualification = x.Qualification,
                BoardUniversity = x.BoardUniversity,
                Stream = x.QStream,
                Year = x.QYear ?? -10,
                Marks = x.QMarks ?? -10,
                UserDetailID = x.UserDetailID.Value
            }).ToList();
            qualifications.RemoveAll(x => x.QualificationID == -10);
            foreach (var uq in qualifications)
            {

                var qItem = db.LegaSys_UserQualification.Where(x => x.QualificationID == uq.QualificationID).FirstOrDefault();

                if (qItem != null)
                {
                    qItem.Qualification = uq.Qualification;
                    qItem.Stream = uq.Stream;
                    qItem.BoardUniversity = uq.BoardUniversity;
                    qItem.Year = uq.Year;
                    qItem.Marks = uq.Marks;

                }
                else
                {
                    var model = new LegaSys_UserQualification
                    {
                        QualificationID = uq.QualificationID,
                        Qualification = uq.Qualification,
                        Stream = uq.Stream,
                        BoardUniversity = uq.BoardUniversity,
                        Year = uq.Year,
                        Marks = uq.Marks,
                        UserDetailID = uq.UserDetailID

                    };

                    db.LegaSys_UserQualification.Add(model);
                }
            }

            //certification//
            var certifications = models.Select(x => new LegaSys_UserCertification
            {
                CertificationID = x.CertificationID ?? -10,
                CertificateNumber = x.CertificateNumber,
                Type = x.Type,
                Stream = x.CStream,
                Year = x.CYear ?? -10,
                Institution = x.Institution,
                Marks = x.CMarks,
                UserDetailID = x.UserDetailID

            }).ToList();


            certifications.RemoveAll(x => x.CertificationID == -10);

            foreach(var uc in certifications)
            {
                var cItem = db.LegaSys_UserCertification.Where(x => x.CertificationID == uc.CertificationID).FirstOrDefault();

                if (cItem != null)
                {
                    cItem.CertificateNumber = uc.CertificateNumber;
                    cItem.Type = uc.Type;
                    cItem.Stream = uc.Stream;
                    cItem.Institution = uc.Institution;
                    cItem.Year = uc.Year;
                    cItem.Marks = uc.Marks;

                }
                else
                {
                    var model = new LegaSys_UserCertification
                    {
                        CertificationID = uc.CertificationID,
                        CertificateNumber = uc.CertificateNumber,
                        Type = uc.Type,
                        Stream = uc.Stream,
                        Institution = uc.Institution,
                        Year = uc.Year,
                        Marks = uc.Marks,
                        UserDetailID = uc.UserDetailID
                    };

                    db.LegaSys_UserCertification.Add(model);
                }


            }

        


            //var qualifications = models.Select(x => new LegaSys_UserQualification
            //{
            //    QualificationID = x.QualificationID ?? -10,
            //    Qualification = x.Qualification,
            //    BoardUniversity = x.BoardUniversity,
            //    Stream = x.QStream,
            //    Year = x.QYear ?? -10,
            //    Marks = x.QMarks ?? -10,
            //    UserDetailID = x.UserDetailID
            //}).ToList();

            //qualifications.RemoveAll(x => x.QualificationID == -10);

            //db.BulkMerge(qualifications);

            //var certifications = models.Select(x => new LegaSys_UserCertification
            //{
            //    CertificationID = x.CertificationID ?? -10,
            //    CertificateNumber = x.CertificateNumber,
            //    Type = x.Type,
            //    Stream = x.CStream,
            //    Year = x.CYear ?? -10,
            //    Institution = x.Institution,
            //    Marks = x.CMarks,
            //    UserDetailID = x.UserDetailID

            //}).ToList();
           
            
            //certifications.RemoveAll(x => x.CertificationID==-10);

            //db.BulkMerge(certifications);

            db.SaveChanges();

            return true;
        }

        public IEnumerable<ResourceProject> getResourceProject(int id)
        {

            var data = (from project in db.LegaSys_Projects
                            //join qualify in db.LegaSys_UserQualification on user.UserDetailID equals qualify.UserDetailID
                        join rProject in db.LegaSys_ProjectResources on project.ProjectID equals rProject.Project_ID
                        where rProject.Resource_ID == id
                        select new { project, rProject }).AsEnumerable()
                       .Select(x => new ResourceProject
                       {
                           ProjectResourceID=x.rProject.ProjectResourceID,
                           Resource_ID = x.rProject.Resource_ID,
                           Project_ID=x.rProject.Project_ID,
                           Title=x.project.Title,
                           Description=x.project.Description,
                           Status=x.project.Status,
                          Start_Date=x.project.Start_Date,
                          End_Date=x.project.End_Date


                       }).ToList();


            return data;

        }

        public List<UserDetail> GetAllResources()
        {
            List<UserDetail> lstResource = null;
            try
            {
                using (LegaSysEntities db = new LegaSysEntities())
                {
                    lstResource = db.LegaSys_UserDetails.Select(x =>
                    new UserDetail()
              {
                  UserDetailID = x.UserDetailID,
                  Firstname = x.Firstname,
                  Middlename = x.Middlename,
                  Lastname = x.Lastname,
                  TotalExp = x.TotalExp,
                  EmailId = x.EmailId,
                  IsExperienced = x.IsExperienced,
                  PrimarySkillSet = x.PrimarySkillSet,
                  SecondarySkillSet = x.SecondarySkillSet,
                  Qualification = x.Qualification,
                  DateOfJoining = x.DateOfJoining,
                  IsActive = x.IsActive

              }).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return lstResource;
        }
    }
}
