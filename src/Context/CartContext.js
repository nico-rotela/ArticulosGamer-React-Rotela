import { useState, createContext } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (producToAdd) => {
        if(!isInCart(producToAdd.id)){ //si no esta en el carrito? ...
            setCart(prev => [...prev, producToAdd]) //setear cart.. agregando un producto sumandolo al previo
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    //some devuelve(true o false) en un array 
    }

    const borrarItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.count 
        })
        
        return accu
    }

    const getTotal = () =>{
        let total = 0

        cart.forEach(prod => {
            total += prod.count * prod.precio
        })
        
        return total
    }

    const totalQuantity = getTotalQuantity()

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, borrarItem, isInCart, total, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

