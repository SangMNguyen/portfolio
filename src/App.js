import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './pages/Home';
import Biography from './pages/Biography';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Header home={this.props.location.pathname === '/' ? true : false}/>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} timeout={500} classNames='fade' appear>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/bio" component={Biography}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
export default withRouter(App);