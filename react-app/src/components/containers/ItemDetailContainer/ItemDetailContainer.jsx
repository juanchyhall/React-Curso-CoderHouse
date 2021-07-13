import { ItemDetail } from "../../ItemDetail/ItemDetail"
import React, { useEffect, useState } from "react"

export const ItemDetailContainer = (props ) => {

    const [detail, setDetails] = useState([])

    useEffect( ()=>{
        fetch("https://challenge-meli-backend.herokuapp.com/api/items?q=iphone")
        .then(response => response.json())
        .then(data =>{
            setDetails(data.items)
        })
    }, [])
    return (
        <div className="text-right" >
            <div className="container">
                <ItemDetail details={detail} key={detail.id} />

            </div>
        </div>
    )
}
