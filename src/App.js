import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			password: '',
			gender: '',
			formErrors: {
				firstName: '',
				lastName: 'd',
				password: '',
				// password: 'minimum 3 characaters required',
				gender: '',
			},
			invalid: false,
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
  };
  




  
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}

export default App;
