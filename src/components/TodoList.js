import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class TodoList extends Component {
  render() {
    return this.props.todos.map(todo => {
      return (
        <TodoItem
          todoDetails={todo}
          key={todo.id}
          toggleComplete={this.props.toggleComplete}
          delTodo={this.props.delTodo}
        />
      );
    });
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoList;
