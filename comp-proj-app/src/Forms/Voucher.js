import React, { Component } from "react";
import "./Form.css";

class Voucher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  Typing = e => {
    let voucher = e.target.value;
    this.setState({ value: voucher });
    console.log(voucher);
  };

  render() {
    let classListI = "";
    let classListB = "";
    let types = ["small", "large"];
    if (types.includes(this.props.type)) {
      classListI += `input-${this.props.type}`;
    }
    if (types.includes(this.props.type)) {
      classListB += `button-${this.props.type}`;
    }

    return (
      <div className="voucherContainer">
        <input
          className={classListI}
          placeholder="Voucher code"
          input={this.state.value}
          type="text"
        ></input>
        <button className={classListB} onClick={this.Typing}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Voucher;
