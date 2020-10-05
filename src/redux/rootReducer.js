import { combineReducers } from 'redux'

import iceCreamReducer from './iceCream/iceCreamReducer'


const rootReducer = combineReducers({

  iceCream: iceCreamReducer,

})

export default rootReducer
