import React from 'react';
import PropTypes from 'prop-types';

import './SimpleContainer.css';

const SimpleContainer = (props) =>
<div id={props.id} className={`SimpleContainer ${props.isGreyBackground && "isGreyBackground"}`}>
	<h2>{props.name}</h2>
	{props.children}
</div>;

SimpleContainer.defaultProps = {
	isGreyBackground: false
};

SimpleContainer.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isGreyBackground: PropTypes.bool
};

export default SimpleContainer;