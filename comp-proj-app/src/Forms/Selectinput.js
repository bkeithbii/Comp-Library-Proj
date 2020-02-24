import React from "react";
import "./Form.css";

const Selectinput = props => {
  let classList = "";
  let types = ["select"];
  if (types.includes(props.type)) {
    classList += `input-${props.type}`;
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
