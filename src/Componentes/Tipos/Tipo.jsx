import React, { useEffect, useState } from 'react'
import { crearTipo, consultarTipos } from '../../Servicios/Tiposervicio'
import Modal from './Modal'
import Cargando from './Cargando'
import Tabla from './Tabla'

export default function Tipos() {
  const [tipos, setTipos] = useState([])
  const [cargando, setCargando] = useState(false)
  const [tipo, setTipo] = useState({
    nombre: '',
    descripcion: ''
  })
  useEffect (() => {
    listarTipos()
  },[])

  const listarTipos = async () => {
    setCargando(true)
    try {
      const { data } = await consultarTipos()
      setTipos(data)
      setCargando(false)
    } catch(e) {
      console.log(e)
      setCargando(false)
    }
  }
  const guardar = async () => {
    setCargando(true)
    try {
      await crearTipo(tipo)
      listarTipos()
      clearTipo()
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const handleChange = (e) => {   
    setTipo({
      ...tipo,
      [e.target.name] : e.target.value
    })
  }

  const clearTipo = () => {
    console.log('limpiar')
    setTipo({
      nombre: '',
      descripcion: ''
    })
  }
  return (
<>
      <Modal
        tipo={tipo}
        handleChange={handleChange}
        guardar={guardar}
        clearTipo={clearTipo}
      />
      <h3>Tipos</h3>
      <button onClick={clearTipo} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo</button>
      {
        cargando ? (
          <Cargando />
        ) : ''
      }

      <Tabla
        tipos={tipos}
      />
    </>
  )
}