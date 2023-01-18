import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import { getProductosById } from "../asyncMock"
import ItemDetail from "../Itemdetail/Itemdetail"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    
    const { productoId } = useParams()

    useEffect(() => {
        getProductosById(productoId)
            .then(Response => {
                setProducto(Response)
            })
                    
    },[productoId])



return(
        <div>
            <h1>detalle de compra</h1>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer