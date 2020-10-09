import React from 'react';
import { render } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import NavBarCategory from './NavBarCategory';

Enzyme.configure({ adapter: new Adapter() });

const navBarCategoryDetail = {name:"name", link:"link"};
let wrapped = Enzyme.shallow(<NavBarCategory name={navBarCategoryDetail.name} link={navBarCategoryDetail.link}/>);

describe('NavBarCategory', () => {
	it('renders the NavBarCategory correctly', () =>{
		expect(wrapped).toMatchSnapshot();
	});
});