import { Link } from "react-router-dom"

const CartWidget = ({ totalQuantity }) => {
    return (
        <Link to='/cart' className="links botonCarrito">
            <img className="img_links" src="/imagenes/carritoImg.png" alt="nombre"/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget