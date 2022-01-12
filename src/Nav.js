import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Nav = () => {
	const [hamburger, setHamburger] = useState(false);

	const handleClick = () => {
		setHamburger(!hamburger);
	};

	//  Use Effect
	useEffect(() => {
		handleHamburger();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const handleHamburger = () => {
		if (hamburger === true) {
			return (
				<div id='myLinks'>
					<Link to='/'>
						<p>Featured Photo</p>
					</Link>

					<Link to='/photos'>
						<p>Spacestagram Feed</p>
					</Link>

					<Link to='/about'>
						<p>About</p>
					</Link>
				</div>
			);
		} else {
			return <></>;
		}
	};

	return (
		<div className='header-container'>
			<Link to='/'>
				<span>
					<i class='fas fa-meteor'></i>
				</span>
			</Link>

			<div className='hamburger-menu'>
				<span
					id='icon'
					onClick={() => {
						handleClick();
					}}>
					<i class='fas fa-bars'></i>
				</span>

				{handleHamburger()}
			</div>
		</div>
	);
};

export default Nav;
