import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './fonts.css';
import './App.css';
import Inicio from './Inicio';
import Videos from './Videos';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/videos" component={Videos}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
