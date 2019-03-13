import artistReducer from './artistReducer';
import UIReducer from './UIReducer';

// - Combine reducers here, export that to store.
//   Composition works here because when the root reducer 
//   is called, it goes down that return object and calls each
//   composed reducer, which themselves go through their logic, 
//   looking to see if the action matches an option they have.
const rootReducer = (state = [], action) => {
	return {
		UI: UIReducer( state, action ),
		artist: artistReducer( state, action )
	}
};

export default rootReducer;










