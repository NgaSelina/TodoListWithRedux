import React from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';

import Todo from './scr/components/Todo';

import rootReducer from './scr/reducer/RootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));

const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default App;