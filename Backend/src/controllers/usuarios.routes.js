import {Router} from "express";
import { obtenerUsuarios, registrarUsuario, recuperarUsuario, recuperarContrasena, validarUsuario, infoUsuario} from "./usuarios.controller";
const verifyToken=require('./verifyToken').default;
const router=Router();
router.get('/', (req, res)=>{
    res.json({
        "message": "SignIn.com REST API Users"
    })
});

router.get('/api/users', obtenerUsuarios);
router.post('/api/users', registrarUsuario);
router.post('/api/forgotuser', recuperarUsuario);
router.post('/api/forgotpass', recuperarContrasena);
router.post('/api/login', validarUsuario);
router.get('/me', verifyToken, infoUsuario);


export default router;