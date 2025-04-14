import React from 'react';
import { Provider } from 'react-redux';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Customer Manager</h1>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  );
}

export default App;
