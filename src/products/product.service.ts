import { Product } from "./product.model";

export const products: Product[] = []; // solo para este ejemplo se usa -> any[]

export const addProduct = (data: Product) => {
  products.push(data)
}

export const calcStok = () => {
  let total = 0
  products.forEach(item => {
    total += item.stock
  })

  return total
}

