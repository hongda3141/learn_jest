import NodeEnvironment from "jest-environment-node";

export default class DappeteerEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();
    this.global.SSS = "ssssss";
  }
}
