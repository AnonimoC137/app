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

Nesse exemplo vai conter semelhanças com os demais, vou explicar as diferenças.

* Criamos estados reativos para nome, idade, peso e img

* Criamos um objeto de formulario chamado formData, passando os valores da chave e o nosso estado, que é onde esta nosso conteudo. detalhe adicionamos esses valores invocando o formData e passando o append() com os valores da chave e o estado.

* No headers de nosso fetch, vamos passar Authorization: 'Bearer' + token, isso serve para autorizar a postagem da foto com o token, alem de nosso url ter final /photo.

* Com o formData vamos coloca-lo lá no body do nosso fetch.

* Modificamos tambem nosso inputs, porem o ultimo mudou, colocamos tipo "file" e no setImg vai ser value.files[0] que é onde vai ficar armazenada nossa imagem.


@exemplo
```bash
import React from 'react';

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);
    formData.append('img', img);
    

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer' + token
      },
      body: formData,
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
        placeholder="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        placeholder="nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="text"
        placeholder="peso"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        type="text"
        placeholder="idade"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input 
        type="file" 
        onChange={({ target }) => setImg(target.files[0])} 
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoPost;
```
## Teste API visualizando foto postada ##

Nesse exemplo nçao tem muito o que explicar e bem basico so para teste.

* Nosso form vai servir para a function handleSubmit fazer um fetch, no final da url /photo a propria API vai mostrar as fotos postadas.


@exemplo
```bash
const PhotoGet = () => {
  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/photo')
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
      <input type="text" />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
```

# Estrutura inicial #

Nessa etapa, quase tudo que vai ser implementado ao projeto já vimos em aula, então eu vou me limitar a explicar somente aquilo que eu considerar não ter absorvido muito bem, ou que eu considere importente para reutilizar no futuro.

* Criamos varios componentes, como Footer, Header, Login e as rotas, porem uma parte impontante que é bom relembrar é o uso de svg, fazemos o import como {ReactComponent as Dogs} from e o caminho onde esta o arquivo, ai podemos utilizar ele como um componente normalmente.

@exemplo
```bash
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className="container">
        <Link to="/">
          <Dogs />
        </Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
```