import React from 'react';
import { render } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import SimpleContainer from './SimpleContainer';

Enzyme.configure({ adapter: new Adapter() });

const sectionDetail = {id:"id", name:"name"};
let wrapped = Enzyme.shallow(<SimpleContainer id={sectionDetail.id} name={sectionDetail.name}/>);

describe('SimpleContainer', () => {
	it('renders the SimpleContainer correctly', () =>{
		expect(wrapped).toMatchSnapshot();
	});
});