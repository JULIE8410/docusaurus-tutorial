// 1.2.2
const selectAPI: Object = {
  component: "select",
  props: [
    {
      tag: "root",
      props: [
        {
          name: "defaultValue",
          required: false,
          type: "string",
          description:
            "The value of the select when initially rendered. Use when you do not need to control the state of the select.",
        },
        {
          name: "value",
          required: false,
          type: "string",
          description:
            'The controlled value of the select. Should be used in conjunction with{" "} <Code>onValueChange</Code>.',
        },
        {
          name: "onValueChange",
          required: false,
          type: "(value: string) => void",
          typeSimple: "function",
          description: "Event handler called when the value changes.",
        },
        {
          name: "defaultOpen",
          type: "boolean",
          description:
            "The open state of the select when it is initially rendered. Use when you do not need to control its open state.",
        },
        {
          name: "open",
          type: "boolean",
          description:
            "The controlled open state of the select. Must be used in conjunction with <Code>onOpenChange</Code>.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "Event handler called when the open state of the select changes.",
        },
        {
          name: "dir",
          required: false,
          type: '"ltr" | "rtl"',
          typeSimple: "enum",
          description:
            "The reading direction of the select when applicable. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.",
        },
        {
          name: "name",
          type: "string",
          description:
            "The name of the select. Submitted with its owning form as part of a name/value pair.",
        },
        {
          name: "disabled",
          type: "boolean",
          description:
            "When <Code>true</Code>, prevents the user from interacting withselect.",
        },
        {
          name: "required",
          type: "boolean",
          description:
            "When <Code>true</Code>, indicates that the user must select a value before the owning form can be submitted.",
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
        {
          attribute: "[data-placeholder]",
          values: "Present when has placeholder",
        },
      ],
    },
    {
      tag: "value",
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
          name: "placeholder",
          required: false,
          type: "ReactNode",
          description:
            'The content that will be rendered inside the <Code>Select.Value</Code>{" "} when no <Code>value</Code> or <Code>defaultValue</Code> is set.',
        },
      ],
    },
    {
      tag: "icon",
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
      tag: "portal",
      props: [
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
            'Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling{" "} <Code>event.preventDefault</Code>.',
        },
        {
          name: "position",
          type: '"item-aligned" | "popper"',
          typeSimple: "enum",
          defaultValue: '"item-aligned"',
          description:
            'The positioning mode to use, <Code>item-aligned</Code> is the default and behaves similarly to a native MacOS menu by positioning content relative to the active item. <Code>popper</Code> positions content in the same way as our other primitives, for example <Code>Popover</Code>{" "} or <Code>DropdownMenu</Code>.',
        },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          typeSimple: "enum",
          defaultValue: '"bottom"',
          description:
            'The preferred side of the anchor to render against when open. Will be reversed when collisions occur and <Code>avoidCollisions</Code> is enabled. Only available when <Code>position</Code> is set to{" "} <Code>popper</Code>.',
        },
        {
          name: "sideOffset",
          type: "number",
          defaultValue: "0",
          description:
            'The distance in pixels from the anchor. Only available when{" "} <Code>position</Code> is set to <Code>popper</Code>.',
        },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          typeSimple: "enum",
          defaultValue: '"start"',
          description:
            'The preferred alignment against the anchor. May change when collisions occur. Only available when <Code>position</Code> is set to{" "} <Code>popper</Code>.',
        },
        {
          name: "alignOffset",
          type: "number",
          defaultValue: "0",
          description:
            'An offset in pixels from the <Code>"start"</Code> or{" "} <Code>"end"</Code> alignment options. Only available when{" "} <Code>position</Code> is set to <Code>popper</Code>.',
        },
        {
          name: "avoidCollisions",
          type: "boolean",
          defaultValue: "true",
          description:
            "When <Code>true</Code>, overrides the <Code>side</Code> and <Code>align</Code> preferences to prevent collisions with boundary edges. Only available when <Code>position</Code> is set to <Code> popper </Code>.",
        },
        {
          name: "collisionBoundary",
          type: "Element | null | Array<Element | null>",
          typeSimple: "Boundary",
          defaultValue: "[]",
          description:
            'The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check. Only available when <Code>position</Code> is set to{" "} <Code>popper</Code>.',
        },
        {
          name: "collisionPadding",
          type: "number | Partial<Record<Side, number>>",
          typeSimple: "number | Padding",
          defaultValue: "10",
          description:
            "The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: <Code>{`{ top: 20, left: 20 }`}</Code> . Only available when <Code>position</Code> is set to <Code> popper </Code>.",
        },
        {
          name: "arrowPadding",
          type: "number",
          defaultValue: "0",
          description:
            "The padding between the arrow and the edges of the content. If your content has <Code>border-radius</Code>, this will prevent it from overflowing the corners. Only available when <Code>position</Code> is set to <Code>popper</Code>.",
        },
        {
          name: "sticky",
          type: '"partial" | "always"',
          typeSimple: "enum",
          defaultValue: '"partial"',
          description:
            'The sticky behavior on the align axis. <Code>"partial"</Code> will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst <Code>"always"</Code> will keep the content in the boundary regardless. Only available when{" "} <Code>position</Code> is set to <Code>popper</Code>.',
        },
        {
          name: "hideWhenDetached",
          type: "boolean",
          defaultValue: "false",
          description:
            'Whether to hide the content when the trigger becomes fully occluded. Only available when <Code>position</Code> is set to{" "} <Code>popper</Code>.',
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
      ],
      cssVariable: [
        {
          cssVariable: "--radix-select-content-transform-origin",
          description:
            'The <Code>transform-origin</Code> computed from the content and arrow positions/offsets. Only present when <Code>position="popper"</Code>.',
        },
        {
          cssVariable: "--radix-select-content-available-width",
          description:
            'The remaining width between the trigger and the boundary edge. Only present when <Code>position="popper"</Code>.',
        },
        {
          cssVariable: "--radix-select-content-available-height",
          description:
            'The remaining height between the trigger and the boundary edge. Only present when <Code>position="popper"</Code>.',
        },
        {
          cssVariable: "--radix-select-trigger-width",
          description:
            'The width of the trigger. Only present when{" "} <Code>position="popper"</Code>.',
        },
        {
          cssVariable: "--radix-select-trigger-height",
          description:
            'The height of the trigger. Only present when{" "} <Code>position="popper"</Code>.',
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
          required: true,
          type: "string",
          description:
            "The value given as data when submitted with a <Code>name</Code>.",
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
            'Optional text used for typeahead purposes. By default the typeahead behavior will use the <Code>.textContent</Code> of the{" "} <Code>Select.ItemText</Code> part. Use this when the content is complex, or you have non-textual content inside.',
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked"],
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
      tag: "itemtext",
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
      ],
    },
    {
      tag: "scrollupbutton",
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
      tag: "scrolldownbutton",
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
  ],
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [
        {
          keys: ["Space"],
          description:
            "When focus is on <Code>Select.Trigger</Code>, opens the select and focuses the selected item. <br /> When focus is on an item, selects the focused item.",
        },
        {
          keys: ["Enter"],
          description:
            "When focus is on <Code>Select.Trigger</Code>, opens the select and focuses the first item. <br /> When focus is on an item, selects the focused item.",
        },
        {
          keys: ["ArrowDown"],
          description:
            "When focus is on <Code>Select.Trigger</Code>, opens the select. <br /> When focus is on an item, moves focus to the next item.",
        },
        {
          keys: ["ArrowUp"],
          description:
            "When focus is on <Code>Select.Trigger</Code>, opens the select. <br /> When focus is on an item, moves focus to the previous item.",
        },
        {
          keys: ["Esc"],
          description:
            "Closes the select and moves focus to <Code>Select.Trigger</Code>.",
        },
      ],
    },
  ],
};

export default selectAPI;
