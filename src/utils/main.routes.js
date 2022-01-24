import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../components/features/Pages/Home';
import EachCategory from '../components/features/Pages/EachCategory'
import Login from '../components/features/Pages/Login';
import RecoveryPass from "../components/features/Pages/RecoveryPass";
import Verify from "../components/features/Pages/Verify";
import ErrorPage from "../components/features/Pages/404";
import Products from '../components/features/Pages/Products';
import MainPage from "../components/features/Pages/MainPage";
import WrongPass from "../components/features/Pages/WrongPass";
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
					<Route

					path='/EachCategory'
					name='هر دسته بندی'
					render={(props) => <EachCategory/>}>

					</Route>
					<Route

					path='/Login'
					name='ورود'
					render={(props) => <Login/>}>

					</Route>
					<Route

					path='/RecoveryPass'
					name='بازیابی رمز عبور'
					render={(props) => <RecoveryPass/>}>

					</Route>
					<Route

					path='/Verify'
					name='کد تایید'
					render={(props) => <Verify/>}>

					</Route>
					<Route

					path='/WrongPass'
					name='رمز اشتباه'
					render={(props) => <WrongPass/>}>

					</Route>
					<Route

					path='/404'
					name='404'
					render={(props) => <ErrorPage/>}>

					</Route>
					<Route

					path='/MainPage'
					name='MainPage'
					render={(props) => <MainPage/>}>

					</Route>
					<Route

					path='/Products'
					name='Products'
					render={(props) => <Products/>}>

					</Route>
				{/* <PrivateRoute path='/pages' component={Layout} /> */}
			</Switch>
		</BrowserRouter>
	);
};

export default MainRoutes;
