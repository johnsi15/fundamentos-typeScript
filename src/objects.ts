(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string
    createdAt: Date
    stock: number
    size?: Sizes
  }

  const products: Product[] = []; // solo para este ejemplo se usa -> any[]

  const createProduct = (data: Product) => {
    products.push(data)
  }

  createProduct({ title: 'P1', createdAt: new Date(), stock: 12 })
  createProduct({ title: 'P2', createdAt: new Date(), stock: 12, size: 'L' })
  console.log(products)

  // Otra forma de hacerlo
  const createProduct2 = ({ title, createdAt, stock }: Product) => {
    products.push({ title, createdAt, stock })
  }

  createProduct2({ title: 'P3', createdAt: new Date(), stock: 50, size: 'M' })
})();
