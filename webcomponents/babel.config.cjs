// required to resolve imports
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: { node: 'current' } },
    ],
  ],
};