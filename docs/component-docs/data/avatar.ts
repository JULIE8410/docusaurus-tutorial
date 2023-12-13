// 1.0.3
const avatarAPI: Object = {
  component: "avatar",
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
      ],
    },
    {
      tag: "image",
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
          name: "onLoadingStatusChange",
          type: '(status: "idle" | "loading" | "loaded" | "error") => void',
          typeSimple: "function",
          description:
            "A callback providing information about the loading status of the image. This is useful in case you want to control more precisely what to render as the image is loading.",
        },
      ],
    },
    {
      tag: "fallback",
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
          name: "delayMs",
          type: "number",
          description:
            "Useful for delaying rendering so it only appears for those with slower connections.",
        },
      ],
    },
  ],
};

export default avatarAPI;
