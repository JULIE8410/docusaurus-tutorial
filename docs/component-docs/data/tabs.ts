// 1.0.4

const tabsAPI: Object = {
  component: "tabs",
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
          required: false,
          type: "string",
          description:
            "The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs.",
        },
        {
          name: "value",
          required: false,
          type: "string",
          description:
            "The controlled value of the tab to activate. Should be used in conjunction with <Code>onValueChange</Code>.",
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string) => void",
          typeSimple: "function",
          description: "Event handler called when the value changes.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical" | undefined',
          typeSimple: "enum",
          defaultValue: '"horizontal"',
          description: "The orientation of the component.",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            'The reading direction of the tabs. If omitted, inherits globally from{" "} <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.',
        },
        {
          name: "activationMode",
          required: false,
          type: '"automatic" | "manual"',
          typeSimple: "enum",
          defaultValue: '"automatic"',
          description:
            "When <Code>automatic</Code>, tabs are activated when receiving focus. When <Code>manual</Code>, tabs are activated when clicked.",
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
      tag: "list",
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
          name: "loop",
          required: false,
          type: "boolean",
          defaultValue: "true",
          description:
            "When <Code>true</Code>, keyboard navigation will loop from last tab to first, and vice versa.",
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
      tag: "trigger",
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
          description:
            "A unique value that associates the trigger with a content.",
        },
        {
          name: "disabled",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the tab.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["active", "inactive"],
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
    {
      tag: "content",
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
          description:
            "A unique value that associates the content with a trigger.",
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
          values: ["active", "inactive"],
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
            "When focus moves onto the tabs, focuses the active trigger. When a trigger is focused, moves focus to the active content.",
        },
        {
          keys: ["ArrowDown"],
          description:
            'Moves focus to the next trigger depending on <Code>orientation</Code>{" "} and activates its associated content.',
        },
        {
          keys: ["ArrowRight"],
          description:
            'Moves focus to the next trigger depending on <Code>orientation</Code>{" "} and activates its associated content.',
        },
        {
          keys: ["ArrowUp"],
          description:
            'Moves focus to the previous trigger depending on{" "} <Code>orientation</Code> and activates its associated content.',
        },
        {
          keys: ["ArrowLeft"],
          description:
            'Moves focus to the previous trigger depending on{" "} <Code>orientation</Code> and activates its associated content.',
        },
        {
          keys: ["Home"],
          description:
            "Moves focus to the first trigger and activates its associated content.",
        },
        {
          keys: ["End"],
          description:
            "Moves focus to the last trigger and activates its associated content.",
        },
      ],
    },
  ],
};

export default tabsAPI;
