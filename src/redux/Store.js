import {configureStore} from '@reduxjs/toolkit';
import GameReducer from './Game';
export const Store = configureStore({
  reducer: {
    game: GameReducer,
  },
});
