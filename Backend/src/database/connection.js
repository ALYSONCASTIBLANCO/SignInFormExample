import sql from 'mssql';
const dbsettings={
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB,
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection(){
    try {
        const pool=await sql.connect(dbsettings);
        return pool;
    } catch (error) {
        console.error(error);
        
    }
}