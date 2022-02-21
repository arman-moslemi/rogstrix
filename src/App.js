import React from 'react';
import MainRoutes from './utils/main.routes';
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./context/auth-hook";
const App = (props) => {
	const { token, login, logout } = useAuth();

	return(
	<AuthContext.Provider
      value={{
        isLoggedIn: !!token,
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
