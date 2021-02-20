const withMdxEnhanced = require("next-mdx-enhanced");

const config = {
  trailingSlash: true,
  i18n: {
    locales: ["en-GB"],
    defaultLocale: "en-GB",
  },
};

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both",
  },
  reExportDataFetching: false,
})(config);
