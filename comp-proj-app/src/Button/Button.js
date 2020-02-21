import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => {
  // Declare a classList variable and set it to an empty string
  let classList = "";

  // Create an array of all of the story/component types you want to be
  // included in your component library
  let types = ["primary", "danger", "success", "warning"];

  // Add a conditional statement that checks for the type and updates the
  // classList variable based on their existence.
  if (types.includes(props.type)) {
    classList += `button-${props.type}`;
  }

  // Add another conditional statement to check for additional properties (such as large)
  // and add to the classList variable based on this condition evaluating to true
  if (props.primaryHover) {
    classList += ` primary-hover`;
  }
  if (props.primaryBorder) {
    classList += ` primary-border`;
  }
  if (props.primaryFade) {
    classList += ` primary-fade`;
  }
  if (props.primaryLarge) {
    classList += ` primary-large`;
  }
  if (props.primaryLargeFade) {
    classList += ` primary-large-fade`;
  }
  if (props.primaryLargeBorder) {
    classList += ` primary-large-border`;
  }

  // Give the button's class a value of classList
  return <button className={classList}>{props.label}</button>;
};

export default Button;
