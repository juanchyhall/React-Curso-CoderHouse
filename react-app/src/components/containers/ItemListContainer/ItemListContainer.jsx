import { ItemList } from "../../ItemList/ItemList"
import React, { useEffect, useState } from "react"

export const ItemListConteiner = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect( ()=>{
        fetch("./json/products.json")
        .then(response => response.json())
        .then(data =>{
            setProducts(data)
        })
    }, [])
    return (
        <div className="text-right" >
            <h1 className="text-center">{greeting}</h1>
            <div className="container">
                <ItemList products={products} />

            </div>
        </div>
    )
}