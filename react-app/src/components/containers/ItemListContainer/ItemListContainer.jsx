import { ItemList } from "../../ItemList/ItemList"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ItemListConteiner = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const waitForData = async () => {
            const response = await fetch("./json/products.json")
            const json = await response.json()
            let aux = id? json.filter(element => element.category === id): json;
            
            setProducts(aux)
            console.log(aux)
        };
        waitForData();

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