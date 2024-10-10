import{ axiosconfiguracion } from "../Config/axiosconfiguracion";

const headers = {
    'Content-Type' : 'application/json'
}
const crearGenero = (Generos) => { //POST
    const data = {
        nombre : Generos.nombre,
        descripcion : Generos.descripcion
    }
    return axiosconfiguracion.post('/generos', data, {
        headers : headers
    })
}
const consultarGeneros = () => { //GET
    return axiosconfiguracion.get('/generos', {
        headers : headers
    })
}
const consultarGeneroporId = (id) => { //GET
    return axiosconfiguracion.get('/generos/+id', {
        headers : headers
    })
}
const actualizarGeneroporId = (id, Genero) => { //PUT
    const data = {
        nombre : Genero.nombre,
        descripcion : Genero.descripcion
    }
    return axiosconfiguracion.put('/generos/'+id, data, {
        headers : headers
    })
}
const ModificaGeneroID = (id, Genero) => { //PATCH
    const data = {
        nombre : Genero.nombre,
        descripcion : Genero.descripcion
    }
    return axiosconfiguracion.patch('/generos/'+id, data, {
        headers : headers
    })
}
export {
    crearGenero,
    consultarGeneros,
    consultarGeneroporId,
    actualizarGeneroporId,
    ModificaGeneroID
}