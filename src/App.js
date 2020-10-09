import React from 'react';

import NavBar from './navbar/NavBar';
import AboutMeSection from './about-section/AboutMeSection.jsx';
import ResumeSection from './resume-section/ResumeSection';
import ContactSection from './contact-section/ContactSection';

import './App.css';

const App = () =>
    <div className="App">
    	<header className="Header">
			<NavBar />
			<div className="HeaderText">
				<h1>Maya Lake</h1>
				<p>Software Developer<br/>Los Angeles</p>
			</div>
		</header>
		<AboutMeSection />
		<ResumeSection />
		<ContactSection />
		<footer className="Footer">&#169; 2020 Maya Lake</footer>
    </div>;

export default App;
