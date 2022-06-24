const timeout = 10000;

beforeAll(async () => {
  //   await page.goto(AURL);
  console.log(AAAAA);
  //   console.log(AURL);
  // await page.goto(THEURL);
  // await page.goto(XXXURL);
  // await page.goto(`${XXXURL}`);
  // await page.goto(XXXURL, { waitUntil: "domcontentloaded" });
});

describe("Test title and header of the homepage", () => {
  //   test(
  //     "Title of the page",
  //     async () => {
  //       const title = await page.title();

  //       expect(title).toBe(
  //         "Learn Web Development with free Classes and Tutorials - Sabe.io"
  //       );
  //     },
  //     timeout
  //   );

  //   test(
  //     "Header of the page",
  //     async () => {
  //       const h1Handle = await page.$("h1");
  //       const html = await page.evaluate(
  //         (h1Handle) => h1Handle.innerHTML,
  //         h1Handle
  //       );

  //       expect(html).toBe("Become a better developer");
  //     },
  //     timeout
  //   );
  const sum = function sum(a, b) {
    console.log(888);
    return a + b;
  };
  test("11", async () => {
    console.log("just a null test");
    console.log(AAAAA);
    console.log(SSS);
    expect(sum(1, 2)).toBe(3);
  });
});
