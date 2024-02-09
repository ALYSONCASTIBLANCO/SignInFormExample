export const queries={
    obtenerUsuarios: "SELECT * FROM  Usuarios",
    registrarUsuario: "INSERT INTO Usuarios (email, username, password) VALUES (@email, @username, @password)",
    recuperarUsuario: "SELECT username FROM Usuarios WHERE email= @email",
    verificarRegistro: "SELECT username FROM Usuarios WHERE email= @email OR username=@username",
    validarUsuario: "SELECT * FROM Usuarios WHERE username=@username",
    validarUsuarioId: "SELECT email, username FROM Usuarios WHERE id_user=@id_user"
}