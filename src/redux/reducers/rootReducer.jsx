import { combineReducers } from 'redux';
import { cakeReducer } from './cakeReducer'
import { coffeeReducer } from './coffeeReducer'
import { iceCreamReducer } from './iceCreamReducer'


const rootReducer = combineReducers({
	cake : cakeReducer,
	coffee : coffeeReducer,
	iceCream : iceCreamReducer,
})

export default rootReducer;