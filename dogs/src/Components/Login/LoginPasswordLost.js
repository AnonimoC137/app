import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const {data, loading, error, request} = useFetch();

  async function handleSubmit(e) {
      e.preventDefault();

      if(login.validate()) {
          const { url, options } = PASSWORD_LOST({
            login: login.value,
            url: window.location.href.replace('perdeu', 'resetar'),
          });
          await request(url, options);
      }
      
  }

  return (
    <section>
      <Head title='Perdeu senha'/>
      <h1 className="title">Perdeu a sua senha?</h1>
      {data ? (
        <p style={{color: '#4c1'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      {error && <Error error={error} />}
    </section>
  );
};

export default LoginPasswordLost;
