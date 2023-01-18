import { Link,} from "react-router-dom"

const Item = ({nombre, foto, precio, id}) => {
    

    return (
        <div> 
            <h4>{nombre}</h4>
            <img src={foto} alt={nombre}/>
            <p>$ {precio}</p>
            <Link to={'/item/${id}'}>ver detalle</Link>
        </div>
    )
}
export default Item