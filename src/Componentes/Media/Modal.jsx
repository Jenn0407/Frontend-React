import React from 'react'

export default function Modal({media, handleChange, guardar, clearMedia}) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel"> Nueva Media </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>          
          <div className="mb-3">
            <label for="message-text" className="col-form-label"> Título:</label>
            <textarea 
            className="form-control" 
            id="message-text"
            name= 'titulo'
            onChange={handleChange}
            value={media.titulo}
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label"> Sinopsis :</label>
            <textarea 
            className="form-control" 
            id="message-text"
            name= 'sinopsis'
            onChange={handleChange}
            value={media.sinopsis}
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label"> URL:</label>
            <textarea 
            className="form-control" 
            id="message-text"
            name= 'URL'
            onChange={handleChange}
            value={media.URL}
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label"> Portada:</label>
            <textarea 
            className="form-control" 
            id="message-text"
            name= 'portada'
            onChange={handleChange}
            value={media.portada}
            ></textarea>
          </div>          
          <div className="mb-3">
            <label for="message-text" className="col-form-label"> Género:</label>
            <textarea 
            className="form-control" 
            id="message-text"
            name= 'genero'
            onChange={handleChange}
            value={media.genero}
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label"> Director:</label>
            <textarea 
            className="form-control" 
            id="message-text"
            name= 'director'
            onChange={handleChange}
            value={media.director}
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label"> Productora:</label>
            <textarea 
            className="form-control" 
            id="message-text"
            name= 'productora'
            onChange={handleChange}
            value={media.productora}
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label"> Tipo:</label>
            <textarea 
            className="form-control" 
            id="message-text"
            name= 'tipo'
            onChange={handleChange}
            value={media.tipo}
            ></textarea>
          </div>          
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={clearMedia}> Cerrar </button>
        <button onClick={guardar} type="button" className="btn btn-outline-success"> Enviar </button>
      </div>
    </div>
  </div>
</div>
  )
}
