const puppeteer = require("puppeteer");

module.exports = async function (globalConfig, projectConfig) {
  console.log(globalConfig.testPathPattern);
  console.log(projectConfig.cache);
  global.app1 = "jiiy8yagfgue";
  // Set reference to mongod in order to close the server during teardown.
  //   globalThis.__MONGOD__ = "mongod";
  //   const browser = await puppeteer.launch({});
  //   global.__BROWSER_GLOBAL__ = browser;
};

// // setup.js
// (async () => {
//     const app = require('../app.js')
//     global.app = app
//   })()
