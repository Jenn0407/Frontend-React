import{ axiosconfiguracion } from "../Config/axiosconfiguracion";

const headers = {
    'Content-Type' : 'application/json'
}
const crearTipo = (Tipos) => { //POST
    const data = {
        nombre : Tipos.nombre,
        descripcion : Tipos.descripcion
    }
    return axiosconfiguracion.post('/tipo', data, {
        headers : headers
    })
}
const consultarTipos = () => { //GET
    return axiosconfiguracion.get('/tipo', {
        headers : headers
    })
}
const consultarTipoporId = (id) => { //GET
    return axiosconfiguracion.get('/tipo/+id', {
        headers : headers
    })
}
const actualizarTipoporId = (id, Tipo) => { //PUT
    const data = {
        nombre : Tipo.nombre,
        descripcion : Tipo.descripcion
    }
    return axiosconfiguracion.put('/tipo/'+id, data, {
        headers : headers
    })
}
const ModificaTipoID = (id, Tipo) => { //PATCH
    const data = {
        nombre : Tipo.nombre,
        descripcion : Tipo.descripcion
    }
    return axiosconfiguracion.patch('/tipo/'+id, data, {
        headers : headers
    })
}
export {
    crearTipo,
    consultarTipos,
    consultarTipoporId,
    actualizarTipoporId,
    ModificaTipoID
}