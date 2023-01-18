import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <h1>bienvenido</h1>
            <div className="links">
                <Link to='/category/mouse' className="links">mouse</Link>
                <Link to='/category/teclado' className="links">teclados</Link>
                <Link to='/category/monitor' className="links">monitores</Link>

            </div>
        </nav>
    )
}
export default Navbar