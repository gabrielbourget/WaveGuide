import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
//import { browserHistory } from 'react-router';

// - Seed data, eventually this will be from a live database.
import artists from '../Datasets/artists';

// - Import root reducer
import rootReducer from './Reducers/index';

const initialState = {
	settings: {
		theme: 'dark',
		language: 'english',
		defaultResultsView: 'grid',
		backdropOpen: false,
		sideMenuOpen: false
	},
	isLoading: false,
	loadStatus: 'READY',
	artists: [],
	displayedArtists: []
};

const store = createStore( rootReducer, initialState, applyMiddleware(thunkMiddleware) );

//export const history = syncHistoryWithStore( browserHistory, store );

// - Get hot reloading to include reducers, 
//   replace entire root reducer, and hence, all reducers.
if (module.hot) {
	module.hot.accept('./Reducers/',() => {
		const nextRootReducer = require('./Reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
