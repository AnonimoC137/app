import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const Protected = ({ component: Component, ...rest }) => {
  const { login } = React.useContext(UserContext);

  return login ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default Protected;
