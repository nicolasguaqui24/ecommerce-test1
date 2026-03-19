import { useState } from 'react'
import type { Product } from './use-product'
import type { ToastItem } from '../components/toast/toast'

// Contador para cada toast, genera id unico para cada uno
let nextId = 0

//Hook maneja las notificaciones de articulo +1
export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([])
    
  
  // Agrega toast al array, sin perder los anteriores (si los hay)
  function showToast(product: Product) {
    const id = nextId++
    setToasts(prev => [...prev, { id, product }])
  }

  
  function removeToast(id: number) {
    // Elimina toast por id.

    setToasts(prev => prev.filter(t => t.id !== id))
  }

  return { toasts, showToast, removeToast }
}