import React from 'react';
import PropTypes from 'prop-types';

import SimpleContainer from './SimpleContainer';

import './ContainerWithImage.css';

const ContainerWithImage = (props) =>{
	return(
		<SimpleContainer id={props.id} name={props.name} isGreyBackground={props.isGreyBackground}>
			<div className="ContentContainer">
				<img className={`ImageContainer ${props.isCircleImage && "isCircleImage"}`} src={props.image} alt=""/>
				<div className="ContentNextToImage">
					{props.children}
				</div>
			</div>
		</SimpleContainer>
	);
}

ContainerWithImage.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	isGreyBackground: PropTypes.bool,
	isCircleImage: PropTypes.bool
}

export default ContainerWithImage;