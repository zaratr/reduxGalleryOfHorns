import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filteredData: data,
  },
  reducers: {
    setFilteredData: (state, action) => {
        state.filteredData = action.payload;
    },
  },
});

export const { setFilteredData } = filterSlice.actions;
export default filterSlice.reducer;
