import config from './config';
import usuariosRoutes from './controllers/usuarios.routes'
const express=require('express');
const morgan=require('morgan');
const app=express();
app.set('port', process.env.PORT||config.port);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('combined'));
app.use(usuariosRoutes);

export default app;