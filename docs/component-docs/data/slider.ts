// 1.1.2
const sliderAPI: Object = {
  component: "slider",
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
          type: "number[]",
          description:
            "The value of the slider when initially rendered. Use when you do not need to control the state of the slider.",
        },
        {
          name: "value",
          required: false,
          type: "number[]",
          description:
            'The controlled value of the slider. Must be used in conjunction with{" "} <Code>onValueChange</Code>.',
        },
        {
          name: "onValueChange",
          required: false,
          type: "onValueChange?(value: number[]): void",
          typeSimple: "function",
          description: "Event handler called when the value changes.",
        },
        {
          name: "onValueCommit",
          required: false,
          type: "onValueCommit?(value: number[]): void",
          typeSimple: "function",
          description:
            "Event handler called when the value changes at the end of an interaction. Useful when you only need to capture a final value e.g. to update a backend service.",
        },
        {
          name: "name",
          required: false,
          type: "string",
          description:
            "The name of the slider. Submitted with its owning form as part of a name/value pair.",
        },
        {
          name: "disabled",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the slider.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical"',
          typeSimple: "enum",
          defaultValue: '"horizontal"',
          description: "The orientation of the slider.",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "The reading direction of the slider. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.",
        },
        {
          name: "inverted",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description: "Whether the slider is visually inverted.",
        },
        {
          name: "min",
          required: false,
          type: "number",
          defaultValue: "0",
          description: "The minimum value for the range.",
        },
        {
          name: "max",
          required: false,
          type: "number",
          defaultValue: "100",
          description: "The maximum value for the range.",
        },
        {
          name: "step",
          required: false,
          type: "number",
          defaultValue: "1",
          description: "The stepping interval.",
        },
        {
          name: "minStepsBetweenThumbs",
          required: false,
          type: "number",
          defaultValue: "0",
          description:
            "The minimum permitted <Code>step</Code>s between multiple thumbs.",
        },
      ],
      dataAttribute: [
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
      tag: "track",
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
      tag: "range",
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
          keys: ["ArrowRight"],
          description:
            'Increments/decrements by the <Code>step</Code> value depending on{" "} <Code>orientation</Code>.',
        },
        {
          keys: ["ArrowLeft"],
          description:
            'Increments/decrements by the <Code>step</Code> value depending on{" "} <Code>orientation</Code>.',
        },
        {
          keys: ["ArrowUp"],
          description: "Increases the value by the <Code>step</Code> amount.",
        },
        {
          keys: ["ArrowDown"],
          description: "Decreases the value by the <Code>step</Code> amount.",
        },
        {
          keys: ["PageUp"],
          description: "Increases the value by a larger <Code>step</Code>.",
        },
        {
          keys: ["PageDown"],
          description: "Decreases the value by a larger <Code>step</Code>.",
        },
        {
          keys: ["Shift + ArrowUp"],
          description: "Increases the value by a larger <Code>step</Code>.",
        },
        {
          keys: ["Shift + ArrowDown"],
          description: "Decreases the value by a larger <Code>step</Code>.",
        },
        {
          keys: ["Home"],
          description: "Sets the value to its minimum.",
        },
        {
          keys: ["End"],
          description: "Sets the value to its maximum.",
        },
      ],
    },
  ],
};

export default sliderAPI;
