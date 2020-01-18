import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const Society = ()=>(
	<div>
		<h1>Society</h1>
	</div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/society/:id' component={Society} />
      </Switch>
    </div>
  );
}

export default App;
