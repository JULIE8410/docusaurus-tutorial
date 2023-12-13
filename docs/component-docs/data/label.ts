// 2.0.2
const labelAPI: Object = {
  component: "label",
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
          name: "htmlFor",
          type: "string",
          description: "The id of the element the label is associated with.",
        },
      ],
    },
  ],
};

export default labelAPI;
