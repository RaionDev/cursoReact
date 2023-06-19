import logo from './logo.svg';
import './App.css';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Reloj from './components/pure/reloj';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Reloj/>
          {/* <Ejemplo2/>
          <MiComponenteConContexto/>
          <Ejemplo4 nombre="Martin">
            <h3>
              Contenido del props.children
            </h3>
          </Ejemplo4> */}
          {/* <TaskListComponent/> */}
          <GreetingStyled name="Leo"/>
      </header>
    </div>
  );
}

export default App;
