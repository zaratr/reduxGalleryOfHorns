import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filteredReducer'; // Import your new reducer

const store = configureStore({
  reducer: {
    filter: filterReducer
  },
});

export default store;
