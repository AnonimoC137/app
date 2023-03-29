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

* Observação, pelo visto isso é algo comum no React e provalvelmente vai ser utilizado muito.

@exemplo UserContext.js
```bash
import React from 'react'

const UserContext = React.createContext();

export default UserContext;
```
* Agora como é configurado no arquivo App, o UserContext ingloba as tags que são de retorno, usando um metodo provider (prover) podemos colocar um value com qualquer coisa quue queremos passar a diante nos nosso componentes.

@exemplo App.js
```bash
import React from 'react';
import Produtos from './Produtos';
import UserContext from './UserContext';


const App = () => {
  
  return (
    <UserContext.Provider value={{nome: 'alexandre'}}>
      <div>
          <Produtos/>
      </div>
    </UserContext.Provider>
  )
}
```
* Agora dentro da pasta Produtos.js criamos uma const para dados e passamos o React.useContext e dentro dele passamos o hook que  se chama UserContext, para acessar aquele valor que deixamos definido lá no App.js

* MUITO CUIDADO, o nome correto para acessar o caminho é React.useContext, foi criado um arquivo chamado UserContext, varialvel com nome UserContext, a tag que esta inglobando o retorno do App.js se chama tambem UserContext, MAAAS o caminho é sem o R no use.

@exemplo
```bash
import React from 'react'
import UserContext from './UserContext'

const Produtos = () => {
const dados = React.useContext(UserContext)
console.log(dados)

  return (
    <div>
      {dados.nome}
    </div>
  )
}
```

# GlobalContext #

Essa forma de organizar o Context em um arquivo mais completo, para que as informações sejam melhor visualizadas por quem for mexer no codigo.

* A const GlobalStorage esta desestruturando o children que vai ser todo elemento que na pagina App.js estiver entre as tags GlobalStorage.

* Essas const's estão sendo exportadas uma a uma por isso na hora de importar vamos desestruturar elas no arquivo App.js.

* Tambem é possivel nesse arquivo já passar o .Provider e o value, que nos exemplos anteriores passamos direto no arquivo App.js, assim deixando-o mais organizado

@exemplo GlobalContext.js
```bash
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    return (
        <GlobalContext.Provider value={{nome: 'alexandre'}}>
            {children}
        </GlobalContext.Provider>
    ) 
}
```
### GlobalStorage no App.js ###

Agora passamos o GlobalStorage para o App.js, pois ele é a estrutura base criada para ser renderizada, entao todo nosso conteudo que vai ser mostrado ou tratado tem que estar entre essas tags para receber os dados.

* Lembrando novamente que, o GlobalStorage foi passado sendo desestruturado pois ele foi exportado unicamente.

@exemplo App.js
```bash
import React from 'react';
import Produtos from './Produtos';
import { GlobalStorage } from './GlobalContext';



const App = () => {
  
  return (
    <GlobalStorage>

       <Produtos/>
       
    </GlobalStorage>
  ) 
      
}

export default App;
```

### GlobalContext no Produtos.js ###

Agora em Produtos.js, vamos importar e passar o caminho de GlobalContext pois ele é o responsavel por criar e dar vida de fato a estrutura que criamos para ele no GlobalStorage, sendo o Produtos que vai ser mostrado na tela, ele fica com a propriedade GlobalContext.

* Criamos um caminho React.useContext(GlobalContext) na const chamada global, ai podemos acessar as configurações que fizemos lá no GlobalStorage.

@exemplo Produtos.js
```bash
import React from 'react'
import { GlobalContext } from './GlobalContext'


const Produtos = () => {
const global = React.useContext(GlobalContext)

  return (
    <div>
      {global.nome}
    </div>
  )
}

export default Produtos
```

### Exemplo de como repassar estados e functions ###

Podemos incluir dentro do GlobalStorage estados e functions ja prontas e passar isso no value para ser usado lá em Produtos.js

@exemplo GlobalContext.js
```bash
import React from 'react';

export const GlobalContext = React.createContext();


export const GlobalStorage = ({children}) => {
    const [contar, setContar] = React.useState(0)

    function adicionarUm() {
        setContar((contar) => (contar +1))
    }

    function adicionarDois() {
        setContar((contar) => (contar +2))
    }
    return (
        <GlobalContext.Provider value={{contar, adicionarUm, adicionarDois}}>
            {children}
        </GlobalContext.Provider>
    ) 
}
```

* Agora vamos ver como ficou lá em Produtos.js

* Para acessarmos os valores passados que nesse caso estao na const chamada global, usamos global.contar ou global.adicionarUm() (que é nossa function).

* Assim quando o button for clicado o evento de click vai ocorrer e ativar a function que está la no nosso arquivo GlocalContext, não sendo mais necessario poluir nosso arquivo Produtos.js.

@exemplo Produtos.js
```bash
import React from 'react'
import { GlobalContext } from './GlobalContext'


const Produtos = () => {
const global = React.useContext(GlobalContext)

  return (
    <div>
      Produto: {global.contar}
      <button onClick={() => global.adicionarUm()}>Adicionar</button>
    </div>
  )
}

export default Produtos
```
# Exercicio pessoal para praticar useContext #

Fiz um desafio passoal, para treinar esse novo uso do useContext, junto com as outras atividades anteriores, com o uso do useState, onChange do input e onClick.

* O  que voce escrever no input o evento de onChangr vai capiturar, o button pesquisar vai fazer o fetch com o que voce procurou.

* Lembrando que as funções e os estados estão sendo passados pelo novo metodo useContext.

@exemplo GlobalContext.js
```bash
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [dados, setDados] =  React.useState(true)
    const [valorInput, setValorInput] = React.useState(true)

    async function handleClick()  {
        const resposta = await fetch(`http://ranekapi.origamid.dev/json/api/produto/${valorInput}`);
        const json = await resposta.json()
        setDados(json)
    }

    return (
            <GlobalContext.Provider value={{dados, handleClick,setValorInput}}>
                {children}
            </GlobalContext.Provider>
    ) 
}
```
* Importante lembrar que é preciso usar a const na qual voce guardou toda a configuração do createContext e deu corpo, nesse caso foi guardado na const  "global".

* Para acessar as funções é preciso passar essa const "global", assim como para puxar os estados.

* Não esqueça de fazer a importação correta do arquivo que foi guardado o createContext, nesse caso é o GlobalContext.

@exemplo - Produtos.js
```bash
import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produtos = () => {
const global = React.useContext(GlobalContext)

  return (
    <div>
      <li>Produto: {global.dados.nome}</li>
      <li>Preço: {global.dados.preco}</li>
      <li>Descrição: {global.dados.descricao}</li>
                    
      <input type="text"
        onChange={(event) => global.setValorInput(event.target.value)}
      />
      <button onClick={() => global.handleClick()}>Procurar</button>
      
    </div>
  )
}

export default Produtos
```

* Por ultimo no App.js sempre verificar se a tag criada no arquivo do createContext , a tag que é o "corpo" a mesma na qual desestruturamos o children que representa o conteudo que vai ficar entre as tags que configuramos está correta.

* Lembrando o elemento que vai ser renderizado na tela tem que focar entre essas tags, que no caso se chama "GlobalStorange".

@exemplo App.js
```bash
import React from 'react';
import Produtos from './Produtos';
import { GlobalStorage } from './GlobalContext';



const App = () => {
  
  return (
    <GlobalStorage>

       <Produtos/>
       
    </GlobalStorage>
  ) 
      
}

export default App;
```


# Exercicios de useContex #

* Utilize o globalContext do exemplo anterior para puxar os dados da api abaixo: 

*http://ranekapi.origamid.dev/json/api/produto/

* Assim que o usuario acessar o app.

* Coloque os dados da API no context global, dando acesso aos dados da mesma.

* Defina uma função chamada limparDados que é responsavel por zerar os dados de produto.

* E exponha essa função no contexto global

### Exemplo do arquivo GlobalContext ###

* Nesse aquivo criamos um estado, que vai servir para receber a resposta a API.

* Alem de ser usado no callback limparDados e atualizarResultado, um vai retornar o estado para null, para que as informações sumam, o outro vai fazer um novo fetch para voltar a aparecer os resultados na tela.

* Por ultimo um retorno com o corpo da tag configurada passando os dados do estado e as funções.

@exemplo GlobalContext 
```bash
import React from 'react';

export const GlobalContext = React.createContext();


export const GlobalStorage = ({children}) => {
  const [dados, setDados] = React.useState(null);
  

  React.useEffect(() => {
    fetch('http://ranekapi.origamid.dev/json/api/produto/')
    .then(response => response.json())
    .then(json => setDados(json))
  },[])

  function limparDados() {
    setDados(null)
  }

  function atualizaResultado() {
    fetch('http://ranekapi.origamid.dev/json/api/produto/')
    .then(response => response.json())
    .then(json => setDados(json))
  }

     return (
            <GlobalContext.Provider value={{dados, limparDados, atualizaResultado}}>
                {children}
            </GlobalContext.Provider>

       
    ) 
}
```
### Exemplo do arquivo Produtos ###

* Nesse arquivo, passamos desestruturando o GlobalContext para poder puxar direto o nome das propriedades(dados) assim tornando o codigo mais legivel.

* Fazemos uma condição com if para caso os dados virem como null fazer um retorno null.

* Ai fazemos um map com os dados desestruturados para retornar uma nova array (dados esta vindo em forma de array), fazendo eles virem dentro de uma lista e passando uma chave (key) com o id (que tambem vem na array de resposta).

@exemplo
```bash
import React from 'react'
import { GlobalContext } from './GlobalContext'


const Produtos = () => {
const {dados} = React.useContext(GlobalContext)

if(dados === null) return null

  return (
    <div>
      Produto: {dados.map(produtos => <li key={produtos.id}>{produtos.nome}</li>)}

    </div>
  )
}

export default Produtos

```

### Exemplo do arquivo Limpar.js ###

* Esse arquivo vai ser o componente que vai renderizar os buttons, nele nos importamos o GlogalContext (que contem o createContext).

* Desestruturamos duas const's, que são referentes as duas funções que criamos no outro arquivo.

* Criamos dois buttons, fazemos o evento de click em ambos e adicionamos as funções passadas no context para cada um.

@exemplo
```bash
import React from 'react'
import { GlobalContext } from './GlobalContext'
const Limpar = () => {
    const {limparDados} = React.useContext(GlobalContext)
    const {atualizaResultado} = React.useContext(GlobalContext)

  return (
    <div>
            <button onClick={limparDados}>Limpar</button>
            <button onClick={atualizaResultado}>Nova Busca</button>
    </div>
  )
}


export default Limpar
```
# Custom Hooks #

Podemos criar nossos proprios hooks, assim evitamos a repetição de codigo. Todo custom hook deve começar com a palavra use.
 Exemplo: useNameDoHook. Podemos retornar o que quisermos do hook, seja um valor unico, uma array ou um object.

 @exemplo
 ```bash
 const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  },[key, state]);

  return [state, setState]
 }
 ```

 * Agora um vamos ver como podemos conectar isso lá no nosso arquivo App.js

 * Criamos um estado que utiliza nosso hook, passamos a "key" como primeiro parametro, e o segundo parametro vai ser o valor contido dentro da "key", que chamamos de inicial.

 * Com a ajuda do evento de click, capturamos o target.innerText do button e atualizamos o estado.

 * Quando atualizamos o estado, ele entra novamente lá no nosso hook, atualizando o estado, fazendo que que o useEffect tambem atualize e por sua vez coloque lá dentro do localStorage os valor valores.
 

 @exemplo
```bash
import React from 'react';
import useLocalStorage from './useLocalStorage'

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', 'caneta')
  function handleClick({target}) {
    setProduto(target.innerText);
    
  }
  return (
    <div>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  ) 
      
}

export default App;
```

# useFetch - Custom hook #

Aqui o useCallback é necessario para evitar um render infinito.

@exemplo
```bash
```

### no arquivo useFetch ###

* Criamos o hook useFetch, e dentro dele 3 estados, para data(dados), o erro(error) , carregar(loading) e a função request.

* No final desse hook vamos retornar esses 3 estados para podermos utilizarmos eles no App.js

* Criamos uma função async chamada de request, com dois parametros, url e options, pois ela vai receber a url e tambem podemos passar algumas opcoes para tratar esses dados.

* Nessa function request, colocamos o fetch dentro do try, para ele verificar se está tudo ok, assim como o catch se ouver algum erro, além de passar a response para json e colocar dentro do setData para atualizar o data.

@exemplo
```bash
import React from 'react';

const useFetch = () => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)

    async function request(url, options) {
        try{
            setLoading(true)
            const response = await fetch(url, options)
            const json = response.json()
            setData(json)
        }
        catch(error) {
            setError(erro)
        }
    }
    return {data, loading, error, request}
}
```

* Dentro do try, tambem colocamos como true o setLoading, para que lá no App.js com o auxilio do if, criaremos uma condição onde se o loading for true vai retornar uma <p>Carregando</p>

* Dentro do catch vamos colocar o setError(erro) para apontar o erro caso ocorra.

### finally ###
junto com o try e o catch podemos colocar tambem o "finally", essa propriedade faz com que tudo que estiver dentro dela aconteça no final.

* vamos utilizar ele para atualizar no fim o setLoading(false) para que ele pare de carregar e mostre as informações recebidas da url que passamos no App.js

@exemplo
```bash
import React from 'react';

const useFetch = () => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)

    async function request(url, options) {
        try{
            setError(null)
            setLoading(true)
            const response = await fetch(url, options)
            const json = await response.json()
            
        }
        catch(error) {
            setError('Erro')
        }
        finally {
            setData(json)
            setLoading(false)
        }
    }

    return {data, loading, error, request}
}

export default useFetch;
```
## Podemos melhorar o useFetch ##
No caso de respostas de API, podemos mostrar para o usuario a response e o json, pois pode ser feito inumeras coisas com isso, no codigo acima só estava sendo mostrado os dados da API já tratados, agora vamos fazer o usuario tambem ter acesso a response/json.

* Criamos let response e let json para que o try e o finally tenham acesso a essas varieveis, uma vez que o "finally' é sempre executado ele pode servir como retorno da função, ai desestruturamos o response e json lá no "finally" para usarmos no nosso arquivo App.js

* Podemos tambem definir o setData(json) no finally para que mesmo que ocorra algum erro ele vai ser em formato json, e o catch recebe json = null, para ele retornar a seu estado original.

* IMPORTANTE, por fim tornamos a function request em uma const request e passamos para ela o useCallback, fazendo que que quando o request seja atualizado varias vezes ele seja consideredo uma unica função, para que lá no App.js ele não fique em um loop infinito, pois lá precisamos passar na [ ] do useEffect o request como array de dependencia.

@exemplo
```bash
import React from 'react';

const useFetch = () => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)

    const request = React.useCallback(async (url, options) => {
        let response;
        let json;
        try{
            setError(null)
            setLoading(true)
             response = await fetch(url, options)
             json = await response.json()
            setData(json)
        }
        catch(error) {
            setError('Erro')
        }
        finally {
            setLoading(false)
            return {response, json}
        }
    },[])

    return {data, loading, error, request}
}

export default useFetch;
```
* IMPORTANTE, o exemplo do arquivo App.js já em sua melhor versão para que o usuario tenha acesso ao response e ao json vai estar logo abaixo juntos com as demais explicações sobre o App.js


### No arquivo App.js ###

Iniciamos desestruturando {request, data, error, loading} utilizando nosso hook useFetch.

* Atraves dele vamos poder usar nossa função e manipular os dados dentro de data.

* Criamos um useEffect, que vai receber o request( ) com a nossa url para nosso hook fazer o fetch. Criamos uma function async para podermos desestruturar o response e json, precisamos sempre passar o await antes para que a req não seja uma promisse, agora é possivel acessarmos o response e o json direto em nosso App.js, IMPORTANTE lembrar que nesse caso precisamos ativar a function que criamos para pegar a response e o json, ativamos dentro do proprio useEffect.

* Precisamos fazer um if para fazer uma condição de caso ocorra um error, ele retornar um <p>{error}</p> que configuramos lá em nosso hook no catch. 

* Além disso colocamos o setError(null) logo no começo do nosso try, pois caso tenha dado erro e o usuario tente novamente, mesmo que não haja mais erro ele vai apontar que sim, entao isso vai ser resolvido mudando para null logo no inicio do try.

* Vamos fazer um if para que se a pagina se encontre carregando mostre na tela carrengando

* Precisamos fazer uma condição com if para caso os nossos dados forem true, ai o codigo dá prosseguimento e o return vai ser renderizado na tela.

* Isso para quando nos formar fazer um "map" de data, o valor não esteja como null, nesse caso criamos um map returnando a lista de produtos em um <p>.

* Caso contrario, se nem a condição de loading, nem de data forem true, colocamos um else return null no final do codigo, para ele retornar um valor null.

@exemplo
```bash
import React from 'react';
import useFetch from './useFetch';



const App = () => {
  const {request, data, loading, error} = useFetch()

  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await request('http://ranekapi.origamid.dev/json/api/produto/')
    }
    fetchData()
    
  },[request])
    console.log(data)
  if(error) return <p>{error}</p>
  if(loading === true) return <p>Carregando</p>
  if(data) 
    return (
      <div>
      {data.map((produtos) => (
        <p key={produtos.id}>{produtos.nome}</p>
      ))}
      </div>
    )      
  else return null
}

export default App;
```















