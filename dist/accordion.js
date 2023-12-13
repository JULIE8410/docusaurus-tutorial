"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accordionAPI = void 0;
exports.accordionAPI = {
    component: "accordion",
    props: [
        {
            tag: "root",
            props: [
                {
                    name: "asChild",
                    required: false,
                    type: "boolean",
                    default: "false",
                    description: '(<> Change the default rendered element for the one passed as a child, merging their props and behavior.<br /><br /> Read our <a href="../guides/composition">Composition</a> guide for more details. </>)',
                },
                {
                    name: "type",
                    required: true,
                    type: '"single" | "multiple"',
                    typeSimple: "enum",
                    description: "( <span> Determines whether one or multiple items can be opened at the same time. </span>)",
                },
                {
                    name: "value",
                    required: false,
                    type: "string",
                    description: '( <span> The controlled value of the item to expand when <Code>type</Code> is{" "} <Code>"single"</Code>. Must be used in conjunction with{" "} <Code>onValueChange</Code>. </span>)',
                },
                {
                    name: "defaultValue",
                    required: false,
                    type: "string",
                    description: '( <span> The value of the item to expand when initially rendered and{" "} <Code>type</Code> is <Code>"single"</Code>. Use when you do not need to control the state of the items. </span>)',
                },
                {
                    name: "onValueChange",
                    required: false,
                    type: "(value: string) => void",
                    typeSimple: "function",
                    description: '( <span> Event handler called when the expanded state of an item changes and{" "} <Code>type</Code> is <Code>"single"</Code>. </span> )',
                },
                {
                    name: "value",
                    required: false,
                    default: "[]",
                    type: "string[]",
                    description: '( <span> The controlled value of the item to expand when <Code>type</Code> is{" "} <Code>"multiple"</Code>. Must be used in conjunction with{" "} <Code>onValueChange</Code>. </span> )',
                },
                {
                    name: "defaultValue",
                    required: false,
                    default: "[]",
                    type: "string[]",
                    description: '( <span> The value of the item to expand when initially rendered when{" "} <Code>type</Code> is <Code>"multiple"</Code>. Use when you do not need to control the state of the items. </span>)',
                },
                {
                    name: "onValueChange",
                    required: false,
                    type: "(value: string[]) => void",
                    typeSimple: "function",
                    description: '( <span> Event handler called when the expanded state of an item changes and{" "} <Code>type</Code> is <Code>"multiple"</Code>. </span> )',
                },
                {
                    name: "collapsible",
                    required: false,
                    default: "false",
                    type: "boolean",
                    description: '( <span> When <Code>type</Code> is <Code>"single"</Code>, allows closing content when clicking trigger for an open item. </span> )',
                },
                {
                    name: "disabled",
                    required: false,
                    type: "boolean",
                    default: "false",
                    description: "( <span> When <Code>true</Code>, prevents the user from interacting with the accordion and all its items. </span> )",
                },
                {
                    name: "dir",
                    required: false,
                    type: '"ltr" | "rtl"',
                    typeSimple: "enum",
                    default: '"ltr"',
                    description: "The reading direction of the accordion when applicable. If omitted, assumes LTR (left-to-right) reading mode.",
                },
                {
                    name: "orientation",
                    required: false,
                    type: '"horizontal" | "vertical"',
                    typeSimple: "enum",
                    default: '"vertical"',
                    description: "The orientation of the accordion.",
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
                    default: "false",
                    description: '( <> Change the default rendered element for the one passed as a child, merging their props and behavior. <br /> <br /> Read our <a href="../guides/composition">Composition</a> guide for more details. </> )',
                },
                {
                    name: "disabled",
                    required: false,
                    type: "boolean",
                    default: "false",
                    description: "( <span> When <Code>true</Code>, prevents the user from interacting with the item. </span> )",
                },
                {
                    name: "value",
                    required: true,
                    type: "string",
                    description: "A unique value for the item.",
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
                    attribute: "[data-orientation]",
                    values: ["vertical", "horizontal"],
                },
            ],
        },
        {
            tag: "header",
            props: [
                {
                    name: "asChild",
                    required: false,
                    type: "boolean",
                    default: "false",
                    description: '( <> Change the default rendered element for the one passed as a child, merging their props and behavior. <br /> <br /> Read our <a href="../guides/composition">Composition</a> guide for more details. </> )',
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
                    attribute: "[data-orientation]",
                    values: ["vertical", "horizontal"],
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
                    default: "false",
                    description: '( <> Change the default rendered element for the one passed as a child, merging their props and behavior. <br /> <br /> Read our <a href="../guides/composition">Composition</a> guide for more details. </> )',
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
                    attribute: "[data-orientation]",
                    values: ["vertical", "horizontal"],
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
                    default: "false",
                    description: '( <> Change the default rendered element for the one passed as a child, merging their props and behavior. <br /> <br /> Read our <a href="../guides/composition">Composition</a> guide for more details. </> )',
                },
                {
                    name: "forceMount",
                    type: "boolean",
                    description: "( <span> Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. </span> )",
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
                    attribute: "[data-orientation]",
                    values: ["vertical", "horizontal"],
                },
            ],
            cssVariable: [
                {
                    cssVariable: "--radix-accordion-content-width",
                    description: "The width of the content when it opens/closes",
                },
                {
                    cssVariable: "--radix-accordion-content-height",
                    description: "The height of the content when it opens/closes",
                },
            ],
            keyboardInteractions: [
                {
                    keys: ["Space"],
                    description: "( <span> When focus is on an <Code>Accordion.Trigger</Code> of a collapsed section, expands the section. </span> )",
                },
                {
                    keys: ["Enter"],
                    description: "( <span> When focus is on an <Code>Accordion.Trigger</Code> of a collapsed section, expands the section. </span> )",
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
                    keys: ["ArrowDown"],
                    description: '( <span> Moves focus to the next <Code>Accordion.Trigger</Code> when{" "} <Code>orientation</Code> is <Code>vertical</Code>. </span> )',
                },
                {
                    keys: ["ArrowUp"],
                    description: '( <span> Moves focus to the previous <Code>Accordion.Trigger</Code> when{" "} <Code>orientation</Code> is <Code>vertical</Code>. </span> )',
                },
                {
                    keys: ["ArrowRight"],
                    description: '( <span> Moves focus to the next <Code>Accordion.Trigger</Code> when{" "} <Code>orientation</Code> is <Code>horizontal</Code>. </span> )',
                },
                {
                    keys: ["ArrowLeft"],
                    description: '(<span> Moves focus to the previous <Code>Accordion.Trigger</Code> when{" "} <Code>orientation</Code> is <Code>horizontal</Code>. </span> )',
                },
                {
                    keys: ["Home"],
                    description: "( <span> When focus is on an <Code>Accordion.Trigger</Code>, moves focus to the first <Code>Accordion.Trigger</Code>. </span> )",
                },
                {
                    keys: ["End"],
                    description: "( <span> When focus is on an <Code>Accordion.Trigger</Code>, moves focus to the last <Code>Accordion.Trigger</Code>. </span> )",
                },
            ],
        },
    ],
};
