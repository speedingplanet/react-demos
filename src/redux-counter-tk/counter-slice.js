import { createSlice, configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state) => state + 1,
		decrement: (state) => state - 1,
	},
});

export const store = configureStore({
	reducer: counterSlice.reducer,
});

const { actions } = counterSlice;
export const { increment, decrement } = actions;
