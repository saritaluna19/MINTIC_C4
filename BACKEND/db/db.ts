import { connect } from "mongoose";

const conectarBD = async () => {
    return await connect(
        "mongodb+srv://Admin:1234SN@gestionproyectos.p0ttn.mongodb.net/GestionProyectos?retryWrites=true&w=majority"
    ).then(()=>{
        console.log('Conexion exitosa');
    }).catch(e=>{
        console.error('Error conectando a la bd',e)
    });
};

export default conectarBD;