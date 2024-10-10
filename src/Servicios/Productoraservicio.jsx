import{ axiosconfiguracion } from "../Config/axiosconfiguracion";

const headers = {
    'Content-Type' : 'application/json'
}
const crearProductora = (Productoras) => { //POST
    const data = {
        nombre : Productoras.nombre,
        slogan: Productoras.slogan,
        descripcion : Productoras.descripcion
    }
    return axiosconfiguracion.post('/productoras', data, {
        headers : headers
    })
}
const consultarProductoras = () => { //GET
    return axiosconfiguracion.get('/productoras', {
        headers : headers
    })
}
const consultarProductoraporId = (id) => { //GET
    return axiosconfiguracion.get('/productoras/+id', {
        headers : headers
    })
}
const actualizarProductoraporId = (id, Productora) => { //PUT
    const data = {
        nombre : Productora.nombre,
        descripcion : Productora.descripcion
    }
    return axiosconfiguracion.put('/productoras/'+id, data, {
        headers : headers
    })
}
const ModificaProductoraID = (id, Productora) => { //PATCH
    const data = {
        nombre : Productora.nombre,
        descripcion : Productora.descripcion
    }
    return axiosconfiguracion.patch('/productoras/'+id, data, {
        headers : headers
    })
}
export {
    crearProductora,
    consultarProductoras,
    consultarProductoraporId,
    actualizarProductoraporId,
    ModificaProductoraID
}