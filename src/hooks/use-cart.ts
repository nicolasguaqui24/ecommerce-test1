import { useState } from 'react'
import type { Product } from './use-product'

// Estructura del item carrito
export type CartItem = {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}
// Lee el carrito guardado en localStorage, si no hay nada, devuelve un array vacio
function getStoredCart(): CartItem[] {
  return JSON.parse(localStorage.getItem('cart') || '[]')
}

//* Hook que maneja el carrito, persiste en localStorage al recargar la pagina, 
//* Para resetear el contador:
//Click derecho "inspeccionar" Devtools -> Aplication -> Almacenamiento local(loscalStorage) -> "borrar".
export function useCart() {
  const [cart, setCart] = useState<CartItem[]>(getStoredCart)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  function addToCart(product: Product) {
    setCart(prev => {
  //busca Si el producto ya existe en el carrito
      const existing = prev.find(item => item.id === product.id)
      const updated = existing
  //Si existe el producto, aumenta +1    
        ? prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }]

 // Guardamos el carrito actualizado en localStorage

        localStorage.setItem('cart', JSON.stringify(updated))
      return updated
    })
  }
  return { cart, totalItems, addToCart }

}