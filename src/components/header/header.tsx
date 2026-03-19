import styles from './header.module.css'

/**
   Header contiene el Logo, Buscador y Carrito
 */
interface HeaderProps{
    totalItems: number
    // la función que se ejecuta cada vez que el usuario escribe
  onSearch: (query: string) => void
}

export default function Header({ totalItems, onSearch  }: HeaderProps) {
    return (
      <header className={styles.header}>
  
        {/* Logo */}
        <div className={styles.logo}>SHOP</div>
  
        {/* Buscador */}
        <div className={styles.buscador} role="search">
        <input type="text" placeholder="Buscar productos..." onChange={e => onSearch(e.target.value)}/>
          <button aria-label="Buscar">🔍</button>
        </div>
  
        {/* Carrito */}
        <button className={styles.carrito} aria-label="Carrito de compras">
          <svg viewBox="0 0 24 24" width="28" height="28">
            <path
              d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
              stroke="#fff"
              strokeWidth="1.8"
              fill="none"
              strokeLinejoin="round"
            />
            <line x1="3" y1="6" x2="21" y2="6" stroke="#fff" strokeWidth="1.8" />
            <path
              d="M16 10a4 4 0 01-8 0"
              stroke="#fff"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </button>
  
      </header>
    )
  }