import React, { useEffect, useState } from 'react';

function Promises() {
	let url = 'http://localhost:7000/countries';
	const [countries, setCountries] = useState([]);

	// One-time data request
	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(`Bad response: ${response.status}`);
				}
			})
			.then((results) => {
				setCountries(results);
			})
			.catch((error) => {
				console.error('promises: Could not fetch data:', error);
			});
	}, []);

	return (
		<div className="row">
			<div className="col">
				<h3>Async with promises</h3>
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

export default Promises;
