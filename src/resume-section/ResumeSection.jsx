import React from 'react';

import ContainerWithImage from '../container/ContainerWithImage';
import resumeImg from '../img/resume.png';
import resume from './Maya_Lake_Resume.pdf';

import './ResumeSection.css';

const ResumeSection = () =>
	<ContainerWithImage
			id="ResumeSection"
			name="Resume"
			image={resumeImg}
			isGreyBackground
	>
		<h2 className="ResumeText">Click <a href={resume} target="_blank" rel="noopener noreferrer">here</a> for a more formal and extended summary of the things I've done.</h2>
	</ContainerWithImage>;

export default ResumeSection;