import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Inicio from './Inicio';
import Clases from './Clases';
import Libros from './Libros';
import Recursos from './Recursos';
import Mensajes from './Mensajes';
import Navbar from './Navbar';
import Ingresar from './Ingresar';
import Registrarse from './Registrarse';
import MateriaClases from './MateriaClases';
import VideoClase from './VideoClase';
import React from 'react';
import VisorLibro from './VisorLibro';
import MostrarMensaje from './MostrarMensaje';
import EscribirMensaje from './EscribirMensaje';
import Proyectos from './Proyectos';
import Proyecto from './Proyecto';
import VisorDocsProyecto from './VisorDocsProyecto';

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
          <Route exact path="/proyectos" component={Proyectos}/>
          <Route exact path="/proyectos/:proyecto" component={Proyecto}/>
          <Route exact path="/proyectos/:proyecto/:doc" component={VisorDocsProyecto}/>
          <Route exact path="/recursos" component={Recursos}/>
          <Route exact path="/mensajes" component={Mensajes}/>
          <Route exact path="/mensajes/escribir" component={EscribirMensaje}/>
          <Route exact path="/mensajes/mostrar/:id" component={MostrarMensaje}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
