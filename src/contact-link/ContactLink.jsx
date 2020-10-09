import React from 'react';
import PropTypes from 'prop-types';

import './ContactLink.css';

const ContactLink = (props) =>
<div className={`ContactLink ${props.isFirstLink && "isFirstLink"}`}>
	<img className="IconContainer" src={props.image} alt=""/>
	<a className="LinkContainer" href={props.link} target="_blank" rel="noopener noreferrer">{props.text}</a>
</div>;

ContactLink.propTypes = {
	image: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	isFirstLink: PropTypes.bool
}

export default ContactLink;