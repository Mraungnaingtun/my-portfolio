import React from 'react';
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import StartPage from './components/StartPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact component={StartPage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
