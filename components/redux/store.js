// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';

// const store = configureStore({
//     reducer: rootReducer,
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Make sure this is the correct path

const store = configureStore({
    reducer: rootReducer, // `rootReducer` should be an object of reducers or a valid reducer
});

export default store;

