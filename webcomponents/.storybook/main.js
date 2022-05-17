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
    config.resolve.alias['Controllers'] = path.resolve(__dirname, '../src/controllers');
    
    // resolves complaints from storybook about modules
    config.module.rules.push(
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    );
    
    return config;
  }
}