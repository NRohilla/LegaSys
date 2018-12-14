using LegaSysDataAccess;
using LegaSysDataEntities;
using LegaSysUOW.Interface;
using System;
using System.Collections.Generic;
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
                IsActive = true
            };

            db.SaveChanges();

            return model.UserDetailID;
        }

        public bool DeleteResource(int id, int userId)
        {
            var existingUserDetail = db.LegaSys_UserDetails.FirstOrDefault(x => x.UserDetailID == id && x.IsActive);
            var existingUser = db.LegaSys_UserLogin.FirstOrDefault(x => x.UserDetailID == id && x.IsActive.Value);

            if (existingUserDetail == null || existingUser == null)
                return false;

            existingUserDetail.IsActive = false;
            existingUserDetail.Updated_Date = DateTime.Now;
            existingUserDetail.Updated_By = userId;

            existingUser.IsActive = false;
            existingUser.Updated_Date = DateTime.Now;
            existingUser.Updated_By = userId;

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
                        Qualification = x.user.Qualification
                    });
        }

        public UserDetail GetResourceById(int id)
        {
            return (from user in db.LegaSys_UserDetails.Where(x => x.IsActive)
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
                        DateOfJoining = x.user.DateOfJoining.Value
                        //PrimarySkillSet=x.user.PrimarySkillSet,
                        //SecondarySkillSet=x.user.SecondarySkillSet,
                        //Qualification=x.user.Qualification
                    }).FirstOrDefault();
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
                LeavingDate = y.LeavingDate
            }).ToList();

        }


        public bool CreateUserBackground(int id, bool isExp, List<UserBackground> userBackground)
        {
            var user = db.LegaSys_UserDetails.FirstOrDefault(x => x.UserDetailID == id);
            user.IsExperienced = isExp;

            if (isExp)
            {
                var models = userBackground.Select(x => new LegaSys_UserBackground
                {
                    BackgroundID = x.BackgroundID,
                    CompanyName = x.CompanyName,
                    UserDetailID = x.UserDetailID,
                    Designation = x.Designation,
                    JoiningDate = x.JoiningDate,
                    LeavingDate = x.LeavingDate,
                });

                db.BulkMerge(models);
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
                          CMarks = x.certify.Marks


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

            var user = db.LegaSys_UserDetails.FirstOrDefault(x => x.UserDetailID == id);

            var skills = models.FirstOrDefault();

            user.PrimarySkillSet = skills.PrimarySkillSet;
            user.SecondarySkillSet = skills.SecondarySkillSet;
            user.Qualification = skills.HQualification;

            var qualifications = models.Select(x => new LegaSys_UserQualification
            {
                QualificationID = x.QualificationID,
                Qualification = x.Qualification,
                BoardUniversity = x.BoardUniversity,
                Stream = x.QStream,
                Year = x.QYear,
                Marks = x.QMarks,
                UserDetailID = x.UserDetailID



            });

            db.BulkMerge(qualifications);

            var certifications = models.Select(x => new LegaSys_UserCertification
            {
                CertificationID = x.CertificationID,
                CertificateNumber = x.CertificateNumber,
                Type = x.Type,
                Stream = x.CStream,
                Year = x.CYear,
                Institution = x.Institution,
                Marks = x.CMarks,
                UserDetailID = x.UserDetailID

            });

            db.BulkMerge(certifications);

            db.SaveChanges();

            return true;
        }
    }
}
