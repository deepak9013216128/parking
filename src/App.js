import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import SocietyPage from './pages/society-page/society-page.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


function App() {
  return (
    <div className="App">
    	<Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/society' component={SocietyPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
