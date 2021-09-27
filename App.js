import React from 'react';
import ColdStateNavigator from './src/Navigation/ColdStateNavigator.js';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from "./src/reducers/index";

const store = createStore(reducers,  compose(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <ColdStateNavigator />
    </Provider>
  );
};

export default App;
