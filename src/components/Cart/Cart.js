import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart } = useContext(CartContext)

    return(
        <div>
            <h1>estos son los productos</h1>
            <Link to='/checkout'>Checkout</Link>
            <CartList cart={ cart }/>
        </div>
    )
}

export default Cart