import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from '../App/AppContainer';
import store from '../../Redux/store';

const WrappedApp = () => (
	<Provider store={ store }>
		<AppContainer/>
	</Provider>
);
