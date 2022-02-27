const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  "stories": [
    '../src/**/*.stories.@(js|mdx)',
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  "framework": "@storybook/web-components",
  webpackFinal: async (config) => {
    config.resolve.alias['Components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['Styles'] = path.resolve(__dirname, '../src/styles');
    return config;
  }
}