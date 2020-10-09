import React from 'react';
import { render } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import ContactLink from './ContactLink';

Enzyme.configure({ adapter: new Adapter() });

const contactLinkDetail = {image:"image", text:"text", link:"link"};
let wrapped = Enzyme.shallow(<ContactLink image={contactLinkDetail.image} text={contactLinkDetail.text} link={contactLinkDetail.link}/>);

describe('ContactLink', () => {
	it('renders the ContactLink correctly', () =>{
		expect(wrapped).toMatchSnapshot();
	});
});