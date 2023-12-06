import React from 'react';
import { countries } from '../../data/countries-table.json';
import '../GridExample.css';
import GridHeaderRow from './GridHeaderRow';
import GridBodyRow from './GridBodyRow';

let columns = [
	{
		field: 'country',
		label: 'Country',
	},
	{
		field: 'pop2022',
		label: 'Population (2022)',
	},
	{
		field: 'area',
		label: 'Size (km^2)',
	},
];

function GridRefactored() {
	return (
		<section style={{ '--columns': columns.length }}>
			<h3>Countries and their population (refactored)</h3>
			<div className="countries-grid">
				<GridHeaderRow columns={columns} />
				<div className="countries-grid-body">
					{countries.map((country) => (
						<GridBodyRow
							key={country.id}
							columns={columns}
							country={country}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default GridRefactored;
