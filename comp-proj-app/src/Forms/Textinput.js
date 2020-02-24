import React from "react";
import "./Form.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Textinput = props => {
  // Declare a classList variable and set it to an empty string
  let classList = "";

  // Create an array of all of the story/component types you want to be
  // included in your component library
  let types = ["email"];

  // Add a conditional statement that checks for the type and updates the
  // classList variable based on their existence.
  if (types.includes(props.type)) {
    classList += `input-${props.type}`;
  }

  // Add another conditional statement to check for additional properties (such as large)
  // and add to the classList variable based on this condition evaluating to true
  if (props.emailMedium) {
    classList += ` email-medium`;
  }
  if (props.emailLarge) {
    classList += ` email-large`;
  }

  // Give the button's class a value of classList
  return (
    <form className={classList}>
      {props.label}
      <input className={classList} placeholder="Email" />
    </form>
  );
};

export default Textinput;
