import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';


const List = (props) => {
  const { todoList } = props;

  return (
    <div>
      <ul>
        {todoList.map(todoItem => <li key={todoItem.id}><TodoItem todo={todoItem} /></li>)}
      </ul>
    </div>
  );
};

List.propTypes = {

};

List.defaultProps = {
  todoList: [],
};


const container = connect(state => ({
  todoList: state,
}));

export default container(List);