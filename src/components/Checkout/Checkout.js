import { collection, documentId, query, where, getDocs, addDoc, writeBatch } from "firebase/firestore"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../services/firebase/FirebaseConfig"
import Formulario from "../Formulario/Formulario"



const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const crateOrder = async ({nombre, apellido, telefono, email}) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    nombre,
                    apellido,
                    email,
                    telefono,
                },
                items: cart,
                total
            }
            
            
            const batch = writeBatch(db)
    
            const ids = cart.map(prod => prod.id)
            
            const productosRef = query(collection(db, 'productos'), where(documentId(), 'in', ids))
    
    
            const productosAddedToCartFromFirestore = await getDocs(productosRef) //llamada asyncrona(await)
            const { docs } = productosAddedToCartFromFirestore
            
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.count
                
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                }else{
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(orderRef, objOrder)
                
                const { id } = orderAdded

                setOrderId(id)

                clearCart()

                setTimeout(() =>{
                    navigate('/')
                },4000)

                console.log(id)
            }else {
                console.log('no hay stock de los productos')
            }
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
        
    if(loading) {
        return <h1>Generando orden...</h1>
    }



    if(orderId) {
        return(
            <div>
                <h1>El id de su compra es: {orderId}</h1>
            </div>
        )
    }


    return (
        <div>
            <h1>checkout</h1>
            {/* <button onClick={crateOrder}>generar orden</button> */}
            <Formulario crateOrder={crateOrder}/>
        </div>
    )
} 

export default Checkout