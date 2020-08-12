import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

//reducer => function that modify a data
// reducer가 return하는 value가 data에 저장
// 여기서는 countModifier(arg1, arg2)
// arg1은 current state / arg2 = action(reducer와 소통하기 위한 message)
const countModifier = (count = 0, action) => {
  // ...modify count
  switch (action.type) {
    case ADD:
      return ++count;
    case MINUS:
      return --count;
    default:
      return count;
  }
};

// createStore에 reducer할 function을 전달해야 함
// reducer에서 data를 변경
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
// subscribe => store 안에 있는 변화를 감지해서 전달된 function을 실행해줌
countStore.subscribe(onChange);

// dispatch를 이용해서 action을 정해줌 (action => object여야 함)
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

// console.log(countStore.getState());
// => countModifier에서 return한 값이 출력
