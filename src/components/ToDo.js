import React from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from '../store';
import { remove } from '../store';
import { Link } from 'react-router-dom';

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>Del</button>
    </li>
  );
}

// toDo로 입력한 object가 ownProps에 전달됨
function mapDispatchToProps(dispatch, ownProps) {
  return {
    // onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
