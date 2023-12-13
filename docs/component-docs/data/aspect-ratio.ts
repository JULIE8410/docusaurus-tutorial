// 1.0.3
const aspectRatioAPI: Object = {
  component: "aspect-ratio",
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
          name: "ratio",
          type: "number",
          defaultValue: "1",
          description: "The desired ratio",
        },
      ],
    },
  ],
};

export default aspectRatioAPI;
