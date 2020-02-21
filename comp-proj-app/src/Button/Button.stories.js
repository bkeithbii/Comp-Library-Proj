import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  .add("Primary", () => <Button label="Primary" type="primary" />)
  .add("Primary Hover", () => (
    <Button label="Primary" type="primary" primaryHover />
  ))
  .add("Primary Border", () => (
    <Button label="Primary" type="primary" primaryBorder />
  ))
  .add("Primary Fade", () => (
    <Button label="Primary" type="primary" primaryFade />
  ))
  .add("Primary Large", () => (
    <Button label="Primary Large" type="primary" primaryLarge />
  ))
  .add("Primary Large-Fade", () => (
    <Button label="Primary Large" type="primary" primaryLargeFade />
  ))
  .add("Primary Large-Border", () => (
    <Button label="Primary Large" type="primary" primaryLargeBorder />
  ))

  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Warning", () => <Button label="Warning" type="warning" />);
