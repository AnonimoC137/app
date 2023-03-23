# Aqui vou explicar o passo a passo #

* Inicialmente vamos fazer o esqueleto do projeto lá no App.js, divs, h1, inputs (Ou seja elementos html).

* Vamos instalar uma biblioteca chamada React icons, para colocarmos icones no projeto, (nesse caso o dá lupa no button de buscar).

* Para instalar vamos parar de rodar nosso projeto, apertando ctrl + c

* Depois vamos colocar no terminal exemplo abaixo:

@exemplo
```bash
npm install react-icons
```

* Depois de instalada é só importar exemplo: 

@exemplo
```bash
import {FiSearch} from 'react-icons/fi'
```
* Detalhe pelo visto só funciona passando o nome desestruturado.

* Lá no button que criamos vamos colocar esse FiSearch como se voce um componente criado por nos, com size e color.

@exemplo
```bash
<button className="buttonSearch">
         <FiSearch size={25} color='#000'/>
</button>
```
* Criado uma tag main para colocar todos os dados de CEP, rua, complemento, bairro, e estado, para depois alimentar isso com os dados da API.

* criamos o arquivo style.css, e importamos para o App.js para fazer a estilização da pagina.

* Agora para dar continuação ao nosso codigo, vamos criar um estado com o useState.

* colocado dentro do input o onChange, que captura um evento de "digitar" e dentro dele é possivel passar uma função anonima para atualizar o estado com o setInput.

*

