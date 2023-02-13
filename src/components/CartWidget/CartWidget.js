import { Link } from "react-router-dom"

const CartWidget = ({ totalQuantity }) => {
    return (
        <Link to='/cart' className="navbar">
            <img className="img links" src="/imagenes/carritoImg.png" alt="nombre"/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget