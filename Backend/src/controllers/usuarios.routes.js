import {Router} from "express";
import { obtenerUsuarios, registrarUsuario, recuperarUsuario, recuperarContrasena} from "./usuarios.controller";
const router=Router();
router.get('/', (req, res)=>{
    res.json({
        "message": "SignIn.com REST API Users"
    })
});

router.get('/api/users', obtenerUsuarios);
router.post('/api/users', registrarUsuario);
router.get('/api/forgotuser', recuperarUsuario);
router.get('/api/forgotpass', recuperarContrasena)


export default router;