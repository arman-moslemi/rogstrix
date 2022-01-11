import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/assets/css/styles.css';
import './components/assets/css/responsive.css';
// import * as serviceWorker from './serviceWorker';
import { StateProvider } from './utils/StateProvider';
import reducer, { initialState } from './utils/reducer';
ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
// serviceWorker.unregister();
reportWebVitals();
