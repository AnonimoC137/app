import React from 'react';
import useForm from '../../Hooks/useForm';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { PASSWORD_RESET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router';

const LoginPasswordReset = () => {
  const [key, setKey] = React.useState('');
  const [login, setLogin] = React.useState('');
  const password = useForm();
  const {error, loading, request} = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyValue = params.get('key');
    const loginValue = params.get('login');

    if (keyValue) setKey(keyValue);
    if (loginValue) setLogin(loginValue);
  },[]);

  async function handleSubmit(e) {
    e.preventDefault();
    
    if(password.validate()) {
       const { url, options } = PASSWORD_RESET({
         login,
         key,
         password: password.value,
       });

       const { response } = await request(url, options);
       if (response.ok) navigate('/login');
    }
  }

  return (
    <div>
      <h1 className='title'>Resete sua senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      {error && <Error error={error} />}
    </div>
  );
};

export default LoginPasswordReset;
