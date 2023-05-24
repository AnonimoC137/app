# Projeto final #

Nessa etapa do projeto vou falar as principais coisas que eu entender, coisas que podem vir a ser uteis no futuro.

## Teste da Api que usaremos ##

* Criamos um arquivo chamado UsePost.js, ele vai servir como teste para ver se conseguimos enviar a nossa API um nome de usuario, email e senha.

* Criamos 3 estados para o nome, email e senha

* No retorno criamos um formulario com os 3 inputs e um button, e no form colocamos um onSubmit para criar uma função handleSubmit

* No handleSubmit vamos fazer um fetch com a url da nossa API, porem precisamos passar além da url o metodo, e os headers, tambem o wque vai ir no corpo, todos os detalhes estão no exemplo abaixo.

* Por ultimo vamos usar o "then" para visualizarmos a resposta que a API está nos fornecendo.

@exemplo
```bash
import React from 'react';

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
```

## Autenticando o usuario ##

Vamos criar um arquivo teste tambem para verificar se nosso conseguimos autenticar o nosso usuario arrecem criado.

*

@exemplo
```bash

```