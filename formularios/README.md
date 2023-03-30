# Reatividade #

Para criarmos campos de formulario reativos, devemos definir o estado para o "value" e a função atualizadora para o "onChange".

* Regras 1, o estado sempre deve ser atribuido ao campo "value".

* Regra 2, a função atualizadora do estado sempre deve ficar dentro do "onChange".


@exemplo
```bash
const  App = () => {
  const [nome, setNome] = React.useState(' ');
  return (
    <form >
      <label htmlFor="nome">Nome</label>
      <input 
        type="text"
        id='nome'
        value={nome}
        onChange={(event)=> setNome(event.target.value)}
       />
       <p>{nome}</p>
    </form>
  );
}
```

# Form #

No form controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o "onSubmit". O preventDefault( ) ira previnir o comportamento padrão, que seria de atulizar a pagina, enviando uma requisição para o que estiver em action=" "

* Observação IMPORTANTE, quando colocado o metodo "onSubmit" como no exemplo abaixo, quando inserirmos um button ele vai gerar um evento de enviar mesmo não tento um onClick nele caso o button esteja dentro do form que contem esse metodo, facilitando muito nosso dia-a-dia. Assim como no onClick podemos passar um callback para o "onSubmit.

@exemplo
```bash
const  App = () => {
  const [nome, setNome] = React.useState(' ');

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input 
        type="text"
        id='nome'
        value={nome}
        onChange={(event)=> setNome(event.target.value)}
       />
       <p>{nome}</p>
       <button>enviar</button>
    </form>
  );
}
```
# Multiplos Campos #
Podemos definir um estado para cada campo.

@exemplo
```bash
const  App = () => {
  const [nome, setNome] = React.useState(' ');
  const [email, setEmail] = React.useState(' ');

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input 
        type="text"
        id='nome'
        name='nome'
        value={nome}
        onChange={(event)=> setNome(event.target.value)}
       />
      
      <label htmlFor="email">Email</label>
      <input 
        type="email"
        id='email'
        name='email'
        value={email}
        onChange={(event)=> setEmail(event.target.value)}
       />
       <p>{email}</p>
       <button>enviar</button>
    </form>
  );
}
```
# Objeto - outra forma de lidar com multiplos campos #

Podemos definir um objeto que ira conter todos os valores dos campos do formulario.

* Em nossa function handleChange, vamos desestruturar o target do evento, para podermos puxar o id e value, que tambem passamos desestruturando, para podermos usa-las no setForm.

* Lembrando que o id vai ser o nome que consta na label (nome ou email nesse caso) e o value é o que vai ser escrito no input.

* Precisamos passar dentro do setForm um objeto, pois estamos trabalhando com objeto dentro do estado, ai dentro do estado criamos um objeto e colocamos o que já existe(caso existir) e passamos o id([id]: value) para pegar esses respectivos valores.

* No input para finalizar, precisamos passar dentro do value o {form.nome} ou {form.email} justamente por se tratar de um objeto precisamos passar ele com uma propriedade (nome , email).

@exemplo
```bash
const  App = () => {
 
    const [form, setForm] = React.useState({
      nome: ' ',
      email: ' ' ,
  });

  function handleSubmit(event) {
      event.preventDeafault();
      console.log(form)
  }

  function handleChange({target}) {
      const {id, value} = target;
      setForm({...form, [id] : value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input 
        type="text"
        id='nome'
        name='nome'
        value={form.nome}
        onChange={handleChange}
       />

        <label htmlFor="email">Email</label>
        <input 
          type="email"
          id='email'
          name='email'
          value={form.email}
          onChange={handleChange}
        />
        <button>enviar</button>
    </form>
  )
}
```

# Exercicios #
// Faça um fetch (post) para a API abaixo
// Para a criação ser aceita é necessario enviar dados de: 
// nome, email, senha, cep, rua, numero, bairro, cidade e estado
// Essa é a função utilizado para realizar o POST

fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type' : 'application/json',  
  },
  body: JSON.stringify(form)
})

* Foi criado uma array com  objeto dentro, com todas as propriedades que vamos utilizar no formulario, assim tornando mais facil criarmos varios campos.

* Com a array criada, fazemos um map usando essa array, e eese map retorna uma div com label e input, utilizando da desestruturação das propriedades que estão no objeto.

* Em nosso estado tambem criamos um objeto, passando todos os valores que vamos precisar para fazer o fetch.

* Utilizamos essa estado que criamos chamado form, para atualizar os valores usando o callback do onChange, que captura os dados do input.

* Criamos tambem um callback para o onSubmit, dentro dele previnimos o padrão, e efetuamos o fetch, pegamos sua resposta e passamos para outro estado que criamos chamado de dados.

* Esse estado dados vai ser utilizado para fazer uma condição, quando a condição for true ele vai retornar na tela uma msg para o usuario, informando que tu do correu corretamente.

@exemplo
```bash
const arrayForm = [
  {
    id: 'nome',
    label: 'nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'cep',
    type: 'number',
  },
  {
    id: 'rua',
    label: 'rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'numero',
    type: 'number',
  },
  {
    id: 'bairro',
    label: 'bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'estado',
    type: 'text',
  },
]

const  App = () => {
  const [dados, setDados] = React.useState(null)
    const [form, setForm] = React.useState({
      nome: ' ',
      email: ' ' ,
      senha: ' ',
      cep: ' ',
      rua: ' ',
      numero: ' ',
      bairro: ' ',
      cidade: ' ',
      estado: ' ',
      
  });


    
  function handleSubmit(event) {
      event.preventDefault();
      fetch('https://ranekapi.origamid.dev/json/api/usuario', {
         method: 'POST',
          headers: {
             'Content-Type' : 'application/json',  
         },
         body: JSON.stringify(form),
      }).then((response) => setDados(response))
     
  }

  function handleChange({target}) {
      const {id, value} = target;
      setForm({...form, [id] : value})
  }

  return (
    <form onSubmit={handleSubmit}>
      {arrayForm.map(({id, label, type}) => (
        <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input 
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            />
        </div>
      ))}
      
        <button>enviar</button>
        {dados && dados.ok && <p>usuario cadrastrado</p>} 
    </form>
  )
}
```
# Textarea #

No React o textarea é utilizando como um input, uma tag unica sem abertura/fechamento e com o value para definir o seu valor interno.

@exemplo
```bash
const App () => {
  const [mensagem, setMensagem] = React.useState(' ');

  return (
    <form>
    <textarea
      id="mensagem"
      value={mensagem}
      rows="5"
      onChange={({target}) => setMensagem(target.value)}
    />
    <p>{mensagem}</p>
    </form>
  );
}
```
# Select no React #
O value e onChange são definidos no select. Para definir um  valor inicial, coloque o mesmo no useState.

* O primeiro options ele vai ser desabled, pois ele vai estar desabilitado e sem valor, para forçar o usuario a selecionar algo.

@exemplo
```bash
const App () => {
  const [select, setSelect] = React.useState(' ');

  return (
    <form>
      <select 
        value={select}
        id="produtos"
        onChange={({target}) => setSelect(target.value)}
      >

        <option disabled value="">Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>

        </select>
    </form>
  );
}
```

# Radio no React #

No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked, O que retorna true ira marcar o botão.

@exemplo
```bash
const App = () => {
  const [radio, setRadio] = React.useState(' ');

  function handleChange({target}) {
    setRadio(target.value)
  }

  return(
    <form>
      <label>
        <input 
            type="radio"
            value="notebook"
            checked={radio === 'notebook'}
            onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input 
            type="radio"
            value="smartphone"
            checked={radio === 'smartphone'}
            onChange={handleChange}
        />
        Smartphone
      </label>
    </form>
  );
}
```

