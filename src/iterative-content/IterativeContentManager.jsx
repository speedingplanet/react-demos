import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import IterativeContent from './IterativeContent';
import GridExample from './GridExample';
import GridRefactored from './grid-refactored/GridRefactored';
import GridSorted from './grid-sorted/GridSorted';
import GridRemote from './grid-remote/GridRemote';

function IterativeContentManager() {
	return (
		<>
			<div className="row">
				<div className="col-3">
					<ul className="list-unstyled">
						<li>
							<Link to="/iterative-content/minimal-example">
								Minimal example
							</Link>
						</li>
						<li>
							<Link to="/iterative-content/grid-example">Grid example</Link>
						</li>
						<li>
							<Link to="/iterative-content/grid-refactored">
								Grid example refactored
							</Link>
						</li>
						<li>
							<Link to="/iterative-content/grid-sorted">Grid with sorting</Link>
						</li>
						<li>
							<Link to="/iterative-content/grid-remote">
								Grid with remote data
							</Link>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="minimal-example"
							element={<IterativeContent />}
						/>
						<Route
							path="grid-example"
							element={<GridExample />}
						/>
						<Route
							path="grid-refactored"
							element={<GridRefactored />}
						/>
						<Route
							path="grid-sorted"
							element={<GridSorted />}
						/>
						<Route
							path="grid-remote"
							element={<GridRemote />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default IterativeContentManager;
