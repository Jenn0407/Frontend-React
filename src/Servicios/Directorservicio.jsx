import{ axiosconfiguracion } from "../Config/axiosconfiguracion";

const headers = {
    'Content-Type' : 'application/json'
}
const createDirector = (Directores) => { //POST
    const data = {
        nombre : Directores.nombre,
        documentoIdentidad: Directores.documentoIdentidad
    }
    return axiosconfiguracion.post('/directores', data, {
        headers : headers
    })
}
const consultarDirectores = () => { //GET
    return axiosconfiguracion.get('/directores', {
        headers : headers
    })
}
const consultarDirectorporId = (id) => { //GET
    return axiosconfiguracion.get('/directores/+id', {
        headers : headers
    })
}
const actualizarDirectorporId = (id, Director) => { //PUT
    const data = {
        nombre : Director.nombre,
        descripcion : Director.descripcion
    }
    return axiosconfiguracion.put('/directores/'+id, data, {
        headers : headers
    })
}
const ModificaDirectorID = (id, Director) => { //PATCH
    const data = {
        nombre : Director.nombre,
        descripcion : Director.descripcion
    }
    return axiosconfiguracion.patch('/directores/'+id, data, {
        headers : headers
    })
}
export {
    createDirector,
    consultarDirectores,
    consultarDirectorporId,
    actualizarDirectorporId,
    ModificaDirectorID
}