const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video: false,
    defaultCommandTimeout: 6000,
    e2e: {
        baseUrl: 'https://www.google.com',
        supportFile: false,
    },
});