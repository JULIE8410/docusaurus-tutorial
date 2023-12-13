// 1.0.4
const dialogAPI: Object = {
  component: "dialog",
  props: [
    {
      tag: "root",
      props: [
        {
          name: "defaultOpen",
          type: "boolean",
          description:
            "The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.",
        },
        {
          name: "open",
          type: "boolean",
          description:
            "The controlled open state of the dialog. Must be used in conjunction with <Code>onOpenChange</Code>.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "Event handler called when the open state of the dialog changes.",
        },
        {
          name: "modal",
          required: false,
          type: "boolean",
          defaultValue: "true",
          description:
            "The modality of the dialog. When set to <Code>true</Code>, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.",
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
      ],
    },
    {
      tag: "portal",
      props: [
        {
          name: "forceMount",
          type: "boolean",
          description:
            "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by <Code>Dialog.Overlay</Code> and{' '} <Code>Dialog.Content</Code>.",
        },
        {
          name: "container",
          type: "HTMLElement",
          defaultValue: "document.body",
          description:
            "Specify a container element to portal the content into.",
        },
      ],
    },
    {
      tag: "overlay",
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
            "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from{' '} <Code>Dialog.Portal</Code>.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
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
            "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from{' '} <Code>Dialog.Portal</Code>.",
        },
        {
          name: "onOpenAutoFocus",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "Event handler called when focus moves into the component after opening. It can be prevented by calling{' '} <Code>event.preventDefault</Code>.",
        },
        {
          name: "onCloseAutoFocus",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "Event handler called when focus moves to the trigger after closing. It can be prevented by calling <Code>event.preventDefault</Code>.",
        },
        {
          name: "onEscapeKeyDown",
          type: "(event: KeyboardEvent) => void",
          typeSimple: "function",
          description:
            "Event handler called when the escape key is down. It can be prevented by calling <Code>event.preventDefault</Code>.",
        },
        {
          name: "onPointerDownOutside",
          type: "(event: PointerDownOutsideEvent) => void",
          typeSimple: "function",
          description:
            "Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling{' '} <Code>event.preventDefault</Code>.",
        },
        {
          name: "onInteractOutside",
          type: "(event: React.FocusEvent | MouseEvent | TouchEvent) => void",
          typeSimple: "function",
          description:
            "Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
        },
      ],
    },
    {
      tag: "close",
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
      tag: "title",
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
      tag: "description",
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
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [
        {
          keys: ["Space"],
          description: "Opens/closes the dialog.",
        },
        {
          keys: ["Enter"],
          description: "Opens/closes the dialog.",
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
          keys: ["Esc"],
          description:
            "Closes the dialog and moves focus to <Code>Dialog.Trigger</Code>.",
        },
      ],
    },
  ],
};

export default dialogAPI;
