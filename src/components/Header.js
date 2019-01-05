import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function HeaderBar() {
  return (
    <Menu inverted>
      <Menu.Item name="TodoList" />
      <Link to="/">
        <Menu.Item name="Home" />
      </Link>
      <Link to="/about">
        <Menu.Item name="About" />
      </Link>
    </Menu>
  );
}

export default HeaderBar;
