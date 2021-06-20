import logo from './logo.svg';
import './App.css';

function App() {
  const curso = 'diplomatura en React';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenido</h1>
      </header>
      <main>
        <p>
          A la {curso}
        </p>
      </main>
      <footer>
        <p>
        Trabajo proyecto inicial de React Js realizado por Marcos Peirone Para la {curso} brindada por la
        <a href="https://sceu.frba.utn.edu.ar/e-learning/" rel="noopener noreferrer" target="_blank">Universidad Tecnológica Nacional</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
