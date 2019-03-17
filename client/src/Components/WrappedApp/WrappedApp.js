import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from '../App/AppContainer';
import store from '../../Redux/store';


import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

const WrappedApp = () => (
	<Provider store={ store }>
		<Router history={ customHistory }>
			<AppContainer/>
		</Router>
	</Provider>
);

export default WrappedApp;
