import React from "react";
import { Button, Segment, Form } from "semantic-ui-react";
import PropTypes from "prop-types";

class UserInput extends React.Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.inputValue(this.state.title);
  };

  render() {
    return (
      <Segment>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>New todo</label>
            <input
              type="text"
              placeholder="Add a todo..."
              value={this.state.title}
              onChange={this.onChange}
            />
          </Form.Field>
          <Button basic color="blue" type="submit">
            Submit
          </Button>
        </Form>
      </Segment>
    );
  }
}

UserInput.propTypes = {
  inputValue: PropTypes.func.isRequired
};

export default UserInput;
