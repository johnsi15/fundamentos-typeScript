(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProduct(title: string, createdAt: Date, stock: number, size: Sizes) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const res = createProduct('P1', new Date(), 12, 'S');
  console.log(res)


  const createProductV2 = ({ title, createdAt, stock, size }: { title: string, createdAt: Date, stock: number, size?: Sizes }) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const res2 = createProductV2({ title: 'P1', createdAt: new Date(), stock: 12 })
  console.log(res2)
  console.log(res2.title)

})();
