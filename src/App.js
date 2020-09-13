import React from 'react';
import './App.css';
import Register from './Register';
import Dailytracker from './Dailytracker';
import { withRouter, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Route path='/' component={Register} exact />
			<Route path='/Dailytracker' component={Dailytracker} />
		</div>
	);
}

export default withRouter(App);
