import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('( max-width: 40rem )');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          } `}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink
          to="/conta"
          end
          style={({ isActive }) => ({
            background: isActive ? 'white' : '',
            boxShadow: isActive ? '0 0 0 3px #fea' : '',
            borderColor: isActive ? '#fb1' : '',
            color: isActive ? '#fb1' : 'black',
          })}
        >
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink
          to="/conta/estatisticas"
          style={({ isActive }) => ({
            background: isActive ? 'white' : '',
            boxShadow: isActive ? '0 0 0 3px #fea' : '',
            borderColor: isActive ? '#fb1' : '',
            color: isActive ? '#fb1' : 'black',
          })}
        >
          <Estatisticas />
          {mobile && 'Estatisticas'}
        </NavLink>
        <NavLink
          to="/conta/postar"
          style={({ isActive }) => ({
            background: isActive ? 'white' : '',
            boxShadow: isActive ? '0 0 0 3px #fea' : '',
            borderColor: isActive ? '#fb1' : '',
            color: isActive ? '#fb1' : 'black',
          })}
        >
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          {''}
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
