const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
<<<<<<< HEAD
<<<<<<< HEAD
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      lockedUser: 'locked_out_user',
      username: ''
    },
=======
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    baseUrl: 'https://magento.softwaretestingboard.com',
    supportFile: false,
    defaultCommandTimeout: 6000,
>>>>>>> 9370cc523ca8eb8b7a38313c04333e85facf80e7
    setupNodeEvents(on, config) {
      return config
    },
<<<<<<< HEAD
    defaultCommandTimeout: 5500,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false
=======
    baseUrl: 'https://magento.softwaretestingboard.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
>>>>>>> branch1
=======
    
>>>>>>> 9370cc523ca8eb8b7a38313c04333e85facf80e7
  },
},
);
