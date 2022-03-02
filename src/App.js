import React from 'react';
import MainRoutes from './utils/main.routes';
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./context/auth-hook";
const App = (props) => {
	const { token, login, logout } = useAuth();
console.log(66)
console.log(token)
console.log(token?.length>10||null?false:true)
console.log(token?.length>10||!token?false:true)
console.log(token?.length)
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
