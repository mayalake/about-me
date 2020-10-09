import React from 'react';
import PropTypes from 'prop-types';

import './NavBarCategory.css';

const NavBarCategory = (props) =>
<a className="NavBarCategory" href={props.link}>{props.name}</a>;

NavBarCategory.propTypes = {
	name: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired
}

export default NavBarCategory;