// craco.config.js
// Purpose: customize CRA's webpack config to silence noisy source map warnings
// from @mediapipe/tasks-vision by excluding it from source-map-loader.

/**
 * Find all rules that use source-map-loader and add an exclude for the
 * @mediapipe/tasks-vision package so CRA doesn't try to parse its missing maps.
 */
function patchSourceMapLoader(rules) {
  if (!Array.isArray(rules)) return;

  for (const rule of rules) {
    // rule.use can be string or array; CRA uses an array of loaders
    const uses = rule && (rule.use || rule.loader || rule.oneOf);

    // Recurse into nested rule sets such as rule.oneOf
    if (Array.isArray(rule.oneOf)) {
      patchSourceMapLoader(rule.oneOf);
    }

    // Normalize rule.use into an array of loader entries for matching
    const useEntries = Array.isArray(rule.use)
      ? rule.use
      : rule.use
      ? [rule.use]
      : [];

    // Check if this rule uses source-map-loader
    const hasSourceMapLoader = useEntries.some((u) => {
      const loaderName = typeof u === 'string' ? u : u && u.loader;
      return loaderName && loaderName.includes('source-map-loader');
    }) || (typeof rule.loader === 'string' && rule.loader.includes('source-map-loader'));

    if (hasSourceMapLoader) {
      // Ensure exclude exists and add our pattern
      const excludePattern = /[\\/]node_modules[\\/](?:@mediapipe)[\\/]tasks-vision[\\/]?/;
      if (!rule.exclude) {
        rule.exclude = [excludePattern];
      } else if (Array.isArray(rule.exclude)) {
        rule.exclude.push(excludePattern);
      } else {
        rule.exclude = [rule.exclude, excludePattern];
      }
    }
  }
}

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      if (webpackConfig && webpackConfig.module && Array.isArray(webpackConfig.module.rules)) {
        patchSourceMapLoader(webpackConfig.module.rules);
      }
      return webpackConfig;
    },
  },
};
