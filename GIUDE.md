### Quick Start

**Deploy to Netlify**

* [Click here to deploy FP-Pages to Netlify.](https://app.netlify.com/start/deploy?repository=https://github.com/shawn-sandy/fp-pages) you can read more about netlify here [Netlify](https://www.netlify.com/) and make sure and check out the [Netlify docs](https://docs.netlify.com/)
* Set the name of your repo Netlify will clone to the git repository you linked to earlier
* Set your [ENV variables (see more)](#env-config) this can be updated later
* Click save and deploy button and watch Netlify do its magic
* Clone the repo Netlify to your desktop `git clone your-repo-url`
* Open the cloned repo in terminal and install the npm packages by running `npm i`
* Once this is completed run `npm start` this will launch a local instance of the FP-Pages in the default browser
* Open the repo in VSCODE or your favorite IDE/editor and edit the content inside your `src` folder, changes will will livereload in the browser.
* Read the docs for more info (coming soon)

**Deploy to you own server**

* [Click this link to Generate/Clone](https://github.com/shawn-sandy/fp-pages/generate) the [FirstPage](https://github.com/shawn-sandy/fp-pages) repository from github.
* Open the cloned repo and install the npm packages by running `npm i`
* Once this is completed run `npm start` this will launch a local instance of the FP-Pages in the default browser
* Open your the local repo in VSCODE/IDE and start [editing](#creating-pages)
* Run `npm build` to output a production ready site in the `/www` folder

#### ENV Config

* Open the `sample.env` and save as `.env`
* Edit/update the env values to match your own see `.ENV example` (below)

``` env
#.env
NODE_ENV=development
MAP_URL='Sitemap: https://www.mysite.dev/sitemap.xml'
CONTACT_EMAIL=xxxxxx@yourdomain.com
CONTACT_SUCCESS=/thank-you
CONTACT_PROVIDER=netlify
SECRET_KEYS=**********
```

**Add/display ENV variables on pages**

* Add a new key to your `env` file local `SECRET_KEY=********`
* Add the key to your `env.js` file : `secret_key: process.env.SECRET_KEY || null`
* Display/use any where in your page key with `{{ env.secret_key }}`

``` JS
/** system/_data/env.js **/

require('dotenv').config()

module.exports = {
    node_env: process.env.NODE_ENV || null,
    map_url: process.env.MAP_URL || 'https//',
    contact_email: process.env.CONTACT_EMAIL || 'site@amce.inc',
    webforms_success: process.env.WEBFORMS_SUCCESS || 'https://web3forms.com/success',
    netlify_success: process.env.NETLIFY_SUCCESS || '/thank-you',
    contact_provider: process.env.CONTACT_PROVIDER || null
}
```

### Creating pages

* While you can add a new page in any folder in the `src` directory the content, pages, post folders are available/configured for you out-of-box.
* You can create pages with either HTML of MARKDOWN make sure to add the [front matter to the top of the page](https://www.11ty.dev/docs/data-frontmatter/) example below

**Sample markdown post**

``` markdown
---
title: Sample markdown post
date: 2021-12-01
author: Editor
summary: "Test Summary "
---

### Subtitle

![test](/images/11ty-images.png)

Some content in markdown, this post is created using `markdown`...

```

**Sample HTML post**

``` html
---
title: Sample HTML
date: 2021-12-01
summary: This is a summary of the article using html it should be easy
---

<h3>Subtitle</h3>
<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis asperiores
    doloremque magnam mollitia fugiat alias explicabo eum! Dolorem obcaecati
    laudantium commodi quis, facere aspernatur sapiente, molestias quidem
    molestiae repellat adipisci?
</p>
```

### Deployment

Please see you hosting provider for deployment

* [Netlify docs ](https://docs.netlify.com/) -- [site deploys](https://docs.netlify.com/site-deploys/overview/)
* [Netlify Forms](https://docs.netlify.com/forms/setup/) -- configure your contact form
* [Setting up ENV on netlify](https://docs.netlify.com/configure-builds/environment-variables/)
