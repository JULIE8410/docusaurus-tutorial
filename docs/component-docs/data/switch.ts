// 1.0.3

const switchAPI: Object = {
  component: "switch",
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
          name: "defaultChecked",
          type: "boolean",
          description:
            "The state of the switch when it is initially rendered. Use when you do not need to control its state.",
        },
        {
          name: "checked",
          type: "boolean",
          description:
            'The controlled state of the switch. Must be used in conjunction with{" "} <Code>onCheckedChange</Code>.',
        },
        {
          name: "onCheckedChange",
          type: "(checked: boolean) => void",
          typeSimple: "function",
          description:
            "Event handler called when the state of the switch changes.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the switch.",
        },
        {
          name: "required",
          type: "boolean",
          description:
            "When <Code>true</Code>, indicates that the user must check the switch before the owning form can be submitted.",
        },
        {
          name: "name",
          type: "string",
          description:
            "The name of the switch. Submitted with its owning form as part of a name/value pair.",
        },
        {
          name: "value",
          type: "string",
          defaultValue: "on",
          description:
            "The value given as data when submitted with a <Code>name</Code>.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked"],
        },
        {
          attribute: "[data-disabled]",
          values: "Present when disabled",
        },
      ],
    },
    {
      tag: "thumb",
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
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked"],
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
          description: "Toggles the component's state.",
        },
        {
          keys: ["Enter"],
          description: "Toggles the component's state.",
        },
      ],
    },
  ],
};

export default switchAPI;
