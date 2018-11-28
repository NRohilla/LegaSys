﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LegaSysDataAccess
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class LegaSysEntities : DbContext
    {
        public LegaSysEntities()
            : base("name=LegaSysEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<LegaSys_Attachments> LegaSys_Attachments { get; set; }
        public virtual DbSet<LegaSys_AttachmentTypes> LegaSys_AttachmentTypes { get; set; }
        public virtual DbSet<LegaSys_Client_Projects> LegaSys_Client_Projects { get; set; }
        public virtual DbSet<LegaSys_ClientDetails> LegaSys_ClientDetails { get; set; }
        public virtual DbSet<LegaSys_ClientStatus> LegaSys_ClientStatus { get; set; }
        public virtual DbSet<LegaSys_ErrorLogs> LegaSys_ErrorLogs { get; set; }
        public virtual DbSet<LegaSys_LeavesApplication> LegaSys_LeavesApplication { get; set; }
        public virtual DbSet<LegaSys_Log_Clients> LegaSys_Log_Clients { get; set; }
        public virtual DbSet<LegaSys_Log_Projects> LegaSys_Log_Projects { get; set; }
        public virtual DbSet<LegaSys_Log_Resources> LegaSys_Log_Resources { get; set; }
        public virtual DbSet<LegaSys_Master_LeaveStatus> LegaSys_Master_LeaveStatus { get; set; }
        public virtual DbSet<LegaSys_Master_LeaveTypes> LegaSys_Master_LeaveTypes { get; set; }
        public virtual DbSet<LegaSys_Master_Locations> LegaSys_Master_Locations { get; set; }
        public virtual DbSet<LegaSys_Master_MenuItems> LegaSys_Master_MenuItems { get; set; }
        public virtual DbSet<LegaSys_Master_Roles> LegaSys_Master_Roles { get; set; }
        public virtual DbSet<LegaSys_Master_Shifts> LegaSys_Master_Shifts { get; set; }
        public virtual DbSet<LegaSys_Master_TechDomains> LegaSys_Master_TechDomains { get; set; }
        public virtual DbSet<LegaSys_Master_Technologies> LegaSys_Master_Technologies { get; set; }
        public virtual DbSet<LegaSys_ProjectResources> LegaSys_ProjectResources { get; set; }
        public virtual DbSet<LegaSys_Projects> LegaSys_Projects { get; set; }
        public virtual DbSet<LegaSys_ProjectSubTasks> LegaSys_ProjectSubTasks { get; set; }
        public virtual DbSet<LegaSys_ProjectTasks> LegaSys_ProjectTasks { get; set; }
        public virtual DbSet<LegaSys_ProjectTechnology> LegaSys_ProjectTechnology { get; set; }
        public virtual DbSet<LegaSys_UserActivityLog> LegaSys_UserActivityLog { get; set; }
        public virtual DbSet<LegaSys_UserDetails> LegaSys_UserDetails { get; set; }
        public virtual DbSet<LegaSys_UserLogin> LegaSys_UserLogin { get; set; }
        public virtual DbSet<LegaSys_UserTechnology> LegaSys_UserTechnology { get; set; }
        public virtual DbSet<LegaSys_WhiteList_IP> LegaSys_WhiteList_IP { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<LegaSys_UserBackground> LegaSys_UserBackground { get; set; }
        public virtual DbSet<LegaSys_UserCertification> LegaSys_UserCertification { get; set; }
        public virtual DbSet<LegaSys_UserQualification> LegaSys_UserQualification { get; set; }
    
        public virtual int sp_alterdiagram(string diagramname, Nullable<int> owner_id, Nullable<int> version, byte[] definition)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            var versionParameter = version.HasValue ?
                new ObjectParameter("version", version) :
                new ObjectParameter("version", typeof(int));
    
            var definitionParameter = definition != null ?
                new ObjectParameter("definition", definition) :
                new ObjectParameter("definition", typeof(byte[]));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_alterdiagram", diagramnameParameter, owner_idParameter, versionParameter, definitionParameter);
        }
    
        public virtual int sp_creatediagram(string diagramname, Nullable<int> owner_id, Nullable<int> version, byte[] definition)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            var versionParameter = version.HasValue ?
                new ObjectParameter("version", version) :
                new ObjectParameter("version", typeof(int));
    
            var definitionParameter = definition != null ?
                new ObjectParameter("definition", definition) :
                new ObjectParameter("definition", typeof(byte[]));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_creatediagram", diagramnameParameter, owner_idParameter, versionParameter, definitionParameter);
        }
    
        public virtual int sp_dropdiagram(string diagramname, Nullable<int> owner_id)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_dropdiagram", diagramnameParameter, owner_idParameter);
        }
    
        public virtual ObjectResult<sp_helpdiagramdefinition_Result> sp_helpdiagramdefinition(string diagramname, Nullable<int> owner_id)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_helpdiagramdefinition_Result>("sp_helpdiagramdefinition", diagramnameParameter, owner_idParameter);
        }
    
        public virtual ObjectResult<sp_helpdiagrams_Result> sp_helpdiagrams(string diagramname, Nullable<int> owner_id)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_helpdiagrams_Result>("sp_helpdiagrams", diagramnameParameter, owner_idParameter);
        }
    
        public virtual int sp_renamediagram(string diagramname, Nullable<int> owner_id, string new_diagramname)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            var new_diagramnameParameter = new_diagramname != null ?
                new ObjectParameter("new_diagramname", new_diagramname) :
                new ObjectParameter("new_diagramname", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_renamediagram", diagramnameParameter, owner_idParameter, new_diagramnameParameter);
        }
    
        public virtual int sp_upgraddiagrams()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_upgraddiagrams");
        }
    
        public virtual int spAddProject(string title, string description, string status)
        {
            var titleParameter = title != null ?
                new ObjectParameter("Title", title) :
                new ObjectParameter("Title", typeof(string));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("Description", description) :
                new ObjectParameter("Description", typeof(string));
    
            var statusParameter = status != null ?
                new ObjectParameter("Status", status) :
                new ObjectParameter("Status", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("spAddProject", titleParameter, descriptionParameter, statusParameter);
        }
    
        public virtual ObjectResult<spGetAllProjects_Result> spGetAllProjects()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<spGetAllProjects_Result>("spGetAllProjects");
        }
    
        public virtual ObjectResult<spGetProjectDetailsById_Result> spGetProjectDetailsById(Nullable<int> projectId)
        {
            var projectIdParameter = projectId.HasValue ?
                new ObjectParameter("projectId", projectId) :
                new ObjectParameter("projectId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<spGetProjectDetailsById_Result>("spGetProjectDetailsById", projectIdParameter);
        }
    
        public virtual int spUpdateProject(Nullable<int> projectID, string title, string description, string status)
        {
            var projectIDParameter = projectID.HasValue ?
                new ObjectParameter("projectID", projectID) :
                new ObjectParameter("projectID", typeof(int));
    
            var titleParameter = title != null ?
                new ObjectParameter("Title", title) :
                new ObjectParameter("Title", typeof(string));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("Description", description) :
                new ObjectParameter("Description", typeof(string));
    
            var statusParameter = status != null ?
                new ObjectParameter("Status", status) :
                new ObjectParameter("Status", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("spUpdateProject", projectIDParameter, titleParameter, descriptionParameter, statusParameter);
        }
    }
}
