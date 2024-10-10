import React from 'react'
import Fila from './Fila'

export default function Tabla({ medias }) {
  return (
    <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>                                                          
                    <th scope="col">Título</th>
                    <th scope="col">Sinopsis</th>
                    <th scope="col">URL</th>
                    <th scope="col">Portada</th>
                    <th scope="col">Género</th>
                    <th scope="col">Director</th>
                    <th scope="col">Productora</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Fecha Creación</th>                   
                </tr>
            </thead>
            <tbody>
                {
                    medias.map((media, index) =>
                        (
                            <Fila
                            key={media._id}
                            index={index}
                            media={media}
                            />
                        )
                    )
                }

            </tbody>
        </table>
  )
}
