import React from "react";
import { storiesOf } from "@storybook/react";
import Textinput from "./Textinput.js";
import Selectinput from "./Selectinput.js";
import Counter from "./Counter.js";
import Voucher from "./Voucher.js";
import Checkbox from "./Checkbox.js";

storiesOf("Form", module)
  //Email Text Inputs
  .add("Email", () => <Textinput label="Email" type="email" />)
  .add("Email Medium", () => (
    <Textinput label="Email" type="email" emailMedium />
  ))
  .add("Email Large", () => <Textinput label="Email" type="email" emailLarge />)

  //Select Inputs
  .add("Select", () => <Selectinput label="Select" type="select" />)
  .add("Select Med", () => <Selectinput label="Select" type="select-med" />)
  .add("Select Large", () => <Selectinput label="Select" type="select-large" />)
  .add("Select Fade", () => <Selectinput label="Select" selectFade />)
  .add("Select Fade Med", () => <Selectinput label="Select" selectFadeMed />)
  .add("Select Fade Large", () => (
    <Selectinput label="Select" selectFadeLarge />
  ))

  //Counter button
  .add("Counter", () => <Counter Counter />)

  //Voucher input/button
  .add("Voucher", () => <Voucher label="Redeem" type="small" />)
  .add("Voucher Large", () => <Voucher label="Redeem" type="large" />)

  //Checkboxes
  .add("Checkbox Blue", () => <Checkbox color="blue" />)
  .add("Checkbox Black", () => <Checkbox color="black" checked />)
  .add("Checkbox w/ Text", () => (
    <Checkbox color="black" checked text="Don't show this popup again" />
  ));
