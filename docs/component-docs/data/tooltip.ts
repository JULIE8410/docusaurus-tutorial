// 1.0.6
const tooltipAPI: Object = {
  component: "tooltip",
  props: [
    {
      tag: "provider",
      props: [
        {
          name: "delayDuration",
          type: "number",
          defaultValue: 700,
          description:
            "The duration from when the mouse enters a tooltip trigger until the tooltip opens.",
        },
        {
          name: "skipDelayDuration",
          type: "number",
          defaultValue: 300,
          description:
            "How much time a user has to enter another trigger without incurring a delay again.",
        },
        {
          name: "disableHoverableContent",
          type: "boolean",
          description:
            "Prevents <Code>Tooltip.Content</Code> from remaining open when hovering. Disabling this has accessibility consequences.",
        },
      ],
    },
    {
      tag: "root",
      props: [
        {
          name: "defaultOpen",
          type: "boolean",
          description:
            "The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state.",
        },
        {
          name: "open",
          type: "boolean",
          description:
            "The controlled open state of the tooltip. Must be used in conjunction with <Code>onOpenChange</Code>.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "Event handler called when the open state of the tooltip changes.",
        },
        {
          name: "delayDuration",
          type: "number",
          defaultValue: 700,
          description:
            "Override the duration given to the `Provider` to customise the open delay for a specific tooltip.",
        },
        {
          name: "disableHoverableContent",
          type: "boolean",
          defaultValue: false,
          description:
            'Prevents <Code>Tooltip.Content</Code> from remaining open when hovering. Disabling this has accessibility consequences. Inherits from{" "} <Code>Tooltip.Provider</Code>.',
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
          values: ["closed", "delayed-open", "instant-open"],
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
            "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by <Code>Tooltip.Content</Code>.",
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
          name: "aria-label",
          type: "string",
          description:
            "By default, screenreaders will announce the content inside the component. If this is not descriptive enough, or you have content that cannot be announced, use <Code>aria-label</Code> as a more descriptive label.",
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
          name: "forceMount",
          type: "boolean",
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from{" "} <Code>Tooltip.Portal</Code>.',
        },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          typeSimple: "enum",
          defaultValue: '"top"',
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
            "The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: <Code>{`{ top: 20, left: 20 }`}</Code>.",
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
          values: ["closed", "delayed-open", "instant-open"],
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
          cssVariable: "--radix-tooltip-content-transform-origin",
          description:
            "The <Code>transform-origin</Code> computed from the content and arrow positions/offsets",
        },
        {
          cssVariable: "--radix-tooltip-content-available-width",
          description:
            "The remaining width between the trigger and the boundary edge",
        },
        {
          cssVariable: "--radix-tooltip-content-available-height",
          description:
            "The remaining height between the trigger and the boundary edge",
        },
        {
          cssVariable: "--radix-tooltip-trigger-width",
          description: "The width of the trigger",
        },
        {
          cssVariable: "--radix-tooltip-trigger-height",
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
  ],
  accessibility: [
    {
      tag: "keyboardInteractions",
      props: [
        {
          keys: ["Tab"],
          description: "Opens/closes the tooltip without delay.",
        },
        {
          keys: ["Space"],
          description: "If open, closes the tooltip without delay.",
        },
        {
          keys: ["Enter"],
          description: "If open, closes the tooltip without delay.",
        },
        {
          keys: ["Escape"],
          description: "If open, closes the tooltip without delay.",
        },
      ],
    },
  ],
};

export default tooltipAPI;
