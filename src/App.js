import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import SocietyPage from './pages/society-page/society-page.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>(
      this.setState({currentUser:user})
     ))
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/society' component={SocietyPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
