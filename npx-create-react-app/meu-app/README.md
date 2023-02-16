# create-react-app #

Criar um ambiente de desenvolvimento já configurado e otimizado para a criação de aplicativos com React.

@exemplo
```bash
npx create-react-app meu-app
```

- npx é um comando de NPM  que executa diretamente um pacote online, sem a necessidade de instalarmos o pacote na nossa maquina. A vantagem é que ele ira sempre instalar a versão mais atualizada do ambiente criado por create-react-app.

# ambiente do curso #
Nesse espaço vai ser o  ambiente de testem em geral do curso.

# JSX #

Javascript XML / extension. Estende a sintaxe do Javascript introduzindo elementos como XML que são convertidos em funções de React.

@exemplo
```bash
const App = () => {
    return <button>Comprar</button>
};

// é transformado em 

const App = () => {
    return React.createElement('button', null, 'Comprar')
};
```

# Atributos #

Atributos podem ser passados como no HTML, porem com alguns casos especiais.

@exemplo
```bash
const App = () => {
    return (
        <a href="https://www.origamid.com" title="Site Origamid">
        Origamid
        </a>
    );
};
```

# Casos Especiais #

O caso especial mais comum é o atributo class, Pelo fato de class ser uma palavra reservada do javascript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className.

@exemplo
```bash
const App = () => {
    return <div className="grid">Origamid</div>
};

const App = () => {
    return (
        <form>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />
        </form>

    );
};
```

# camelCase #

Atributos com nomes compostos devem ser utilizados como camelCase. Exemplo: autoplay vira autoPlay.

@exemplo
```bash
const App = () => {
    retun <video autoPlay />;
};
```

# Expressões Variaveis #

Expressões e variaveis podem ser colocadas dentro do JSX, utilizando chaves {}.

@exemplo
```bash
const App = () => {
    const nome = 'alexandre';
    return <p>{nome}</p>;
};

const App = () => {
  const desconto = 50;
  const preco = 250;
  return <p>{preco - desconto}</p>
};
```

# JSX  Expressões #

Voce pode executar qualquer expressão dentro das chaves {}. Se o resultado da expressão for um numero, string ou array de numero/string o resultado ira aparecer na tela. Booleanos (true/false), undefined e null nao irao resultar em nada na tela. Objetos irao retornar um erro.

@exemplo
```bash
const App = () => {
    function meuNome() {
        return 'andre';
    }

    function quadrado(x) {
        return x * x;
    }

    const carro = {
        rodas: 4,
        marca: 'ford',
    }

    return (
        <p>{carro.marca}</p>
        <p>{quadrado(2)}</p>
        <p>{meuNome()}</p>
        
    );
};
```

# Style #

O style ira receber um objeto com as propriedades do elemento em camelCase.

@exemplo
```bash
const App = () => {
    const estiloH1 = {
        color: 'blue',
        fontSize: '20px',
        fontFamily: 'Helvetica',
    };

    return (
        <div>
            <h1 style={estiloH1}>Empresa</h1>
            <p style={{color: 'green'}}>Empresa</p>
        </div>
    );
};
```

# JSX Arrays #

O JSX ira listar cada um dos itens da array. Ele não ira separar ou colocar virgula, é voce que deve modificar a array para o resultado desejado.

@exemplo
```bash
const App = () => {
    const produtos = ['notebook', 'smartphone', 'tablet'];

    return <p>{produtos}</p>
};
```
# Keys # 

O JSX  necessita de uma key unica para cada elemento da array.

@exemplo
```bash
const App = () => {
    const empresas = [<li key="e1">Apple</li>,<li key="e2">Google</li>];

    return <ul>{empresas}</ul>
};
```
# Map #

É comum usarmos o map direto na array como uma expressao, retornando um elemento  para cada item novo da Array.

@EXEMPLO
```bash
const App = () => {
    const filmes = ['before sunrize', 'before senset', 'before mid'];

    return (
        <ul>
        {filmes.map((filme) =>(
            <li key="{filme}">{filme}</li>
        ))}
        </ul>
    );
};
```

# desafio com arrays para deixar salvo #

@exemplo
```bash
const App = () => {
const livros = [
  {nome: 'a game of thrones', ano: 1996},
  {nome: 'a clash of kings', ano: 1998},
  {nome: 'a storm of swords', ano: 2000},
];

return (
  <ul>
      {livros
        .filter(({ ano }) => ano >= 1998)
        .map(({ nome, ano }) => (
          <li key={ nome }>
            { nome }, { ano }
          </li>
    ))}
  </ul>
);
}

export default App;
```

# Desafio com Arrays parte 2 #

@exemplo
```bash
import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'notbook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d439ab', '#f37c59'],
  },
  {
    id: 3,
    nome: 'tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
]

const App = () => {
 const dados = produtos.filter(
  ({preco}) => Number(preco.replace('R$ ', ' ')) > 1500,
  );
  
return (
  <section>
    {dados.map(({nome, id, preco, cores}) => (
      <div key={id}>
        <h1>{nome}</h1>
        <p>Preço: {preco}</p>
        <ul>
          {cores.map((cor) => (
            <li style={{backgroundColor: cor, color: 'white'}} key={cor}>{cor}</li>
          ))}
        </ul>

      </div>
      ))}
    
  </section>
);
}

export default App;
```

# Eventos #

Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos sao sintaticos, ou seja, sao criados pelo proprio React porem seguindo as especificações da W3C e funcionam igualmente nos diversos browsers que o React suporta.

@exemplo
```bash
const App = () => {
  function handleClick(event) {
    console.log(event)
  }

  return (
      <div>
        <button onClick={handleClick}>Camisa</button>
        <button onClick={handleClick}>Bermuda</button>
      </div>
  );
}
```

# Função Anonima #

É possivel executar uma função anonima no evento

@exemplo
```bash
const App = () => {
  
  return (
      
        <button onClick={({target}) => target.classList.toogle('ativa')}>
            Camisa
        </button>
        
      
  );
}

```

# window/document #

Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com Javascript normalmente, usando o addEventListener.

@exemplo
```bash
const App = () => {
  function handleScroll(event) {
    console.log(event)
  }

  window.addEventListener('scroll', handleScroll);
  
  return <div style{{height: '200vw'}}>Div</div>

}
```

# Componentes #

O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo. Iremos trabalhar durante o curso com os chamados componentes funcionais.

OBS :      rafc       é um comando atalho da extenção baixada no curso que ja faz a estrutura padrao necessaria, é preciso criar uma estrutura antes para OCORRER.

@exemplo
```bash
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
        <Header />
        <p>Esse é o meu aplicativo</p>
        <Footer />
    </div>
  );
}

export default App;
```

# Interface #

Não existe limite para a composição de componentes, eles podem ser desde componentes gerais como Header e Fotter, até como componentes como input e Button.

@exemplo
```bash
import React from 'react';
import Header from './Button';
import Footer from './Input';

const Form = () => {
  return (
    <form>
        <p>
            <label htmlFor='nome'>Nome</label>
            <Input  />
        </p>
        <p>
            <label htmlFor='email'>Email</label>
            <Input  />
        </p>

        <Button />
    </form>
  );
}

export default Form;
```

# Return # 

Um componente deve sempre retornar algo. O retorno pode ser qualquer tipo de dado pelo JSX (string, array, um elemento JSX, null e etc..)

@exemplo
```bash
const teste = () => {
  const active = true;

  if(active) {
    return <p>Ativo</p>
  } else {
    return null;
  }
};
```

# React.Fragment #

Um componente deve sempre retornar um elemento unico no return. Caso voce deseje retornar mais de um elemento, envolva os mesmos em uma div ou dentro do <React.Fragment></React.Fragment> ou <> </>

@exemplo
```bash
const App = () => {
  return (
    <React.Fragment>
        <Header />
        <Form />
        <Footer />
    </React.Fragment>
  );
};

// OU

const App = () => {
  return (
    <>
        <Header />
        <Form />
        <Footer />
    </>
  );
};
```

# Propriedades #

Assim como uma função pode receber argumentos, podemos tambem passar argumentos aos componentes. Esses são conhecidos como propriedades ou props

@exemplo
```bash
const Titulo = (props) => {
  return <h1>{props.texto}</h1>
};

const App = () => {
  return (
    <section>
      <Titulo texto='meu primeiro titulo' />
      <Titulo texto='meu segundo titulo' />
    </section>
  );
};
```

# Multiplas Proprieades #

Podemos passar quantas propriedades quisermos

@exemplo
```bash
const Titulo = (props) => {
  return <h1 style={{color: props.cor}}>{props.texto}</h1>
};

const App = () => {
  return (
    <section>
      <Titulo texto='meu primeiro titulo' cor='blue' />
      <Titulo texto='meu segundo titulo' cor='red'/>
    </section>
  );
};
```
# Desestruturação #

É comum desestruturarmos as propriedades

@exemplo
```bash
const Titulo = ({cor, texto}) => {
  return <h1 style={{color: cor}}>{texto}</h1>
};

const App = () => {
  return (
    <section>
      <Titulo texto='meu primeiro titulo' cor='blue' />
      <Titulo texto='meu segundo titulo' cor='red'/>
    </section>
  );
};
```
# Children  #

Se utilizarmos o componente abrindo e fechando o mesmo, o conteudo interno deste será acessado atraves da propriedade children.

@exemplo
```bash
const Titulo = (props) => {
  return <h1>{props.children}</h1>
};

const App = () => {
  return (
    <section>

      <Titulo>Meu primeiro titulo</Titulo >

      <Titulo>
        <p>Titulo 1</p>
        <p>Titulo 2</p>
        <p>Titulo 3</p>
      </Titulo >
      
    </section>
  );
};
```
# Rest e Spread #

Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.

@exemplo
```bash
import React from 'react';

const Input = ({label, id, ...props}) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} type='text' {...props} />
      </div>
    );
};

export default Input;
```

# Dados #

Podemos passar diferentes tipos de dados e ate outros componentes nas propriedades.

@exemplo
```bash
const App = () => {
  const logado = true;
  const nome = 'andre';

  return (
    <section>
        <Header logado={logado} nome={nome}>
    </section>
  );
};

// OU TBM

const Header = ({logado, nome}) => {
  if(logado) {
    return <header>Bem vindo, {nome}</header>
  } else {
    return <header>Header</header>
  }
};
```

# DESAFIO DE COMPONENTES #

Esse é o desafio final da parte de componentes, vou deixar ele salvo para poder usalo novamente no futuro ou melhora-lo. ele consiste em criar uma pagina basica com header, home e um titulo com paragrafo, todos eles divididos em varios componentes, em seguida quando clicado em produtos vai aparecer os produtos e a pagina do home some por conta de uma condição if e else usando p {pathname} que acessa a url para fazer essa condição.





