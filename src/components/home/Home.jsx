import React from 'react';
import './home.css'
import Social from './Social';
import Data from './Data';
import Scrolldown from './Scrolldown';

const Home = () => {
  return (
    <selection className="home selection" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social/>
          <div className="home__img"></div>
          <Data/>
        </div>
        <Scrolldown/>
      </div>
    </selection>
  )
}

export default Home