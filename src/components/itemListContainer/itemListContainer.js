import {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { useParams} from 'react-router-dom'
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/FirebaseConfig"
import "./ItemLisContainer.css"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    
    const {categoriaId} = useParams()

    useEffect(() => {
        setLoading(true)
    
        const collectionRef = categoriaId
        ? query(collection(db,'productos'), where('categoria', '==', categoriaId))
        : collection(db, 'productos')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                

                return { id: doc.id, ...data}
            })
            setProductos(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
//         const asyncFunction = categoriaId ? getProductosByCategoria : getProductos
//         // si tengo categoriaId asyncFunction va a ser getProductosByCategoria si no lo tengo va a ser getProductos
//         // aca tendria resuelto el if
  
//         asyncFunction(categoriaId).then(response => {
//             setProductos(response)
//         }).catch(error => {
//             console.log(error)
//         }).finally(() => {
//             setLoading(false)
//         })
},[categoriaId])



    if(loading){
        return <h1>cargando productos...</h1>
    }


    return (
        <div className="containerList">
            <h2>bienvenidos</h2>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer