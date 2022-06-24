// export const AAAAA = "jjijiji";
// export default async function () {
//   // export default async function setup() {
//   //   const x = "jijijiji";
//   //   global.AAAAA = "ijiiiiijjjjjjj";
// }
// // global.AAAAA = "ijiiiiijjjjjjj";
// // const AAAAA = "ijiiiiijjjjjjj";

// // module.exports = async function () {
// //   global.foo = "foo";
// //   console.log(`global setup: ${global.foo}`);
// // };

// export const AAAAA = "ijiiiiijjjjjjj";
const puppeteer = require("puppeteer");

module.exports = async function (globalConfig, projectConfig) {
  console.log(globalConfig.testPathPattern);
  console.log(projectConfig.cache);

  // Set reference to mongod in order to close the server during teardown.
  //   globalThis.__MONGOD__ = "mongod";
  //   const browser = await puppeteer.launch({});
  //   global.__BROWSER_GLOBAL__ = browser;
};
