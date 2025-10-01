module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("yonetim");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_data");

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
