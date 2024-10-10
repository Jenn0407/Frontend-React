import React from 'react'
import Fila from './Fila'

export default function Tabla({ productoras }) {
  return (<table className="table table-dark table-hover">
    <thead>
        <tr>
        <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Slogan</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Creación</th>
        </tr>
    </thead>
    <tbody>
        {
            productoras.map((productora, index) =>
                (
                    <Fila
                    key={productora._id}
                    index={index}
                    productora={productora}
                    />
                )
            )
        }

    </tbody>
</table>
)
}
