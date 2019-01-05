import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";

import HeaderBar from "./Header";
import UserInput from "./UserInput";
import TodoList from "./TodoList";
import uuid from "uuid";

export class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Wash the car",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Build projects",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Setup speakers",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Watch fights",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Buy boxing gloves/wraps/deodorizer",
        completed: false
      }
    ]
  };

  //   Toggle completed
  toggleComplete = id => {
    this.setState(
      {
        todos: [
          ...this.state.todos.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
            }
            return todo;
          })
        ]
      },
      () => console.log(this.state.todos)
    );
  };

  //   Delete todo
  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  //   Add todo
  addTodo = title => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid.v4(),
          title,
          completed: false
        }
      ]
    });
  };

  render() {
    return (
      <Router>
        <div className="ui container">
          <HeaderBar />
          <Route
            exact
            path="/"
            render={props => {
              return (
                <React.Fragment>
                  <UserInput inputValue={this.addTodo} />
                  <TodoList
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              );
            }}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
