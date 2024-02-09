import {Router} from "express";
import { obtenerUsuarios, registrarUsuario, recuperarUsuario, recuperarContrasena, validarUsuario} from "./usuarios.controller";
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


export default router;