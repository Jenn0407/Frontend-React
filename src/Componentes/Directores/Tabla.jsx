import React from 'react'
import Fila from './Fila'

export default function Tabla({directores}) {
  return (
    <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Documento Identificación</th>                   
                    <th scope="col">Estado</th>
                    <th scope="col">Creación</th>
                </tr>
            </thead>
            <tbody>
                {
                    directores.map((director, index) =>
                        (
                            <Fila
                            key={director._id}
                            index={index}
                            director={director}
                            />
                        )
                    )
                }

            </tbody>
        </table>
  )
}

