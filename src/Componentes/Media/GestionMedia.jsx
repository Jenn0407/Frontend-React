import React, { useEffect, useState } from 'react'
import { crearGestionMedia, consultarGestionMedias } from '../../Servicios/GestionMediaservicio'
import Modal from './Modal'
import Cargando from './Cargando'
import Tabla from './Tabla'


export default function GestionMedia() {
    const [medias, setMedias] = useState([])
  const [cargando, setCargando] = useState(false)
  const [media, setMedia] = useState({
    titulo : '',        
    sinopsis : '',
    URL : '',
    portada : '', 
    genero : '',
    director : '',
    productora : '',
    tipo : ''
  })
  useEffect (() => {
    listarMedias()
  },[])

  const listarMedias = async () => {
    setCargando(true)
    try {
      const { data } = await consultarGestionMedias()
      setMedias(data)
      setCargando(false)      
    } catch(e) {
      console.log(e)
      setCargando(false)
    }
  }
  const guardar = async () => {
    setCargando(true)
    try {
      await crearGestionMedia(media)
      listarMedias()
      clearMedia()
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const handleChange = (e) => {   
    setMedia({
      ...media,
      [e.target.name] : e.target.value
    })
  }

  const clearMedia = () => {
    console.log('limpiar')
    setMedia({
    titulo : '',        
    sinopsis : '',
    URL : '',
    portada : '', 
    genero : '',
    director : '',
    productora : '',
    tipo : ''
    })
  }
  return (
<>
      <Modal
        media={media}
        handleChange={handleChange}
        guardar={guardar}
        clearMedia={clearMedia}
      />
      <h3>Medias</h3>
      <button onClick={clearMedia} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo</button>
      {
        cargando ? (
          <Cargando />
        ) : ''
      }

      <Tabla 
        medias={medias}
      />
    </>
  )
}