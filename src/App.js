import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './pages/Home';
import Biography from './pages/Biography';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home',
    }
  }

  switchPage = (view) => {
    this.setState({page: view});
  }

  render() {
    return (
      <div className="App">
        <Header home={this.props.location.pathname === '/' ? true : false} curLoc={this.props.location.pathname}/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/bio" component={Biography}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
      </div>
    );
  }
}
export default withRouter(App);