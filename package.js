Package.describe({
  name: "renovate-bot-test-package",
  version: "1.0.0",
});

Npm.depends({
  graphql: "15.5.0"
});

Package.registerBuildPlugin({
  name: "test-plugin",
  npmDependencies: {
    svelte: "2.0.0"
  }
});
