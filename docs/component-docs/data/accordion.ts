// 1.1.2
const accordionAPI: Object = {
  component: "accordion",
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
            "Determines whether one or multiple items can be opened at the same time.",
        },
        {
          name: "value",
          required: false,
          type: "string",
          description:
            'The controlled value of the item to expand when <Code>type</Code> is{" "} <Code>"single"</Code>. Must be used in conjunction with{" "} <Code>onValueChange</Code>.',
        },
        {
          name: "defaultValue",
          required: false,
          type: "string",
          description:
            'The value of the item to expand when initially rendered and{" "} <Code>type</Code> is <Code>"single"</Code>. Use when you do not need to control the state of the items.',
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string) => void",
          typeSimple: "function",
          description:
            'Event handler called when the expanded state of an item changes and{" "} <Code>type</Code> is <Code>"single"</Code>.',
        },
        {
          name: "value",
          required: false,
          defaultValue: "[]",
          type: "string[]",
          description:
            'The controlled value of the item to expand when <Code>type</Code> is{" "} <Code>"multiple"</Code>. Must be used in conjunction with{" "} <Code>onValueChange</Code>.',
        },
        {
          name: "defaultValue",
          required: false,
          defaultValue: "[]",
          type: "string[]",
          description:
            'The value of the item to expand when initially rendered when{" "} <Code>type</Code> is <Code>"multiple"</Code>. Use when you do not need to control the state of the items.',
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string[]) => void",
          typeSimple: "function",
          description:
            'Event handler called when the expanded state of an item changes and{" "} <Code>type</Code> is <Code>"multiple"</Code>.',
        },
        {
          name: "collapsible",
          required: false,
          defaultValue: "false",
          type: "boolean",
          description:
            'When <Code>type</Code> is <Code>"single"</Code>, allows closing content when clicking trigger for an open item.',
        },
        {
          name: "disabled",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the accordion and all its items.",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          defaultValue: '"ltr"',
          description:
            "The reading direction of the accordion when applicable. If omitted, assumes LTR (left-to-right) reading mode.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical"',
          typeSimple: "enum",
          defaultValue: '"vertical"',
          description: "The orientation of the accordion.",
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
          name: "disabled",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the item.",
        },
        {
          name: "value",
          required: true,
          type: "string",
          description: "A unique value for the item.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
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
      tag: "header",
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
          values: ["open", "closed"],
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
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
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
          name: "forceMount",
          type: "boolean",
          description:
            "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
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
      cssVariable: [
        {
          cssVariable: "--radix-accordion-content-width",
          description: "The width of the content when it opens/closes",
        },
        {
          cssVariable: "--radix-accordion-content-height",
          description: "The height of the content when it opens/closes",
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
          description:
            "When focus is on an <Code>Accordion.Trigger</Code> of a collapsed section, expands the section.",
        },
        {
          keys: ["Enter"],
          description:
            "When focus is on an <Code>Accordion.Trigger</Code> of a collapsed section, expands the section.",
        },
        {
          keys: ["Tab"],
          description: "Moves focus to the next focusable element.",
        },
        {
          keys: ["Shift + Tab"],
          description: "Moves focus to the previous focusable element.",
        },
        {
          keys: ["ArrowDown"],
          description:
            'Moves focus to the next <Code>Accordion.Trigger</Code> when{" "} <Code>orientation</Code> is <Code>vertical</Code>.',
        },
        {
          keys: ["ArrowUp"],
          description:
            'Moves focus to the previous <Code>Accordion.Trigger</Code> when{" "} <Code>orientation</Code> is <Code>vertical</Code>.',
        },
        {
          keys: ["ArrowRight"],
          description:
            'Moves focus to the next <Code>Accordion.Trigger</Code> when{" "} <Code>orientation</Code> is <Code>horizontal</Code>.',
        },
        {
          keys: ["ArrowLeft"],
          description:
            'Moves focus to the previous <Code>Accordion.Trigger</Code> when{" "} <Code>orientation</Code> is <Code>horizontal</Code>.',
        },
        {
          keys: ["Home"],
          description:
            "When focus is on an <Code>Accordion.Trigger</Code>, moves focus to the first <Code>Accordion.Trigger</Code>.",
        },
        {
          keys: ["End"],
          description:
            "When focus is on an <Code>Accordion.Trigger</Code>, moves focus to the last <Code>Accordion.Trigger</Code>.",
        },
      ],
    },
  ],
};

export default accordionAPI;
