import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, foto, precio, categoria, descrpcion, stock}) =>{
    return(
        <div>
            <h4>{nombre}</h4>
            <p>{categoria}</p>
            <img src= {foto} alt={nombre}/>
            <p>$ {precio}</p>
            <ItemCount stock={stock}/>
        </div>
    )
}   

export default ItemDetail