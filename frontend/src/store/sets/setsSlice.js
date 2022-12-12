import { createSlice } from '@reduxjs/toolkit';

export const setsSlice = createSlice({
   name: 'sets',
   initialState: {
      allSets: false,
      currentSet: false,
      cardsSet: false,
   },

   reducers: {
      setAllSets: (state, action ) => {
         state.allSets = action.payload;
      },

      setCurrentSet: (state, action ) => {
         state.currentSet = action.payload;
      },

      setCardsSet: (state, action ) => {
         state.cardsSet = action.payload;
      },
   }
});

export const { setAllSets, setCurrentSet,setCardsSet } = setsSlice.actions;