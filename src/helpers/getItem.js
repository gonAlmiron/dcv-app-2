import { stock } from "../data/data"


export const getItem = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000)
    })
}