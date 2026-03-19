
import styles from './card.module.css'
//Cada card representa un articulo
// Datos que necesita la card para mostrarse
interface CardProps {
  id: number
  title: string
  price: number
  category: string
  image: string
  // Funciones que se ejecutan al clickear los botones
  onQuickView: () => void //abre el modal con el detalle
  onAddToCart: () => void //agrega el producto al carrito
}

export default function Card({
  title,
  price,
  category,
  image,
  onQuickView,
  onAddToCart,
}: CardProps) {
  return (
    // article. para un item independiente dentro de una lista en este caso, lista de cards
    <article className={styles.card}>

      <img className={styles.image} src={image} alt={title}/>

      <div className={styles.body}> 
        <span className={styles.category}>{category}</span> 
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.footer}>
        <span className={styles.price}>${price}</span>
        <button className={styles.btnSecondary} onClick={onQuickView}>
          Vista rápida
        </button>
        <button className={styles.btnPrimary} onClick={onAddToCart}>
          Agregar al carrito
        </button>
      </div>

    </article>
  )
}