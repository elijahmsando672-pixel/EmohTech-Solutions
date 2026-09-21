-- ============================================================
-- EmohTech Solutions - Microsoft SQL Server schema
-- Run this ONCE on your SQL Server (or let the API create the
-- tables automatically on startup when ENABLE_MSSQL=true).
-- ============================================================

IF DB_ID('EmohTechDB') IS NULL
BEGIN
    CREATE DATABASE EmohTechDB;
END
GO

USE EmohTechDB;
GO

-- Contact form messages
IF OBJECT_ID('dbo.ContactMessages', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.ContactMessages (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(120) NOT NULL,
        email NVARCHAR(254) NOT NULL,
        phone NVARCHAR(30) NOT NULL,
        subject NVARCHAR(150) NOT NULL,
        message NVARCHAR(MAX) NOT NULL,
        createdAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
    );

    CREATE INDEX IX_ContactMessages_CreatedAt ON dbo.ContactMessages (createdAt DESC);
END
GO

-- Service inquiry form
IF OBJECT_ID('dbo.ServiceInquiries', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.ServiceInquiries (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(120) NOT NULL,
        email NVARCHAR(254) NOT NULL,
        phone NVARCHAR(30) NOT NULL,
        company NVARCHAR(200) NULL,
        service NVARCHAR(120) NOT NULL,
        budget NVARCHAR(50) NOT NULL,
        timeline NVARCHAR(100) NULL,
        details NVARCHAR(MAX) NULL,
        status NVARCHAR(20) NOT NULL CONSTRAINT DF_ServiceInquiries_status DEFAULT 'new',
        statusUpdatedAt DATETIME2 NULL,
        createdAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
    );

    CREATE INDEX IX_ServiceInquiries_Service ON dbo.ServiceInquiries (service);
    CREATE INDEX IX_ServiceInquiries_Status ON dbo.ServiceInquiries (status);
    CREATE INDEX IX_ServiceInquiries_CreatedAt ON dbo.ServiceInquiries (createdAt DESC);
END
GO