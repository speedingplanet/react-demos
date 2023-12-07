import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Promises from './Promises';
import AsyncAwait from './AsyncAwait';

function AsyncManager() {
	return (
		<>
			<div className="row">
				<div className="col-3">
					<ul className="list-unstyled">
						<li>
							<Link to="/async-demos/promises">Promises</Link>
						</li>
						<li>
							<Link to="/async-demos/async-await">Async-await</Link>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="promises"
							element={<Promises />}
						/>
						<Route
							path="async-await"
							element={<AsyncAwait />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default AsyncManager;
