import type { StorybookConfig } from "@storybook/react-webpack5";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../ui-library/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../ui-components/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: "tag",
  },
  // webpackFinal: async (config) => {
  //   //@ts-ignore
  //   config.resolve.plugins = [
  //     //@ts-ignore
  //     ...(config.resolve.plugins || []),
  //     new TsconfigPathsPlugin({
  //       //@ts-ignore
  //       extensions: config.resolve.extensions,
  //     }),
  //   ];
  //   //@ts-ignore
  //   config.module?.rules?.push([
  //     require.resolve("@babel/preset-typescript"),
  //     require.resolve("@babel/preset-react"),
  //     require.resolve("@babel/preset-env"),
  //   ]);
  //   return config;
  // },
};

export default config;
