import React, { useState } from "react";

const Product = (propiedades) => {
    const [estaComprado, setEstaComprado] = useState(false)


    const [showBox, setShowBox] = useState(false)
    const handleAddToCart = () => {
        setEstaComprado(true)
    }


    const handleChangeVisibility = () => {
        setShowBox(!showBox)
    }


    console.log('me cargo')
    return (
        <div>
            {propiedades.favorito && <button>Quitar de favoritos</button>}
            <h2>{propiedades.nombre}</h2>
            <h3>Precio: ${propiedades.precio}</h3>
            {
                estaComprado
                ? <button>Quitar del carro</button>
                : <button onClick={handleAddToCart}>Agregar al carro</button>
            }
            {
                showBox && <div className="box"></div>
            }
            <button onClick={handleChangeVisibility}>{showBox ? 'Ocultar' : 'Mostrar'}</button>
        </div>
    )
}

export default Product;