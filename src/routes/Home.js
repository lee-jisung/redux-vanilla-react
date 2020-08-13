import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from '../store';
import { add } from '../store';
import ToDo from '../components/ToDo';

function Home({ toDos, addToDo }) {
  const [text, setText] = useState('');
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addToDo(text);
    setText('');
  };
  return (
    <div>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

// state => store로부터 가져온 state
// ownProps => component에 의해 주어진 것 by react-router (Home router가 준 것)
// 여기서 return된 것들이 Home에 props에 추가되어서 보내짐
// => mapStateToProps()가 해주는 일임
// 즉, store에서 store.getState()를 통해 component에 state를 전달한거라고 보면 됨
function mapStateToProps(state) {
  return { toDos: state };
}

//dispatch => action을 넘기는 함수
// store.js에 있는 addToDo를 불러와서 사용
function mapDispatchToProps(dispatch) {
  return {
    // addToDo: text => dispatch(actionCreators.addToDo(text)),
    addToDo: text => dispatch(add(text)),
  };
}

// mapStateToProps를 이용해서 store로부터 state를 Home에 가져다 줄 것임
// 그래서 connect함수를 이용해서 (mapStateToProps, mapDispatchToProps) 로 두개를 전달함
// component도 export함
export default connect(mapStateToProps, mapDispatchToProps)(Home);
