import sql, {VarChar, NVarChar} from 'mssql';
import { getConnection, queries } from '../database';
export const obtenerUsuarios=async (req, res)=>{
    try {
        const pool=await getConnection();
        const result=await pool.request().query(queries.obtenerUsuarios);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const recuperarUsuario=async (req, res)=>{
    const {email}=req.body;
    try {
        const pool=await getConnection();
        const result=await pool.request().input("email", NVarChar, email)
        .query(queries.recuperarUsuario);
        if(result.rowsAffected==0){
            res.json('Usuario no encontrado. Verifique que sea escrito correctamente o registrese')     
        }
        else{
            res.json({"usuario":result.recordset[0]['username']});
        }       
    } catch (error) {
       res.status(400).json('Usuario no encontrado. Verifique que sea escrito correctamente o registrese') 
    }
}
 export const recuperarContrasena=async(req, res)=>{
    const {email}=req.body;
    try {
        const pool=await getConnection();
        const result=await pool.request().input('email', NVarChar, email)
        .query(queries.recuperarUsuario);
        if (result.rowsAffected!=0) {
            res.json({
                "message":"Se le enviara a su correo los pasos para recuperar su contrasena"
            });
            
        } else {
            res.json('Usuario no encontrado. Verifique que sea escrito correctamente o registrese');
        }
    } catch (error) {
        res.status(400).json(error);
        
    }    
 }
export const registrarUsuario=async (req, res)=>{
    const {email, username, password}=req.body;
    if(email==null || username==null || password==null){
        return res.status(400).json("Por favor ingrese todos los campos");
    }
    try {
        const pool=await getConnection();
        const result=await pool.request().input("email", sql.NVarChar, email)
        .input("username", sql.VarChar, username)
        .input("password", sql.VarChar, password)
        .query(queries.verificarRegistro);
        if (result.rowsAffected!=0) {
            res.json('Usuario ya registrado. Recupere su contrasena y usuario si los ha olvidado');
            
        } else {
            await pool.request().input("email", sql.NVarChar, email)
        .input("username", sql.VarChar, username)
        .input("password", sql.VarChar, password)
        .query(queries.registrarUsuario);
        res.json("Usuario registrado");
        }
    } catch (error) {
        res.status(500).json("Usuario no creado");
    }
} 