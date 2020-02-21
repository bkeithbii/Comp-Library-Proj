import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => {
  // Declare a classList variable and set it to an empty string
  let classList = "";

  // Create an array of all of the story/component types you want to be
  // included in your component library
  let types = ["primary", "danger", "success", "warning", "default"];

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

  if (props.dangerHover) {
    classList += ` danger-hover`;
  }
  if (props.dangerBorder) {
    classList += ` danger-border`;
  }
  if (props.dangerFade) {
    classList += ` danger-fade`;
  }
  if (props.dangerLarge) {
    classList += ` danger-large`;
  }
  if (props.dangerLargeFade) {
    classList += ` danger-large-fade`;
  }
  if (props.dangerLargeBorder) {
    classList += ` danger-large-border`;
  }

  if (props.successHover) {
    classList += ` success-hover`;
  }
  if (props.successBorder) {
    classList += ` success-border`;
  }
  if (props.successFade) {
    classList += ` success-fade`;
  }
  if (props.successLarge) {
    classList += ` success-large`;
  }
  if (props.successLargeFade) {
    classList += ` success-large-fade`;
  }
  if (props.successLargeBorder) {
    classList += ` success-large-border`;
  }

  if (props.warningHover) {
    classList += ` warning-hover`;
  }
  if (props.warningBorder) {
    classList += ` warning-border`;
  }
  if (props.warningFade) {
    classList += ` warning-fade`;
  }
  if (props.warningLarge) {
    classList += ` warning-large`;
  }
  if (props.warningLargeFade) {
    classList += ` warning-large-fade`;
  }
  if (props.warningLargeBorder) {
    classList += ` warning-large-border`;
  }

  if (props.defaultHover) {
    classList += ` default-hover`;
  }
  if (props.defaultBorder) {
    classList += ` default-border`;
  }
  if (props.defaultFade) {
    classList += ` default-fade`;
  }
  if (props.defaultLarge) {
    classList += ` default-large`;
  }
  if (props.defaultLargeFade) {
    classList += ` default-large-fade`;
  }
  if (props.defaultLargeBorder) {
    classList += ` default-large-border`;
  }

  // Give the button's class a value of classList
  return <button className={classList}>{props.label}</button>;
};

export default Button;
