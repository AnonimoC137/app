import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router';

const UserHeader = () => {
  const [titulo, setTitulo] = React.useState('');
  const localiza = useLocation();

  React.useEffect(() => {
    const { pathname } = localiza;

    switch (pathname) {
      case '/conta/postar':
        setTitulo('Poste sua foto');
        break;
      case '/conta/estatisticas':
        setTitulo('Estatísticas');
        break;
      default:
        setTitulo('Minha Conta');
    }
  }, [localiza]);

  return (
    <header className={styles.header}>
      <h1 className="title">{titulo}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
