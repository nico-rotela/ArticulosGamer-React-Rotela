const productos = [
    { 
        
        "id":1,
        "stock": 15,
        "foto": "./public/imagenes/MouseRedragon.jpg",
        "nombre": "mouse Redragon Gainer M610",
        "precio": 2500,
        "categoria": "mouse"
    },
    {
        "id":2,
        "stock": 16,
        "foto": "./public/imagenes/MouseRedragon.jpg",
        "nombre": "teclado Redragon Kumara k552B",
        "precio": 7500,
        "categoria": "teclado"
    },
    {
        "id":3, 
        "stock": 5,
        "foto": "./public/imagenes/MouseRedragon.jpg",
        "nombre": "monitor Asus VP228HE",
        "precio": 43000,
        "categoria": "monitor",
    }
]

export const getProductos = (categoriaId) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve (productos)
        },500)
    })
}

export const getProductosByCategoria = (categoriaId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoriaId))
        },500)
    }) 
}

export const getProductosById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(productos.find(prod => prod.id === id))
        },500)
    })
}