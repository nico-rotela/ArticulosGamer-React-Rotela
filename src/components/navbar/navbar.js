import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
                <h1 className="titulo">ArticulosGamer</h1>
            </Link>
            
            <div className="categorias">
                <Link to={`/categoria/mouse`} className="links">mouse</Link>
                <Link to={`/categoria/teclado`} className="links">teclados</Link>
                <Link to={`/categoria/monitor`} className="links">monitores</Link>

            </div>
        </nav>
    )
}
export default Navbar