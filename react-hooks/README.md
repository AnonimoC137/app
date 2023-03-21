# Estado #

O estado de uma aplicação representa as caracteristicas dela naquele momento. Por exemplo: os dados do usuario foram carregados, o botão está ativo, o usuario está na ppagina de contato e etc...

@exemplo
```bash
const App = () => {
  const ativo = false;

  return <button disabled={ativo}>{ativo ? 'ativo' : 'inativo'}</button>
}

export default App;
```

# Hooks #

Os hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possivel com classes.

@exemplo
```bash

const App = () => {
  const [ativo, setAtivo] = React.useState(true);

  return (
    <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Botao Ativo' : 'Botao Inativo'}
    </button>
  );
}
```

# React.useState #

O  useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, numeros, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos tambem. É isso que garante a reatividade de componentes funcionais no React.

@exemplo
```bash
const App = () => {
    const [ativo, setAtivo] = React.useState(true);

    // é a mesma coisa que: 
    //const ativoArray = React.useState(true);
    //const ativo = ativoArray[0];
    //const setAtivo = ativoArray[1]
};
```

# Multiplos Estados #

Não existe limites para o uso de useState, podemos definir diversos no mesmo componente.

@exemplo
```bash
const App = () => {
    const [contar, setContar] = React.useState(0);
    const [ativo, setAtivo] = React.useState(true);
    const [dados, setDados] = React.useState({nome: ' ', idade: ' '});

    return <div></div>
};
```

# Props #

Podemos passar o estado e a função de modificação como propriedades para outros elementos.

@exemplo
```bash
import React from 'react';
import Modal from './Modal';
import ButtonModal from './ButtonModal';

const App = () => {
    const [modal, setModal] = React.useState(false);

    return (
        <div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
        </div>
    );
};
```

# exemplo/aula de Modal com o useState #

vou colocar o exemplo do que foi feito na pagina App, ButtonModal e Modal , pois ao longo das aulas sobre hooks vou precisar usar esses arquivos para outros exercicios e aulas.

@exemplo arquivo App.js
```bash
import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';


const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <div>{modal ? 'Modal aberto' : 'Modal Fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
      
    </div>
  );
}

export default App;
```

@exemplo arquivo ButtonModal.js
```bash
import React from 'react'

const ButtonModal = ({setModal}) => {
  return <button onClick={() => setModal(true)}>Abrir</button> 
}

export default ButtonModal
```
# explicando#

Essa parte vai estar diretamente ligada ao modal do useState que por sua vez vai ser alterado pelo ButtonModal para true/false o Modal vai fazer uma condição caso o modal esteja em true ele vai renderizar na tela a div com o paragrafo e o button para fechar o modal novamente fazendo ele ir para false e assim saindo da condição if .


@exemplo arquivo Modal.js

```bash
import React from 'react'

const Modal = ({modal, setModal}) => {
    if(modal === true) {
        return (
            <div>
              <p>Esse é um modal</p>
              <button onClick={() => setModal(false)}>Fechar</button>
            </div>
          )
    }

    return null;
  
}

export default Modal
```
# Reatividade #

Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela garante a reatividade dos componentes.

@exemplo
```bash
const App = () => {
const [itens, setItens] = React.useState(['item 1', 'item 2']);

function handleClick() {
    //Errado. Modifique o estado apenas com função de atualizar
    itens.push('novo item');
  }

function handleClickReativo() {
   setItens([...itens, 'novo item']);
}
}
```

# Callback #

Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parametro que representa o valor anterior e ira modificar o estado para o valor que for retornado na função.

* Ou seja, voce pode usar uma outra palavra chave para acessar as propriedades do useState usando callbacks

* O callback é uma forma mais facil de acessar o estado sem mudar o valor original dele.

@exemplo
```bash
const App = () => {
  const [ativo, setAtivo] = React.useState(true)

  function handleClick() {
    // usando callback
    setAtivo((anterior) => !anterior)
  }

  return(
    <button onClick={handleClick}>
        {ativo ? 'esta ativo' : 'esta inativo'}
    </button>
  );
}
```
* Coloquei junto o exemplo do items.map para lembrar de algo importante, quando for continuar a fazer o metodo, ao inves de fazer a arrow function com { }, lembre que no react na parte do retorno dos elementos que vão ser renderizados na tela essa parte das { } tem que ser feita com ( ) como no exemplo.

@exemplo 2 
```bash
const App = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['item 1']);

  function handleClick() {
    setContar((contar) => {
      return contar + 1
    })
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
     <button onClick={handleClick}>{contar}</button>
    </div>
  );
}
```

# Exercicios #

* Os links abaixo puxam dados de um produto em formato JSON
* https://ranekapi.origamid.dev/json/produto/tablet
* https://ranekapi.origamid.dev/json/produto/smartphone
* https://ranekapi.origamid.dev/json/produto/notebook

* Crie uma interface com 3 botoes, um para cada produto.
* Ao clicar no botão faça um fetch a api e mostre os dados do produto
* Mostre apenas um produto por vez
* Mostre a mensagem carregando... enquanto o fetch é realizado.

@exemplo app.js
```bash
import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null)

    async function handleClick(event) {
      setCarregando(true)
      const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);

      const json = await response.json()
      setDados(json)
      setCarregando(false)
      console.log(response);
  }

    const estilo = {
      fontSize: '20px',
      fontFamily: 'Helvetica',
  };

  return (
    <div>
     <button style={estilo} onClick={handleClick}>Notebook</button>
     <button style={estilo} onClick={handleClick}>smartphone</button>
     <button style={estilo} onClick={handleClick}>tablet</button>
     {carregando && <p>Carregando...</p>}
     {!carregando && dados && <Produtos dados={dados}/>}
    </div>
  );
}

export default App;
```

### Explicação  exercicio ###

* Iniciamos criando um React.useState, ele vai servir para atualizarmos o estado dos dados recebidos pelo fetch, o fetch por sua vez vai fazer a requisição para o servidor e vai ser guardada a resposta na const response, criamos uma outra const para json, onde vai ficar guardado a modificação da resposta em formato json.

* Agora que temos a resposta em json vamos colocar no setDados para ela atualizar o dados com os novos valores recebidos.

* Isso tudo acontece no handleClick que é callback do event de click do button, que tambem contem um style pre definido.

* Criamos um useState para o carregar, antes de iniciar o fetch colocamos o setCarregar como true e ao final chamamos denovo ele mas colocando como false.

* Por fim vamos criar condições com && para mostrar o carregando como tambem para enviar os dados ao Produtos, para que ele não tente renderizar nada sem os dados terem sido devidamente recebidos e convertidos em json.

* criamos um componente Produtos para renderizar os dados na tela com o auxilio do useState.

@exemplo Produtos.js
```bash
import React from 'react'

const Produtos = ({dados}) => {


  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R${dados.preco}</p>
      <img src={dados.fotos[0].src} alt="/" />
    </div>
  )
}

export default Produtos
```

### Explicando ###

* No componente Produtos vai ter um h1 puxando o nome recebido pelo fetch que foi transformado em json.

* A mesma coisa vale para o preco e tambem para a img.

* Atenção para como puxamos a img, pode ser importante no futuro.

# useEffect #

Todo componente possui um clico de vide. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruido. Com o React.useEffect( ) podemos definir um callcack que ira ser executado durante certos momentos do ciclo de vida do componente.

@exemplo
```bash
const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log('Ocorre ao renderizar e ao atualizar')
  });

  return (
    <button onClick={() => setContar(contar + 1)}>{contar}</button>
  )
}
```
# Array de dependencias #

No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, e o segundo é uma array com uma lista de dependencias. A lista de dependencias serve para informarmos quando o efeito deve ocorrer.

* Uma array vazia indica que o efeito não possui nenhuma dependenciam, assim o mesmo só ira ocorrer quando o componente é renderizado. O efeito ocorre logo após a renderização do mesmo

* caso o array tenha como dependencia o contar ele vai atualizar sempre que o contar for atualizado.

* Podendo ter varios useEffect no arquivo, como o useState tbm faz.

@exemplo
```bash
const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log('apenas quando renderizar')
  }, []);

//Antes de renderizar e toda vez que atualizar o componente
  console.log('Sempre ocorre, mas antes do useEffect');


//Agora a dependencia está no estado contar,
//assim sempre que contar for atualizar o efeito será ativado
  React.useEffect(() => {
    console.log('Toda vez que atualizar o contar');
  }, [contar])
 
}
```

### outro exemplo ###
Podemos por exemplo passar no useEffect na array o contar, sempre que ele atualizar podemos mudar o titulo do document para a contagem atual

* IMPORTANTE quando usar um estado dentro do useEffect no caso o contar, é obrigatorio passar no array essa estado, caso contrario o efeito não vai ser atualizado.

@exemplo
```bash
React.useEffect(() => {
    document.title = 'Titulo ' + contar;
  }, [contar]);
```

# Componente Montou #

O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.

* IMPORTANTE, sempre lembrar de fazer uma condição com && quando o useState iniciar com null, para que os dados puxados não dem erro ao puxar o null.

@exemplo
```bash
const App = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    //se o fetch estivesse fora do useEffect, toda vez que o contar
    //fosse atualizado, o mesmo seria executado
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
    .then((response) => response.json())
    .then((json) => setDados(json));
  }, [])

  return (
    <div>
        {dados && (<div>
          <h1>{dados.nome}</h1>
          <p>{dados.preco}</p>
        </div>)}
    </div>
  );
}
}
```

# Multiplos Efeitos #

Podemos ter diversos useEffect no nosso codigo. O ideal é separarmos efeitos diferentes em useEffect diferentes.

* No segundo useEffect do exemplo abaixo, ele tem como efeito sempre que o modal atualizar (for aberto, passando para true) ele vai atualizar o setContar para 0.

@exemplo
```bash
const App = () => {
  const [contar, setContar] = React.useState(0);
  const [modal, setModal] = React.useState(false);

  
  React.useEffect(() => {
   document.title = 'titulo ' + contar;
  }, [contar]);


  React.useEffect(() => {
   setContar(0)
  }, [modal]);
```

# Antes de desmontar #

As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito.

* Esse codigo pode ter ficado confuso a primeira vista, mas quando usamos evento de scroll mesmo sendo no useEffect toda vez que adicionamos ele ao clicar no botao que ativa nosso Produto ele adiciona novamente novo useEffect que por sua vez adiciona mais um evento de scroll e por ai vai, para que isso não ocorra é colocado como retorno do useEffect uma função anonima que remove o evento toda vez que ele ocorrer.

@ exemplo Produto.js
```bash
const Produto = () => {
  //Utilizamos o useEffect para adicionamos eventos direto ao DOM
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event)
    }
    window.addEventListener('scroll', handleScroll);

    //Limpa o evento quando o elemento é removido do DOM

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
}
```

# Exercico do useEffect #

* Quando o usuario clicar em um dos botoes, faca um fetch do produto clicado usando a api abaixo

* https://ranekapi.origamid.dev/json/api/produto/notebook

* https://ranekapi.origamid.dev/json/api/produto/smartphone

* Mostre o nome e preco na tela (separe essa informação em um conponente no Produtos.js)

* Defina o produto clicado com uma preferencia do usuario no localStorage

* Quando o usuario entrar no site, se existe um produto no localStorage faça um fetch do produto


### Explicando o exercicio ###

* Criamos uma const para atualizar o estado, com nome de produtos.
* Depois criamos dois use.Effect, o primeiro só vai atualizar uma vez quando a pagina for regarregada, ele vai servir para puxar no localStorage o ultimo produto registrado lá, e somente se existir algo lá. o segundo vai atualizar o localStorage sempre que o produto for atualizado.

* Criado uma function de callback para o evento de onClick do button, essa função captura o texto do button e atualiza o estado.

* Por ultimo nesse arquivo invocamos o componente que chamamos de produtos passando para ele as informações do estado.

@exemplo App.js
```bash
import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [produtos, setProdutos] = React.useState(null)
     

    React.useEffect(() => {
      const produtoLocal = window.localStorage.getItem('produto')
      console.log(produtoLocal)
      if(produtoLocal !== null) {
        setProdutos(produtoLocal)
      }
    },[])

    React.useEffect(() => {
      if(produtos !== null) {
        window.localStorage.setItem('produto', produtos)
      }
    }, [produtos])

    function handleClick({target}) {
      setProdutos(target.innerText)
    }

  
  return (
    <div>
      <h1>preferencia:{produtos} </h1>
      <button onClick={handleClick}> notebook</button>
      <button onClick={handleClick}> smartphone</button>
      <Produtos produtos={produtos}/>
     
    
    </div>
  );
}
```
### explicando exercicio arquivo Produtos.js ###

* Nesse arquivo desestruturamos os dados passados do estado do arquivo App.js
* Criamos tambem um estado para  manipular os dados recebidos pela API.

* Criado um use.Effect para fazer a requisição dos dados dos produtos a API, sempre que o estado dos produtos atualizar o use.Effect vai fazer uma nova requisição.

* Por fim como retorno vamos passar o nome e o preco recebidos dos dados da requisição em JSON para a parte do front-end.

@exemplo Produtos.js
```bash
import React from 'react'

const Produtos = ({produtos}) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if(produtos !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produtos}`)
      .then((response) => response.json())
      .then((json) => setDados(json))
    }
  }, [produtos])

  if(dados === null) return null;
  return (
    <div>
     <h1>{dados.nome}</h1>
     <p>{dados.preco}</p>
    </div>
  )
}
```

# useRef #

Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento do DOM, sem precisarmos utilizar o querySelector ou similar.

* Observação, ele e bom ser usado junto com o useEffect pois ele tenta iniciar muito rapido, não dando tempo para o elemento identificar ele, já que o useEffect é startado só depois de toda a inicialização ele formam um bom par.

@exemplo
```bash
const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
      console.log(video.current)
  }, [])

  return <video ref={video}/>
};
```

### um exemplo pratico do useRef ###

Aqui precisamos nos atentar a tres coisas principais.

* Criamos a const inputElement para ativar o useRef

* Colocamos ela como referencia la no elemento input de retorno.

* Agora conseguimos puxar ela com a ajuda do current lá na nossa function responsavel pelo click do button, assim ficando mais facil linkar o input a outros mecanismos no nosso codigo, o .focus() é uma usabilidade do form, e vamos ver isso mais a frente.

@exemplo
```bash
const App = () => {
  const [comentarios, setComentarios] = React.useState([])
  const [input, setInput] = React.useState(' ')
  const inputElement = React.useRef()
     

    function handleClick() {
      setComentarios([...comentarios, input])
      setInput(' ')
      inputElement.current.focus();
    }

  
  return (
    <div>
    <ul>
      {comentarios.map((comentario) => (
        <li key={comentario}>{comentario}</li>
      ))}
    </ul>
    <input
      type='text'
      ref={inputElement}
      value= {input}
      onChange={({target}) => setInput(target.value)}
    />
    <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
```
# Referencia #
O seu uso não é restrito a elementos do dom. Podemos utilizar tambem para guardamos a referencia de qualquer valor, como de um setTimeout por exemplo.

* Importante, o valor adicionado no useRef não é perdido ou zerado quando a pagina ou o estado atualizam. Por isso ele é bom para guardar como referencia o tempo do setTimeout. 

* Como no exemplo abaixo, para que não fique aparecendo varias mensagens de item adicionado por conta da quantidade de itens, somente vai contar a ultima vez que o carrinho foi atualizado, pois o clearTimeout(timeoutRef.current) vai puxar o ultimo estado do useRef e vai remover ele sempre antes de atualizar um novo item no carrinho.

@exemplo
```bash
const App = () => {
  const [carrinho, setCarrinho] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(null)
  const timeoutRef = React.useRef()
     

    function handleClick() {
     setCarrinho(carrinho + 1);
     setNotificacao('voce adicionou um novo item ao carrinho');
     clearTimeout(timeoutRef.current)
     timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
     },2000)
    }

  
  return (
    <div>
    <p>{notificacao}</p>
    <button onClick={handleClick}>carrinho {carrinho}</button>
    </div>
  );
}
```

# useMemo #

Memoriza um valor, a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e uma array de dependencias.

* Observação IMPORTANTE, esse metodo serve para operações lentas como uma grande operação matematica.

@exemplo
```bash
const App = () => {
  const [contar, setContar] = React.useState(0)
  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem('produto', contar)
    // só será executado uma vez
    console.log('teste');
    return localStorageItem;
  }, [])
  console.log(valor)
  return (
    <button onClick={() => setContar(contar + 1)}>{contar}</button>
  )
}
```

# createContext #

O contexto ira permitir passarmos dados/estado a  todos os componentes, sem necessidade de utilizar propriedades. Serve principalmente para dados/estados globais como por exemplo dados do usuario logado.

@exemplo UserContext.js
```bash
import React from 'react'

const UserContext = React.createContext();

export default UserContext;
```







