import { useEffect } from 'react'
import styles from './toast.module.css'
import type { Product } from '../../hooks/use-product'

// Estructura de un toast individual
export type ToastItem = {
  id: number
  product: Product
}

// Props del contenedor de toasts
interface ToastContainerProps {
  toasts: ToastItem[]
  onRemove: (id: number) => void
}

// Contenedor — renderiza la lista de toasts
export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className={styles.container}>
      {toasts.map(t => (
        <Toast key={t.id} product={t.product} onRemove={() => onRemove(t.id)} />
      ))}
    </div>
  )
}

// Props de un toast individual
interface ToastProps {
  product: Product
  onRemove: () => void
}

// Toast individual — se elimina solo después de 3 segundos
function Toast({ product, onRemove }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onRemove, 3000)
    // Limpiamos el timer si el componente se desmonta antes
    return () => clearTimeout(timer)
  }, [onRemove])

  return (
    <div className={styles.toast}>
      <img
        className={styles.image}
        src={product.image}
        alt={product.title}
      />
      <span className={styles.title}>{product.title}</span>
      <span className={styles.price}>${product.price}</span>
    </div>
  )
}