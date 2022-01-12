import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import './App.css';

const KEY = process.env.REACT_APP_NASA_API_KEY;

function Home() {
	// Use State
	const [imageOfTheDay, setImageOfTheDay] = useState();
	const [imageTitle, setImageTitle] = useState();
	const [imageInfo, setImageInfo] = useState();
	const [authorCredit, setAuthorCredit] = useState(); 

	// API Call
	const makeAPICall2 = () =>
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${KEY}`)
			.then((response) => response.json())
			.then((results) => {
				// console.log(results.url);
				setImageOfTheDay(results.url);
				setImageTitle(results.title);
				setImageInfo(results.explanation);
				setAuthorCredit(results.copyright);
			});

	// Date Conversion

	// Use Effect
	useEffect(() => {
		makeAPICall2();
	}, []);

	return (
		<div>
			<Nav />
			<h1>
				Spacestagram &nbsp;<i class='fas fa-user-astronaut'></i>
			</h1>
			<img
				id='homepage-wrapper'
				src={imageOfTheDay}
				alt='NASA footage of the day'
			/>
			<div className='featuredImage'>
				<h3 className='imageTitle'>{imageTitle}</h3>
				<h4 className='authorCredit'>{authorCredit}</h4>
				<p className='imageInfo'>{imageInfo}</p>
			</div>

			<footer>
				Made with <i class='fas fa-heart'></i> by Taylor Overturf&nbsp; | &nbsp;January 2022
			</footer>
		</div>
	);
}

export default Home;
