import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  //Primary Buttons
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

  //Danger Buttons
  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Danger Hover", () => (
    <Button label="Danger" type="danger" dangerHover />
  ))
  .add("Danger Border", () => (
    <Button label="Danger" type="danger" dangerBorder />
  ))
  .add("Danger Fade", () => <Button label="Danger" type="danger" dangerFade />)
  .add("Danger Large", () => (
    <Button label="Danger Large" type="danger" dangerLarge />
  ))
  .add("Danger Large-Fade", () => (
    <Button label="Danger Large" type="danger" dangerLargeFade />
  ))
  .add("Danger Large-Border", () => (
    <Button label="Danger Large" type="danger" dangerLargeBorder />
  ))

  //Success Buttons
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Success Hover", () => (
    <Button label="Success" type="success" successHover />
  ))
  .add("Success Border", () => (
    <Button label="Success" type="success" successBorder />
  ))
  .add("Success Fade", () => (
    <Button label="Success" type="success" successFade />
  ))
  .add("Success Large", () => (
    <Button label="Success Large" type="success" successLarge />
  ))
  .add("Success Large-Fade", () => (
    <Button label="Success Large" type="success" successLargeFade />
  ))
  .add("Success Large-Border", () => (
    <Button label="Success Large" type="success" successLargeBorder />
  ))

  //Warning Buttons
  .add("Warning", () => <Button label="Warning" type="warning" />)
  .add("Warning Hover", () => (
    <Button label="Warning" type="warning" warningHover />
  ))
  .add("Warning Border", () => (
    <Button label="Warning" type="warning" warningBorder />
  ))
  .add("Warning Fade", () => (
    <Button label="Warning" type="warning" warningFade />
  ))
  .add("Warning Large", () => (
    <Button label="Warning Large" type="warning" warningLarge />
  ))
  .add("Warning Large-Fade", () => (
    <Button label="Warning Large" type="warning" warningLargeFade />
  ))
  .add("Warning Large-Border", () => (
    <Button label="Warning Large" type="warning" warningLargeBorder />
  ))

  //Default Buttons
  .add("Default", () => <Button label="Default" type="default" />)
  .add("Default Hover", () => (
    <Button label="Default" type="default" defaultHover />
  ))
  .add("Default Border", () => (
    <Button label="Default" type="default" defaultBorder />
  ))
  .add("Default Fade", () => (
    <Button label="Default" type="default" defaultFade />
  ))
  .add("Default Large", () => (
    <Button label="Default Large" type="default" defaultLarge />
  ))
  .add("Default Large-Fade", () => (
    <Button label="Default Large" type="default" defaultLargeFade />
  ))
  .add("Default Large-Border", () => (
    <Button label="Default Large" type="default" defaultLargeBorder />
  ))

  //Icon Buttons
  .add("Icon Cart-Text", () => (
    <Button label="Add To Cart" type="icon" iconCartText />
  ))
  .add("Icon Heart-Text", () => (
    <Button label="Add To Favorites" type="icon" iconHeartText />
  ))
  .add("Icon Cart", () => <Button label="" type="icon" iconCart />)
  .add("Icon Heart", () => <Button label="" type="icon" iconHeart />);
