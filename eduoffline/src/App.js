import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Inicio from './Inicio';
import Clases from './Clases';
import Libros from './Libros';
import Recursos from './Recursos';
import Reuniones from './Reuniones';
import Navbar from './Navbar';
import Ingresar from './Ingresar';
import Registrarse from './Registrarse';
import MateriaClases from './MateriaClases';
import VideoClase from './VideoClase';
import React from 'react';
import VisorLibro from './VisorLibro';

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
          <Route exact path="/libros/:libro" component={VisorLibro}/>
          <Route exact path="/clases" component={Clases}/>
          <Route exact path="/clases/:materia" component={MateriaClases}/>
          <Route exact path="/clases/:materia/:video" component={VideoClase}/>
          <Route exact path="/recursos" component={Recursos}/>
          <Route exact path="/reuniones" component={Reuniones}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
