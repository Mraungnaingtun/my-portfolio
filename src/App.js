import React from 'react';
import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Qualification from './components/Qualification/Qualification';

function App() {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skill/>
        <Qualification/>
      </main>
    </div>
  );
}

export default App;
