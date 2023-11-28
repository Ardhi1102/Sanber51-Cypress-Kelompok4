const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
<<<<<<< HEAD
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      lockedUser: 'locked_out_user',
      username: ''
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5500,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false
=======
    baseUrl: 'https://magento.softwaretestingboard.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
>>>>>>> branch1
  },
});
