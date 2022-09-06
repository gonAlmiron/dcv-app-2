import {useEffect, useState} from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    const {itemId} = useParams()

    console.log(item)
    console.log(itemId)

    useEffect(() => {
        pedirDatos()
        .then((res) => {
            setItem(res.find((prod) => prod.id === Number(itemId)))
        })
        .catch(err => console.log(err))
    }, [])

    return (

        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer

