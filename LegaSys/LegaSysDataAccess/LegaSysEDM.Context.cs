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
        public virtual DbSet<LegaSys_RoleMenus> LegaSys_RoleMenus { get; set; }
        public virtual DbSet<LegaSys_UserDetails> LegaSys_UserDetails { get; set; }
        public virtual DbSet<LegaSys_UserLogin> LegaSys_UserLogin { get; set; }
        public virtual DbSet<LegaSys_UserTechnology> LegaSys_UserTechnology { get; set; }
    }
}
