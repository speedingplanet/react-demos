import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BasicQuery from './BasicQuery';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
});

function ApolloManager() {
	return (
		<ApolloProvider client={client}>
			<div className="row">
				<div className="col-3">
					<ul className="list-unstyled">
						<li>
							<Link to="/apollo/basic-example">Basic Query</Link>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="basic-example"
							element={<BasicQuery />}
						/>
					</Routes>
				</div>
			</div>
		</ApolloProvider>
	);
}

export default ApolloManager;
