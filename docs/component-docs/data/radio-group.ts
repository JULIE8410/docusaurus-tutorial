// 1.1.3
const radioGroupAPI: Object = {
  component: "radio-group",
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
          name: "defaultValue",
          type: "string",
          description:
            "The value of the radio item that should be checked when initially rendered. Use when you do not need to control the state of the radio items.",
        },
        {
          name: "value",
          type: "string",
          description:
            "The controlled value of the radio item to check. Should be used in conjunction with <Code>onValueChange</Code>.",
        },
        {
          name: "onValueChange",
          type: "(value: string) => void",
          typeSimple: "function",
          description: "Event handler called when the value changes.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "When <Code>true</Code>, prevents the user from interacting with radio items.",
        },
        {
          name: "name",
          type: "string",
          description:
            "The name of the group. Submitted with its owning form as part of a name/value pair.",
        },
        {
          name: "required",
          type: "boolean",
          description:
            "When <Code>true</Code>, indicates that the user must check a radio item before the owning form can be submitted.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical" | undefined',
          typeSimple: "enum",
          defaultValue: "undefined",
          description: "The orientation of the component.",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "The reading direction of the radio group. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.",
        },
        {
          name: "loop",
          required: false,
          type: "boolean",
          defaultValue: "true",
          description:
            "When <Code>true</Code>, keyboard navigation will loop from last item to first, and vice versa.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-disabled]",
          values: "Present when disabled",
        },
      ],
    },
    {
      tag: "item",
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
          name: "value",
          type: "string",
          description:
            "The value given as data when submitted with a <Code>name</Code>.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the radio item.",
        },
        {
          name: "required",
          type: "boolean",
          description:
            "When <Code>true</Code>, indicates that the user must check the radio item before the owning form can be submitted.",
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
      tag: "indicator",
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
          name: "forceMount",
          type: "boolean",
          description:
            "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
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
          keys: ["Tab"],
          description:
            "Moves focus to either the checked radio item or the first radio item in the group.",
        },
        {
          keys: ["Space"],
          description: "When focus is on an unchecked radio item, checks it.",
        },
        {
          keys: ["ArrowDown"],
          description:
            "Moves focus and checks the next radio item in the group.",
        },
        {
          keys: ["ArrowRight"],
          description:
            "Moves focus and checks the next radio item in the group.",
        },
        {
          keys: ["ArrowUp"],
          description: "Moves focus to the previous radio item in the group.",
        },
        {
          keys: ["ArrowLeft"],
          description: "Moves focus to the previous radio item in the group.",
        },
      ],
    },
  ],
};
export default radioGroupAPI;
