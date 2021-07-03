import React from 'react'
import "../Item/Item.css"
import {ItemCount} from '../ItemCount/ItemCount.jsx'
import {CardWidgetComponent} from '../cardwidget/CardWidget.jsx'
export const Item=({product})=> {
    return (
 
       
        <div className="card text-center container-dark bg-dark">
        <div className="card-header">
          {product.title}
        </div>
        <div className="card-body">
        <img src={product.pictureUrl} alt="" />
          <h5 className="card-title">{product.price}</h5>
            <p>{product.description}</p>
            <ItemCount stock={product.stock}  initial="1"/>
          <p></p>
          <a className="#" className="btn btn-primary">Agregar al<CardWidgetComponent/></a>
        </div>
      </div>
    )
}


