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
import SelectPowerSupply from '../components/features/Pages/SelectPowerSupply';
import CompletedSystems from '../components/features/Pages/CompletedSystems';
import SystemGuide from "../components/features/Pages/SystemGuide";
import CompareSupplySystem from '../components/features/Pages/CompareSupplySystem';
import SingleProduct from '../components/features/Pages/SingleProduct';
import MakeSystemSingle from '../components/features/Pages/MakeSystemSingle';
import BlogMain from "../components/features/Pages/BlogMain";
import PrivateRoute from './PrivateRoute';
import RegisterVerify from '../components/features/Pages/RegisterVerify';
import Register from '../components/features/Pages/RecoveryPass';
import SingleBlog from '../components/features/Pages/SingleBlog';
import AssembleMain from '../components/features/Pages/AssembleMain';
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
					<Route

					path='/CompletedSystems'
					name='سیستم های تکمیل شده'
					render={(props) => <CompletedSystems/>}>

					</Route>
					<Route

					path='/SelectPowerSupply'
					name='انتخاب منبع تغذیه'
					render={(props) => <SelectPowerSupply/>}>

					</Route>
					<Route

					path='/SystemGuide'
					name='راهنمای ساخت سیستم'
					render={(props) => <SystemGuide/>}>

					</Route>
					<Route

					path='/CompareSupplySystem'
					name='مقایسه منبع تغذیه'
					render={(props) => <CompareSupplySystem/>}>

					</Route>
					<Route

					path='/SingleProduct'
					name='هر محصول'
					render={(props) => <SingleProduct/>}>

					</Route>
					<Route

					path='/MakeSystemSingle'
					name='ساخت سیستم'
					render={(props) => <MakeSystemSingle/>}>

					</Route>
					<Route

					path='/BlogMain'
					name='صفحه اصلی بلاگ'
					render={(props) => <BlogMain/>}>

						</Route>
						<Route

					path='/Register'
					name='ثبت نام'
					render={(props) => <Register/>}>

						</Route>
						<Route

					path='/RegisterVerify'
					name='ثبت نام'
					render={(props) => <RegisterVerify/>}>

						</Route>
						<Route

					path='/SingleBlog'
					name='هر مقاله'
					render={(props) => <SingleBlog/>}>

						</Route>
						<Route

						path='/AssembleMain'
						name='اسمبل'
						render={(props) => <AssembleMain/>}>

						</Route>
				{/* <PrivateRoute path='/pages' component={Layout} /> */}
			</Switch>
		</BrowserRouter>
	);
};

export default MainRoutes;
