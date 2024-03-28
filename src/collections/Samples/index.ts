import type { CollectionConfig } from "payload/types";

const Samples: CollectionConfig = {
  slug: "samples",
  fields: [
    {
      name: "firstRadio",
      type: "radio",
      options: [
        {
          label: "Option 1",
          value: "option_1",
        },
        {
          label: "Option 2",
          value: "option_2",
        },
      ],
    },
    {
      name: "secondRadio",
      type: "radio",
      defaultValue: "option_1",
      options: [
        {
          label: "Option 1",
          value: "option_1",
        },
        {
          label: "Option 2",
          value: "option_2",
        },
      ],
    },
    {
      name: "textField1",
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData.secondRadio === "option_1",
      },
    },
    {
      name: "relationshipField1",
      type: "relationship",
      relationTo: "samples",
      hasMany: false,
      admin: {
        condition: (_, siblingData) => siblingData.secondRadio === "option_1",
      },
    },
    {
      name: "textField2",
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData.secondRadio === "option_2",
      },
    },
  ],
};

export default Samples;
