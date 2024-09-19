import logo from './logo.svg';
import './App.css';

const Card = ({titulo, desc, persona, ifecha, tfecha}) => {
  return (
    <div className="card">
      <h4>Título: {titulo}</h4>
      <h4>Descripción: {desc}</h4>
      <h4>Persona asignada: {persona}</h4>
      <h4>Fecha inicio: {ifecha}</h4>
      <h4>Fecha de fin: {tfecha}</h4>
    </div>
  );
}

const CardWithChild = ({children}) => {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div>
      </div>
      <header className="App-header">
      <Card titulo={"titulo1"} desc={"desc1"} persona={"juan1"} ifecha={"01/01/2024"} tfecha={"01/12/2024"}/>
      <Card titulo={"titulo2"} desc={"desc2"} persona={"juan2"} ifecha={"01/03/2024"} tfecha={"01/06/2024"}/>
      <Card titulo={"titulo3"} desc={"desc3"} persona={"juan3"} ifecha={"01/02/2024"} tfecha={"01/05/2024"}/>
      <CardWithChild>
        <h4>Título: children1</h4>
        <h4>Descripción: card with children1</h4>
        <h4>Persona asignada: pepe1</h4>
        <h4>Fecha inicio: 01/01/2024</h4>
        <h4>Fecha de fin: 02/01/2024</h4>
      </CardWithChild>
      <CardWithChild>
        <h4>Título: children2</h4>
        <h4>Descripción: card with children2</h4>
        <h4>Persona asignada: pepe2</h4>
        <h4>Fecha inicio: 01/01/2024</h4>
        <h4>Fecha de fin: 02/01/2024</h4>
      </CardWithChild>
      <CardWithChild>
        <h4>Título: children3</h4>
        <h4>Descripción: card with children3</h4>
        <h4>Persona asignada: pepe3</h4>
        <h4>Fecha inicio: 01/01/2024</h4>
        <h4>Fecha de fin: 02/01/2024</h4>
      </CardWithChild>

      </header>
    </div>
  );
}

export default App;
