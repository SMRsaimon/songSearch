
import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import NotMatch from './components/NotMatch';


function App() {
  return (

    <Router>

      <Switch>
        <Route exact path="/" component={Home}>
        
        </Route>
        <Route  path="/home" component={Home}>
           
        </Route>
        <Route  path="*" component={NotMatch}>
           
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
