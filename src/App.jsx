import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CancelPromise from './cancel-promise/CancelPromise.jsx';
import EffectHook from './effect-hook/EffectHook.jsx';
import ContextDemo from './context-demo/ContextDemo.jsx';
import HigherOrderComponent from './higher-order-component/HigherOrderComponent.jsx';
import Memoization from './memo-demo/Memoization.jsx';
import DynamicComponents from './dynamic-components/DynamicComponents.jsx';
import ReduxCounter from './redux-counter/ReduxCounter.jsx';
import ReduxCounterBP from './redux-counter-best/ReduxContainer.jsx';
import ReduxToolkitCounter from './redux-counter-tk/ReduxContainer.jsx';
import VisibilityDemo from './visibility-tests/VisibilityDemo.jsx';
import BasicComponent from './testing/BasicComponent';
import IterativeContent from './iterative-content/IterativeContent.jsx';

function App() {
	return (
		<main className="container">
			<header className="row">
				<div className="col">
					<h1>React Demos</h1>
					<hr />
				</div>
			</header>
			<BrowserRouter>
				<div className="row">
					<div className="col">
						<ul className="list-unstyled">
							<li>
								<Link to="cancel-promise">Cancel Promises (axios)</Link>
							</li>
							<li>
								<Link to="effect-hook">Effect Hook</Link>
							</li>
							<li>
								<Link to="context-demo">Context API</Link>
							</li>
							<li>
								<Link to="higher-order-component">Higher Order Component</Link>
							</li>
							<li>
								<Link to="memoization">Memoization</Link>
							</li>
							<li>
								<Link to="dynamic-components">DynamicComponents</Link>
							</li>
							<li>
								<Link to="redux-counter">Redux Counter</Link>
							</li>
							<li>
								<Link to="redux-counter-best-practices">
									Redux Counter (best practices)
								</Link>
							</li>
							<li>
								<Link to="redux-toolkit-counter">
									Redux Counter (using the toolkit)
								</Link>
							</li>
							<li>
								<Link to="visibility-demo">Visbility Demo</Link>
							</li>
							<li>
								<Link to="testable-component">Testable component</Link>
							</li>
							<li>
								<Link to="iterative-content">Iterative content</Link>
							</li>
						</ul>
					</div>
					<div className="col">
						<Routes>
							<Route
								path="/cancel-promise"
								element={<CancelPromise />}
							/>
							<Route
								path="/effect-hook"
								element={<EffectHook />}
							/>
							<Route
								path="/context-demo"
								element={<ContextDemo />}
							/>
							<Route
								path="/higher-order-component"
								element={<HigherOrderComponent />}
							/>
							<Route
								path="/memoization"
								element={<Memoization />}
							/>
							<Route
								path="/dynamic-components"
								element={<DynamicComponents />}
							/>
							<Route
								path="/redux-counter"
								element={<ReduxCounter />}
							/>
							<Route
								path="/redux-counter-best-practices"
								element={<ReduxCounterBP />}
							/>
							<Route
								path="/redux-toolkit-counter"
								element={<ReduxToolkitCounter />}
							/>
							<Route
								path="/testable-component"
								element={<BasicComponent />}
							/>
							<Route
								path="/iterative-content"
								element={<IterativeContent />}
							/>
							<Route
								path="/"
								element={<VisibilityDemo />}
							/>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</main>
	);
}

export default App;
