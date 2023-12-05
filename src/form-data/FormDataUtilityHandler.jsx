import React, { useState } from 'react';
import FormDataDisplay from './FormDataDisplay';

function FormDataUtilityHandler() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');

	function handleFormUpdate(field, value) {
		switch (field) {
			case 'firstName':
				setFirstName(value);
				break;
			case 'lastName':
				setLastName(value);
				break;
			case 'city':
				setCity(value);
				break;
			case 'state':
				setState(value);
				break;
		}
	}

	return (
		<>
			<h3>Utility event handler</h3>
			<div className="row">
				<div className="col">
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
								onChange={(event) =>
									handleFormUpdate('firstName', event.currentTarget.value)
								}
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
								onChange={(event) =>
									handleFormUpdate('lastName', event.currentTarget.value)
								}
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
								onChange={(event) =>
									handleFormUpdate('city', event.currentTarget.value)
								}
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
								onChange={(event) =>
									handleFormUpdate('state', event.currentTarget.value)
								}
							/>
						</div>
					</form>
				</div>
				<div className="col">
					<FormDataDisplay
						firstName={firstName}
						lastName={lastName}
						city={city}
						state={state}
					/>
				</div>
			</div>
		</>
	);
}

export default FormDataUtilityHandler;
