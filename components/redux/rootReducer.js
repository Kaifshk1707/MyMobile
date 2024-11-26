// import {combineReducers} from "redux";
// import reducer from "./reducer";

// export default combineReducers({
//     reducer
// })

import { combineReducers } from 'redux';
import reducer from './reducer'; // Ensure this file exists and exports a valid reducer

const rootReducer = combineReducers({
    reducer: reducer, // Add reducers as key-value pairs
});

export default rootReducer;
