// 1.0.4
const checkboxAPI: Object = {
  component: "checkbox",
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
            "The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.",
        },
        {
          name: "checked",
          type: "boolean",
          description:
            "The controlled checked state of the checkbox. Must be used in conjunction with <Code>onCheckedChange</Code>.",
        },
        {
          name: "onCheckedChange",
          type: `(checked: boolean | 'indeterminate') => void`,
          typeSimple: "function",
          description:
            "Event handler called when the checked state of the checkbox changes.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the checkbox.",
        },
        {
          name: "required",
          type: "boolean",
          description:
            "When <Code>true</Code>, indicates that the user must check the checkbox before the owning form can be submitted.",
        },
        {
          name: "name",
          type: "string",
          description:
            "The name of the checkbox. Submitted with its owning form as part of a name/value pair.",
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
          values: ["checked", "unchecked", "indeterminate"],
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
          values: ["checked", "unchecked", "indeterminate"],
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
          description: "Checks/unchecks the checkbox.",
        },
      ],
    },
  ],
};

export default checkboxAPI;
