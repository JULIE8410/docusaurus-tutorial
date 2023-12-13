// 1.0.3

const separatortAPI: Object = {
  component: "separator",
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
          name: "orientation",
          type: '"horizontal" | "vertical"',
          typeSimple: "enum",
          defaultValue: '"horizontal"',
          description: "The orientation of the separator.",
        },
        {
          name: "decorative",
          type: "boolean",
          description:
            "When <Code>true</Code>, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.",
        },
      ],
    },
  ],
};

export default separatortAPI;
