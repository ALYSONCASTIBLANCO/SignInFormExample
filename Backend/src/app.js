import config from './config';
import usuariosRoutes from './controllers/usuarios.routes'
const express=require('express');
const morgan=require('morgan');
const cors=require('cors');//Middleware que facilita la comunicacion
//Configuraciones de exclusividad de la API para solo un client server
const corsOptions={
    origin:'http://localhost:3000',
    methods: ['POST', 'GET'],
    credentials: true
};
const app=express();
app.set('port', process.env.PORT||config.port);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('combined'));
app.use(cors(corsOptions));
app.use(usuariosRoutes);

export default app;