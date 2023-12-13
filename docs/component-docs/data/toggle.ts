// 1.0.3

const toggletAPI: Object = {
  component: "toggle",
  props: [
    {
      tag: "root",
      props: [
        {
          name: "asChild",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "Change the default rendered element for the one passed as a child, merging their props and behavior. <br /> <br /> Read our <a href='../guides/composition'>Composition</a> guide for more details.",
          guide: "Composition",
          url: "../guides/composition",
        },
        {
          name: "defaultPressed",
          type: "boolean",
          description:
            "The pressed state of the toggle when it is initially rendered. Use when you do not need to control its pressed state.",
        },
        {
          name: "pressed",
          type: "boolean",
          description:
            "The controlled pressed state of the toggle. Must be used in conjunction with <Code>onPressedChange</Code>.",
        },
        {
          name: "onPressedChange",
          type: "(pressed: boolean) => void",
          typeSimple: "function",
          description:
            "Event handler called when the pressed state of the toggle changes.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the toggle.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["on", "off"],
        },
        {
          attribute: "[data-disabled]",
          values: "Present when disabled",
        },
      ],
    },
  ],
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [
        {
          keys: ["Space"],
          description: "Activates/deactivates the toggle.",
        },
        {
          keys: ["Enter"],
          description: "Activates/deactivates the toggle.",
        },
      ],
    },
  ],
};

export default toggletAPI;
