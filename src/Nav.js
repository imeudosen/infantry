import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

//giving the links called 'navStyle' a color
function Nav() {
	const navStyle = {
		color: 'white',
	};

	return (
		<nav>
			<h3>Infantry</h3>
			<ul className='nav-links'>
				<Link style={navStyle} to='/Signin'>
					<li>Sin In</li>
				</Link>
				<Link style={navStyle} to='/Register'>
					<li>Register</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
