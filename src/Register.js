import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Dailytracker from './Dailytracker';
import { withRouter, Route } from 'react-router-dom';

const formValid = (formErrors) => {
	let valid = true;

	// validate form errors being empty
	Object.values(formErrors).forEach((val) => {
		val.length > 0 && (valid = false);
	});

	// validate the form was filled out
	// Object.values(rest).forEach((val) => {
	// 	val === null && (valid = false);
	// });

	return valid;
};

class Register extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			password: '',
			confirmPassword: '',
			relationship: '',
			formErrors: {
				firstName: 'error',
				lastName: 'error',
				password: 'error',
				confirmPassword: '',
				// password: 'minimum 3 characaters required',
				relationship: '',
			},
			invalid: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	firstNamehandler = (event) => {
		this.setState({
			firstName: event.target.value,
		});
	};
	lastNamehandler = (event) => {
		this.setState({
			lastName: event.target.value,
		});
	};
	passwordhandler = (event) => {
		this.setState({
			password: event.target.value,
		});
	};
	confirmPasswordhandler = (event) => {
		this.setState({
			confirmPassword: event.target.value,
		});
	};

	relationshiphandler = (event) => {
		this.setState({
			relationship: event.target.value,
		});
	};

	//main handle submit where i stores the state of the react render from the user./ input=> setstate=>submithandler on click
	handleSubmit = (event) => {
		event.preventDefault();

		// alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
		if (this.state.firstName.length < 2) {
			this.setState({ invalid: true });
		} else if (this.state.lastName.length < 2) {
			this.setState({ invalid: true });
		} else if (this.state.password.length < 6) {
			this.setState({ invalid: true });
		} else {
			this.props.history.push('/Dailytracker');
			console.log(this.state);
			this.setState({
				firstName: '',
				lastName: '',
				password: '',
				confirmPassword: '',
				relationship: '',
			});
		}
	};

	render() {
		const { formErrors } = this.state;
		return (
			<main>
				<Route path='/Dailytracker' component={Dailytracker} />
				{/* <Nav /> */}
				<div className='container'>
					<h1>INFANTRY {this.props.name}</h1>
				</div>
				<div className='container'>
					{this.state.invalid && <p>invalid</p>}
					<form onSubmit={this.handleSubmit}></form>
					<h1>Register {this.props.name}</h1>
					<form>
						<label>Relationship :</label>
						<br />
						<select
							onChange={this.relationshiphandler}
							defaultValue='Select Relationship'>
							<option defaultValue>Select Relationship</option>
							<option value='mother'>Mother</option>
							<option value='father'>Father</option>
							<option value='others'>Others</option>
						</select>
						<br />
						<input
							className={this.state.invalid ? 'error' : null}
							type='text'
							value={this.state.firstName}
							onChange={this.firstNamehandler}
							placeholder='FirstName...'
						/>
						{/* form message 👇🏽 */}
						{formErrors.firstName.length > 0 && (
							<span className='errorMessage'>{formErrors.firstName}</span>
						)}
						<label>Last Name :</label>{' '}
						<input
							type='text'
							value={this.state.lastName}
							onChange={this.lastNamehandler}
							placeholder='LastName...'
						/>
						{this.state.invalid && (
							<p className='errorMessage'>{this.state.formErrors.lastName}</p>
						)}
						<br />
						<input
							type='text'
							value={this.state.password}
							onChange={this.passwordhandler}
							placeholder='Password...'
						/>
						<input
							type='text'
							value={this.state.confirmPasswordhandler}
							onChange={this.confirmPasswordhandler}
							placeholder='Confirm Password...'
						/>
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
		);
	}
}

export default Register;
