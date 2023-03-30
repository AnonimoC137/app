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
