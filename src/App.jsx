import React from 'react'
import { Archivo, Footer, Header, Product } from './components'

function App() {
  const saludar = async( nombre ) => {
    alert('Hola ' + nombre)
    try {
      await navigator.clipboard.writeText('Nunca des click a un boton sin saber que hace')
    } catch (error) {
      console.error(error)
  }
}
const handleCopyText = (evento) => {
  evento.preventDefault()
}

const archivos = [
  {
    tipo: 'archivo',
    peso: '3kb',
    nombre: 'index',
    extension: 'html',
    creadoEn: '2023/08/12',
    id: 2
  },
  {
    tipo: 'carpeta',
    peso: '3mb',
    nombre: 'Components',
    extension: '',
    creadoEn: '2025/08/12',
    id: 1
  },
]

const handlePickAColor = async (color) => {
  try {
    await navigator.clipboard.writeText(color)
  } catch (error) {
    console.error('Operacion invalida')
  }
  alert('Has seleccionado el color: ' + color)
}
return (
<div >
      <button onClick={saludar}>Click me</button>
      <button onClick={() => alert('hola 2')}>click me 2</button>
      <button onClick={() => saludar('pedro')}>Click me</button>
      <p onCopy={handleCopyText}>aaqaaaa</p>

      <button onClick={() => handlePickAColor("Verde")}>Verde</button>
      <button onClick={() => handlePickAColor("Rojo")}>Rojo</button>
      <button onClick={() => handlePickAColor("Azul")}>Azul</button>

      {archivos.map((archivo) => (
        <Archivo archivo={archivo} key={archivo.id}/>
      ))}

      <Product  nombre={'tv samsung 80"'} precio={800} favorito={false}/>
    </div>
  )
}

export default App
