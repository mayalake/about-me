import React from 'react';
import { render } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import ContainerWithImage from './ContainerWithImage';

Enzyme.configure({ adapter: new Adapter() });

const sectionDetail = {id:"id", name:"name", image:"image"};
let wrapped = Enzyme.shallow(<ContainerWithImage id={sectionDetail.id} name={sectionDetail.name} image={sectionDetail.image}/>);

describe('ContainerWithImage', () => {
	it('renders the ContainerWithImage correctly', () =>{
		expect(wrapped).toMatchSnapshot();
	});
});