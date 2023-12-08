import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
	query GetCountries {
		countries {
			id
			country
			pop2022
		}
	}
`;

function BasicQuery() {
	const { loading, error, data } = useQuery(GET_COUNTRIES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
	if (!data) return <span>No requests made.</span>;

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
						{data.countries.map((country) => (
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

export default BasicQuery;
