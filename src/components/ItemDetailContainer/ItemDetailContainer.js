import "./ItemDetailContainer.css"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
// import { getProductosById } from "../asyncMock"
import { getDoc, doc  } from 'firebase/firestore'
import { db } from "../../services/firebase/FirebaseConfig"
import ItemDetail from "../Itemdetail/Itemdetail"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    
    const { productoId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', productoId)

        getDoc(docRef).then(response =>{
            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProducto(productAdapted)
        }).catch(error =>{
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        // getProductosById(productoId)
        //     .then(Response => {
        //         setProducto(Response)
        //     })
                    
    },[productoId])

    if(loading){
        return <h1>cargando productos...</h1>
    }

return(
        <div>
            <h1>detalle de compra</h1>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer