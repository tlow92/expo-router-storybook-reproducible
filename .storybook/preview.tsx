import type { Preview } from "@storybook/react";
import React from "react";
import Root from "../app/+html";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <Root>
        <Story />
      </Root>
    ),
  ],
};

export default preview;
