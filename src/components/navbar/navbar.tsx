import styles from './navbar.module.css'

export default function Navbar() {
  return (
    // nav es la etiqueta semántica correcta para navegación
    <nav className={styles.nav}>
      <a href="#">Inicio</a>
      <a href="#">Categorías</a>
      <a href="#">Ofertas</a>
      <a href="#">Contacto</a>
    </nav>
  )
}