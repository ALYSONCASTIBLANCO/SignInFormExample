CREATE TABLE Usuarios(
id_user bigInt IDENTITY(1,1) PRIMARY KEY,
email nvarchar (255),
username varchar(50),
password varchar(255)
);