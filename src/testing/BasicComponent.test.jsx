import React from 'react';
import { it, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BasicComponent from './BasicComponent';

it('Smoke test (it)', () => {
	expect(1 + 1).toBe(2);
});

test('Smoke test (test)', () => {
	expect(1 + 1).toBe(2);
});

it('should render the BasicComponent component', () => {
	render(<BasicComponent />);

	/* 
	Find an element by its text, error/failure if not found
	screen.getByText('Apples')
	expect().not -> Negates the next matcher
	toBeNull() -> Checks for nullity
	*/

	expect(screen.getByText('Apples')).not.toBeNull();
	expect(screen.getByText('Bananas')).toBeInTheDocument();
});

it('should access the component in several ways', () => {
	render(<BasicComponent />);

	// Plain text, must be exact, case sensitive
	expect(screen.getByText('Apples')).not.toBeNull();

	// Inexact match, and case-insensitive
	expect(screen.getByText('App', { exact: false })).not.toBeNull();

	// Regular expression match (currently matching the behavior of exact)
	expect(screen.getByText(/app/i));
});

/*
	This may be necessary sometimes, but it goes against the philosophy of
	testing library
*/
it('should allow access to the underlying DOM', () => {
	// The nearest element wrapper around this component
	const { container } = render(<BasicComponent />);

	let secondListItem = container.querySelector('li:nth-child(2)');
	expect(secondListItem).not.toBeNull();
	expect(secondListItem.textContent).toEqual('Bananas');
});

it('should allow access via a test id', () => {
	render(<BasicComponent />);
	expect(screen.getByTestId('oranges')).not.toBeNull();
});
