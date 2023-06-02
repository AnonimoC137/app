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

* Aria-label é algo para colocar um titulo e facilitar a acessibilidade.

* Esse estilo de formatação da classe no nav serve para podermos colocar o estilo global que esta no App.css e o do .module

@exemplo
```bash
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';

const Header = () => {
  return (
    <div className=className={`${styles.nav} container`}>
      <nav className="container">
        <Link to="/" aria-label='Dogs- Home'>
          <Dogs />
        </Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
```

# Rotas de login #

* Criamos as principais rotas na pagina login, elas são muito importantes para usarmos em conjunto com os links.

@exemplo
```bash
const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

```
## LoginForm ##

* Dentro dessa rota vai ser onde o usuario vai colocar seu login e senha para entrar, ainda vamos modificar algumas coisas, como criar componentes separados, porem já da para ter uma boa noção.

* Criamos o formulario com os dois inputs de username e password, além de fazer um fetch enviando para nossa API, tambem usamos o "then" nessa primeira parte para visualizar a resposta recebida.

* Criamos um Link para uma de nossas rotas criadas lá em nosso arquivo Login.js, que vai servir para nos levar a pagina de cadastro.

* Vou lembrar aqui e em outras partes que, lá no App.js precisamos colocar um * em nosso caminho de rota para ele saber que exite outras subrotas em login, <Route path="/login/*" element={<Login />} /> 

@exemplo
```bash
import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastros</Link>
    </section>
  );
};
```
# Form Component #

* Criamos os seguintes componentes, Input e Button.

* Sempre na hora de criar um componente vamos passar desestruturando algo para ele, nesse caso vamos passar o "label", "type" e "name".

* Dentro dele vamos ter a area do label que vai receber o nome, tambem o input que recebe um id, nome e type para saber se é tipo texto ou senha.

* Por fim colocamos uma tag <p> para podermos tratar o erro mais para frente.


@exemplo - Input.js
```bash
const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} className={styles.input} type={type} />
      <p className={styles.error}>Error</p>
    </div>
  );
};
```

* Já no Button vamos ter as seguintes propriedades, passadas sendo desestruturadas, children e ...props.

* Todo conteudo dentro das tags button é considerado um children, por isso passamos ele com esse parametro, o ...props está sendo passado para caso precisarmos passar alguma outra informação ele já cumpre o proprosito.

* Com esses componentes podemos reutilizar eles tranquilamente.

@exemplo - Button.js
```bash
const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};
```
# Hook useForm #

* Criamos um hook useForm para nos auxiliar a validar os dados do username e password antes de fazer o fetch.

* Criamos um objeto que servira como filtro de regex para validar um email, por exemplo, vamos acessas ele usando types[type], é a mesma coisa de types.email, porem não podemos passar assim.

* Criamos dois estados reativos, uma para o value e outro para o error.

* Criamos uma função validadora, primero ela verifica se passamos alguns type lá em nosso arquivo onde vamos usar o Hook, (nesse caso o Input.js).

* Depois ela verifica se o valor digitado é igual a zero, caso seja vai ser setado no erro uma mensagem para mostrar na pela de "preencha um valor", depois temos outra condição que vai verificar se existe o types[type] e se esta dentro do padrao que passamos no regex, essa parte fica meio extensa porem da para entender que esta fazerndo um teste em nosso regex para validar, caso não passe no teste vai ser mostrado nossa message que esta no objeto types.

* Caso não exista nunhum erro, vamos setar o setError como null e retornar true para seguir o codigo.

* Criamos nossa função onChange que vai ser atualizada sempre que o usuario digitar, ela constantemente vai atualizar o estado value com o target do input, caso aconteca um erro o if dentro dela vai colocar o validate em ação e tambem vai atualizar a message caso o erro foi corrigido. (serve para tirar o erro se ele for corrigido para nao ficar mostrando uma mensagem desnecessariamente)

* Por fim, vamos estar retornando os seguintes itens, value, setValue, error, validate, onBlur

* Importante, passamos dois metodos já sendo ativados por padrao, o validate e o onBlur podem ser passados no retorno sendo ativados já, isso facilita muito na hora de usar eles.



@exemplo - useForm
```bash
import React from 'react';

const types = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: 'Preencha um email valido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }
  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;

```
## Hook useForm em nosso LoginForm ##

* Vamos utilizar nosso hook da seguinte maneira em nosso LoginForm

* Primeiro vamos criar duas const para username e password, passando nelas nosso hook

* Vamos usar elas passando no Input sendo desestruturadas {...username} e {...password}, assim podemos utilizar as propriedades do hook em nosso Input.

* Criamos um if geral tambem, nele vamos passar validando o username e password, só vamos fazer o fetch caso o if der true.

@exemplo
```bash
const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="usuario" type="text" name="username" {...username} />
        <Input label="senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastros</Link>
    </section>
  );
};
```

## Hook useForm no Input ##

* Como eu disse passamos desestruturando o nosso hook useForm para o Input que recebe suas propriedades, entao passamos isso para dentro dele. (value, onChange, error, onBlur)

* Ai setamos o value como value, significa que o valor dele é o valor digitado pelo usurario, o onChange esta sendo setado para nossa função onChange lá em nosso hook, a mesma coisa vale para o onBlur, que inclusiva esta sendo passado já ativado.

* Por fim criamos uma condição para o erro, caso ele seja true, o <p> vai aparecer e mostrar o erro que é reativo.

@exemplo
```bash
const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
```
# API fetch #

Vamos criar um arquivo chamado api para colocar as configurações do fetch, como a url, metodos e por ai vai

* Sempre exportando cada parte em nosso arquivo, vamos passar dentro da const API_URL a url geral que vamos usar para acessar a api do curso.

* A função TOKEN_POST vai receber o body, que vai vir do LoginForm como username e password, ela vai retornar a url geral concatenada com o caminho para autenticar o token, nas options vai ter o metodo que é o POST, no headers o tipo de aplicação e por ultimo vai o body que esta sendo recebido na propria função.

* A função USER_GET vai pegar o usuario utilizando o token de autenticação, para isso ela vai retornar a url concatenada ao caminho do user, nas options vai ter o metodo GET e nos headers vai ter a autorização com o token;

@exemplo - api.js
```bash
export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + token,
      },
    },
  };
}

```
## API no LoginForm ##

Agora que criamos nossa API podemos otimizar o nosso fetch em nosso documento LoginForm.

* Criamos um useEffect para logo de começo verificar se existe salvo no local storage um token, caso exista já vamos colocar ele dentro do getUser que é nossa função responsavel por pegar o usuario e autenticar com o token.

* Criada a função getUser, sendo passado o token de autenticação para ela, dentro dela vamos ter a url e as options desestruturadas do USER_GET que esta em nossa api.js, com isso vamos criar uma const response que vai fazer um fetch passando esses dois parametros que eu citei agora, e outra const chamada json que vai pegar a resposta e transformar ela em json, em resumo ela vai servir para pegar nosso user utilizando o token.

* Dentro de nossa função handleSubmit já existente vamos otimizar o processo da seguijnte forma, desestruturando o url e o options do TOKEN_POST que tambem criamos em nossa api.js, vamos passar os valores de username e password para entçao ser gerado um token de autenticação, alem disso vamos salvar na memoriano localStorage o token e passar para o getUser esse token.

@exemplo - LoginForm
```bash
const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  });

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="usuario" type="text" name="username" {...username} />
        <Input label="senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastros</Link>
    </section>
  );
};
```
# userContext #

o userContext vai servir para compartilhar as informações de login do usuario com as demais partes do nosso app.

* Começamos criando a const UserContext, para criar o contexto.

* Dentro do "UserStorage" vai ter todas as configurações que vão ser atribuidas no global depois no retorno, nela vai ser passado o children que vai ser todos os elementos que estaram dentro da nossa tag.

* Criamos 4 estados reativos "data"(para as informações do usuario), "login"(para status de logado ou não), loading (status de carregando ou nao), e o "error" para tratar o erro.

* Criamos a função assincrona "getUser"(para puxar o usuario), nela vamos passar o token de autenticação, desestruturar a "url" e "options" lá do nosso USER_GET, passando para ele o token para poder puxar os dados do usuario.

* Fazemos o fetch com a "url" e "options" e atribuimos a const "response", depois atribuimos para a const "json" e atualizamos nosso estado "data" com esse json, e o estado de login passa a ser true.

* Criamos a função assincrona "userLogin" ela vai ser responsabel por logar o usuario sendo passado nela como parametro o "username" e "password".

* Nela vamos fazer o mesmo modelo de fetch da função anterior, o que muda é que vamos já desestruturar o token que vamos receber da resposta do json, ai guardar essa informação lá no local storage, por fim mandar esse token para nossa primeira função "getUser"

* OBS: já fizemos algo parecido lá no "LoginForm", porem vamos retirar de lá para deixar aquela parte mais otimizada.

* Por fim nesse momento vamos esta retornando o nosso "userLogin" e "data" no retorno que vão ser passados no global para as demais partes do app.

@exemplo - UserContext.js
```bash
import React from 'react';
import { TOKEN_POST, USER_GET } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  /*para puxar o usuario*/
  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = response.json();
    setData(json);
    setLogin(true);
  }
  /*metodo que vai logar o usuario*/
  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();
    window.localStorage.getItem('token', token);
    getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
```

# Passando o UserContext para o global #

Agora que criamos o contexto e hora de passar ele para o global para isso vamos fazer da seguinte forma.

* Apos importar nosso "UserContext", no retorno vamos criar a tag de abertura e fechamento chamada <UserStorage> e fazer ela inglobar nosso "Header", "Footer" e nossas "Routes", assim vamos poder compartilhar as informações contidas no nosso contexto.

@exemplo - App.js
```bash
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UserContext';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};
```

# Otimizando nosso LoginForm #

Como criamos um contexto que faz o login do usuario e puxa o usuario, podemos tirar essa parte do nosso LoginForm para deixar ele mais otimizado e organizado além das seguintes alterações

* Passamos importando nosso "UserContext"(muito importante para funcionar), só lembrando que passei só a parte do codigo que foi alterada.

* Agora dentro de nosso "handleSubmit", em nosso "if" que contem a condição para validar o username e password vamos colocar nosso "userLogin" e passar para ele os parametros que definimos como "username" e "password", poderem temos que passar com o ".value" para pegar corretamente

@exemplo
```bash
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
```
# UserContext no Header #

Agora precisamos passar as informações do "user" para o header da seguinte forma

* Importamos o UserContext, e dentro da nossa função vamos desestruturar o "data" do UserContex.

* Vamos criar uma condição para mostrar na tela somente quando "data" for true, com uma condição ternaria dois Links, uma mostrando o "data" dentro do link para quando for true e outra mantendo o padrao normal caso não consiga logar.

@exemplo
```bash
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs- Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};
```

# Validate token #

Vamos criar um processo via fetch lá em nossa api.js para validar o token do usuario.

* Passando como parametro o token e seguindo o mesmo padrao utilizado nos anteriores somente musando o caminho final /validate.


@exemplo- api.js
```bash
export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + token,
      },
    },
  };
}
```

## Contexto otimizado para validar o token e tratar erro##

* Criamos um useEffect que vai pegar o token guardado no localStorage.

* Criamos uma função assincrona que vai ser a autoLogin para fazer o login automaticamente quando existir um token no localStorage.

* Quando true vamos entrar em nosso "try", setar o error para null novamente, e setar o setLoading para true, que significa que ele vai estar em carregamento nesse momento.

* Após desestruturar a url e as options vamos fazer um fetch, criamos tambem um if para ver se a response vai ser diferente de "ok", caso seja não vamos seguir com o codigo e vamos apresentar um erro.

* Caso "ok", mandamos o token para nossa função getUser, que vai puxar nosso usuario, IMPORTANTE por se tratar de uma função async precisamos passar para o getUser com await tbm.

* Em nosso catch, que seria nosso erro, vamos passar nossa função userLogout, que vai setar os estados para null e false novamente, e no finally vamos passar o setLoading novamente para false, pois vai ter terminado o carregamento.

* Por fim não entendi direito por que esta apontando que precisamos passar na array de dependencias do useEffect nossa função useLogout, porem tive que criar ele com um useCallback.

@exemplo- UserContext.js
```bash
React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token invalido');
          await getUser(token);
          const json = response.json();
          console.log(json);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);
```
## userLogout ##

* Criamos essa função assincrona utilizando o Hook useCallback para podermos colocar ela lá em nosso autoLogin.

* Ela vai servir para fazer um reset em todos os nossos estado, além de zerar o token em nosso localStorage.

* Ela precisa assim como o useEffect uma array de dependencia, pois estamos usando um metodo do routes, o "navigate", precisamos importar ele no inicio do codigo e ele basicamente serve para assim que entrar em logout o usuario ser jogado para o local d=que definirmos, nesse caso a pagina de login.

@exemplo- UserContext.js
```bash
import { useNavigate } from 'react-router-dom';

const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate]
  );
```