import{ axiosconfiguracion } from "../Config/axiosconfiguracion";

const headers = {
    'Content-Type' : 'application/json'
}
const crearGestionMedia = (Media) => { //POST
    const data = {        
        titulo : Media.titulo,        
        sinopsis : Media.sinopsis,
        URL : Media.URL,
        portada : Media.portada, 
        genero : Media.genero,
        director : Media.director,
        productora : Media.productora,
        tipo : Media.tipo
        
    }
    return axiosconfiguracion.post('/media', data, {
        headers : headers
    })
}
const consultarGestionMedias = () => { //GET
    return axiosconfiguracion.get('/media', {
        headers : headers
    })
}
const consultarGestionMediaporId = (id) => { //GET
    return axiosconfiguracion.get('/media/+id', {
        headers : headers
    })
}
const actualizarGestionMediaporId = (id, Media) => { //PUT
    const data = {
        titulo : Media.sinopsis,
        sinopsis : Media.sinopsis
    }
    return axiosconfiguracion.put('/media/'+id, data, {
        headers : headers
    })
}
const ModificaGestionMediaID = (id, Media) => { //PATCH
    const data = {
        titulo : Media.sinopsis,
        sinopsis : Media.sinopsis
    }
    return axiosconfiguracion.patch('/media/'+id, data, {
        headers : headers
    })
}
export {
    crearGestionMedia,
    consultarGestionMedias,
    consultarGestionMediaporId,
    actualizarGestionMediaporId,
    ModificaGestionMediaID
}