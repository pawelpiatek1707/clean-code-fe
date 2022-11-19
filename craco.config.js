/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const path = require('path');
// --Setup for tests--
// const { pathsToModuleNameMapper } = require("ts-jest")
// const { compilerOptions } = require("./tsconfig.paths.json")

// eslint-disable-next-line no-undef
module.exports = {
  webpack: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src/')
    }
  }
  // --Setup for tests--
  // jest: {
  //   configure: {
  //     preset: "ts-jest",
  //     moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
  //       prefix: "<rootDir>/",
  //     }),
  //   },
  // },
};
