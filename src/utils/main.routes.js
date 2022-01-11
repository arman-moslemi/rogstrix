import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../components/features/Home/Home';

import PrivateRoute from './PrivateRoute';
const MainRoutes = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path='/'
					name='صفحه اصلی'
					render={(props) => <Home {...props} />}
				/>
	
				{/* <PrivateRoute path='/pages' component={Layout} /> */}
			</Switch>
		</BrowserRouter>
	);
};

export default MainRoutes;
