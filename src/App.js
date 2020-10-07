import React from 'react';
import Searchbox from './components/serachBar'
import Titles from './components/titles'
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';

const main = {
  minHeight: '100vh',
  backgroundImage: 'url("library.jpg")',
  backgroundPosition: "center",
  backgroundSize: '100% 100%',
  backgroundAttachment: "fixed"
}

function App() {
  return (
    <div style={main}>
      <Provider store={store}>
        <Searchbox></Searchbox>
        <Titles></Titles>
      </Provider>
    </div>
  );
}

export default App;
