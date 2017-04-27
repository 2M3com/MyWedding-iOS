// app.js

import React, { Component } from 'react';
import { Router, Scene ,} from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Home from 'src/scenes/Home.js'
import Wedding from 'src/scenes/Wedding.js'

const RouterWithRedux = connect()(Router);
import reducer from './reducers/main.js';


// create store...
//const middleware = [/* ...your middleware (i.e. thunk) */];
const store = createStore(reducer);


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial={true}/>
            <Scene key="wedding" component={Wedding} title="Wedding"/>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
