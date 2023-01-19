import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, foto, precio, categoria, descrpcion, stock}) =>{
    return(
        <div className="container">
            <div className="card">

            <h4>{nombre}</h4>
            <p>{categoria}</p>
            <img src= {foto} alt={nombre}/>
            <p>descripcion del objeto</p>
            <p>$ {precio}</p>
            <ItemCount stock={stock}/>
            </div>
        </div>
    )
}   

export default ItemDetail