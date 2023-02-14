import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import "./ItemCart.css"
const ItemCart = ({id, nombre, quantity, precio, count}) => {

    const { borrarItem} = useContext(CartContext)
    return(
        <article className="Cart">
            <h3>{nombre}</h3>
            <h3>cantidad {count}</h3>
            <h3>precio unidad: ${precio}</h3>
            <h3>subtotal: $ {precio * count}</h3>
            <button onClick={() => borrarItem(id)} className="botonBorrar">borrar</button>
        </article>
    )
}

export default ItemCart