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
# Checkbox # 
O estado do checkbox está relacionado ao checked.

@exemplo
```bash
const App = () => {
  const [termo, settermo] = React.useState(false);

  return(
    <form>
        {termos && <p>Aceitou os termos</p>}
      <label>
        <input 
            type="checkbox"
            value="termos"
            checked={termo}
            onChange={({target}) => setTermos(target.checked)}
        /> 
        Aceito os termos .
      </label>
    </form>
  );
}
```
# Multiplos checkeds # 

Podemos definir um estado para cada item ou uma array que ira conter todos os itens selecionados.

* Nesse modo criamos um estado chamado cor, ele iniciamente vai ser uma array vazia.

* Criamos o handleChange e passamos o target desestruturado, dentro dele vamos fazer um if para verificar se a cor esta com o checkbox selecionado, utilizando o target.checked.

* Caso seja true, vamos atualizar o cores colocando dentro dele uma array com os valores anteriores de cores(caso tenha) + o target.value que seria nossa cor marcada.

* o else vai servir para retirar as cores da array caso ela não esteve mais marcada, para isso vamos utilizar o filter  ele vai retornar a cor que e diferente do target.value, porque nesse caso o target.value vai ser a cor que voce esta desmarcando entao voce quer que ele retorne só o restante das cores, (que no caso vao ser as que estão marcadas).

* No checked de cada input podemos passar o nosso estado (cores) junto com o includes(metodo de array) já que nosso estado é uma array, ai podemos colocar sua respectiva cor, caso o usuario tenha alguma preferencia salva por exemplo no localStorage e que nossa aplicação puxe isso para nosso estado, fazendo com que se ele tiver esse preferencia de cor, a cor já seja selecionada logo no inicio.

@exemplo
```bash
const App = () => {
  const [cores, setCores] = React.useState([ ]);

  function handleChange({target}) {
    if( target.checked) {
        setCores([...cores, target.value])
    } else {
      setCores(
        cores.filter((cor) => {
          return cor !== target.value
        })
      )
    }
  }

  return(
    <form>
      <label>
        <input 
            type="checkbox"
            value="azul"
            checked={cores.includes('azul')}
            onChange={handleChange}
        /> 
        Azul
      </label>
      <label>
        <input 
            type="checkbox"
            value="vermelho"
            checked={cores.includes('vermelho')}
            onChange={hendleChange}
        /> 
        Vermelho
      </label>
    </form>
  );
}
```
# Exercicio #

* Otimize o codigo do slide anterior
* Utilizando a array abaixo
* Cada checkbox na tela

* const coresArray = ['azul', 'roxo','laranja', 'verde', 'vermelho', 'cinza' ]

* Observação IMPORTANTE, quando houver itens repitidos na array, na hora de colocar a key, podemos acrescentar no map um segundo parametro que seria o index, ai passando na key o index.

@exemplo
```bash
const coresArray = ['azul', 'roxo','laranja', 'verde', 'vermelho', 'cinza' ]

const App = () => {
  const [cores, setCores] = React.useState(['vermelho']);

  function handleChange({target}) {
    if( target.checked) {
        setCores([...cores, target.value])
    } else {
      setCores(
        cores.filter((cor) =>  cor !== target.value)
      )
    }
  }

  return(
    <form>
      {coresArray.map((cor) => (
        <div key={cor}>
          <label>
              <input 
                  type="checkbox"
                  value={cor}
                  checked={cores.includes(cor)}
                  onChange={handleChange}
              /> 
              {cor}
            </label>
        </div> 
      ))}
    </form>
  );
}
```
# Componentes - input #

Podemos definir componente para cada tipo de campo de formulario, assim evitamos criar codigo repetido.

@exemplo Input.js
```bash
const Input = ({id, label, setValue, ...props}) => {
  return (
    <>
      <label htmlFor={id}> {label} </label>
      <input
        id={id}
        name={id}
        onChange={({target}) => setValue(target.value)}
        {...props}
      />
    </>
  );
}
```
* Lá em nosso arquivo App.js podemos invocar o componente que criamos e passar para ele o id, label, value, setValue( essa opção é passada para o componente ter acesso a função atualizadora do estado já que ele se encontra em outro arquivo)

* Passamos tambem o ...props , pois não sabemos quantas propriedades mais vamos receber lá no input, entao já deixamos essa opção definida.

@exemplo
```bash
const App = () => {
  const [nome, setNome] = React.useState(' ');
  const [email, setEmail] = React.useState(' ');
  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required/>
      <Input id="email" label="Email" value={email} setValue={setEmail} />
    </form>
  );
}
```
# Componente - Select #

Vamos criar nosso componente, vamos passar para ele o options, que vai ser passado lá no App como uma array de itens, value que vai ser passado com o valor do estado, e o setValue que vai ser passado com o metodo atualizador do nosso estado.

* Criamos um select com o value={value} que contem o valor inicial do nosso estado, ele vai servir para selecionar a opção (option) que contem o mesmo valor inicial, para já deixar selecionado. Nesse caso é o "selecione" que definimos para obrigar o usuario a selecionar algo.

* Dentro dele tambem vai ter o onChange que vai capturar o target.value (o que o usuario selecionou) e vai colocar em nossa função atualizadora do estado.

* Vamos criar um map no options(array de itens que vai ser recebido la no App) para criar por automação as demais opções, passando key e value.

* Por fim vamos tambem passar como ...props e colocar dentro de select para caso tenham mais parametros no futuro que não possamos prever.

@exemplo Select.js
```bash
const Select = ({options, value, setValue, ...props}) => {
  return (
    <select value={value} onChange={({target}) => setValue(target.value) {...props}}>
        <option value="" disabled>Selecione</option>
        {options.map((option) => (
            <option  key={option} value={option}>
                {option}
            </option>
        ))}
    </select>    
  )
}
```
### Exemplo do componente Select em uso no App ###

Vamos passar dentro de options uma array de strings, vamos passar tambem o value com o nosso estado criado para atualizar o Select, e vamos passar o setValue para tambem passar a função atualizadora do estado.

@exemplo
```bash
import Select from './Form/Select';

const App = () => {
 const [select, setSelect] = React.useState('');

  return(
   <form >
      <Select options={['smartphone', 'notebook', 'tablet'] } value={select} setValue={setSelect}/>
   </form>
  );
}
```
