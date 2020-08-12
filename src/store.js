import { createStore } from 'redux';
const ADD = 'ADD';
const DELETE = 'DELETE';

export const addToDo = text => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = id => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const newObj = { text: action.text, id: Date.now() };
      return [newObj, ...state];
    case DELETE:
      const cleaned = state.filter(toDo => toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};
const store = createStore(reducer);

//store.subscribe();

export default store;
