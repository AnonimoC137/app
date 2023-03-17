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

@exemplo
```bash
React.useEffect(() => {
    document.title = 'Titulo ' + contar;
  }, [contar]);
```



