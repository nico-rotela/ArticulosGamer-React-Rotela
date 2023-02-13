import { useState } from "react"

const Formulario = ({ crateOrder }) => {
 
    const [form, setForm] = useState({
        nombre:'',
        apellido:'',
        telefono:'',
        email:'',
    })
    
    
    const manejarElInput = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const enviarForm = (event) => {
        event.preventDefault()
        console.log(form)
        crateOrder(form)
    }

    
    return (
        <div>
            <form onSubmit={enviarForm}>
                <input 
                    placeholder="ingrese su nombre"
                    type="text"
                    name="nombre"
                    onChange={manejarElInput}
                />
                <input onSubmit={enviarForm}
                    placeholder="ingrese su apellido"
                    type="text"
                    name="apellido"
                    onChange={manejarElInput}
                />
                <input onSubmit={enviarForm}
                    placeholder="ingrese su telefono"
                    type="text"
                    name="telefono"
                    onChange={manejarElInput}
                />
                <input onSubmit={enviarForm}
                    placeholder="ingrese su email"
                    type="text"
                    name="email"
                    onChange={manejarElInput}
                />
                <button type="submit" onClick={enviarForm}>generar orden con formulario</button>
            </form>
        </div>
        
    )
}

export default Formulario

