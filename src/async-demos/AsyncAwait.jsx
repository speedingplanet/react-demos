import React, { useEffect, useState } from 'react';

function AsyncAwait() {
	const [countries, setCountries] = useState([]);

	// One-time data request
	useEffect(() => {
		async function getData() {
			let url = 'http://localhost:7000/countries';
			/*
			Normally, async-await should be in a try-catch block, but we will 
			catch any errors externally to this function.
			*/
			let response = await fetch(url);
			if (response.ok) {
				let results = await response.json();
				setCountries(results);
			} else {
				throw new Error(`Bad response: ${response.status}`);
			}
		}

		// Errors are handled here
		getData().catch((error) => {
			console.error('async-await: Could not fetch data:', error);
		});
	}, []);

	return (
		<div className="row">
			<div className="col">
				<h3>Async with async-await</h3>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Country</th>
							<th>Population</th>
						</tr>
					</thead>
					<tbody>
						{countries.map((country) => (
							<tr key={country.id}>
								<td>{country.country}</td>
								<td>{country.pop2022}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default AsyncAwait;
