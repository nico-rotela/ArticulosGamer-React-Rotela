import {useState} from 'react'

const ItemCount = ({ stock =0, initial = 1, onAdd}) =>{
    const [count, setCount] = useState (initial)

    const increment = () =>{
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }

    const decrement = () =>{
        if(count >1 ){
            setCount(prev => prev -1)
        }
    }


    return(
        <div>
            <div>
                <button onClick={decrement}>-</button>
                <h3>{count}</h3>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>  
            </div>
        </div>
    )
}

export default ItemCount

