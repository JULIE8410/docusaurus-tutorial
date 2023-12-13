// 1.1.3
const navigationMenuAPI: Object = {
  component: "navigation-menu",
  props: [
    {
      tag: "root",
      props: [
        {
          name: "defaultValue",
          required: false,
          type: "string",
          description:
            "The value of the menu item that should be active when initially rendered. Use when you do not need to control the value state.",
        },
        {
          name: "value",
          required: false,
          type: "string",
          description:
            "The controlled value of the menu item to activate. Should be used in conjunction with <Code>onValueChange</Code>.",
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string) => void",
          typeSimple: "function",
          description: "Event handler called when the value changes.",
        },
        {
          name: "delayDuration",
          type: "number",
          defaultValue: 200,
          description:
            "The duration from when the mouse enters a trigger until the content opens.",
        },
        {
          name: "skipDelayDuration",
          type: "number",
          defaultValue: 300,
          description:
            "How much time a user has to enter another trigger without incurring a delay again.",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "The reading direction of the menu when applicable. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.",
        },
        {
          name: "orientation",
          required: false,
          type: '"horizontal" | "vertical"',
          typeSimple: "enum",
          defaultValue: '"horizontal"',
          description: "The orientation of the menu.",
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
      tag: "sub",
      props: [
        {
          name: "defaultValue",
          required: false,
          type: "string",
          description:
            "The value of the menu item that should be active when initially rendered. Use when you do not need to control the value state.",
        },
        {
          name: "value",
          required: false,
          type: "string",
          description:
            "The controlled value of the sub menu item to activate. Should be used in conjunction with <Code>onValueChange</Code>.",
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
          type: '"horizontal" | "vertical"',
          typeSimple: "enum",
          defaultValue: '"horizontal"',
          description: "The orientation of the menu.",
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
          name: "value",
          required: false,
          type: "string",
          description:
            "A unique value that associates the item with an active value when the navigation menu is controlled. This prop is managed automatically when uncontrolled.",
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
          name: "disableOutsidePointerEvents",
          type: "boolean",
          defaultValue: "false",
          description:
            "When <Code>true</Code>, hover/focus/click interactions will be disabled on elements outside the bounds of the component. Users will need to click twice on outside elements to interact with them: Once to close the navigation menu, and again to activate the element.",
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
            'Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling{" "} <Code>event.preventDefault</Code>.',
        },
        {
          name: "onFocusOutside",
          type: "(event: FocusOutsideEvent) => void",
          typeSimple: "function",
          description:
            'Event handler called when focus moves outside the bounds of the component. It can be prevented by calling{" "} <Code>event.preventDefault</Code>.',
        },
        {
          name: "onInteractOutside",
          type: "(event: React.FocusEvent | MouseEvent | TouchEvent) => void",
          typeSimple: "function",
          description:
            "Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>.",
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
          attribute: "[data-motion]",
          values: ["to-start", "to-end", "from-start", "from-end"],
        },
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
        },
      ],
    },
    {
      tag: "link",
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
          name: "active",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "Used to identify the link as the currently active page.",
        },
        {
          name: "onSelect",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "Event handler called when the user selects a link (via mouse or keyboard). Calling <Code>event.preventDefault</Code> in this handler will prevent the navigation menu from closing when selecting that link.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-active]",
          values: "Present when active",
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
          values: ["visible", "hidden"],
        },
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
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
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
        },
      ],
      cssVariable: [
        {
          cssVariable: "--radix-navigation-menu-viewport-width",
          description:
            "The width of the viewport when visible/hidden, computed from the active content",
        },
        {
          cssVariable: "--radix-navigation-menu-viewport-height",
          description:
            "The height of the viewport when visible/hidden, computed from the active content",
        },
      ],
    },
  ],
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [
        {
          keys: ["Space", "Enter"],
          description:
            "When focus is on <Code>NavigationMenu.Trigger</Code>, opens the content.",
        },
        {
          keys: ["Tab"],
          description: "Moves focus to the next focusable element.",
        },
        {
          keys: ["ArrowDown"],
          description:
            'When <Code>horizontal</Code> and focus is on an open{" "} <Code>NavigationMenu.Trigger</Code>, moves focus into{" "} <Code>NavigationMenu.Content</Code>. <br /> Moves focus to the next <Code>NavigationMenu.Trigger</Code> or{" "} <Code>NavigationMenu.Link</Code>.',
        },
        {
          keys: ["ArrowUp"],
          description:
            'Moves focus to the previous <Code>NavigationMenu.Trigger</Code> or{" "} <Code>NavigationMenu.Link</Code>.',
        },
        {
          keys: ["ArrowRight", "ArrowLeft"],
          description:
            'When <Code>vertical</Code> and focus is on an open{" "} <Code>NavigationMenu.Trigger</Code>, moves focus into its{" "} <Code>NavigationMenu.Content</Code>. <br /> Moves focus to the next / previous <Code> NavigationMenu.Trigger </Code>{" "} or <Code>NavigationMenu.Link</Code>.',
        },
        {
          keys: ["Home", "End"],
          description:
            'Moves focus to the first/last <Code>NavigationMenu.Trigger</Code> or{" "} <Code>NavigationMenu.Link</Code>.',
        },
        {
          keys: ["Esc"],
          description:
            'Closes open <Code>NavigationMenu.Content</Code> and moves focus to its{" "} <Code>NavigationMenu.Trigger</Code>.',
        },
      ],
    },
  ],
};

export default navigationMenuAPI;
