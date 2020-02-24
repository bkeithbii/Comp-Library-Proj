import React, { Component } from "react";
import "./Form.css";

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  render() {
    let classList = "";
    let types = ["black", "blue"];
    if (types.includes(this.props.type)) {
      classList += `checkbox-${this.props.type}`;
    }

    return (
      <label className="boxcontainer">
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    );
  }
}

export default Checkbox;
