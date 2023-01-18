import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import { getProductosById } from "../asyncMock"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    
    const { productoId } = useParams()

    useEffect(() => {
        getProductosById(productoId)
            .then(producto => {
                setProducto(producto)
            })
            .catch(error => {
                console.log(error)
            })
    },[productoId])


    return(
        <div>
            <h1>detalle de compra</h1>
            <h2>{producto?.nombre}</h2>
        </div>
    )
}

export default ItemDetailContainer