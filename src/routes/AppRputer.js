import { Routes, Route} from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Cart from '../components/Cart/Cart'
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productoId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    )
}

export default AppRouter