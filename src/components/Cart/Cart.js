import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
    const { cart } = useContext(CartContext)

    return(
        <div>
            <h1>estos son los productos</h1>
            <CartList cart={ cart }/>
            <Link to='/checkout' className="botonComprar">Realizar la compra</Link>
        </div>
    )
}

export default Cart