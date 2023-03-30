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
