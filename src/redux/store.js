// store.js
import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filteredReducer'; // Import your new reducer

const store = configureStore({
  reducer: {
    // ...other reducers
    filter: filterReducer, // Add your new reducer
  },
});

export default store;
