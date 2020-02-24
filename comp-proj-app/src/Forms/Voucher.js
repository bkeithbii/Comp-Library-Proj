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
    let classList = "";
    let types = ["voucher", "voucherLarge"];
    if (types.includes(this.props.type)) {
      classList += `input-${this.props.type}`;
    }

    return (
      <div className={classList}>
        <input
          className="voucher"
          placeholder="Voucher code"
          input={this.state.value}
          type="text"
        ></input>
        <button className="redeem" onClick={this.Typing}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Voucher;
