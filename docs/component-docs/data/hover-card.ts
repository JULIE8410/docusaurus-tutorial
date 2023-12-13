// 1.0.6
const hoverCardAPI: Object = {
  component: "hover-card",
  props: [
    {
      tag: "root",
      props: [
        {
          name: "defaultOpen",
          type: "boolean",
          description:
            "The open state of the hover card when it is initially rendered. Use when you do not need to control its open state.",
        },
        {
          name: "open",
          type: "boolean",
          description:
            "The controlled open state of the hover card. Must be used in conjunction with <Code>onOpenChange</Code>.",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          typeSimple: "function",
          description:
            "Event handler called when the open state of the hover card changes.",
        },
        {
          name: "openDelay",
          type: "number",
          defaultValue: 700,
          description:
            "The duration from when the mouse enters the trigger until the hover card opens.",
        },
        {
          name: "closeDelay",
          type: "number",
          defaultValue: 300,
          description:
            "The duration from when the mouse leaves the trigger or content until the hover card closes.",
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
            "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by <Code>HoverCard.Content</Code>.",
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
          name: "forceMount",
          type: "boolean",
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from{" "} <Code>HoverCard.Portal</Code>.',
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
      ],
      cssVariable: [
        {
          cssVariable: "--radix-hover-card-content-transform-origin",
          description:
            "The <Code>transform-origin</Code> computed from the content and arrow positions/offsets",
        },
        {
          cssVariable: "--radix-hover-card-content-available-width",
          description:
            "The remaining width between the trigger and the boundary edge",
        },
        {
          cssVariable: "--radix-hover-card-content-available-height",
          description:
            "The remaining height between the trigger and the boundary edge",
        },
        {
          cssVariable: "--radix-hover-card-trigger-width",
          description: "The width of the trigger",
        },
        {
          cssVariable: "--radix-hover-card-trigger-height",
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
};

export default hoverCardAPI;
