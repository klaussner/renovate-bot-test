Package.describe({
  name: "renovate-bot-test-package",
  version: "1.0.0",
});

Npm.depends({
  graphql: "0.13.2"
});

Package.registerBuildPlugin({
  name: "test-plugin",
  npmDependencies: {
    svelte: "2.0.0"
  }
});
