// import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Nav';

function About() {


	return (
		<>
			<Nav />
			<h1>Hi, I'm Taylor!</h1>
			<p class='about-text'>
				I am a former educator with a Master’s Degree in Applied Linguistics
				from Columbia University. I am deeply curious about language
				acquisition—whether it be a human or computer language. As such, a
				career as a software engineer—with infinite frameworks, libraries and
				languages to learn—excites me as an individual and a professional. Like
				all languages, I write code with the intention of clear communication
				and collaboration with my community. I live with my dog, Uma Thurman, in
				Seattle, WA. When I'm not coding, I'm dreaming about space.
			</p>
			<br />
			<img 
				id='planet-earth'
				src='https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png'
				alt='planet Earth taken from space, swirling white clouds'
			/>
		</>
	);
	}

export default About;
