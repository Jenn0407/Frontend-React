import React from 'react'

export default function Fila({media,index}) {
  return (
    <tr key={media._id}>
        <th scope="row">{index + 1}</th>              
        <td>{media.titulo}</td>
        <td>{media.sinopsis}</td>
        <td>{media.URL}</td>
        <td>{media.portada}</td>
        <td>{media.genero?.nombre || 'Sin género'}</td>
        <td>{media.director?.nombre || 'Sin director'}</td>
        <td>{media.productora?.nombre || 'Sin productora'}</td>
        <td>{media.tipo?.nombre || 'Sin tipo'}</td>
        <td>{media.estado ? 'Activo' : 'Inactivo'}</td>
        <td>{media.estreno}</td>        
        <td><button type="button" className="btn btn-outline-dark"></button></td>
    </tr>
  )
}

     