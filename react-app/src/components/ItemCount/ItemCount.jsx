import { useState } from "react";

export const ItemCount = (props) => {

    const [valor, setValor] = useState(props.initial)

    function onAdd() {
        if (valor < props.stock) {
            setValor(parseInt(valor) + 1)
        }
    }
    function onSubstrack() {
        if (valor > 1){
            setValor(parseInt(valor)-1)

        }else{
            alert("La cantidad no puede ser menor a 1")
        }
    }
    return (
        <div >
            <button className="btn btn-primary" onClick={onSubstrack}>-</button>
            <input type="text" value={valor} />
            <button className="btn btn-primary" onClick={onAdd}>+</button>
        </div>
    )
}