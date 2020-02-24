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

  return (
    <form className={classList}>
      <select className={classList}>
        <option className={classList}>{props.label}</option>
      </select>
    </form>
  );
};

export default Selectinput;
