import React from 'react';
import MyMap  from './components/map'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Header from './components/header';

import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <MyMap/>
    </div>
  );
}

export default App;
