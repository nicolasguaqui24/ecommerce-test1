import styles from './banner.module.css'

//Banner, sin logica, solo imagen presentacion.
export default function Banner() {
  return (
    
    <section className={styles.Banner}>
      <img src="assets/images/baner1.jpg" alt="Banner principal" />
    </section>
  )
}