USE [master]
GO
/****** Object:  Database [LegaSys]    Script Date: 10/29/2018 2:12:27 PM ******/
CREATE DATABASE [LegaSys]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'LegaSys', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS2014\MSSQL\DATA\LegaSys.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'LegaSys_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS2014\MSSQL\DATA\LegaSys_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [LegaSys].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [LegaSys] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [LegaSys] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [LegaSys] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [LegaSys] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [LegaSys] SET ARITHABORT OFF 
GO
ALTER DATABASE [LegaSys] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [LegaSys] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [LegaSys] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [LegaSys] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [LegaSys] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [LegaSys] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [LegaSys] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [LegaSys] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [LegaSys] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [LegaSys] SET  DISABLE_BROKER 
GO
ALTER DATABASE [LegaSys] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [LegaSys] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [LegaSys] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [LegaSys] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [LegaSys] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [LegaSys] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [LegaSys] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [LegaSys] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [LegaSys] SET  MULTI_USER 
GO
ALTER DATABASE [LegaSys] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [LegaSys] SET DB_CHAINING OFF 
GO
ALTER DATABASE [LegaSys] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [LegaSys] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [LegaSys]
GO
/****** Object:  Table [dbo].[LegaSys_Attachments]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_Attachments](
	[AttachmentID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](100) NULL,
	[Description] [varchar](500) NULL,
	[AttachmentPath] [varchar](200) NULL,
	[IsProjectAttachment] [bit] NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
	[AttachmentTypeID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[AttachmentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LegaSys_AttachmentTypes]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_AttachmentTypes](
	[AttachmentTypeID] [int] IDENTITY(1,1) NOT NULL,
	[AttachmentType] [varchar](100) NULL,
	[Description] [varchar](500) NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[AttachmentTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LegaSys_Client_Projects]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_Client_Projects](
	[ClientProjectID] [int] IDENTITY(1,1) NOT NULL,
	[ProjectID] [int] NULL,
	[ClientID] [int] NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ClientProjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[LegaSys_ClientDetails]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_ClientDetails](
	[ClientDetailID] [int] IDENTITY(1,1) NOT NULL,
	[ClientName] [varchar](100) NULL,
	[Address] [varchar](250) NULL,
	[Country] [varchar](50) NULL,
	[CoClient] [varchar](50) NULL,
	[CoClient2] [varchar](50) NULL,
	[EmailID] [nchar](100) NULL,
	[EmailID2] [nchar](100) NULL,
	[EmailID3] [nchar](100) NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
	[CoClient3] [varchar](50) NULL,
	[CoClient4] [varchar](50) NULL,
	[EmailID4] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[ClientDetailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LegaSys_Master_Locations]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_Master_Locations](
	[LocationID] [int] IDENTITY(1,1) NOT NULL,
	[LocationAddress] [nvarchar](500) NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[LocationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[LegaSys_Master_MenuItems]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_Master_MenuItems](
	[MenuID] [int] IDENTITY(1,1) NOT NULL,
	[MenuName] [varchar](100) NOT NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[MenuID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LegaSys_Master_Roles]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_Master_Roles](
	[UserRoleID] [int] IDENTITY(1,1) NOT NULL,
	[Role] [varchar](100) NOT NULL,
	[Description] [varchar](100) NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[UserRoleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LegaSys_Master_Shifts]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_Master_Shifts](
	[ShiftID] [int] IDENTITY(1,1) NOT NULL,
	[WeekOff1] [varchar](20) NULL,
	[WeekOff2] [varchar](20) NULL,
	[WeekOff3] [varchar](20) NULL,
	[StartTimeIST] [varchar](10) NULL,
	[EndTimeIST] [varchar](10) NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[ShiftID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LegaSys_Master_TechDomains]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_Master_TechDomains](
	[TechDomainID] [int] IDENTITY(1,1) NOT NULL,
	[DomainName] [varchar](100) NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[TechDomainID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LegaSys_Master_Technologies]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_Master_Technologies](
	[TechnologyID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NULL,
	[Master_DomainID] [int] NULL,
	[IsActive] [bit] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[TechnologyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[LegaSys_ProjectResources]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_ProjectResources](
	[ProjectResourceID] [int] IDENTITY(1,1) NOT NULL,
	[Resource_ID] [int] NULL,
	[Project_ID] [int] NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[ProjectResourceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[LegaSys_Projects]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_Projects](
	[ProjectID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](50) NULL,
	[Description] [varchar](500) NULL,
	[Client_ID] [int] NULL,
	[ProjectDomain_ID] [int] NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[ProjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LegaSys_ProjectSubTasks]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_ProjectSubTasks](
	[ProjectSubTaskID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](100) NULL,
	[Description] [varchar](500) NULL,
	[Project_Task_ID] [int] NULL,
	[Attachment_ID] [int] NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[ProjectSubTaskID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LegaSys_ProjectTasks]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_ProjectTasks](
	[ProjectTaskID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](100) NULL,
	[Description] [varchar](500) NULL,
	[Attachment_ID] [int] NULL,
	[Project_ID] [int] NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[ProjectTaskID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LegaSys_ProjectTechnology]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_ProjectTechnology](
	[ProjectTechDetailID] [int] IDENTITY(1,1) NOT NULL,
	[Master_Technology_ID] [int] NULL,
	[Project_ID] [int] NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[ProjectTechDetailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[LegaSys_RoleMenus]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_RoleMenus](
	[MenuRoleID] [int] IDENTITY(1,1) NOT NULL,
	[Master_Role_ID] [int] NOT NULL,
	[Master_Menu_ID] [int] NOT NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[MenuRoleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[LegaSys_UserDetails]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_UserDetails](
	[UserDetailID] [int] IDENTITY(1,1) NOT NULL,
	[Firstname] [nvarchar](100) NULL,
	[Middlename] [nvarchar](100) NULL,
	[Lastname] [nvarchar](100) NULL,
	[TotalExp] [decimal](18, 0) NULL,
	[EmailId] [nvarchar](100) NULL,
	[IsActive] [bit] NULL,
	[Remarks] [nvarchar](500) NULL,
	[Master_Shift_ID] [int] NULL,
	[Master_Location_ID] [int] NULL,
	[ReportingHead_ID] [int] NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
	[Master_Role_ID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[UserDetailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[LegaSys_UserLogin]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_UserLogin](
	[UserLoginDetailID] [int] IDENTITY(1,1) NOT NULL,
	[Username] [varchar](100) NOT NULL,
	[Password] [varchar](100) NOT NULL,
	[LastLogin] [datetime] NULL,
	[UserDetailID] [int] NULL,
	[IsActive] [bit] NULL,
	[Remarks] [varchar](500) NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[UserLoginDetailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[LegaSys_UserTechnology]    Script Date: 10/29/2018 2:12:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_UserTechnology](
	[UserTechDetailID] [int] IDENTITY(1,1) NOT NULL,
	[Master_Technology_ID] [int] NULL,
	[IsActive] [bit] NULL,
	[UserDetail_ID] [int] NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[UserTechDetailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[LegaSys_Master_Locations] ON 

INSERT [dbo].[LegaSys_Master_Locations] ([LocationID], [LocationAddress], [Created_Date], [Updated_Date]) VALUES (1, N'SDF Block I-14', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Locations] ([LocationID], [LocationAddress], [Created_Date], [Updated_Date]) VALUES (2, N'SDF Block K-1', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Locations] ([LocationID], [LocationAddress], [Created_Date], [Updated_Date]) VALUES (3, N'Sector-63', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Locations] ([LocationID], [LocationAddress], [Created_Date], [Updated_Date]) VALUES (4, N'Sector 16, C-25', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Locations] ([LocationID], [LocationAddress], [Created_Date], [Updated_Date]) VALUES (5, N'SDF Block I-15', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Locations] ([LocationID], [LocationAddress], [Created_Date], [Updated_Date]) VALUES (6, N'SDF Block K-4', NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_Master_Locations] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_Master_MenuItems] ON 

INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (4, N'Manage Resource', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (6, N'Manage Clients', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (8, N'Manage Technologies', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (9, N'Manage Domains', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (10, N'Manage User Roles', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (11, N'Manage Projects', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (13, N'Escalations', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (14, N'MOMs', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (15, N'DAR', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (16, N'Manage Tasks', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (19, N'My Profile', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (20, N'Logout', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (21, N'Dashboard', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (22, N'Manage User Permission', NULL, NULL)
INSERT [dbo].[LegaSys_Master_MenuItems] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (23, N'Manage Users', NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_Master_MenuItems] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_Master_Roles] ON 

INSERT [dbo].[LegaSys_Master_Roles] ([UserRoleID], [Role], [Description], [Created_Date], [Updated_Date]) VALUES (2, N'Admin', N'org.admin', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Roles] ([UserRoleID], [Role], [Description], [Created_Date], [Updated_Date]) VALUES (3, N'Project-Lead', N'org.pl', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Roles] ([UserRoleID], [Role], [Description], [Created_Date], [Updated_Date]) VALUES (4, N'Team-Lead', N'org.tl', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Roles] ([UserRoleID], [Role], [Description], [Created_Date], [Updated_Date]) VALUES (5, N'Resource', N'org.resource', NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_Master_Roles] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_Master_Shifts] ON 

INSERT [dbo].[LegaSys_Master_Shifts] ([ShiftID], [WeekOff1], [WeekOff2], [WeekOff3], [StartTimeIST], [EndTimeIST], [Created_Date], [Updated_Date]) VALUES (1, N'Saturday', N'Sunday', NULL, N'0900', N'1800', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Shifts] ([ShiftID], [WeekOff1], [WeekOff2], [WeekOff3], [StartTimeIST], [EndTimeIST], [Created_Date], [Updated_Date]) VALUES (2, N'Saturday', N'Sunday', NULL, N'1000', N'1900', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Shifts] ([ShiftID], [WeekOff1], [WeekOff2], [WeekOff3], [StartTimeIST], [EndTimeIST], [Created_Date], [Updated_Date]) VALUES (3, N'Saturday', N'Sunday', NULL, N'1100', N'2000', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Shifts] ([ShiftID], [WeekOff1], [WeekOff2], [WeekOff3], [StartTimeIST], [EndTimeIST], [Created_Date], [Updated_Date]) VALUES (4, N'Saturday', N'Sunday', NULL, N'1200', N'2100', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Shifts] ([ShiftID], [WeekOff1], [WeekOff2], [WeekOff3], [StartTimeIST], [EndTimeIST], [Created_Date], [Updated_Date]) VALUES (5, N'Saturday', N'Sunday', NULL, N'1300', N'2200', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Shifts] ([ShiftID], [WeekOff1], [WeekOff2], [WeekOff3], [StartTimeIST], [EndTimeIST], [Created_Date], [Updated_Date]) VALUES (6, N'Saturday', N'Sunday', NULL, N'1400', N'2300', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Shifts] ([ShiftID], [WeekOff1], [WeekOff2], [WeekOff3], [StartTimeIST], [EndTimeIST], [Created_Date], [Updated_Date]) VALUES (7, N'Saturday', N'Sunday', NULL, N'1500', N'0000', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Shifts] ([ShiftID], [WeekOff1], [WeekOff2], [WeekOff3], [StartTimeIST], [EndTimeIST], [Created_Date], [Updated_Date]) VALUES (8, N'Saturday', N'Sunday', NULL, N'1600', N'0100', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Shifts] ([ShiftID], [WeekOff1], [WeekOff2], [WeekOff3], [StartTimeIST], [EndTimeIST], [Created_Date], [Updated_Date]) VALUES (9, N'Saturday', N'Sunday', NULL, N'1700', N'0200', NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_Master_Shifts] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_Master_TechDomains] ON 

INSERT [dbo].[LegaSys_Master_TechDomains] ([TechDomainID], [DomainName], [Created_Date], [Updated_Date]) VALUES (1, N'Web-Applications', NULL, NULL)
INSERT [dbo].[LegaSys_Master_TechDomains] ([TechDomainID], [DomainName], [Created_Date], [Updated_Date]) VALUES (2, N'Mobile-Apps', NULL, NULL)
INSERT [dbo].[LegaSys_Master_TechDomains] ([TechDomainID], [DomainName], [Created_Date], [Updated_Date]) VALUES (3, N'Web-Services', NULL, NULL)
INSERT [dbo].[LegaSys_Master_TechDomains] ([TechDomainID], [DomainName], [Created_Date], [Updated_Date]) VALUES (4, N'Windows-Forms', NULL, NULL)
INSERT [dbo].[LegaSys_Master_TechDomains] ([TechDomainID], [DomainName], [Created_Date], [Updated_Date]) VALUES (5, N'Testing', NULL, NULL)
INSERT [dbo].[LegaSys_Master_TechDomains] ([TechDomainID], [DomainName], [Created_Date], [Updated_Date]) VALUES (6, N'Quality', NULL, NULL)
INSERT [dbo].[LegaSys_Master_TechDomains] ([TechDomainID], [DomainName], [Created_Date], [Updated_Date]) VALUES (7, N'DBA', NULL, NULL)
INSERT [dbo].[LegaSys_Master_TechDomains] ([TechDomainID], [DomainName], [Created_Date], [Updated_Date]) VALUES (8, N'Networking', NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_Master_TechDomains] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_Master_Technologies] ON 

INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (1, N'Classic ASP ', 1, 0, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (2, N'ASP.Net Web-Forms', 1, 0, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (3, N'ASP.Net MVC', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (4, N'PHP', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (5, N'Ruby On Rails', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (6, N'Angular-JS 1.x', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (7, N'Angular 2', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (8, N'MEAN Stack', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (9, N'IOS', 2, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (10, N'Andriod', 2, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (11, N'Windows-Phones', 2, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (12, N'Web-Services (XML)', 3, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (13, N'WCF', 3, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (14, N'Web API', 3, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (15, N'Win-Forms', 4, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (16, N'WPF', 4, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (17, N'Karma-Jasmine', 5, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (18, N'Protractor-Sellenium', 5, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (19, N'Oracle-Apps', 7, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (20, N'Microsoft SQL', 7, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (21, N'Mongo-Db', 7, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (26, N'PHP', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technologies] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (27, N'dhfdh', 1, 1, NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_Master_Technologies] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_UserDetails] ON 

INSERT [dbo].[LegaSys_UserDetails] ([UserDetailID], [Firstname], [Middlename], [Lastname], [TotalExp], [EmailId], [IsActive], [Remarks], [Master_Shift_ID], [Master_Location_ID], [ReportingHead_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Role_ID]) VALUES (1, N'Deepak', N'', N'Saini', CAST(0 AS Decimal(18, 0)), N'deepaksaini@virtualemployee.com', 1, N'Org client admin', 4, 1, NULL, NULL, NULL, NULL, NULL, 4)
INSERT [dbo].[LegaSys_UserDetails] ([UserDetailID], [Firstname], [Middlename], [Lastname], [TotalExp], [EmailId], [IsActive], [Remarks], [Master_Shift_ID], [Master_Location_ID], [ReportingHead_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Role_ID]) VALUES (2, N'Arvind', N'', N'Kumar', CAST(10 AS Decimal(18, 0)), N'arvindkumar@virtualemployee.com', 1, N'Project Lead', 4, 1, 1, NULL, NULL, NULL, NULL, 3)
INSERT [dbo].[LegaSys_UserDetails] ([UserDetailID], [Firstname], [Middlename], [Lastname], [TotalExp], [EmailId], [IsActive], [Remarks], [Master_Shift_ID], [Master_Location_ID], [ReportingHead_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Role_ID]) VALUES (3, N'Nitin ', N'', N'Rohilla', CAST(7 AS Decimal(18, 0)), N'nitinrohilla@virtualemployee.com', 1, N'Team Lead', 4, 1, 2, NULL, NULL, NULL, NULL, 4)
INSERT [dbo].[LegaSys_UserDetails] ([UserDetailID], [Firstname], [Middlename], [Lastname], [TotalExp], [EmailId], [IsActive], [Remarks], [Master_Shift_ID], [Master_Location_ID], [ReportingHead_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Role_ID]) VALUES (4, N'Mahesh', N'', N'Verma', CAST(7 AS Decimal(18, 0)), N'maheshverma@virtualemployee.com', 1, N'Sr Sw Engineer', 4, 1, 3, NULL, NULL, NULL, NULL, 2)
SET IDENTITY_INSERT [dbo].[LegaSys_UserDetails] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_UserLogin] ON 

INSERT [dbo].[LegaSys_UserLogin] ([UserLoginDetailID], [Username], [Password], [LastLogin], [UserDetailID], [IsActive], [Remarks], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (3, N'deepaksaini@virtualemployee.com', N'pass@123', NULL, 1, 1, N'Client org TL', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_UserLogin] ([UserLoginDetailID], [Username], [Password], [LastLogin], [UserDetailID], [IsActive], [Remarks], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (5, N'arvindkumar@virtualemployee.com', N'pass@123', NULL, 2, 1, N'Client org PL', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_UserLogin] ([UserLoginDetailID], [Username], [Password], [LastLogin], [UserDetailID], [IsActive], [Remarks], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (6, N'nitinrohilla@virtualemployee.com', N'pass@123', NULL, 3, 1, N'Client org TL', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_UserLogin] ([UserLoginDetailID], [Username], [Password], [LastLogin], [UserDetailID], [IsActive], [Remarks], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (8, N'maheshverma@virtualemployee.com', N'pass@123', NULL, 4, 1, N'Admin', 1, 1, NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_UserLogin] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_UserTechnology] ON 

INSERT [dbo].[LegaSys_UserTechnology] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (1, 2, 1, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechnology] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (2, 3, 1, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechnology] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (3, 6, 1, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechnology] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (4, 7, 1, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechnology] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (5, 8, 1, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechnology] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (6, 2, 1, 2, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechnology] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (7, 3, 1, 2, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechnology] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (8, 6, 1, 2, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechnology] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (9, 7, 1, 2, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechnology] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (10, 8, 1, 2, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_UserTechnology] OFF
ALTER TABLE [dbo].[LegaSys_Attachments]  WITH CHECK ADD FOREIGN KEY([AttachmentTypeID])
REFERENCES [dbo].[LegaSys_AttachmentTypes] ([AttachmentTypeID])
GO
ALTER TABLE [dbo].[LegaSys_Attachments]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_Attachments]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_Client_Projects]  WITH CHECK ADD FOREIGN KEY([ClientID])
REFERENCES [dbo].[LegaSys_ClientDetails] ([ClientDetailID])
GO
ALTER TABLE [dbo].[LegaSys_Client_Projects]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_Client_Projects]  WITH CHECK ADD FOREIGN KEY([ProjectID])
REFERENCES [dbo].[LegaSys_Projects] ([ProjectID])
GO
ALTER TABLE [dbo].[LegaSys_Client_Projects]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ClientDetails]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ClientDetails]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_Master_Technologies]  WITH CHECK ADD FOREIGN KEY([Master_DomainID])
REFERENCES [dbo].[LegaSys_Master_TechDomains] ([TechDomainID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectResources]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectResources]  WITH CHECK ADD FOREIGN KEY([Project_ID])
REFERENCES [dbo].[LegaSys_Projects] ([ProjectID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectResources]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectResources]  WITH CHECK ADD  CONSTRAINT [FK__LegaSys_ORG_P__ORG_R__4316F928] FOREIGN KEY([Resource_ID])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectResources] CHECK CONSTRAINT [FK__LegaSys_ORG_P__ORG_R__4316F928]
GO
ALTER TABLE [dbo].[LegaSys_Projects]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_Projects]  WITH CHECK ADD FOREIGN KEY([Client_ID])
REFERENCES [dbo].[LegaSys_ClientDetails] ([ClientDetailID])
GO
ALTER TABLE [dbo].[LegaSys_Projects]  WITH CHECK ADD FOREIGN KEY([ProjectDomain_ID])
REFERENCES [dbo].[LegaSys_Master_TechDomains] ([TechDomainID])
GO
ALTER TABLE [dbo].[LegaSys_Projects]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectSubTasks]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectSubTasks]  WITH CHECK ADD FOREIGN KEY([Attachment_ID])
REFERENCES [dbo].[LegaSys_Attachments] ([AttachmentID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectSubTasks]  WITH CHECK ADD FOREIGN KEY([Project_Task_ID])
REFERENCES [dbo].[LegaSys_ProjectTasks] ([ProjectTaskID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectSubTasks]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTasks]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTasks]  WITH CHECK ADD FOREIGN KEY([Attachment_ID])
REFERENCES [dbo].[LegaSys_Attachments] ([AttachmentID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTasks]  WITH CHECK ADD FOREIGN KEY([Project_ID])
REFERENCES [dbo].[LegaSys_Projects] ([ProjectID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTasks]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTechnology]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTechnology]  WITH CHECK ADD FOREIGN KEY([Master_Technology_ID])
REFERENCES [dbo].[LegaSys_Master_Technologies] ([TechnologyID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTechnology]  WITH CHECK ADD FOREIGN KEY([Project_ID])
REFERENCES [dbo].[LegaSys_Projects] ([ProjectID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTechnology]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_RoleMenus]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_RoleMenus]  WITH CHECK ADD FOREIGN KEY([Master_Menu_ID])
REFERENCES [dbo].[LegaSys_Master_MenuItems] ([MenuID])
GO
ALTER TABLE [dbo].[LegaSys_RoleMenus]  WITH CHECK ADD FOREIGN KEY([Master_Role_ID])
REFERENCES [dbo].[LegaSys_Master_Roles] ([UserRoleID])
GO
ALTER TABLE [dbo].[LegaSys_RoleMenus]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserDetails]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserDetails]  WITH CHECK ADD FOREIGN KEY([Master_Role_ID])
REFERENCES [dbo].[LegaSys_Master_Roles] ([UserRoleID])
GO
ALTER TABLE [dbo].[LegaSys_UserDetails]  WITH CHECK ADD FOREIGN KEY([ReportingHead_ID])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserDetails]  WITH CHECK ADD FOREIGN KEY([Master_Location_ID])
REFERENCES [dbo].[LegaSys_Master_Locations] ([LocationID])
GO
ALTER TABLE [dbo].[LegaSys_UserDetails]  WITH CHECK ADD FOREIGN KEY([Master_Shift_ID])
REFERENCES [dbo].[LegaSys_Master_Shifts] ([ShiftID])
GO
ALTER TABLE [dbo].[LegaSys_UserDetails]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserLogin]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserLogin]  WITH CHECK ADD FOREIGN KEY([UserDetailID])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserLogin]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserTechnology]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserTechnology]  WITH CHECK ADD FOREIGN KEY([Master_Technology_ID])
REFERENCES [dbo].[LegaSys_Master_Technologies] ([TechnologyID])
GO
ALTER TABLE [dbo].[LegaSys_UserTechnology]  WITH CHECK ADD FOREIGN KEY([UserDetail_ID])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserTechnology]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetails] ([UserDetailID])
GO
USE [master]
GO
ALTER DATABASE [LegaSys] SET  READ_WRITE 
GO
