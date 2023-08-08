import { addProduct, calcStok, products } from "./product.service";

addProduct({ name: 'P1', createdAt: new Date(), stock: 12 })
addProduct({ name: 'P2', createdAt: new Date(), stock: 3, size: 'L' })

console.log(products)

const resTotal = calcStok()
console.log(resTotal)

