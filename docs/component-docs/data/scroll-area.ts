// 1.0.4
const scrollAreaAPI: Object = {
  component: "scroll-area",
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
          type: '"auto" | "always" | "scroll" | "hover"',
          typeSimple: "enum",
          defaultValue: '"hover"',
          description:
            'Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars. <br /> <br /> <Code>"auto"</Code> means that scrollbars are visible when content is overflowing on the corresponding orientation. <br /> <Code>"always"</Code> means that scrollbars are always visible regardless of whether the content is overflowing. <br /> <Code>"scroll"</Code> means that scrollbars are visible when the user is scrolling along its corresponding orientation. <br /> <Code>"hover"</Code> when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.',
        },
        {
          name: "scrollHideDelay",
          type: "number",
          defaultValue: "600",
          description:
            'If <Code>type</Code> is set to either <Code>"scroll"</Code> or{" "} <Code>"hover"</Code>, this prop determines the length of time, in milliseconds, before the scrollbars are hidden after the user stops interacting with scrollbars.',
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "The reading direction of the scroll area. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.",
        },
      ],
    },
    {
      tag: "viewport",
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
      tag: "scrollbar",
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
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical"',
          typeSimple: "enum",
          defaultValue: "vertical",
          description: "The orientation of the scrollbar",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["visible", "hidden"],
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
          attribute: "[data-state]",
          values: ["visible", "hidden"],
        },
      ],
    },
    {
      tag: "corner",
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
  ],
};

export default scrollAreaAPI;
