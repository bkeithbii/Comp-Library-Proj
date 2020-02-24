import React, { Component } from "react";
import "./Form.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      display: true,
      disabled: false
    };
  }

  Increase = () => {
    this.setState({ value: this.state.value + 1 });
  };
  Decrease = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    let classList = "";
    if (this.props.Counter) {
      classList += ` counter`;
    }

    return (
      <div className={classList}>
        <button className="plus" onClick={this.Increase} />
        <p>{this.state.value}</p>
        <button className="minus" onClick={this.Decrease} />
      </div>
    );
  }
}

export default Counter;
