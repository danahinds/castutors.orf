const fs = require("fs")

const htmlmin = require("html-minifier")
const pluginRss = require("@11ty/eleventy-plugin-rss")
const markdown = require("@shawnsandy/ideas/lib/markdown")
const image = require("@11ty/eleventy-img")
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")

module.exports = function (eleventyConfig) {

  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true,
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("www/404.html")
          // Provides the 404 content without redirect.
          res.write(content_404)
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404)
          res.end()
        })
      },
    },
  })

  eleventyConfig.setQuietMode(true)

  eleventyConfig.addWatchTarget("./src/sass/")
  eleventyConfig.addWatchTarget("../README.md")
  eleventyConfig.addPassthroughCopy("./src/css", "www/css/")
  eleventyConfig.addPassthroughCopy("./system/dsp/assets", "www/assets/")
  eleventyConfig.addPassthroughCopy("./src/images", "./images/")

  // eleventy img
  //
  eleventyConfig.addNunjucksAsyncShortcode("img", async function (src, alt = "", outputFormat = "jpeg") {

    let stats = await image(src, {
      widths: [null],
      formats: [outputFormat],
      urlPath: "/images/",
      outputDir: "./www/images/"
    })
    let props = stats[outputFormat].pop()

    return `<img src="${props.url}" alt="${alt}">`
  })


  // Minify our HTML
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }
    return content
  })

  /**
   * Plugin @shawnsandy/ideas
   */

  // eleventyConfig.addPlugin(require("@shawnsandy/ideas", {siteMap: ["**/*.njk", "apps/**/*.html"];})); // siteMap defines directory to include

  eleventyConfig.addPlugin(require("@shawnsandy/ideas/eleventy"))

  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(markdown)

  // navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  return {
    dir: {
      input: "src",
      output: "www",
      includes: "../system/_includes",
      data: "../system/dsp/data",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
    // pathPrefix: "/",
  }
}
