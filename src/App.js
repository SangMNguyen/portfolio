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

/*const Image1 = require('../assets/bio1.jpg');
const Image2 = require('../assets/bio2.jpg');
const Image3 = require('../assets/bio3.png');
const Image4 = require('../assets/bio4.jpg');

const Image1 = require('../assets/pong.png');
const Image2 = require('../assets/ggimg.png');
const Image3 = require('../assets/discordimg.png');
const Image4 = require("../assets/t4timg.png");

const Back1 = require('../assets/pong.gif');
const Back2 = require('../assets/ggback.png');
const Back3 = require('../assets/discordback.png');
const Back4 = require('../assets/t4tback.png'); */

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

  componentDidMount() {
    document.getElementById("loadingScreen").classList.add("hide");
  }

  render() {
    return (
      <div className="App">
        <Header home={this.props.location.pathname === '/' ? true : false} curLoc={this.props.location.pathname}/>
        <div className="container">
          <TransitionGroup>
            <CSSTransition 
              key={this.props.location.pathname}
              timeout={{ enter: 1000, exit: 1000 }}
              classNames={'fade'}
            >
              <Switch location={this.props.location}>
                <Route exact path="/" component={Home}/>
                <Route path="/bio" component={Biography}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
export default withRouter(App);