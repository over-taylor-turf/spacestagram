import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from  './Home';
import Photos from './Photos';
import About from './About';

function App() {
	return (
		<div id='page-container'>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' exact component={About} />
				<Route path='/photos' exact component={Photos} />
				<Redirect to='/' />
			</Switch>
		</div>
	);
}

export default App;