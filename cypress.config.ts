import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'v4obku',

  e2e: {
    baseUrl: "https://www.automationpractice.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      specPattern: "cypress/test/*/*.ts",
      screenshotsFolder: "cypress/screenshot",
      videosFolder: "cypress/videos"
  },

  env: {
    homepage: "/index.php",
    record_key: "2f6dc5ef-b57c-4802-9ba3-8f17dae4ce9c"
  }
});
