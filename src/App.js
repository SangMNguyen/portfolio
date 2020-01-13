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

  componentDidMount() {
    console.log(this.props.location.key);
  }

  render() {
    return (
      <div className="App">
        <Header home={this.props.location.pathname === '/' ? true : false} curLoc={this.props.location.pathname}/>
        <TransitionGroup>
          <CSSTransition key={this.props.location.pathname} timeout={{enter: 750, exit: 750}} classNames='fade'>
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