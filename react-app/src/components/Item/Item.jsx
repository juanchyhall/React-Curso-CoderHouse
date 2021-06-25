import React from 'react'
import "../Item/Item.css"
import {ItemCount} from '../ItemCount/ItemCount.jsx'
export const Item=({product})=> {
    return (
 
        <div className="container">
            <div className="text-center" >
            <h3 className="h3">{product.title}</h3>
            <img src={product.pictureUrl} alt="" />
            <h5>{product.description}</h5>
            <h3>{product.price}</h3>
            <ItemCount stock={product.stock}  initial="1"/>
            </div>
        </div>
    )
}


