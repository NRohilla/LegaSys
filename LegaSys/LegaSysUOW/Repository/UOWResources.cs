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

            db.LegaSys_UserDetails.Add(model);
            db.SaveChanges();

            return model.UserDetailID;
        }

        public bool DeleteResource(int id, int userId)
        {
            var existingModel = db.LegaSys_UserDetails.FirstOrDefault(x => x.UserDetailID == id);

            if (existingModel == null)
                return false;

            existingModel.IsActive = false;
            existingModel.Updated_Date = DateTime.Now;
            existingModel.Updated_By = userId;

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
                        //IsActive = x.user.IsActive,
                        //Master_Location_ID = x.user.Master_Location_ID,
                        LocationAddress = x.location.LocationAddress,
                        //Master_Shift_ID = x.user.Master_Shift_ID,
                        Shift = $"{x.shift.StartTimeIST} - {x.shift.EndTimeIST}",
                        //ReportingHead_ID = x.user.ReportingHead_ID,
                        ReportingHead = $"{x.reporting.Firstname} {x.reporting.Lastname}",
                        //Master_Role_ID = x.user.Master_Role_ID,
                        //RoleName = x.role.Role,
                        //Remarks = x.user.Remarks
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
                        Remarks = x.user.Remarks
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
    }
}
