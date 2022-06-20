module.exports = {
    preset: "jest-puppeteer",
    globals: {
        THEURL: "https://sabe.io"
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true
}