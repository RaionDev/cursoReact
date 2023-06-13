import logo from './logo.svg';
import './App.css';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <Ejemplo2/>
          <MiComponenteConContexto/>
          <Ejemplo4 nombre="Martin">
            <h3>
              Contenido del props.children
            </h3>
          </Ejemplo4>

      </header>
    </div>
  );
}

export default App;
