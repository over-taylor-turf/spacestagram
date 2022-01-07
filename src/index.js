import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

// import { render } from 'react-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Photos from './Photos';
// import App from './App';

// render(
// 	<BrowserRouter>
// 		<Routes>
// 			<Route path='/' element={<App />}>
// 				<Route index element={<Home />} />
// 				<Route path='/photos' element={<Photos />} />
// 				<Route path='/about' element={<About />} />
// 			</Route>
// 		</Routes>
// 	</BrowserRouter>,
// 	document.getElementById('root')
// );
