import { gql } from 'apollo-server-express';

const typeDefs = gql`

    scalar Date 

    enum Enum_EstadoUsuario{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    enum Enum_Rol{
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }
    enum Enum_EstadoProyecto{
        ACTIVO
        INACTIVO
    }

    enum Enum_FaseProyecto{
        INICIADO
        DESARROLLO
        TERMINADO
        NULO
    }

    type Usuario{
        _id: ID!
        nombre:String!
        apellido:String!
        identificacion:String!
        correo:String!
        rol:Enum_Rol!
        estado:Enum_EstadoUsuario
    }

    type Proyecto{
        _id:ID!
        nombre:String!
        objGeneral:String!
        objEspecifico:String!
        presupuesto:Float!
        fechaInicio:Date!
        fechaFin:Date!
        estado: Enum_EstadoProyecto!
        fase:Enum_FaseProyecto!
        lider: Usuario!
    }

    type Query{
        Usuarios: [Usuario]
        Usuario(_id:String):Usuario
        Proyecto:[Proyecto]
    }

    type Mutation {
        crearUsuario(
            nombre:String!
            apellido:String!
            identificacion:String!
            correo:String!
            rol:Enum_Rol!
            estado:Enum_EstadoUsuario
        ):Usuario

        editarUsuario(
            _id:String!
            nombre:String!
            apellido:String!
            identificacion:String!
            correo:String!
            rol:Enum_Rol!
            estado:Enum_EstadoUsuario
        ):Usuario

        eliminarUsuario(id:String!, correo:String): Usuario

        crearProyecto(
            nombre:String!
            objGeneral:String!
            objEspecifico:String!
            presupuesto:Float!
            fechaInicio:Date!
            fechaFin:Date!
            estado: Enum_EstadoProyecto!
            fase:Enum_FaseProyecto!
            lider: String!
        ):Proyecto
    }
`;

export { typeDefs };