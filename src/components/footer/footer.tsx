import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Logo y descripción */}
      <div className={styles.column}>
        <h3 className={styles.logo}>SHOP</h3>
        <p className={styles.description}>
          Tienda online, encontra las mejores ofertas, y productos al mejor precio
        </p>
      </div>

      {/*Links de navegación */}
      <div className={styles.column}>
        <h4 className={styles.columnTitle}>Navegación</h4>
        <ul className={styles.list}>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Categorías</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>

      {/*Links de ayuda */}
      <div className={styles.column}>
        <h4 className={styles.columnTitle}>Ayuda</h4>
        <ul className={styles.list}>
          <li><a href="#">Preguntas frecuentes</a></li>
          <li><a href="#">Devoluciones</a></li>
          <li><a href="#">Términos y condiciones</a></li>
          <li><a href="#">Privacidad</a></li>
        </ul>
      </div>

      {/* Redes sociales */}
      <div className={styles.column}>
        <h4 className={styles.columnTitle}>Seguinos</h4>
        <div className={styles.socials}>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.bottom}>
        <p> Todos los derechos reservados-Copyright 2026</p>
      </div>

    </footer>
  )
}