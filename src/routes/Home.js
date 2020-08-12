import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home({ toDos }) {
  console.log({ toDos });
  const [text, setText] = useState('');
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    setText('');
  };
  return (
    <div>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
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

// mapStateToProps를 이용해서 store로부터 state를 Home에 가져다 줄 것임
// 그래서 connect함수를 이용해서 (function)(component) 로 두개를 전달함
export default connect(mapStateToProps)(Home);
