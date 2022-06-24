beforeAll(() => console.log("1 - beforeAll"));
afterAll(() => console.log("1 - afterAll"));
beforeEach(() => console.log("1 - beforeEach"));
afterEach(() => console.log("1 - afterEach"));
test("", () => console.log("1 - test"));
// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 1 - afterAll

describe("Scoped / Nested block", () => {
  beforeAll(() => console.log("2 - beforeAll"));
  afterAll(() => console.log("2 - afterAll"));
  beforeEach(() => console.log("2 - beforeEach")); // 冲突时,全局的更before
  afterEach(() => console.log("2 - afterEach")); // 局部和全局的after冲突,全局的更after
  test("", () => console.log("2 - test"));
  // "all"情况时,总是优先于each情况, 全局更优先于局部.
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test

// 1 - afterEach

// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test

// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
