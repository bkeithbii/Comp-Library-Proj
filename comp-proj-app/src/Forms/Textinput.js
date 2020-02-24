import React, { Component } from "react";
import "./Form.css";

// This is a functional component - just sent up a little differently as an arrow function!
class Textinput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  //Function for storing value
  Typing = e => {
    let email = e.target.value;
    this.setState({ value: email });
    console.log(email);
  };

  // Give the button's class a value of classList
  render() {
    // Declare a classList variable and set it to an empty string
    let classList = "";

    // Create an array of all of the story/component types you want to be
    // included in your component library
    let types = ["email"];

    // Add a conditional statement that checks for the type and updates the
    // classList variable based on their existence.
    if (types.includes(this.props.type)) {
      classList += `input-${this.props.type}`;
    }

    // Add another conditional statement to check for additional properties (such as large)
    // and add to the classList variable based on this condition evaluating to true
    if (this.props.emailMedium) {
      classList += ` email-medium`;
    }
    if (this.props.emailLarge) {
      classList += ` email-large`;
    }

    return (
      <form className={classList}>
        {this.props.label}
        <input
          className={classList}
          onChange={this.Typing}
          input={this.state.value}
          type="text"
          placeholder="Email"
        />
      </form>
    );
  }
}

export default Textinput;
