import React from 'react';
import { connect } from 'react-redux';

function Detail({ toDos }) {
  return (
    <div>
      <h1>{toDos?.text}</h1>
      <h5>Created at : {toDos?.id}</h5>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDos: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
