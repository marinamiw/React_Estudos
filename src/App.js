import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from "./components/Pessoa"
import Frase from "./components/Frase"
import Notas from "./components/Notas"
import List from "./components/List"
import Contador from "./components/Contador"
function App() {
 

  
  return (
    <div className="app">
      <Frase></Frase>
      <p>Testando CSS</p>
      <Frase/>
      <h1>
      <Pessoa nome = "Marina" idade = "21" profissao="desenvolvedora"/>
      </h1>
      <h2>
        <Notas matematica = "8.0" fisica = "9.5" quimica = "6.4"/>
      </h2>
      <List/>
      <Contador></Contador>
    </div>
  );
}

export default App;
