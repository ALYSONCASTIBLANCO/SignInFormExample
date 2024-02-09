import sql, {VarChar, NVarChar} from 'mssql';
import { getConnection, queries } from '../database';
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

async function encryptPassword(password){
    const salt=await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);

}

async function validatePassword(mypassword,password){
    return bcrypt.compare(mypassword, password);
}
export const obtenerUsuarios=async (req, res)=>{
    try {
        const pool=await getConnection();
        const result=await pool.request().query(queries.obtenerUsuarios);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const infoUsuario=async (req, res)=>{
        const pool=await getConnection();
        const resultR=await pool.request().input("id_user", sql.BigInt, req.userId)
        .query(queries.validarUsuarioId);
        res.json(resultR.recordset);
        
    }
    
export const validarUsuario=async (req, res)=>{
    const {username, mypassword}=req.body;
    if(username==null || mypassword==null){
        return res.status(400).json("Por favor ingrese todos los campos");
    }
    try {
        const pool=await getConnection();
        const result=await pool.request()
        .input("username", sql.VarChar, username)
        .query(queries.validarUsuario);
        //console.log(result.recordset);
        if(result.rowsAffected==0){
            res.json('Usuario no encontrado. Verifique que sea escrito correctamente o registrese')     
        }
        else{
            if(username===result.recordset[0]['username'] && await validatePassword(mypassword, result.recordset[0]['password'])==true){
                //console.log(result.recordset[0]['id_user']);
                const token=jwt.sign({id:result.recordset[0]['id_user']}, process.env.SECRET,{
                    expiresIn:60*60*24
                })
                res.json({Usuario_validado:true,
                    auth:true, token:token
                });
            }
            else{
                res.json("Usuario no valido, verifique datos o recupere credenciales");
            }
        }       
 
    } catch (error) {
        res.status(404).json(error);
        
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
            res.json(result.recordset[0]['username']);
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
            res.json("Se le enviara a su correo los pasos para recuperar su contrasena"
            );
            
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
    const newPassword=await encryptPassword(password);
    //console.log(newPassword);
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
        .input("password", sql.VarChar, newPassword)
        .query(queries.registrarUsuario);
        const resultR=await pool.request().input("email", sql.NVarChar, email)
        .input("username", sql.VarChar, username)
        .input("password", sql.VarChar, password)
        .query(queries.validarUsuario);
        //console.log(resultR.recordset[0]['id_user']);
        const token=jwt.sign({id:resultR.recordset[0]['id_user']},process.env.SECRET,{
            expiresIn:60*60*24
        });
        res.json({"Usuario registrado":true,
        auth:true, token:token});
        }
    } catch (error) {
        res.status(500).json({"Usuario no creado":error});
    }
} 