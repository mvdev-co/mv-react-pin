import React from "react";
import { storiesOf } from "@storybook/react";
import { ReactPinInput } from "../components";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <ReactPinInput />;
});
