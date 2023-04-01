import React from 'react'
import './App.css';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';


const App = () => {
 const [nome, setNome] = React.useState(' ');
 const [email, setEmail] = React.useState(' ');
 const [select, setSelect] = React.useState('');
 const [radio, setRadio] = React.useState('');

  return(
   <form >
      <Radio options={['smartphone', 'notebook']} value={radio} setValue={setRadio}/>
      <Select options={['smartphone', 'notebook', 'tablet'] } value={select} setValue={setSelect}/>
      <Input id="nome" label='nome' value={nome} setValue={setNome} required />
      <Input id="email" label='Email' value={email} setValue={setEmail}/>
      <button>Enviar</button>
   </form>
  );
}

export default App;
