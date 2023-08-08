(() => {
  const login = (data: { email: string, password: string }) => {
    console.log(data.email, data.password)
  }

  login({ email: 'ja@gmail.com', password: '214324324' })

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = []; // solo para este ejemplo se usa -> any[]

  const createProduct = (data: { title: string, createdAt: Date, stock: number, size?: Sizes }) => {
    products.push(data)
  }

  createProduct({ title: 'P1', createdAt: new Date(), stock: 12 })
  console.log(products)
})();
