USE [master]
GO
/****** Object:  Database [LegaSys]    Script Date: 10/26/2018 7:01:43 PM ******/
CREATE DATABASE [LegaSys]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'LegaSys', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS2014\MSSQL\DATA\LegaSys.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'LegaSys_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS2014\MSSQL\DATA\LegaSys_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [LegaSys] SET COMPATIBILITY_LEVEL = 120
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
ALTER DATABASE [LegaSys] SET DELAYED_DURABILITY = DISABLED 
GO
USE [LegaSys]
GO
/****** Object:  Table [dbo].[LegaSys_Attachments]    Script Date: 10/26/2018 7:01:43 PM ******/
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
/****** Object:  Table [dbo].[LegaSys_AttachmentTypes]    Script Date: 10/26/2018 7:01:43 PM ******/
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
/****** Object:  Table [dbo].[LegaSys_ClientDetails]    Script Date: 10/26/2018 7:01:43 PM ******/
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
/****** Object:  Table [dbo].[LegaSys_Master_Locations]    Script Date: 10/26/2018 7:01:43 PM ******/
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
/****** Object:  Table [dbo].[LegaSys_Master_Menu]    Script Date: 10/26/2018 7:01:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_Master_Menu](
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
/****** Object:  Table [dbo].[LegaSys_Master_Shifts]    Script Date: 10/26/2018 7:01:43 PM ******/
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
/****** Object:  Table [dbo].[LegaSys_Master_TechDomains]    Script Date: 10/26/2018 7:01:43 PM ******/
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
/****** Object:  Table [dbo].[LegaSys_Master_Technology]    Script Date: 10/26/2018 7:01:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_Master_Technology](
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
/****** Object:  Table [dbo].[LegaSys_Master_UserRoles]    Script Date: 10/26/2018 7:01:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_Master_UserRoles](
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
/****** Object:  Table [dbo].[LegaSys_Menu_Roles]    Script Date: 10/26/2018 7:01:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_Menu_Roles](
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
/****** Object:  Table [dbo].[LegaSys_ProjectResource]    Script Date: 10/26/2018 7:01:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_ProjectResource](
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
/****** Object:  Table [dbo].[LegaSys_Projects]    Script Date: 10/26/2018 7:01:43 PM ******/
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
/****** Object:  Table [dbo].[LegaSys_ProjectSubTasks]    Script Date: 10/26/2018 7:01:43 PM ******/
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
/****** Object:  Table [dbo].[LegaSys_ProjectTasks]    Script Date: 10/26/2018 7:01:43 PM ******/
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
/****** Object:  Table [dbo].[LegaSys_ProjectTechDetail]    Script Date: 10/26/2018 7:01:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_ProjectTechDetail](
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
/****** Object:  Table [dbo].[LegaSys_UserDetail]    Script Date: 10/26/2018 7:01:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_UserDetail](
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
	[Master_UserRoles_ID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[UserDetailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[LegaSys_UserLoginDetails]    Script Date: 10/26/2018 7:01:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LegaSys_UserLoginDetails](
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
/****** Object:  Table [dbo].[LegaSys_UserTechDetail]    Script Date: 10/26/2018 7:01:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LegaSys_UserTechDetail](
	[UserTechDetailID] [int] IDENTITY(1,1) NOT NULL,
	[Master_Technology_ID] [int] NULL,
	[IsActive] [bit] NULL,
	[UserDetail_ID] [int] NULL,
	[Created_By] [int] NULL,
	[Updated_By] [int] NULL,
	[Created_Date] [datetime] NULL,
	[Updated_Date] [datetime] NULL,
	[Master_Domain_ID] [int] NULL,
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
SET IDENTITY_INSERT [dbo].[LegaSys_Master_Menu] ON 

INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (1, N'Manage Packages', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (2, N'Manage Subscriptions', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (3, N'Add Resource', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (4, N'Manage Resource', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (5, N'Add Client', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (6, N'Manage Clients', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (7, N'Add Technologies', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (8, N'Manage Technologies', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (9, N'Technical Domains', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (10, N'Manage Roles', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (11, N'Create Project', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (12, N'Manage Projects', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (13, N'Project Escalations', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (14, N'MOMs', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (15, N'DAR logs', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (16, N'Manage Tasks', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (17, N'Send DAR', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (18, N'Manage Client Admin', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (19, N'My Profile', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (20, N'Logout', NULL, NULL)
INSERT [dbo].[LegaSys_Master_Menu] ([MenuID], [MenuName], [Created_Date], [Updated_Date]) VALUES (21, N'Dashboard', NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_Master_Menu] OFF
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
SET IDENTITY_INSERT [dbo].[LegaSys_Master_Technology] ON 

INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (1, N'Classic ASP ', 1, 0, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (2, N'ASP.Net Web-Forms', 1, 0, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (3, N'ASP.Net MVC', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (4, N'PHP', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (5, N'Ruby On Rails', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (6, N'Angular-JS 1.x', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (7, N'Angular 2', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (8, N'MEAN Stack', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (9, N'IOS', 2, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (10, N'Andriod', 2, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (11, N'Windows-Phones', 2, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (12, N'Web-Services (XML)', 3, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (13, N'WCF', 3, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (14, N'Web API', 3, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (15, N'Win-Forms', 4, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (16, N'WPF', 4, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (17, N'Karma-Jasmine', 5, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (18, N'Protractor-Sellenium', 5, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (19, N'Oracle-Apps', 7, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (20, N'Microsoft SQL', 7, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (21, N'Mongo-Db', 7, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (26, N'PHP', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_Master_Technology] ([TechnologyID], [Name], [Master_DomainID], [IsActive], [Created_Date], [Updated_Date]) VALUES (27, N'dhfdh', 1, 1, NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_Master_Technology] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_Master_UserRoles] ON 

INSERT [dbo].[LegaSys_Master_UserRoles] ([UserRoleID], [Role], [Description], [Created_Date], [Updated_Date]) VALUES (1, N'Product-Owner', N'p.owner', NULL, NULL)
INSERT [dbo].[LegaSys_Master_UserRoles] ([UserRoleID], [Role], [Description], [Created_Date], [Updated_Date]) VALUES (2, N'ORG-Client-Admin', N'org.admin', NULL, NULL)
INSERT [dbo].[LegaSys_Master_UserRoles] ([UserRoleID], [Role], [Description], [Created_Date], [Updated_Date]) VALUES (3, N'ORG-Project-Lead', N'org.pl', NULL, NULL)
INSERT [dbo].[LegaSys_Master_UserRoles] ([UserRoleID], [Role], [Description], [Created_Date], [Updated_Date]) VALUES (4, N'ORG-Team-Lead', N'org.tl', NULL, NULL)
INSERT [dbo].[LegaSys_Master_UserRoles] ([UserRoleID], [Role], [Description], [Created_Date], [Updated_Date]) VALUES (5, N'ORG-Resource', N'org.resource', NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_Master_UserRoles] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_Menu_Roles] ON 

INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (35, 1, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (36, 1, 2, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (38, 1, 8, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (39, 1, 9, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (40, 1, 10, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (41, 1, 18, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (42, 1, 19, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (43, 1, 20, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (45, 2, 4, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (47, 2, 6, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (48, 2, 11, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (49, 2, 12, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (50, 2, 19, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (51, 2, 20, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (52, 3, 11, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (53, 3, 12, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (54, 3, 13, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (55, 3, 14, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (56, 3, 15, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (57, 3, 19, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (58, 3, 20, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (59, 4, 13, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (60, 4, 14, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (61, 4, 15, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (62, 4, 16, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (63, 4, 19, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (64, 4, 20, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (65, 5, 14, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (66, 5, 16, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (67, 5, 17, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (68, 5, 19, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (69, 5, 20, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (71, 2, 21, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (72, 3, 21, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (73, 4, 21, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_Menu_Roles] ([MenuRoleID], [Master_Role_ID], [Master_Menu_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (74, 5, 21, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_Menu_Roles] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_UserDetail] ON 

INSERT [dbo].[LegaSys_UserDetail] ([UserDetailID], [Firstname], [Middlename], [Lastname], [TotalExp], [EmailId], [IsActive], [Remarks], [Master_Shift_ID], [Master_Location_ID], [ReportingHead_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_UserRoles_ID]) VALUES (1, N'Virtual', N'', N'Employee', CAST(0 AS Decimal(18, 0)), N'VE@ve.com', 1, N'Org client admin', 4, 1, NULL, NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[LegaSys_UserDetail] ([UserDetailID], [Firstname], [Middlename], [Lastname], [TotalExp], [EmailId], [IsActive], [Remarks], [Master_Shift_ID], [Master_Location_ID], [ReportingHead_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_UserRoles_ID]) VALUES (2, N'Arvind', N'', N'Kumar', CAST(10 AS Decimal(18, 0)), N'vearvind@virtualemployee.com', 1, N'Project Lead', 4, 1, 1, NULL, NULL, NULL, NULL, 3)
INSERT [dbo].[LegaSys_UserDetail] ([UserDetailID], [Firstname], [Middlename], [Lastname], [TotalExp], [EmailId], [IsActive], [Remarks], [Master_Shift_ID], [Master_Location_ID], [ReportingHead_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_UserRoles_ID]) VALUES (3, N'Nitin ', N'', N'Rohilla', CAST(7 AS Decimal(18, 0)), N'nitinrohilla@virtualemployee.com', 1, N'Team Lead', 4, 1, 2, NULL, NULL, NULL, NULL, 4)
INSERT [dbo].[LegaSys_UserDetail] ([UserDetailID], [Firstname], [Middlename], [Lastname], [TotalExp], [EmailId], [IsActive], [Remarks], [Master_Shift_ID], [Master_Location_ID], [ReportingHead_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_UserRoles_ID]) VALUES (4, N'Ravi', N'Shankar', N'Pandey', CAST(7 AS Decimal(18, 0)), N'rspandey@virtualemployee.com', 1, N'Sr Sw Engineer', 4, 1, 3, NULL, NULL, NULL, NULL, 5)
SET IDENTITY_INSERT [dbo].[LegaSys_UserDetail] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_UserLoginDetails] ON 

INSERT [dbo].[LegaSys_UserLoginDetails] ([UserLoginDetailID], [Username], [Password], [LastLogin], [UserDetailID], [IsActive], [Remarks], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (2, N'PO@legasys.com', N'pass123', NULL, NULL, 1, N'Product Owner', NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserLoginDetails] ([UserLoginDetailID], [Username], [Password], [LastLogin], [UserDetailID], [IsActive], [Remarks], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (3, N'VE@ve.com', N'pass123', NULL, 1, 1, N'Client admin', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_UserLoginDetails] ([UserLoginDetailID], [Username], [Password], [LastLogin], [UserDetailID], [IsActive], [Remarks], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (5, N'AK@ve.com', N'pass123', NULL, 2, 1, N'Client org PL', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_UserLoginDetails] ([UserLoginDetailID], [Username], [Password], [LastLogin], [UserDetailID], [IsActive], [Remarks], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (6, N'NR@ve.com', N'pass123', NULL, 3, 1, N'Client org TL', 1, 1, NULL, NULL)
INSERT [dbo].[LegaSys_UserLoginDetails] ([UserLoginDetailID], [Username], [Password], [LastLogin], [UserDetailID], [IsActive], [Remarks], [Created_By], [Updated_By], [Created_Date], [Updated_Date]) VALUES (8, N'RSP@ve.com', N'pass123', NULL, 4, 1, N'Client org resource', 1, 1, NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_UserLoginDetails] OFF
SET IDENTITY_INSERT [dbo].[LegaSys_UserTechDetail] ON 

INSERT [dbo].[LegaSys_UserTechDetail] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Domain_ID]) VALUES (1, 2, 1, 1, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechDetail] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Domain_ID]) VALUES (2, 3, 1, 1, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechDetail] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Domain_ID]) VALUES (3, 6, 1, 1, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechDetail] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Domain_ID]) VALUES (4, 7, 1, 1, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechDetail] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Domain_ID]) VALUES (5, 8, 1, 1, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechDetail] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Domain_ID]) VALUES (6, 2, 1, 2, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechDetail] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Domain_ID]) VALUES (7, 3, 1, 2, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechDetail] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Domain_ID]) VALUES (8, 6, 1, 2, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechDetail] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Domain_ID]) VALUES (9, 7, 1, 2, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[LegaSys_UserTechDetail] ([UserTechDetailID], [Master_Technology_ID], [IsActive], [UserDetail_ID], [Created_By], [Updated_By], [Created_Date], [Updated_Date], [Master_Domain_ID]) VALUES (10, 8, 1, 2, NULL, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[LegaSys_UserTechDetail] OFF
ALTER TABLE [dbo].[LegaSys_Attachments]  WITH CHECK ADD FOREIGN KEY([AttachmentTypeID])
REFERENCES [dbo].[LegaSys_AttachmentTypes] ([AttachmentTypeID])
GO
ALTER TABLE [dbo].[LegaSys_Attachments]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_Attachments]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ClientDetails]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ClientDetails]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_Master_Technology]  WITH CHECK ADD FOREIGN KEY([Master_DomainID])
REFERENCES [dbo].[LegaSys_Master_TechDomains] ([TechDomainID])
GO
ALTER TABLE [dbo].[LegaSys_Menu_Roles]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_Menu_Roles]  WITH CHECK ADD FOREIGN KEY([Master_Menu_ID])
REFERENCES [dbo].[LegaSys_Master_Menu] ([MenuID])
GO
ALTER TABLE [dbo].[LegaSys_Menu_Roles]  WITH CHECK ADD FOREIGN KEY([Master_Role_ID])
REFERENCES [dbo].[LegaSys_Master_UserRoles] ([UserRoleID])
GO
ALTER TABLE [dbo].[LegaSys_Menu_Roles]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectResource]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectResource]  WITH CHECK ADD FOREIGN KEY([Project_ID])
REFERENCES [dbo].[LegaSys_Projects] ([ProjectID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectResource]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectResource]  WITH CHECK ADD  CONSTRAINT [FK__LegaSys_ORG_P__ORG_R__4316F928] FOREIGN KEY([Resource_ID])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectResource] CHECK CONSTRAINT [FK__LegaSys_ORG_P__ORG_R__4316F928]
GO
ALTER TABLE [dbo].[LegaSys_Projects]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_Projects]  WITH CHECK ADD FOREIGN KEY([Client_ID])
REFERENCES [dbo].[LegaSys_ClientDetails] ([ClientDetailID])
GO
ALTER TABLE [dbo].[LegaSys_Projects]  WITH CHECK ADD FOREIGN KEY([ProjectDomain_ID])
REFERENCES [dbo].[LegaSys_Master_TechDomains] ([TechDomainID])
GO
ALTER TABLE [dbo].[LegaSys_Projects]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectSubTasks]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectSubTasks]  WITH CHECK ADD FOREIGN KEY([Attachment_ID])
REFERENCES [dbo].[LegaSys_Attachments] ([AttachmentID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectSubTasks]  WITH CHECK ADD FOREIGN KEY([Project_Task_ID])
REFERENCES [dbo].[LegaSys_ProjectTasks] ([ProjectTaskID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectSubTasks]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTasks]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTasks]  WITH CHECK ADD FOREIGN KEY([Attachment_ID])
REFERENCES [dbo].[LegaSys_Attachments] ([AttachmentID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTasks]  WITH CHECK ADD FOREIGN KEY([Project_ID])
REFERENCES [dbo].[LegaSys_Projects] ([ProjectID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTasks]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTechDetail]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTechDetail]  WITH CHECK ADD FOREIGN KEY([Master_Technology_ID])
REFERENCES [dbo].[LegaSys_Master_Technology] ([TechnologyID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTechDetail]  WITH CHECK ADD FOREIGN KEY([Project_ID])
REFERENCES [dbo].[LegaSys_Projects] ([ProjectID])
GO
ALTER TABLE [dbo].[LegaSys_ProjectTechDetail]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserDetail]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserDetail]  WITH CHECK ADD FOREIGN KEY([Master_UserRoles_ID])
REFERENCES [dbo].[LegaSys_Master_UserRoles] ([UserRoleID])
GO
ALTER TABLE [dbo].[LegaSys_UserDetail]  WITH CHECK ADD FOREIGN KEY([ReportingHead_ID])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserDetail]  WITH CHECK ADD FOREIGN KEY([Master_Location_ID])
REFERENCES [dbo].[LegaSys_Master_Locations] ([LocationID])
GO
ALTER TABLE [dbo].[LegaSys_UserDetail]  WITH CHECK ADD FOREIGN KEY([Master_Shift_ID])
REFERENCES [dbo].[LegaSys_Master_Shifts] ([ShiftID])
GO
ALTER TABLE [dbo].[LegaSys_UserDetail]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserLoginDetails]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserLoginDetails]  WITH CHECK ADD FOREIGN KEY([UserDetailID])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserLoginDetails]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserTechDetail]  WITH CHECK ADD FOREIGN KEY([Created_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserTechDetail]  WITH CHECK ADD FOREIGN KEY([Master_Technology_ID])
REFERENCES [dbo].[LegaSys_Master_Technology] ([TechnologyID])
GO
ALTER TABLE [dbo].[LegaSys_UserTechDetail]  WITH CHECK ADD FOREIGN KEY([UserDetail_ID])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserTechDetail]  WITH CHECK ADD FOREIGN KEY([Updated_By])
REFERENCES [dbo].[LegaSys_UserDetail] ([UserDetailID])
GO
ALTER TABLE [dbo].[LegaSys_UserTechDetail]  WITH CHECK ADD FOREIGN KEY([Master_Domain_ID])
REFERENCES [dbo].[LegaSys_Master_TechDomains] ([TechDomainID])
GO
USE [master]
GO
ALTER DATABASE [LegaSys] SET  READ_WRITE 
GO
