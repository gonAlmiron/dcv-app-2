const ItemDetail = ( {producto} ) => {
    return (
        <div className="container">
                <img src={producto.img}/>
                <h4>{producto.nombre}</h4>
                <p>{producto.precio}</p>
                <small>Stock disponible: {producto.stock}</small>
                <p>{producto.descripcion}</p>
                <a className="btn btn-primary my-2">Ver más</a>
        </div>
    )
}

export default ItemDetail

// const ItemDetail = ({item}) => {

//     return (
//         <div className="container my-5">
//             <img src={item.img}/>
//             <h3>{item.nombre}</h3>
//             <p>{item.desc}</p>
//             <p>{item.category}</p>
//             <h4>{item.precio}</h4>
//         </div>
//     )
// }