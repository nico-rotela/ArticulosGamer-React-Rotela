import { Link} from "react-router-dom"
import "./item.css"

const Item = ({nombre, foto, precio, id}) => {
    

    return (
        <div className="container"> 
        <div className="card">

            <h4>{nombre}</h4>
            <img src={foto} alt={nombre}/>
            <p>$ {precio}</p>
            <p>descripcion del objeto</p>
            <Link to={`/detail/${id}`}>ver detalle</Link>
        </div>
        </div>
    )
}
export default Item