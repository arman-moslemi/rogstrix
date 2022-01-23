import React from 'react';
import Home from '../components/features/Pages/Home';
import EachCategory from '../components/features/Pages/EachCategory';
import Login from '../components/features/Pages/Login';
const routes = [
	{
		path: '/',
		exact: true,
		name: 'صفحه اصلی',
		component: <Home />,
	},{
		path: '/EachCategory',
		exact: true,
		name: 'هر دسته بندی',
		component: <EachCategory />,
	},{
		path: '/Login',
		exact: true,
		name: 'ورود',
		component: <Login />,
	},

	
];

export default routes;
