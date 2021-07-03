import React from 'react'
import "../ItemDetail/ItemDetail.css"

export const ItemDetail = ({ details }) => {


  return (

    <div>
      <h2 className="text-center">Listado de Celulares</h2>
      <div className="card text-center container">
        {details.map((detail) =>

          <div className="card-header">
            <h3>{detail.title}</h3>
            <img src={detail.picture} alt="" />
            <h3>{detail.price.currency} ${detail.price.amount},{detail.price.decimals}</h3>
            <button className="btn-warning">Comprar</button>
          </div>
        )}
      </div>
    </div>
  )
}