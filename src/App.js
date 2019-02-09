import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from './Views/Home';
import Todos from './Views/Todos';
import Detail from './Views/Detail';
import NavBar from './components/NavBar';
import { navbarRoutes } from './services'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar routes={navbarRoutes} />
            <div className="container">
              <Switch>
                <Route path="/home" component={Home} location="hash" />
                <Route path="/todos" component={Todos} location="hash" />
                <Route path="/detail/:id" component={Detail} location="hash" />
                <Route component={Home} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
