import React from "react";
import { List, Icon, Segment } from "semantic-ui-react";
import "./TodoItem.css";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  completedStatus = () => {
    if (this.props.todoDetails.completed === false) {
      return { textDecoration: "none" };
    } else {
      return { textDecoration: "line-through" };
    }
  };

  render() {
    const { id, title } = this.props.todoDetails;
    return (
      <List divided verticalAlign="middle">
        <Segment>
          <List.Item className="todo__item" style={todoStyle}>
            <List.Content>
              <input
                type="checkbox"
                onChange={this.props.toggleComplete.bind(this, id)}
              />{" "}
              &nbsp;{" "}
              <span className="todoTitle" style={this.completedStatus()}>
                {title}
              </span>
            </List.Content>
            <List.Content floated="right">
              <Icon
                name="x"
                onClick={this.props.delTodo.bind(this, id)}
                className="todo__delete"
              />
            </List.Content>
          </List.Item>
        </Segment>
      </List>
    );
  }
}

TodoItem.propTypes = {
  todoDetails: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;

// Todo styling
const todoStyle = {
  display: "flex",
  justifyContent: "space-between"
};
