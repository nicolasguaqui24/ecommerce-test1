import styles from './grid.module.css'
import Card from '../card/card'
import type { Product } from '../../hooks/use-product'

// Recibe los productos y las funciones de paginación desde App.tsx
interface ProductGridProps {
  products: Product[]
  currentPage: number
  totalPages: number
  loading: boolean
  error: boolean
  onQuickView: (product: Product) => void
  onAddToCart: (product: Product) => void
  onNext: () => void
  onPrev: () => void
}

// recibe todo desde App.tsx a través de props
export default function ProductGrid({
  products,
  currentPage,
  totalPages,
  loading,
  error,
  onQuickView,
  onAddToCart,
  onNext,
  onPrev,
}: ProductGridProps) {

  // Estados de carga y error, es decir si ya esta cargado o hay error en la carga, no renderiza
  if (loading) 
  return <p>Cargando productos...</p>
  if (error) 
  return <p>Error al cargar los productos.</p>

  return (
    <section className={styles.wrapper}>

      <h2 className={styles.title}>Productos Destacados</h2>

      {/* Grilla de cards 
      products.map recorre el array de productos y por cada producto crea una card
      ...product, termina de completar las propiedades del producto faltantes a la card
                    */}
      <div className={styles.grid}>
        
        {products.map(product => (
          <Card
            key={product.id}
            {...product}
            onQuickView={() => onQuickView(product)}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>

      {/* Paginación 
      Boton "Anterior", no se puede clickear cuando es ==0
      Al iniciar en 0, la pagina muestra visualmente 0/3 paginas, por lo que debe arrancar en 1 (currenPage+1)
      Boton "Siguiente", no se puede clickear cuando se esta en la ultima pagina

      */}
      <div className={styles.pagination}>
        
        <button className={styles.btnPagination} onClick={onPrev} disabled={currentPage === 0}>
          Anterior
        </button>

        <span className={styles.pageIndicator}>
          {currentPage + 1} / {totalPages}  
        </span>

        <button className={styles.btnPagination} onClick={onNext} disabled={currentPage >= totalPages - 1}>
          Siguiente →
        </button>

      </div>

    </section>
  )
}