import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"

const ItemDetail = ({id, nombre, foto, precio, categoria, descrpcion, stock, }) =>{

    const [quantity, setQuantity] = useState(0)

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (count) => {
        console.log(`agregue al carrito ${count} ${nombre}`)

        setQuantity(parseInt(quantity))

        addItem({id, nombre, count, precio})
        //addItem (viene de CartContext).. agregar el item al carrito
    }

    return(
        <div className="container">
            <div className="card">

            <h4>{nombre}</h4>
            <p>{categoria}</p>
            <img src= {foto} alt={nombre}/>
            <p>descripcion del objeto</p>
            <p>$ {precio}</p>
            <div>
                {
                    isInCart(id) ? (
                        <Link to='/cart' className="botonTerminarCompra">terminar compra</Link>
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>                       
                    )
                }
            </div>
            </div>
        </div>
    )
}   

export default ItemDetail