import React, { useEffect, useState } from 'react'
import { crearProductora, consultarProductoras } from '../../Servicios/Productoraservicio'
import Modal from './Modal'
import Cargando from './Cargando'
import Tabla from './Tabla'

export default function Productoras() {
  const [productoras, setProductoras] = useState([])
  const [cargando, setCargando] = useState(false)
  const [productora, setProductora] = useState({
    nombre: '',
    slogan: '',
    descripcion: ''
  })
  useEffect (() => {
    listarProductoras()
  },[])

  const listarProductoras = async () => {
    setCargando(true)
    try {
      const { data } = await consultarProductoras()
      setProductoras(data)
      setCargando(false)      
    } catch(e) {
      console.log(e)
      setCargando(false)
    }
  }
  const guardar = async () => {
    setCargando(true)
    try {
      await crearProductora(productora)
      listarProductoras()
      clearProductora()
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }
  const handleChange = (e) => {   
    setProductora({
      ...productora,
      [e.target.name] : e.target.value
    })
  }
  const clearProductora = () => {
    console.log('limpiar')
    setProductora({
      nombre: '',
      slogan: '',
      descripcion: ''
    })
  }

  return (
    <>
      <Modal
        productora={productora}
        handleChange={handleChange}
        guardar={guardar}
        clearProductora={clearProductora}
      />
      <h3>Productoras</h3>
      <button onClick={clearProductora} type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo</button>
      {
        cargando ? (
          <Cargando />
        ) : ''
      }

      <Tabla 
        productoras={productoras}
      />
    </>  
  )
}