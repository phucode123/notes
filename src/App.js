
import React from 'react';
import { useState } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import Header from './components/header';
import Body from './components/body';

function App() {
  //const [code, setCode] = React.useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="App">
      <div className="Container_App">
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <Body selectedTab={selectedTab}/>
      </div>

    </div>
  );
}

export default App;
