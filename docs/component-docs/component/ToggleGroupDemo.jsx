import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";
// import "../css/global.css";
import "../css/toggle-group.css";

const ToggleGroupDemo = () => (
  <ToggleGroup.Root
    className="ToggleGroup"
    type="single"
    defaultValue="center"
    aria-label="Text alignment"
  >
    <ToggleGroup.Item
      className="ToggleGroupItem"
      value="left"
      aria-label="Left aligned"
    >
      <TextAlignLeftIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className="ToggleGroupItem"
      value="center"
      aria-label="Center aligned"
    >
      <TextAlignCenterIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className="ToggleGroupItem"
      value="right"
      aria-label="Right aligned"
    >
      <TextAlignRightIcon />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
);

export default ToggleGroupDemo;
