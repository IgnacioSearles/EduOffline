import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './fonts.css';
import './App.css';
import Inicio from './Inicio';
import Clases from './Clases';
import Libros from './Libros';
import Recursos from './Recursos';
import Reuniones from './Reuniones';
import Navbar from './Navbar';
import Ingresar from './Ingresar';
import Registrarse from './Registrarse';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/ingresar" component={Ingresar}/>
          <Route exact path="/registrarse" component={Registrarse}/>
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/libros" component={Libros}/>
          <Route exact path="/clases" component={Clases}/>
          <Route exact path="/recursos" component={Recursos}/>
          <Route exact path="/reuniones" component={Reuniones}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
