//import { createStore } from 'redux';
import {
  createAction,
  createReducer,
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';

// // redux toolkit을 사용해서 action을 만든것
// // action에 type과 payload로 이루어진 object를
// // reducer에 action으로 넘겨줌
// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');

// // in createReducer => mutating state is ok
// // => why? redux toolkit & immer가 background에서 처리해줌
// // return을 할 때는 꼭 new state를 return해야 함
// // mutate가 필요하면 그냥 mutate하면 됨

// const reducer = createReducer([], {
//   [addToDo]: (state, actioyload, idn) => {
//     state.push({ text: action.pa: Date.now() }); // mutate state & don't return
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter(toDo => toDo.id !== action.payload), //return new state
// });
//-------------------------
//old reducer
/*
const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      const newObj = { text: action.payload, id: Date.now() };
      return [newObj, ...state];
    case deleteToDo.type:
      const cleaned = state.filter(toDo => toDo.id !== action.payload);
      return cleaned;
    default:
      return state;
  }
};*/

//createSlice

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload),
  },
});

// const store = createStore(reducer);
//const store = configureStore({ reducer }); // => redux dev tools를 사용할 수 있게 해줌
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
