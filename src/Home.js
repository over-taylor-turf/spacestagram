import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import './App.css';

// NASA API Key
const KEY = process.env.REACT_APP_NASA_API_KEY;

function Home() {
	// Use State
	const [imageOfTheDay, setImageOfTheDay] = useState();
	const [imageTitle, setImageTitle] = useState();
	const [imageInfo, setImageInfo] = useState();
	const [authorCredit, setAuthorCredit] = useState();
	const [hoverText, setHoverText] = useState({ display: 'none' });

	// API call to "APOD," astronomy photo of the day.
	const makeAPICall2 = () =>
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${KEY}`)
			.then((response) => response.json())
			.then((results) => {
				setImageOfTheDay(results.url);
				setImageTitle(results.title);
				setImageInfo(results.explanation);
				setAuthorCredit(results.copyright);
			});

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
			<p class="featured-photo-text">featured photo of the day</p>
			<img
				id='homepage-wrapper'
				src={imageOfTheDay}
				alt='NASA footage of the day'
			/>
			<h3 className='imageTitle'>{imageTitle}</h3>
			<div className='featuredImage'>
				<h4 className='authorCredit'>{authorCredit}</h4>
				<p className='imageInfo'>{imageInfo}</p>
			</div>

			<footer>
				Made with <i class='fas fa-heart'></i> by Taylor Overturf&nbsp; |
				&nbsp;January 2022
			</footer>
		</div>
	);
}

export default Home;
