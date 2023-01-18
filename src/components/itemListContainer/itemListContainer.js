import {useState, useEffect} from "react"
import { getProductos, getProductosByCategoria, } from "../asyncMock"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    useEffect(() => {
        setLoading(true)
    
        const asyncFunction = categoriaId ? getProductosByCategoria : getProductos
        // si tengo categoriaId asyncFunction va a ser getProductosByCategoria si no lo tengo va a ser getProductos
        // aca tendria resuelto el if
  
        asyncFunction(categoriaId).then(response => {
            setProductos(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
},[categoriaId])

    if(loading){
        return <h1>cargando productos...</h1>
    }



    return (
        <div>
            <h2>bienvenidos</h2>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer