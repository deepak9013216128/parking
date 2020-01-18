import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import SocietyPage from './pages/society-page/society-page.component';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/society' component={SocietyPage} />
      </Switch>
    </div>
  );
}

export default App;
