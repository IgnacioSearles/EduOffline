import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './fonts.css';
import './App.css';
import Inicio from './Inicio';
import Clases from './Clases';
import Libros from './Libros';
import Recursos from './Recursos';
import Reuniones from './Reuniones';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
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
