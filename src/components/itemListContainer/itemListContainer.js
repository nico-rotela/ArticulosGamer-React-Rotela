import {useState, useEffect} from "react"
import { getProductos, getProductosByCategoria, getProductosByCategory } from "../asyncMock"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const {categoriaId} = useParams()

    useEffect(() => {
        const asyncFunction = categoriaId ? getProductosByCategoria : getProductos

        asyncFunction(categoriaId)
            .then(productos => {
                setProductos(productos)
            })
            .catch(error =>{
                console.log(error)
            })
    },[categoriaId])



    return (
        <div>
            <h1>bienvenidos</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer