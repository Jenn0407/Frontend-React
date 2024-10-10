import React from 'react'
import Fila from './Fila'

export default function Tabla({ generos }) {
    return (
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Creación</th>
                </tr>
            </thead>
            <tbody>
                {
                    generos.map((genero, index) =>
                        (
                            <Fila
                            key={genero._id}
                            index={index}
                            genero={genero}
                            />
                        )
                    )
                }

            </tbody>
        </table>
    )
}
