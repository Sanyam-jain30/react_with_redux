import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reducer1 from './store/reducer1';
import reducer2 from './store/reducer2';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const rootReducer = combineReducers({
  r1: reducer1,
  r2: reducer2
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
