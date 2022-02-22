module.exports = {
  transform: { "^.+\\.(js|ts)$": "babel-jest" }, // transform files matching regex via babel-jest
  transformIgnorePatterns: ["node_modules/(?!\@?lit)"], // fixes errors regarding imports node_modules
  testEnvironment: "jsdom", // explicitly set test environment
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/src/components/$1",
  },
};