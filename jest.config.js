module.exports = {
  setupFiles: ["./setup_global.js"],
  globals: {
    AURL: "https://sabe.io",
    AAAAA: "iji",
  },
  preset: "jest-puppeteer", // 这样写时,配置文件是;jest-puppeteer/jest-preset.js
  // 但是配置了testEnvironment,上面怎么写都不影响golbals变量了.
  globalSetup: "./jest111/setup.js",
  testEnvironment: "./jest111/p.js",
  testMatch: ["**/test/**/*.test.js"],
  verbose: true,
};
