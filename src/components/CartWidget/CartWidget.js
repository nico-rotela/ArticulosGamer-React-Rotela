import { Link } from "react-router-dom"

const CartWidget = ({ quantity }) => {
    return (
        <Link to='/cart' className="navbar">
            <img className="img links" src="/imagenes/ImgCarrito.png" alt="nombre"/>
            { quantity }
        </Link>
    )
}

export default CartWidget