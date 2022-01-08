import React, { useState, useEffect } from 'react';
import './App.css';

const KEY = process.env.REACT_APP_NASA_API_KEY;

function Home() {
	const [imageURL, setImageURL] = useState();

	// API Call
	const makeAPICall = () =>
		fetch(
			`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${KEY}`
		)
			.then((response) => response.json())
			.then((results) => setImageURL(results.photos[4].img_src));

	// Use Effect
	useEffect(() => {
		makeAPICall();
	}, []);

	return (
		<>
			<h1>Let's go, homepage! 🪐</h1>
			<img id='testing' src={imageURL} alt='MARS rover footage' />
		</>
	);
}

export default Home;
