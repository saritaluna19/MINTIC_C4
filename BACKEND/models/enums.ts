enum Enum_Rol{
    estudiante="Estudiante",
    lider="Lider",
    administrador="Administrador",
}

enum Enum_Estado{
    autorizado="Autorizado",
    pendiente="Pendiente",
    noAutorizado="No autorizado",
}

enum Enum_EstadoProyecto{
    activo="Activo",
    inactivo="Inactivo",
}

enum Enum_FaseProyecto{
    iniciado="Iniciado",
    desarrolo="En desarollo",
    terminado="Terminado",
    nula='',
}

enum Enum_EstadoInscripcion{
    aceptada="Aceptada",
    rechazada="Rechazada",
}

export {Enum_Rol, Enum_Estado, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_EstadoInscripcion};
