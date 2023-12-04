import React from 'react';

function BasicComponent() {
	return (
		<div>
			<ul>
				<li>Apples</li>
				<li>Bananas</li>
				<li>Peaches</li>
				<li data-testid="oranges">Oranges</li>
			</ul>
		</div>
	);
}

export default BasicComponent;
