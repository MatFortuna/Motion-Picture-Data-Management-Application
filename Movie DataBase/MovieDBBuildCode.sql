USE [master]
GO

CREATE DATABASE [Movie]

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Movie].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Movie] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Movie] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Movie] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Movie] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Movie] SET ARITHABORT OFF 
GO
ALTER DATABASE [Movie] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Movie] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Movie] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Movie] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Movie] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Movie] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Movie] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Movie] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Movie] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Movie] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Movie] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Movie] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Movie] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Movie] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Movie] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Movie] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Movie] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Movie] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Movie] SET  MULTI_USER 
GO
ALTER DATABASE [Movie] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Movie] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Movie] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Movie] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Movie] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Movie] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Movie] SET QUERY_STORE = OFF
GO
USE [Movie]
GO
/****** Object:  Table [dbo].[MotionPictures]    Script Date: 8/18/2022 8:47:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MotionPictures](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](500) NULL,
	[Release_Year] [int] NOT NULL,
 CONSTRAINT [PK_MotionPictures] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[MotionPictures] ON 
GO
INSERT [dbo].[MotionPictures] ([ID], [Name], [Description], [Release_Year]) VALUES (1, N'The Return of the Living Dead', N'When two bumbling employees at a medical supply warehouse accidentally release a deadly gas into the air, the vapors cause the dead to rise again as zombies.', 1985)
GO
INSERT [dbo].[MotionPictures] ([ID], [Name], [Description], [Release_Year]) VALUES (2, N'Raw', N'A young woman, studying to be a vet, develops a craving for human flesh', 2016)
GO
INSERT [dbo].[MotionPictures] ([ID], [Name], [Description], [Release_Year]) VALUES (3, N'Thirst', N'Through a failed medical experiment, a priest is stricken with vampirism and is forced to abandon his ascetic ways.', 2009)
GO
INSERT [dbo].[MotionPictures] ([ID], [Name], [Description], [Release_Year]) VALUES (4, N'An American Werewolf in London', N'Two American college students on a walking tour of Britain are attacked by a werewolf that none of the locals will admit exists.', 1981)
GO
INSERT [dbo].[MotionPictures] ([ID], [Name], [Description], [Release_Year]) VALUES (5, N'The Thing', N'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.', 1981)
GO
INSERT [dbo].[MotionPictures] ([ID], [Name], [Description], [Release_Year]) VALUES (6, N'Little Shop of Horrors', N'A nerdy florist finds his chance for success and romance with the help of a giant man-eating plant who demands to be fed.', 1986)
GO
SET IDENTITY_INSERT [dbo].[MotionPictures] OFF
GO
USE [master]
GO
ALTER DATABASE [Movie] SET  READ_WRITE 
GO
