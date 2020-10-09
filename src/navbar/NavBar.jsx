import React from 'react';

import NavBarCategory from '../navbar-category/NavBarCategory';

import './NavBar.css';

const NavBar = () =>
<div className="NavBar">
	<NavBarCategory name="About" link="#AboutMeSection"/>
	<NavBarCategory name="Resume" link="#ResumeSection"/>
	<NavBarCategory name="Contact" link="#ContactSection"/>
</div>;

export default NavBar;