import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/todo/Header';
import Container from './components/pokedex/containers/AppContainer';
import Data from './components/mock/AppMock';
  class App extends React.Component {
   render(){
      return(
        <Router>
          <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/Header">TodoApp</Link>
              </li>
              <li>
                <Link to="/Root">Pokedex</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path='/Header' component={Header}></Route> 
              <Route exact path='/Root' component={Container}>
                <Container Content={this.props.Content} /> </Route>             
            </Switch>
          </div>
        </Router>
    );
      }
  }
  App.defaultProps = { Content: Data }
  export default App;