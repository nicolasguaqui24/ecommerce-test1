import styles from './offer-banner.module.css'
/**
  Banner de cajas fijos
   */
  export default function OfferBanner(){
    return (
        <section className={styles.banner}>
          <div className={styles.item}>
            <img src="assets/images/sale1.png" alt="Publicidad 1" />
          </div>
          <div className={styles.item}>
            <img src="assets/images/sale1.png" alt="Publicidad 2" />
          </div>
        </section>
      )
    }