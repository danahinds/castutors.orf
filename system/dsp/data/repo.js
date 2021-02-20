const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function ($repo = "https://registry.npmjs.org/@shawnsandy/ideas") {
  try {
    // https://developer.github.com/v3/repos/#get
    // let url = "https://api.npms.io/v2/package/react";
    let url = $repo;
    let json = await Cache(url, {
      duration: "1w",
      type: "json"
    });
    return {
      name: json.name,
      version: json['dist-tags'].latest,
      description: json.description,
      homepage: json.homepage,
      author: json.author.name,
      authorEmail: json.author.email,
      license: json.license,
      readme: json.readme,
      keywords: json.keywords
    }
  } catch (err) {
    console.log(err);
    return {
      error: err
    }
  }
};
