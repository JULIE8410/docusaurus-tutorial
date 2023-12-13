// 1.1.4

const toastAPI: Object = {
  component: "toast",
  props: [
    {
      tag: "provider",
      props: [
        {
          name: "duration",
          type: "number",
          defaultValue: 5000,
          description:
            "The time in milliseconds that should elapse before automatically closing each toast.",
        },
        {
          name: "label",
          required: true,
          type: "string",
          defaultValue: '"Notification"',
          description:
            "An author-localized label for each toast. Used to help screen reader users associate the interruption with a toast.",
        },
        {
          name: "swipeDirection",
          type: '"right" | "left" | "up" | "down"',
          typeSimple: "enum",
          defaultValue: '"right"',
          description:
            "The direction of the pointer swipe that should close the toast.",
        },
        {
          name: "swipeThreshold",
          type: "number",
          defaultValue: 50,
          description:
            "The distance in pixels that the swipe gesture must travel before a close is triggered.",
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
          name: "hotkey",
          type: "string[]",
          defaultValue: '["F8"]',
          description:
            'The keys to use as the keyboard shortcut that will move focus to the toast viewport. Use <Code>event.code</Code> value for each key from{" "} <Link href="https://keycode.info/" variant="blue" target="_blank"> keycode.info </Link> . For meta keys, use <Code>ctrlKey</Code>, <Code>shiftKey</Code>, <Code> altKey </Code> and/or <Code>metaKey</Code>.',
          guide: "keycode.info",
          url: "https://keycode.info/",
        },
        {
          name: "label",
          type: "string",
          defaultValue: '"Notifications ({hotkey})"',
          description:
            "An author-localized label for the toast region to provide context for screen reader users when navigating page landmarks. The available `{hotkey}` placeholder will be replaced for you.",
        },
      ],
    },
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
          type: '"foreground" | "background"',
          typeSimple: "enum",
          defaultValue: '"foreground"',
          description:
            'Control the{" "} <Link href="/primitives/docs/components/toast#sensitivity" variant="blue"> sensitivity </Link>{" "} of the toast for accessibility purposes. For toasts that are the result of a user action, choose <Code>foreground</Code>. Toasts generated from background tasks should use <Code>background</Code>.',
          guide: "sensitivity",
          url: "/primitives/docs/components/toast#sensitivity",
        },
        {
          name: "duration",
          type: "number",
          description:
            "The time in milliseconds that should elapse before automatically closing the toast. This will override the value supplied to the provider.",
        },
        {
          name: "defaultOpen",
          type: "boolean",
          defaultValue: "true",
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
          name: "onEscapeKeyDown",
          type: "(event: KeyboardEvent) => void",
          typeSimple: "function",
          description:
            "Event handler called when the escape key is down. It can be prevented by calling <Code>event.preventDefault</Code>.",
        },
        {
          name: "onPause",
          type: "() => void",
          typeSimple: "function",
          description:
            "Event handler called when the dismiss timer is paused. This occurs when the pointer is moved over the viewport, the viewport is focused or when the window is blurred.",
        },
        {
          name: "onResume",
          type: "() => void",
          typeSimple: "function",
          description:
            "Event handler called when the dismiss timer is resumed. This occurs when the pointer is moved away from the viewport, the viewport is blurred or when the window is focused.",
        },
        {
          name: "onSwipeStart",
          type: "(event: SwipeEvent) => void",
          typeSimple: "function",
          description:
            "Event handler called when starting a swipe interaction. It can be prevented by calling <Code>event.preventDefault</Code>.",
        },
        {
          name: "onSwipeMove",
          type: "(event: SwipeEvent) => void",
          typeSimple: "function",
          description:
            "Event handler called during a swipe interaction. It can be prevented by calling <Code>event.preventDefault</Code>.",
        },
        {
          name: "onSwipeEnd",
          type: "(event: SwipeEvent) => void",
          typeSimple: "function",
          description:
            "Event handler called at the end of a swipe interaction. It can be prevented by calling <Code>event.preventDefault</Code>.",
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
          attribute: "[data-swipe]",
          values: ["start", "move", "cancel", "end"],
        },
        {
          attribute: "[data-swipe-direction]",
          values: ["up", "down", "left", "right"],
        },
      ],
      cssVariable: [
        {
          cssVariable: "--radix-toast-swipe-move-x",
          description:
            "The offset position of the toast when horizontally swiping",
        },
        {
          cssVariable: "--radix-toast-swipe-move-y",
          description:
            "The offset position of the toast when vertically swiping",
        },
        {
          cssVariable: "--radix-toast-swipe-end-x",
          description:
            "The offset end position of the toast after horizontally swiping",
        },
        {
          cssVariable: "--radix-toast-swipe-end-y",
          description:
            "The offset end position of the toast after vertically swiping",
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
    {
      tag: "action",
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
          name: "altText",
          required: true,
          type: "string",
          description:
            'Describe an{" "} <Link variant="subtle" href="./toast#alternative-action"> alternative way to achieve the action </Link>{" "} for screen reader users who cannot access the toast easily.',
          guide: "alternative way to achieve the action",
          url: "./toast#alternative-action",
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
  ],
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [
        {
          keys: ["F8"],
          description: "Focuses toasts viewport.",
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
          keys: ["Space"],
          description:
            'When focus is on a <Code>Toast.Action</Code> or{" "} <Code>Toast.Close</Code>, closes the toast.',
        },
        {
          keys: ["Enter"],
          description:
            'When focus is on a <Code>Toast.Action</Code> or{" "} <Code>Toast.Close</Code>, closes the toast.',
        },
        {
          keys: ["Esc"],
          description:
            "When focus is on a <Code>Toast</Code>, closes the toast.",
        },
      ],
    },
  ],
};

export default toastAPI;
