import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "128076ed-9868-4e98-9cef-98dd8b705d75",

  e2e: {
    baseUrl: "http://automationpractice.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      specPattern: "cypress/test/*/*.ts"
  },

  env: {
    homepage: "/index.php"
  }
});
