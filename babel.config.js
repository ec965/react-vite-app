/* eslint-disable */
// babel is used to transpile typescript jest tests
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
