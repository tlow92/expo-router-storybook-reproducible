// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

// Storybook config
const path = require("path");
const { generate } = require("@storybook/react-native/scripts/generate");
generate({
  configPath: path.resolve(__dirname, "./.ondevice"),
});

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Storybook config
config.transformer.unstable_allowRequireContext = true;
config.resolver.sourceExts.push("mjs");

defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
  const defaultResolveResult = context.resolveRequest(
    context,
    moduleName,
    platform
  );

  if (
    process.env.STORYBOOK_ENABLED !== "true" &&
    defaultResolveResult?.filePath?.includes?.(".ondevice/")
  ) {
    return {
      type: "empty",
    };
  }

  return defaultResolveResult;
};

module.exports = config;
