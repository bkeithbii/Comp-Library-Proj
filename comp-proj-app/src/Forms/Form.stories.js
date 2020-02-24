import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form.js";

storiesOf("Form", module)
  //Email Text Inputs
  .add("Email Small", () => <Form label="Email" type="email" emailSmall />)
  .add("Email Medium", () => <Form label="Email" type="email" emailMedium />)
  .add("Email Large", () => <Form label="Email" type="email" emailLarge />);
