// 0.0.3
const formAPI: Object = {
  component: "form",
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
          name: "onClearServerErrors",
          required: false,
          type: "() => void",
          typeSimple: "function",
          description:
            "Event handler called when the form is submitted or reset and the server errors need to be cleared.",
        },
      ],
    },
    {
      tag: "field",
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
          name: "name",
          required: true,
          type: "string",
          description:
            "The name of the field that will be passed down to the control and used to match with validation messages.",
        },
        {
          name: "serverInvalid",
          required: false,
          type: "boolean",
          description:
            "Use this prop to mark the field as invalid on the server.",
        },
      ],
      dataAttribute: [
        {
          attribute: "[data-invalid]",
          values: "Present when the field is invalid",
        },
        {
          attribute: "[data-valid]",
          values: "Present when the field is valid",
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
      dataAttribute: [
        {
          attribute: "[data-invalid]",
          values: "Present when the field is invalid",
        },
        {
          attribute: "[data-valid]",
          values: "Present when the field is valid",
        },
      ],
    },
    {
      tag: "control",
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
          attribute: "[data-invalid]",
          values: "Present when the field is invalid",
        },
        {
          attribute: "[data-valid]",
          values: "Present when the field is valid",
        },
      ],
    },
    {
      tag: "message",
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
          name: "match",
          required: false,
          type: " 'badInput' | 'patternMismatch' | 'rangeOverflow' | 'rangeUnderflow' | 'stepMismatch' | 'tooLong' | 'tooShort' | 'typeMismatch' | 'valid' | 'valueMissing' | {`((value: string, formData: FormData) => boolean)`} | {`((value: string, formData: FormData) => Promise<boolean>)`}",
          typeSimple: "Matcher",
          description:
            "Used to indicate on which condition the message should be visible.",
        },
        {
          name: "forceMatch",
          required: false,
          type: "boolean",
          defaultValue: "false",
          description:
            "Forces the message to be shown. This is useful when using server-side validation.",
        },
        {
          name: "name",
          required: false,
          type: "string",
          description:
            "Used to target a specific field by name when rendering outside of a{' '} <Code>Field</Code> part.",
        },
      ],
    },
    {
      tag: "validitystte",
      props: [
        {
          name: "children",
          required: false,
          type: "(validity: ValidityState | undefined) => React.ReactNode",
          typeSimple: "function",
          description:
            "A render function that receives the validity state of the field.",
        },
        {
          name: "name",
          required: false,
          type: "string",
          description:
            "Used to target a specific field by name when rendering outside of a{' '} <Code>Field</Code> part.",
        },
      ],
    },
    {
      tag: "submit",
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

export default formAPI;
