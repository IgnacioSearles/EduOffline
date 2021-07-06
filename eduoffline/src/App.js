import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './fonts.css';
import './App.css';
import Home from './Home';
import Videos from './Videos';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/videos" component={Videos}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
