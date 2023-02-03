# create-react-app #

Criar um ambiente de desenvolvimento já configurado e otimizado para a craição de aplicativos com React.

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


