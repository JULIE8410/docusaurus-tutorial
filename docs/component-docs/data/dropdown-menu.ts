// 2.0.5
const dropdownMenuAPI: Object = {
  component: "dropdownMenu",
  props: [
    {
      tag: "root",
      props: [
        {
          name: "defaultOpen",
          type: "boolean",
          description:
            "The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.",
        },
        {
          name: "open",
          type: "boolean",
          description:
            "The controlled open state of the dropdown menu. Must be used in conjunction with <Code>onOpenChange</Code>.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "Event handler called when the open state of the dropdown menu changes.",
        },
        {
          name: "modal",
          required: false,
          type: "boolean",
          defaultValue: "true",
          description:
            "The modality of the dropdown menu. When set to <Code>true</Code>, interaction with outside elements will be disabled and only menu content will be visible to screen readers.",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "The reading direction of submenus when applicable. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.",
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
      tag: "portal",
      props: [
        {
          name: "forceMount",
          type: "boolean",
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by <Code>DropdownMenu.Content</Code> and{" "} <Code>DropdownMenu.SubContent</Code> respectively.',
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
          name: "loop",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "When <Code>true</Code>, keyboard navigation will loop from last item to first, and vice versa.",
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
            "Event handler called when the escape key is down. It can be prevented by calling <Code>event.preventDefault</Code>",
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
          type: "(event: PointerDownOutsideEvent | FocusOutsideEvent) => void",
          typeSimple: "function",
          description:
            "Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>.",
        },
        {
          name: "forceMount",
          type: "boolean",
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from{" "} <Code>DropdownMenu.Portal</Code>.',
        },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          typeSimple: "enum",
          defaultValue: '"bottom"',
          description:
            "The preferred side of the trigger to render against when open. Will be reversed when collisions occur and <Code>avoidCollisions</Code> is enabled.",
        },
        {
          name: "sideOffset",
          type: "number",
          defaultValue: "0",
          description: "The distance in pixels from the trigger.",
        },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          typeSimple: "enum",
          defaultValue: '"center"',
          description:
            "The preferred alignment against the trigger. May change when collisions occur.",
        },
        {
          name: "alignOffset",
          type: "number",
          defaultValue: "0",
          description:
            'An offset in pixels from the <Code>"start"</Code> or{" "} <Code>"end"</Code> alignment options.',
        },
        {
          name: "avoidCollisions",
          type: "boolean",
          defaultValue: "true",
          description:
            "When <Code>true</Code>, overrides the <Code>side</Code> and <Code>align</Code> preferences to prevent collisions with boundary edges.",
        },
        {
          name: "collisionBoundary",
          type: "Element | null | Array<Element | null>",
          typeSimple: "Boundary",
          defaultValue: "[]",
          description:
            "The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.",
        },
        {
          name: "collisionPadding",
          type: "number | Partial<Record<Side, number>>",
          typeSimple: "number | Padding",
          defaultValue: "0",
          description:
            'The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides", or a partial padding object, for example: <Code>{`{ top: 20, left: 20 }`}</Code>.',
        },
        {
          name: "arrowPadding",
          type: "number",
          defaultValue: "0",
          description:
            "The padding between the arrow and the edges of the content. If your content has <Code>border-radius</Code>, this will prevent it from overflowing the corners.",
        },
        {
          name: "sticky",
          type: '"partial" | "always"',
          typeSimple: "enum",
          defaultValue: '"partial"',
          description:
            'The sticky behavior on the align axis. <Code>"partial"</Code> will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst <Code>"always"</Code> will keep the content in the boundary regardless.',
        },
        {
          name: "hideWhenDetached",
          type: "boolean",
          defaultValue: "false",
          description:
            "Whether to hide the content when the trigger becomes fully occluded.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
        },
        {
          attribute: "[data-side]",
          values: ["left", "right", "bottom", "top"],
        },
        {
          attribute: "[data-align]",
          values: ["start", "end", "center"],
        },
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
        },
      ],
      cssVariable: [
        {
          cssVariable: "--radix-dropdown-menu-content-transform-origin",
          description:
            "The <Code>transform-origin</Code> computed from the content and arrow positions/offsets",
        },
        {
          cssVariable: "--radix-dropdown-menu-content-available-width",
          description:
            "The remaining width between the trigger and the boundary edge",
        },
        {
          cssVariable: "--radix-dropdown-menu-content-available-height",
          description:
            "The remaining height between the trigger and the boundary edge",
        },
        {
          cssVariable: "--radix-dropdown-menu-trigger-width",
          description: "The width of the trigger",
        },
        {
          cssVariable: "--radix-dropdown-menu-trigger-height",
          description: "The height of the trigger",
        },
      ],
    },
    {
      tag: "arrow",
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
          name: "width",
          type: "number",
          defaultValue: 10,
          description: "The width of the arrow in pixels.",
        },
        {
          name: "height",
          type: "number",
          defaultValue: 5,
          description: "The height of the arrow in pixels.",
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
          name: "disabled",
          type: "boolean",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the item.",
        },
        {
          name: "onSelect",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "Event handler called when the user selects an item (via mouse or keyboard). Calling <Code>event.preventDefault</Code> in this handler will prevent the dropdown menu from closing when selecting that item.",
        },
        {
          name: "textValue",
          type: "string",
          description:
            "Optional text used for typeahead purposes. By default the typeahead behavior will use the <Code>.textContent</Code> of the item. Use this when the content is complex, or you have non-textual content inside.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-orientation]",
          values: ["vertical", "horizontal"],
        },
        {
          attribute: "[data-highlighted]",
          values: "Present when highlighted",
        },
        {
          attribute: "[data-disabled]",
          values: "Present when disabled",
        },
      ],
    },
    {
      tag: "group",
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
      tag: "label",
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
      tag: "checkboxitem",
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
          name: "checked",
          type: `boolean | 'indeterminate'`,
          description:
            "The controlled checked state of the item. Must be used in conjunction with <Code>onCheckedChange</Code>.",
        },
        {
          name: "onCheckedChange",
          type: `(checked: boolean) => void`,
          typeSimple: "function",
          description: "Event handler called when the checked state changes.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the item.",
        },
        {
          name: "onSelect",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "Event handler called when the user selects an item (via mouse or keyboard). Calling <Code>event.preventDefault</Code> in this handler will prevent the dropdown menu from closing when selecting that item.",
        },
        {
          name: "textValue",
          type: "string",
          description:
            "Optional text used for typeahead purposes. By default the typeahead behavior will use the <Code>.textContent</Code> of the item. Use this when the content is complex, or you have non-textual content inside.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked", "indeterminate"],
        },
        {
          attribute: "[data-highlighted]",
          values: "Present when highlighted",
        },
        {
          attribute: "[data-disabled]",
          values: "Present when disabled",
        },
      ],
    },
    {
      tag: "radiogroup",
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
          type: "string",
          description: "The value of the selected item in the group.",
        },
        {
          name: "onValueChange",
          type: "(value: string) => void",
          typeSimple: "function",
          description: "Event handler called when the value changes.",
        },
      ],
    },
    {
      tag: "radioitem",
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
          type: "string",
          required: true,
          description: "The unique value of the item.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the item.",
        },
        {
          name: "onSelect",
          type: "(event: Event) => void",
          typeSimple: "function",
          description:
            "Event handler called when the user selects an item (via mouse or keyboard). Calling <Code>event.preventDefault</Code> in this handler will prevent the dropdown menu from closing when selecting that item.",
        },
        {
          name: "textValue",
          type: "string",
          description:
            "Optional text used for typeahead purposes. By default the typeahead behavior will use the <Code>.textContent</Code> of the item. Use this when the content is complex, or you have non-textual content inside.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked", "indeterminate"],
        },
        {
          attribute: "[data-highlighted]",
          values: "Present when highlighted",
        },
        {
          attribute: "[data-disabled]",
          values: "Present when disabled",
        },
      ],
    },
    {
      tag: "itemindicator",
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
          values: ["checked", "unchecked", "indeterminate"],
        },
      ],
    },
    {
      tag: "separator",
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
      tag: "sub",
      props: [
        {
          name: "defaultOpen",
          type: "boolean",
          description:
            "The open state of the submenu when it is initially rendered. Use when you do not need to control its open state.",
        },
        {
          name: "open",
          type: "boolean",
          description:
            "The controlled open state of the submenu. Must be used in conjunction with <Code>onOpenChange</Code>.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "Event handler called when the open state of the submenu changes.",
        },
      ],
    },
    {
      tag: "subtrigger",
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
          name: "disabled",
          type: "boolean",
          description:
            "When <Code>true</Code>, prevents the user from interacting with the item.",
        },
        {
          name: "textValue",
          type: "string",
          description:
            "Optional text used for typeahead purposes. By default the typeahead behavior will use the <Code>.textContent</Code> of the item. Use this when the content is complex, or you have non-textual content inside.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
        },
        {
          attribute: "[data-highlighted]",
          values: "Present when highlighted",
        },
        {
          attribute: "[data-disabled]",
          values: "Present when disabled",
        },
      ],
      cssVariable: [
        {
          cssVariable: "--radix-dropdown-menu-content-transform-origin",
          description:
            "The <Code>transform-origin</Code> computed from the content and arrow positions/offsets",
        },
        {
          cssVariable: "--radix-dropdown-menu-content-available-width",
          description:
            "The remaining width between the trigger and the boundary edge",
        },
        {
          cssVariable: "--radix-dropdown-menu-content-available-height",
          description:
            "The remaining height between the trigger and the boundary edge",
        },
        {
          cssVariable: "--radix-dropdown-menu-trigger-width",
          description: "The width of the trigger",
        },
        {
          cssVariable: "--radix-dropdown-menu-trigger-height",
          description: "The height of the trigger",
        },
      ],
    },
    {
      tag: "subcontent",
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
          name: "loop",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "When <Code>true</Code>, keyboard navigation will loop from last item to first, and vice versa.",
        },
        {
          name: "onEscapeKeyDown",
          type: "(event: KeyboardEvent) => void",
          typeSimple: "function",
          description:
            "Event handler called when the escape key is down. It can be prevented by calling <Code>event.preventDefault</Code>",
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
          type: "(event: PointerDownOutsideEvent | FocusOutsideEvent) => void",
          typeSimple: "function",
          description:
            "Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>.",
        },
        {
          name: "forceMount",
          type: "boolean",
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from{" "} <Code>DropdownMenu.Portal</Code>.',
        },
        {
          name: "sideOffset",
          type: "number",
          defaultValue: "0",
          description: "The distance in pixels from the trigger.",
        },
        {
          name: "alignOffset",
          type: "number",
          defaultValue: "0",
          description:
            'An offset in pixels from the <Code>"start"</Code> or{" "} <Code>"end"</Code> alignment options.',
        },
        {
          name: "avoidCollisions",
          type: "boolean",
          defaultValue: "true",
          description:
            "When <Code>true</Code>, overrides the <Code>side</Code> and <Code>align</Code> preferences to prevent collisions with boundary edges.",
        },
        {
          name: "collisionBoundary",
          type: "Element | null | Array<Element | null>",
          typeSimple: "Boundary",
          defaultValue: "[]",
          description:
            "The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.",
        },
        {
          name: "collisionPadding",
          type: "number | Partial<Record<Side, number>>",
          typeSimple: "number | Padding",
          defaultValue: "0",
          description:
            'The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides", or a partial padding object, for example: <Code>{`{ top: 20, left: 20 }`}</Code>.',
        },
        {
          name: "arrowPadding",
          type: "number",
          defaultValue: "0",
          description:
            "The padding between the arrow and the edges of the content. If your content has <Code>border-radius</Code>, this will prevent it from overflowing the corners.",
        },
        {
          name: "sticky",
          type: '"partial" | "always"',
          typeSimple: "enum",
          defaultValue: '"partial"',
          description:
            'The sticky behavior on the align axis. <Code>"partial"</Code> will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst <Code>"always"</Code> will keep the content in the boundary regardless.',
        },
        {
          name: "hideWhenDetached",
          type: "boolean",
          defaultValue: "false",
          description:
            "Whether to hide the content when the trigger becomes fully occluded.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"],
        },
        {
          attribute: "[data-side]",
          values: ["left", "right", "bottom", "top"],
        },
        {
          attribute: "[data-align]",
          values: ["start", "end", "center"],
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
          keys: ["Space"],
          description:
            "When focus is on <Code>DropdownMenu.Trigger</Code>, opens the dropdown menu and focuses the first item. <br /> When focus is on an item, activates the focused item.",
        },
        {
          keys: ["Enter"],
          description:
            "When focus is on <Code>DropdownMenu.Trigger</Code>, opens the dropdown menu and focuses the first item. <br /> When focus is on an item, activates the focused item.",
        },
        {
          keys: ["ArrowDown"],
          description:
            "When focus is on <Code>DropdownMenu.Trigger</Code>, opens the dropdown menu. <br /> When focus is on an item, moves focus to the next item.",
        },
        {
          keys: ["ArrowUp"],
          description:
            "When focus is on an item, moves focus to the previous item.",
        },
        {
          keys: ["ArrowRight", "ArrowLeft"],
          description:
            "When focus is on <Code>DropdownMenu.SubTrigger</Code>, opens or closes the submenu depending on reading direction.",
        },
        {
          keys: ["Esc"],
          description:
            "Closes the dropdown menu and moves focus to{' '}<Code>DropdownMenu.Trigger</Code>.",
        },
      ],
    },
  ],
};

export default dropdownMenuAPI;
