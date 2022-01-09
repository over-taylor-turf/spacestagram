import React, { useState, useEffect } from 'react';
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
			<h1>Welcome to Spacestagram 🪐</h1>
			<img
				id='homepage-wrapper'
				src={imageOfTheDay}
				alt='NASA footage of the day'
			/>
			<h3>{imageTitle}</h3>
			<h4>{authorCredit}</h4>
			<p>{imageInfo}</p>
		</div>
	);
}

export default Home;
