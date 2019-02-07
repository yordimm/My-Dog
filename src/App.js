import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Home from './Views/Home';
import Todos from './Views/Todos';
import Detail from './Views/Detail';

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
            <Route exact path="/" component={Home} />
            <Route path="/todos" component={Todos} />
            <Route path="/detail/:id" component={Detail} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
