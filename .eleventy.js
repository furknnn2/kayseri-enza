module.exports = function(eleventyConfig) {
  // CSS, JS, Resim ve Admin paneli gibi statik dosyaları direkt kopyala
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("yonetim");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_data");

  return {
    // Nunjucks şablon motorunu HTML dosyalarında kullanmamızı sağlar
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
