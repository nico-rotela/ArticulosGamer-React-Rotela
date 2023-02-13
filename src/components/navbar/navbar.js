import {Link} from "react-router-dom"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const Navbar = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <nav className="navbar">
            <Link to='/'>
                <h1 className="titulo">ArticulosGamer</h1>
            </Link>
            
            <div className="categorias">
                <Link to={`/categoria/mouse`} className="links">mouse</Link>
                <Link to={`/categoria/teclado`} className="links">teclados</Link>
                <Link to={`/categoria/monitor`} className="links">monitores</Link>
                <CartWidget totalQuantity={totalQuantity}/>
            </div>
        </nav>
    )
}
export default Navbar