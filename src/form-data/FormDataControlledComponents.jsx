import React, { useState } from 'react';

function FormDataControlledComponents() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');

	function handleFirstNameChange(event) {
		setFirstName(event.currentTarget.value);
	}

	function handleLastNameChange(event) {
		setLastName(event.currentTarget.value);
	}

	function handleCityChange(event) {
		setCity(event.currentTarget.value);
	}

	function handleStateChange(event) {
		setState(event.currentTarget.value);
	}

	return (
		<>
			<form>
				{/* First Name */}
				<div>
					<label htmlFor="first-name">First Name: </label>
				</div>
				<div>
					<input
						type="text"
						name="first-name"
						id="first-name"
						value={firstName}
						onChange={handleFirstNameChange}
					/>
				</div>
				{/* Last Name */}
				<div>
					<label htmlFor="last-name">Last Name: </label>
				</div>
				<div>
					<input
						type="text"
						name="last-name"
						id="last-name"
						value={lastName}
						onChange={handleLastNameChange}
					/>
				</div>
				{/* City */}
				<div>
					<label htmlFor="city">City: </label>
				</div>
				<div>
					<input
						type="text"
						name="city"
						id="city"
						value={city}
						onChange={handleCityChange}
					/>
				</div>
				{/* State */}
				<div>
					<label htmlFor="state">State: </label>
				</div>
				<div>
					<input
						type="text"
						name="state"
						id="state"
						value={state}
						onChange={handleStateChange}
					/>
				</div>
			</form>
			<div>
				<p>Form data</p>
				<ul>
					<li>First Name: {firstName}</li>
					<li>Last Name: {lastName}</li>
					<li>City: {city}</li>
					<li>State: {state}</li>
				</ul>
			</div>
		</>
	);
}

export default FormDataControlledComponents;
