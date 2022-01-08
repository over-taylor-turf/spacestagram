import React, { useState, useEffect } from 'react';
import './App.css';

const KEY = process.env.REACT_APP_NASA_API_KEY;

function Home() {

	// Use State
	const [imageURL, setImageURL] = useState();
	const [fullCameraName, setFullCameraName] = useState();
	const [shortCameraName, setShortCameraName] = useState();
	const [date, setDate] = useState();
	const [roverName, setRoverName] = useState();

	// Random Number Generator for Photos
	const randomPhoto = Math.floor(Math.random() * 855);

	// API Call
	const makeAPICall = () =>
		fetch(
			`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${KEY}`
		)
			.then((response) => response.json())
			.then((results) => {
				// console.log(results);
				setFullCameraName(results.photos[randomPhoto].camera.full_name);
				setShortCameraName(results.photos[randomPhoto].camera.name);
				setImageURL(results.photos[randomPhoto].img_src);
				setDate(results.photos[randomPhoto].earth_date);
				setRoverName(results.photos[randomPhoto].rover.name);
			});

	// Date Conversion


	// Use Effect
	useEffect(() => {
		makeAPICall();
		// convert();
	}, []);

	return (
		<>
			<h1>Spacestagram 🪐</h1>
			<div className='homepage-photo'>
				<h3>{shortCameraName} Footage</h3>
				<img id='testing' src={imageURL} alt='MARS rover footage' />
				<p>
					{roverName} at {fullCameraName}, {date}
				</p>
			</div>
		</>
	);
}

export default Home;
