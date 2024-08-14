const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
  
      on('task', {
        closeBrowser() {
          return null;
        }
      }),
      on('after:run', (results) => {
        if (results && results.totalFailed > 0) {
          const screenshotsPath = config.screenshotsFolder;
          const screenshotFilename = `screenshot-${Date.now()}.png`

          // Path to save screenshot
          const screenshotPath = `${screenshotsPath}/${screenshotFilename}`

          // Capture screenshot
          cy.screenshot(screenshotPath);
        }
      })
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/*.feature"
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'report',
    quiet: true,
    overwrite: false,
  }
});
