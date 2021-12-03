import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol } from "./models/enums";
import { ProjectModel } from "./models/project";

const main = async () => {
    await conectarBD();

   /*ProjectModel.create({
        nombre: "Proyecto 1",
        presupuesto: 356,
        objGeneral:"Este es el objetivo",
        objEspecifico:"Objetivos especificos 2",
        fechaInicio: Date.now(),
        fechaFin: new Date("2022/11/04"),
        lider: "61aa2817730b03ef828d8499",
    }).then(u => {
        console.log('Proyecto creado', u);
    }).catch((e) => {
        console.error("Error creando el Proyecto", e);
    });*/

    const proyecto: any = await ProjectModel.find({ nombre: 'Proyecto 1' }).populate("lider");
    console.log("El proyecto es: ", proyecto);

    /* const lider=await UserModel.find({_id:proyecto[0].lider});
 console.log("El lidel del proyecto es: ", lider);*/

};

main();


//CRUD DE USUARIOS
    // CREACIÓN DEL USUARIO

/*  await UserModel.create({
       apellido:"Castro",
       correo: "sdasd@gmail.com",
       identificacion:"3239432",
       nombre:"Andres",
       rol: Enum_Rol.administrador,
   }).then(u=>{
       console.log('Usuario creado', u);
   }).catch((e)=>{
       console.error("Error creando el usuario",e);
   });*/

    //CONSULTAS DE USUARIO
/*  await UserModel.find().then((u)=>{
      console.log('usuarios', u);
  }).catch(e=>{
      console.error("Error, obteniendo los usuarios",e)
  });*/

    //CONSULTAR UN SOLO USUARIO
/*await UserModel.findOne({identificacion:"123343434"})
.then((u)=>{
    console.log('usuarios', u);
}).catch(e=>{
    console.error("Error, obteniendo el usuarios",e)
});*/

    //EDITAR USUARIO
/*await UserModel.findOneAndUpdate({identificacion: "12323434"},{
    correo:"sarita.luna@gmail.com,"
}).then((u)=>{
    console.log('usuario actualizado', u);
}).catch(e=>{
    console.error("Error, al actualizar usuario",e)
});*/

    //ELIMINAR USUARIO
/* await UserModel.findOneAndDelete({identificacion: '12323434'})
 .then((u)=>{
     console.log('usuario eliminado', u);
 }).catch(e=>{
     console.error("Error, al eliminar usuario",e)
 });*/