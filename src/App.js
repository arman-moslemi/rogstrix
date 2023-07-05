import React from 'react';
import MainRoutes from './utils/main.routes';
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./context/auth-hook";
import Sitemap from 'react-router-sitemap';
import { BrowserRouter, Switch, Route,HashRouter } from 'react-router-dom';



const App = (props) => {
	const { token, login, logout } = useAuth();


// const sitemap = new Sitemap(  <Route path='/'/>)
// 	//   .build('https://rogstrix.com')
// 	  .build('http://localhost:3000/')
// 	  .save("./sitemapss.xml")

	return(
	<AuthContext.Provider
      value={{
        isLoggedIn: token?.length>10||!token?false:true,
        token: token,
        login: login,
        logout: logout,
      }}
	  >
		  <MainRoutes/>

	</AuthContext.Provider>
	)
};

export default App;
