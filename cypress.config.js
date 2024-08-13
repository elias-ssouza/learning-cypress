const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        closeBrowser() {
          return null;
        }
      })
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'report',
    quiet: true,
    overwrite: false,
  }
});
