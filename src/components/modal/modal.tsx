import { useEffect } from 'react'
import styles from './modal.module.css'
import type { Product } from '../../hooks/use-product'

interface ModalProps {
  product: Product | null  // null cuando el modal está cerrado
  onClose: () => void
  onAddToCart: (product: Product) => void
}

export default function Modal({ product, onClose, onAddToCart }: ModalProps) {

  // Cierra el modal al presionar ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    // Limpiamos el evento cuando el modal se desmonta
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Si no hay producto seleccionado no renderiza nada
  if (!product) return null

  return (
    // al clickear afuera del modal, se cierra el modal
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>

      <div className={styles.modal}>

        {/* Botón cerrar */}
        <button className={styles.close} onClick={onClose}>✕</button>

        {/* Imagen del producto */}
        <img
          className={styles.image}
          src={product.image}
          alt={product.title}
        />

        {/* Detalle del producto */}
        <div className={styles.body}>
          <span className={styles.category}>{product.category}</span>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price}>${product.price}</p>
          <button
            className={styles.btnAdd}
    // agrega al carrito y cierra el modal

            onClick={() => {
              onAddToCart(product)
              onClose()
            }}
          >
            Agregar al carrito
          </button>
        </div>

      </div>
    </div>
  )
}