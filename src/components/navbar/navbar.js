import "./navbar.css"
const navbar = () => {
    return (
        <nav className="Navbar">
            <h1>articulosGamer</h1>
            <div className="BotonNav">
                <button className="boton">inicio</button>
                <button className="boton">productos</button>
                <button className="boton">contacto</button>
            </div>
        </nav>
    )
}

export default navbar
