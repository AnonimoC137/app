# CSS componentes #

Ao importar um componente, os estilos importados do mesmo sao automaticamente adicionnados aos css final da build. Independente de voce utilizar o componente ou nao. 

# Conflito #

Todos os arquivos serao unidos em um CSS final e voce é responsavel por garantir que os seletores sejam especificos, para evitar conflito.

@exemplo
```bash
import Title from './Components/Title';
import Produtos from './Components/Produto';

const App = () => {
    return (
        <div>
            <Title texto="Meu titulo"/>
            <Produto />
        </div>
    );
}
```

# CSS module #

Os modules garantem que as classes utilizadas sejam sempre unicas, evitando o conflito. O modo já vem configurado com o create-react-app, basta definirmos o nome do arquivo css com a palavra .module EX: Produto.module.css Devemos definir um nome para a importação, a mesma será transformada em um objeto que possui nomes unicos para as classes.

@exemplo
```bash
import React from 'react'
import styles from './Produto.module.css'

const Produto = () => {
  return (
    <div>
      <h1 classname={styles.h1}>Novo Produto</h1>
      <p className={styles.text}>Esse é o novo produto...</p>
      <button className={styles.button}>Comprar</button>
    </div>
  )
}
```
### camelCase ###

Utilize camelCase "tituloPrincipal", já que o nome da classe se transformara em uma propriedade de um objeto JavaScript, Não utilize hifens "titulo-principal".

@exemplo
```bash
```