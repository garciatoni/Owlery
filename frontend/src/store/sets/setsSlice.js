import { createSlice } from '@reduxjs/toolkit';

export const setsSlice = createSlice({
   name: 'sets',
   initialState: {
      allSets: false,
   },

   reducers: {
      setAllSets: (state, action ) => {
         state.allSets = action.payload;
      },
   }
});

export const { setAllSets } = setsSlice.actions;