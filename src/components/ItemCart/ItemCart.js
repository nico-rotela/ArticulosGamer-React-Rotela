import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import "./ItemCart.css"
const ItemCart = ({id, nombre, quantity, precio}) => {

    const { borrarItem} = useContext(CartContext)
    return(
        <article className="Cart">
            <h1>{nombre}</h1>
            <h3>cantidad {quantity}</h3>
            <h3>precio unidad: ${precio}</h3>
            <h3>subtotal: $ {precio * quantity}</h3>
            <button onClick={() => borrarItem(id)}>borrar</button>
        </article>
    )
}

export default ItemCart