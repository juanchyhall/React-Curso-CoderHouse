import { useState } from "react";

export const ItemCount = ({stock,initial}) => {

    const [valor, setValor] = useState(initial)

    function onAdd() {
        if (valor < stock) {
            setValor(parseInt(valor) + 1)
        }
    }
    function onSubstrack() {
        if (valor > 1) {
            setValor(parseInt(valor) - 1)

        } else {
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