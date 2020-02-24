import React from "react";
import "./Form.css";

const Selectinput = props => {
  let classList = "";
  let types = ["select", "select-med", "select-large"];
  if (types.includes(props.type)) {
    classList += `input-${props.type}`;
  }

  if (props.selectFade) {
    classList += ` select-fade`;
  }
  if (props.selectFadeMed) {
    classList += ` select-fade-med`;
  }
  if (props.selectFadeLarge) {
    classList += ` select-fade-large`;
  }

  return (
    <form className={classList}>
      <select className={classList}>
        <option className={classList}>{props.label}</option>
      </select>
    </form>
  );
};

export default Selectinput;
