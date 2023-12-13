// 1.0.3
const progressAPI: Object = {
  component: "progress",
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
          name: "value",
          type: "number | null",
          description: "The progress value.",
        },
        {
          name: "max",
          type: "number",
          description: "The maximum progress value.",
        },
        {
          name: "getValueLabel",
          type: "(value: number, max: number) => string",
          typeSimple: "function",
          description:
            "A function to get the accessible label text representing the current value in a human-readable format. If not provided, the value label will be read as the numeric value as a percentage of the max value.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["complete", "indeterminate", "loading"],
        },
        {
          attribute: "[data-value]",
          values: "The current value",
        },
        {
          attribute: "[data-max]",
          values: "The max value",
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
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["complete", "indeterminate", "loading"],
        },
        {
          attribute: "[data-value]",
          values: "The current value",
        },
        {
          attribute: "[data-max]",
          values: "The max value",
        },
      ],
    },
    {
      tag: "portal",
      props: [],
    },
    {
      tag: "overlay",
      props: [],
      dataAttribute: [],
    },
    {
      tag: "content",
      props: [],
      dataAttribute: [],
    },
    {
      tag: "close",
      props: [],
    },
    {
      tag: "title",
      props: [],
    },
    {
      tag: "description",
      props: [],
    },
  ],
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [],
    },
  ],
};

export default progressAPI;
