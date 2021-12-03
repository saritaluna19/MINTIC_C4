import { Schema, model } from "mongoose";
import { Enum_EstadoProyecto, Enum_FaseProyecto } from "./enums";
import { UserModel } from "./user";

interface Proyecto{
    nombre:string;
    objGeneral:string;
    objEspecifico:string;
    presupuesto:number;
    fechaInicio:Date;
    fechaFin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
    lider:Schema.Types.ObjectId;
}

const projectSchema=new Schema<Proyecto>({
    nombre:{
        type:String,
        required:true,
    },
    objGeneral:{
        type:String,
        required:true,
    },
    objEspecifico:{
        type:String,
        required:true,
    },
    presupuesto:{
        type:Number,
        required:true,
    },
    fechaInicio:{
        type:Date,
        required:true,
    },
    fechaFin:{
        type:Date,
        required:true,
    },
    estado:{
        type:String,
        enum: Enum_EstadoProyecto,
        default:Enum_EstadoProyecto.inactivo,
    },
    fase:{
        type:String,
        enum:Enum_FaseProyecto,
        default: Enum_FaseProyecto.nula,
    },
    lider:{
        type: Schema.Types.ObjectId,
        required:true,
        ref:UserModel,
    }, 
});

export const ProjectModel=model("Proyecto", projectSchema);

