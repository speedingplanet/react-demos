import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import FormDataControlledComponents from './FormDataControlledComponents';
import FormDataUtilityHandler from './FormDataUtilityHandler';

function FormDataManager() {
	return (
		<>
			<div className="row">
				<div className="col-3">
					<ul className="list-unstyled">
						<li>
							<Link to="/form-data/controlled-components">
								Controlled Components
							</Link>
						</li>
						<li>
							<Link to="/form-data/utility-event-handler">
								Controlled Components with a utility event handler
							</Link>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="controlled-components"
							element={<FormDataControlledComponents />}
						/>
						<Route
							path="utility-event-handler"
							element={<FormDataUtilityHandler />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default FormDataManager;
