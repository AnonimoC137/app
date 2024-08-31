import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(
      false
    ); /*seta o esqueleto para false, assim ele some da tela quando a imagem carregar*/
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} src={props.src} className={styles.img} alt={alt} {...props} />
      
    </div>
  );
};
/* onLoad é um metodo da img que inicia sempre que a imagem é totalmente carregada*/
export default Image;
