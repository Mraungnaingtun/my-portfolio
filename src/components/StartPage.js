import React from 'react'
import Header from './header/Header';
import Home from './home/Home'
import About from './about/About';
import Skill from './skill/Skill';
import Qualification from './Qualification/Qualification';

const StartPage = () => {
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
  )
}

export default StartPage