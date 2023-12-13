// 1.0.4

const toggleGroupAPI: Object = {
  component: "toggle-group",
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
          name: "type",
          required: true,
          type: '"single" | "multiple"',
          typeSimple: "enum",
          description:
            "Determines whether a single or multiple items can be pressed at a time.",
        },
        {
          name: "value",
          required: false,
          type: "string",
          description:
            'The controlled value of the pressed item when <Code>type</Code> is{" "} <Code>"single"</Code>. Must be used in conjunction with{" "} <Code>onValueChange</Code>.',
        },
        {
          name: "defaultValue",
          required: false,
          type: "string",
          description:
            'The value of the item to show as pressed when initially rendered and{" "} <Code>type</Code> is <Code>"single"</Code>. Use when you do not need to control the state of the items.',
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string) => void",
          typeSimple: "function",
          description:
            'Event handler called when the pressed state of an item changes and{" "} <Code>type</Code> is <Code>"single"</Code>.',
        },
        {
          name: "value",
          required: false,
          defaultValue: "[]",
          type: "string[]",
          description:
            'The controlled value of the pressed items when <Code>type</Code> is{" "} <Code>"multiple"</Code>. Must be used in conjunction with{" "} <Code>onValueChange</Code>.',
        },
        {
          name: "defaultValue",
          required: false,
          defaultValue: "[]",
          type: "string[]",
          description:
            'The values of the items to show as pressed when initially rendered and{" "} <Code>type</Code> is <Code>"multiple"</Code>. Use when you do not need to control the state of the items.',
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string[]) => void",
          typeSimple: "function",
          description:
            'Event handler called when the pressed state of an item changes and{" "} <Code>type</Code> is <Code>"multiple"</Code>.',
        },
        {
          name: "disabled",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the toggle group and all its items.",
        },
        {
          name: "rovingFocus",
          required: false,
          type: "boolean",
          defaultValue: "true",
          description:
            "When <Code>false</Code>, navigating through the items using arrow keys will be disabled.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical" | undefined',
          typeSimple: "enum",
          defaultValue: "undefined",
          description:
            'The orientation of the component, which determines how focus moves:{" "} <Code>horizontal</Code> for left/right arrows and{" "} <Code>vertical</Code> for up/down arrows.',
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "The reading direction of the toggle group. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.",
        },
        {
          name: "loop",
          required: false,
          type: "boolean",
          defaultValue: "true",
          description:
            'When <Code>true</Code> and <Code>rovingFocus</Code> is{" "} <Code>true</Code>, keyboard navigation will loop from last item to first, and vice versa.',
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
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
          required: true,
          type: "string",
          description: "A unique value for the item.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the item.",
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
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
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
            "Moves focus to either the pressed item or the first item in the group.",
        },
        {
          keys: ["Space"],
          description: "Activates/deactivates the item.",
        },
        {
          keys: ["Enter"],
          description: "Activates/deactivates the item.",
        },
        {
          keys: ["ArrowDown"],
          description: "Moves focus to the next item in the group.",
        },
        {
          keys: ["ArrowRight"],
          description: "Moves focus to the next item in the group.",
        },
        {
          keys: ["ArrowUp"],
          description: "Moves focus to the previous item in the group.",
        },
        {
          keys: ["ArrowLeft"],
          description: "Moves focus to the previous item in the group.",
        },
        {
          keys: ["Home"],
          description: "Moves focus to the first item.",
        },
        {
          keys: ["End"],
          description: "Moves focus to the last item.",
        },
      ],
    },
  ],
};

export default toggleGroupAPI;
