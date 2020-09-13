import React from 'react'
import { Login, Register } from './components/login/index';


class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoginActive: true,
		};
	}

	render() {
		return (
            <div className="form">
                <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" />
                </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" />
                    </div>
            </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>

export default  SignIn;
