import React from 'react';
import Wormhole from './components/wormhole/Wormhole';
import Header from './components/header/Header';
import TextContainer from './components/text/textContainer/TextContainer';

import './App.css';


const App = () => {
  return (
    <div>
      <Wormhole />
      <Header />
      <TextContainer />
    </div>
  );
};

export default App;