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
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
  };
  





	render() {
    
		return (
			<main>
				<div className='container'>
					<h1>INFANTRY {this.props.name}</h1>
				</div>
				<div className='container'>
					<h1>Register {this.props.name}</h1>
					<form>
						<input type='text' placeholder='First Name...' />
						<input type='text' placeholder='Last Name...' />
						<br />
						<input type='text' placeholder='Password...' />
						<input type='text' placeholder='Confirm Password...' />
						<br />
						<input type='submit' value='Submit' />
						<br />
						<div className='signIn'>
							<small>Already Have an Account?</small>
							<button type='sign in' to='/Form'>
								Sign In
							</button>
						</div>
					</form>
				</div>
			</main>
		);}
}

export default App;
