import React from "react";
import { storiesOf } from "@storybook/react";
import Textinput from "./Textinput.js";
import Selectinput from "./Selectinput.js";

storiesOf("Form", module)
  //Email Text Inputs
  .add("Email", () => <Textinput label="Email" type="email" />)
  .add("Email Medium", () => (
    <Textinput label="Email" type="email" emailMedium />
  ))
  .add("Email Large", () => <Textinput label="Email" type="email" emailLarge />)

  //Select Inputs
  .add("Select", () => <Selectinput label="Select" type="select" />);