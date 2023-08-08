export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  name: string // click derecho cambiar el nombre del simbolo o la tecla f2 -> cambia el nombre en todos los files
  createdAt: Date
  stock: number
  size?: Sizes
}
