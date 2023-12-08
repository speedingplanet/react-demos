import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import FormDataControlledComponents from './FormDataControlledComponents';
import FormDataUtilityHandler from './FormDataUtilityHandler';
import FormDataEventObject from './FormDataEventObject';
import FormDataSingleStateObject from './FormDataSingleStateObject';
import FormWithContext from './form-context/FormWithContext';

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
						<li>
							<Link to="/form-data/event-object">
								Uses only the event object to carry updates
							</Link>
						</li>
						<li>
							<Link to="/form-data/single-state-object">
								Single state object
							</Link>
						</li>
						<li>
							<Link to="/form-data/context-reducer">Context and reducer</Link>
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
						<Route
							path="event-object"
							element={<FormDataEventObject />}
						/>
						<Route
							path="single-state-object"
							element={<FormDataSingleStateObject />}
						/>
						<Route
							path="context-reducer"
							element={<FormWithContext />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default FormDataManager;
