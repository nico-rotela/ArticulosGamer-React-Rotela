import { useState, createContext } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (producToAdd) => {
        if(!isInCart(producToAdd.id)){
            setCart(prev => [...prev, producToAdd])
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const borrarItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }
    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity 
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()


    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, borrarItem }}>
            {children}
        </CartContext.Provider>
    )
}

