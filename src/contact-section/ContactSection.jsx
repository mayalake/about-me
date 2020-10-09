import React from 'react';

import SimpleContainer from '../container/SimpleContainer';
import ContactLink from '../contact-link/ContactLink';
import GitHubIcon from '../img/github_icon.png';
import LinkedInIcon from '../img/linkedin_icon.png';
import EmailIcon from '../img/email_icon.png';

import './ContactSection.css';

const ContactSection = () =>
<SimpleContainer id="ContactSection" name="Contact">
	<div className="ContactText">
		<p className="FirstTextElement">Please feel free to contact me for any non-spam reason!</p>
		<p>An extra special thanks go to anyone who contacts me for a job-related reason :~)</p>
	</div>
	<div className="ContactLinks">
		<ContactLink isFirstLink image={EmailIcon} link="mailto: maya.lake@outlook.com" text="MAYA.LAKE@OUTLOOK.COM"/>
		<ContactLink image={LinkedInIcon} link="https://www.linkedin.com/in/maya-lake/" text="LINKEDIN.COM/IN/MAYA-LAKE"/>
		<ContactLink image={GitHubIcon} link="https://github.com/mayalake" text="GITHUB.COM/MAYALAKE"/>
	</div>
</SimpleContainer>;

export default ContactSection;