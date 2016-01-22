/* 
=================================
	Databasse TeamAnalytics  - mijlpaal 1
=================================
*/

PRINT '-!- BEGIN SCRIPT -!-'
PRINT ''

if exists(select name from sys.databases where name = 'dbTAmijlpaal1')
BEGIN
	USE master
	PRINT 'Bestaande databank wordt verwijderd...'
	ALTER DATABASE dbTAmijlpaal1
		SET SINGLE_USER
		WITH ROLLBACK IMMEDIATE;
	WAITFOR DELAY '00:00:05'
	DROP DATABASE dbTAmijlpaal1
	PRINT 'Bestaande databank is verwijderd.'
END
GO

CREATE DATABASE dbTAmijlpaal1
PRINT 'Databank werd gecreëerd'
GO

USE dbTAmijlpaal1
GO 

create table tblDocent(
	DOC_id					int				identity(1,1)			not null,
	DOC_naam				varchar(20)								not null,
	DOC_voornaam			varchar(20)								not null,
	DOC_school				varchar(40)								not null,
	DOC_klas				varchar(10)								not null
)

create table tblStudent(
	STU_id					int				identity(1,1)			not null,
	STU_naam				varchar(20)								not null,
	STU_voornaam			varchar(20)								not null,
	STU_school				varchar(40)								not null,
	STU_klas				varchar(10)								not null
)

go

alter table tblDocent add constraint DOC_id_PK primary key (DOC_id)

alter table tblStudent add constraint STU_id_PK primary key (STU_id)