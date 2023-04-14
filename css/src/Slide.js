import React from 'react'
import styles from "./Slide.module.css"

const Slide = ({slides}) => {
    const [active, setActive] = React.useState(0)
  return (
    <section className={styles.container}>
        <div className={styles.content}>
                {slides.map((slide) => (
                <div key={slide.id} className={styles.item}>{slide.texto}</div>
            ))}
        </div>
        <nav className={styles.nav}>
            <button>Anterior</button>
            <button>Proximo</button>
        </nav>
      
    </section>
  )
}

export default Slide
