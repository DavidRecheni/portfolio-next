// PostCSS plugin to fix DaisyUI invalid CSS selectors
module.exports = () => {
  return {
    postcssPlugin: "postcss-fix-daisyui",
    OnceExit(root) {
      root.walkRules((rule) => {
        if (rule.selector && rule.selector.includes("*tr:hover")) {
          // Remove or fix invalid selectors
          const newSelector = rule.selector.replace(/>\s*\*tr/g, "> tr");
          if (newSelector !== rule.selector) {
            rule.selector = newSelector;
          }
        }
      });
    },
  };
};

module.exports.postcss = true;

