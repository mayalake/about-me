import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () =>{
	const { getByText } = render(<App />);
	const titleElement = getByText(/Software Developer/i);
	const locationElement = getByText(/Los Angeles/i)
	expect(titleElement).toBeInTheDocument();
	expect(locationElement).toBeInTheDocument();
});

test('renders footer', () => {
	const { getByText } = render(<App />);
	const footerElement = getByText(/2020 Maya Lake/i);
	expect(footerElement).toBeInTheDocument();
});
