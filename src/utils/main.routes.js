import React from 'react';
import { BrowserRouter, Switch, Route,HashRouter } from 'react-router-dom';

import Home from '../components/features/Pages/Home';
import EachCategory from '../components/features/Pages/EachCategory'
import Login from '../components/features/Pages/Login';

import Verify from "../components/features/Pages/Verify";
import ErrorPage from "../components/features/Pages/404";
import Products from '../components/features/Pages/Products';
import ProductsRog from '../components/features/Pages/ProductsRog';
import ProductsSearch from '../components/features/Pages/ProductsSearch';
import ProductsSpecial from '../components/features/Pages/ProductsSpecial';
import MainPage from "../components/features/Pages/MainPage";
import WrongPass from "../components/features/Pages/WrongPass";
import SelectPowerSupply from '../components/features/Pages/SelectPowerSupply';
import CompletedSystems from '../components/features/Pages/CompletedSystems';
import SystemGuide from "../components/features/Pages/SystemGuide";
import CompareSupplySystem from '../components/features/Pages/CompareSupplySystem';
import CompareSupplyProduct from '../components/features/Pages/CompareSupplyProduct';
import SingleProduct from '../components/features/Pages/SingleProduct';
import MakeSystemSingle from '../components/features/Pages/MakeSystemSingle';
import BlogMain from "../components/features/Pages/BlogMain";
import PrivateRoute from './PrivateRoute';
import RegisterVerify from '../components/features/Pages/RegisterVerify';
import RegisterStep1 from '../components/features/Pages/RegisterStep1';
import RegisterStep2 from '../components/features/Pages/RegisterStep2';
import RecoveryPass from '../components/features/Pages/RecoveryPass';
import SingleBlog from '../components/features/Pages/SingleBlog';
import AssembleMain from '../components/features/Pages/AssembleMain';
import EditInformation from '../components/features/Pages/EditInformation';
import TicketList from '../components/features/Pages/TicketList';
import Address from '../components/features/Pages/Address';
import ChangePassword from '../components/features/Pages/ChangePassword';
import ProductsViewed from '../components/features/Pages/ProductsViewed';
import UserOrder from '../components/features/Pages/UserOrder';
import UserComments from '../components/features/Pages/UserComments';
import SavedProducts from '../components/features/Pages/SavedProducts';
import CommingSoon from '../components/features/Pages/ComingSoon';
import CartStep1 from '../components/features/Pages/CartStep1';
import CartStep2 from '../components/features/Pages/CartStep2';
import AssembleSecond from '../components/features/Pages/AssembleSecond';
import Factor from '../components/features/Pages/Factor';
import AboutUsPage from '../components/features/Pages/AboutUsPage';
import ScrollToTop from '../components/features/layouts/ScrollToTop';

const MainRoutes = (props) => {
	return (
		// <BrowserRouter>
		<BrowserRouter>
		<ScrollToTop/>
			<Switch>
				<Route
					exact
					path='/MainPage'
					name='صفحه اصلی'
					render={(props) => <MainPage {...props} />}
				/>
					<Route

					path='/EachCategory/:id'
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

					path='/Factor/:id'
					name='factor'
					render={(props) => <Factor/>}>

					</Route>
					<Route

					path='/Home'
					name='HomeReg'
					render={(props) => <Home/>}>

					</Route>
					<Route

					path='/Products/:id/:brands?'
					name='Products'
					render={(props) => <Products/>}>

					</Route>
					<Route

					path='/ProductsRog/:id'
					name='Products'
					render={(props) => <ProductsRog/>}>

					</Route>
					<Route

					path='/ProductsSearch/:id'
					name='Products'
					render={(props) => <ProductsSearch/>}>

					</Route>
					<Route

					path='/ProductsSpecial'
					name='Products'
					render={(props) => <ProductsSpecial/>}>

					</Route>
					<Route

					path='/CompletedSystems'
					name='سیستم های تکمیل شده'
					render={(props) => <CompletedSystems/>}>

					</Route>
					<Route

					path='/SelectPowerSupply/:id'
					name='انتخاب منبع تغذیه'
					render={(props) => <SelectPowerSupply/>}>

					</Route>
					<Route

					path='/SystemGuide'
					name='راهنمای ساخت سیستم'
					render={(props) => <SystemGuide/>}>

					</Route>
					<Route

					path='/CompareSupplySystem/:id'
					name='مقایسه '
					render={(props) => <CompareSupplySystem/>}>

					</Route>
					<Route

					path='/CompareSupplyProduct/:id'
					name='مقایسه '
					render={(props) => <CompareSupplyProduct/>}>

					</Route>
					<Route

					path='/SingleProduct/:id'
					name='هر محصول'
					render={(props) => <SingleProduct/>}>

					</Route>
					<Route

					path='/MakeSystemSingle/:id'
					name='ساخت سیستم'
					render={(props) => <MakeSystemSingle/>}>

					</Route>
					<Route

					path='/BlogMain'
					name='صفحه اصلی بلاگ'
					render={(props) => <BlogMain/>}>

						</Route>
						<Route

					path='/RegisterStep1'
					name='ثبت نام گام1'
					render={(props) => <RegisterStep1/>}>

						</Route>
						<Route

path='/RegisterStep2/:id'
name='ثبت نام گام2'
render={(props) => <RegisterStep2/>}>

	</Route>
						<Route

					path='/RegisterVerify/:id'
					name='ثبت نام'
					render={(props) => <RegisterVerify/>}>

						</Route>
						<Route

					path='/SingleBlog/:id'
					name='هر مقاله'
					render={(props) => <SingleBlog/>}>

						</Route>
						<Route

						path='/AssembleMain/:id'
						name='اسمبل'
						render={(props) => <AssembleMain/>}>

						</Route>
						<Route

path='/AssembleSecond'
name='اسمبل'
render={(props) => <AssembleSecond/>}>

</Route>
						<Route

						path='/EditInformation/:id'
						name='ویرایش اطلاعات'
						render={(props) => <EditInformation/>}>

						</Route>
						<Route

						path='/Address/:id'
						name='آدرس های من'
						render={(props) => <Address/>}>

						</Route>
						<Route

						path='/ChangePassWord/:id'
						name='تغییر کلمه عبور'
						render={(props) => <ChangePassword/>}>

						</Route>
						<Route

						path='/ProductsViewed/:id'
						name='محصولات مشاهده شده'
						render={(props) => <ProductsViewed/>}>

						</Route>
						<Route

						path='/UserOrder/:id'
						name='سفارش های من'
						render={(props) => <UserOrder/>}>

						</Route>
						<Route

						path='/UserComments'
						name='نظرات من'
						render={(props) => <UserComments/>}>

						</Route>
						<Route

						path='/SavedProducts/:id'
						name='محصولات ذخیره شده'
						render={(props) => <SavedProducts/>}>

						</Route>
						<Route

						path='/TicketList/:id'
						name='لیست تیکت ها '
						render={(props) => <TicketList/>}>

						</Route>
						<Route

						path='/CartStep1'
						name='سبد خرید گام 1'
						render={(props) => <CartStep1/>}>

						</Route>
						<Route

path='/About/:id'
name='درباره ما'
render={(props) => <AboutUsPage/>}>

</Route>
						<Route

path='/CartStep2/:id'
name='سبد خرید گام 2'
render={(props) => <CartStep2/>}>

</Route>
						<Route
						path='/'
						name='در حال به روز رسانی'
						render={(props) => <CommingSoon/>}></Route>

				{/* <PrivateRoute path='/pages' component={Layout} /> */}
			</Switch>
		</BrowserRouter>
	);
};

export default MainRoutes;
