import React, { useEffect, useState } from 'react'
import { createDirector, consultarDirectores } from '../../Servicios/Directorservicio'
import Modal from './Modal'
import Cargando from './Cargando'
import Tabla from './Tabla'

export default function Directores() {
  const [directores, setDirectores] = useState([])
  const [cargando, setCargando] = useState(false)
  const [director, setDirector] = useState({
    nombre: '',
    documentoIdentidad: ''    
  })

  useEffect(() => {
    listarDirectores()
  }, [])

  const listarDirectores = async () => {
    setCargando(true)
    try {
      const { data } = await consultarDirectores()
      setDirectores(data)
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }
  const guardar = async () => {
    setCargando(true)
    try {      
      await createDirector(director)      
      listarDirectores()
      clearDirector()
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const handleChange = (e) => {    
       setDirector({
      ...director,
      [e.target.name] : e.target.value
    })
  }
  const clearDirector = () => {
    console.log('limpiar')
    setDirector({
      nombre: '',
      documentoIdentidad: ''
      
    })
  }
  return (
    <>
      <Modal       
        director={director}
        handleChange={handleChange}
        guardar={guardar}
        clearDirector={clearDirector}
      />
      <h3>Directores</h3>
      <button onClick={clearDirector} type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo</button>
      {
        cargando ? (
          <Cargando />
        ) : ''
      }

      <Tabla
        directores={directores}
      />
    
    </>
  )
}
