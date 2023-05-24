# Projeto final #

Nessa etapa do projeto vou falar as principais coisas que eu entender, coisas que podem vir a ser uteis no futuro.

## Teste da Api Criando usuario ##

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

Vamos criar um arquivo teste tambem para verificar se nosso conseguimos autenticar o nosso usuario arrecem criado, ele é parecido com o nosso Criando usuario.

* Vamos ter 3 estados, nome, email e token, o nome e email é o que vamos usar para mandar para nossa API, para fazer a autenticação, o estado do token vai servir para mostrar-mos ele na tela.

* Em nosso fetch, vamos passar a mesma url, porem com o final direfente, no body vai ir somente o nome e o email, assim como lá no formulario vamos manter somante o input nome e senha.

* Em nosso "then" do json vamos colocar o setToken(json.token) para capturarmos o valor do token que a API nos mandou.

* Por ultimo colocamos um style no nosso <p> para que o token seja quebrado por padrao, para ficar mais facil de visualizar.

@exemplo
```bash
import React from 'react';

const TokenPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
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

      <button>Enviar</button>
      <p style={{ wordBreak: 'break-all' }}>{token}</p>
    </form>
  );
};

export default TokenPost;

```

## Teste API postando foto ##

@exemplo
```bash

```