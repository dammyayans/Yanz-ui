/** @type { import('@storybook/react').Preview } */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    paddings: {
      values: [
        { name: "Small", value: "16px" },
        { name: "Medium", value: "32px" },
        { name: "Large", value: "64px" },
      ],
      default: "Medium",
    },
    viewport: {
      viewports: {
        iphoneSe: {
          name: "iPhone SE",
          styles: {
            height: "667px",
            width: "375px",
          },
          type: "mobile",
        },
        iphone12Mini: {
          name: "iPhone 12 Mini",
          styles: {
            height: "812px",
            width: "375px",
          },
          type: "mobile",
        },
        ...INITIAL_VIEWPORTS,
      },
    },
  },
};

export default preview;
