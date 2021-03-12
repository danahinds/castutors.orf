## FP-Pages

> FP-Pages is a minimalist UI/Frontend Toolkit for building fast, lightweight, accesibility first static websites with [Eleventy](https://11ty.dex).

Get started now by [deploying FP-Pages to Netlify.](https://app.netlify.com/start/deploy?repository=https://github.com/shawn-sandy/fp-pages)

### Quick Start

* Go to the[ github repo](https://github.com/shawn-sandy/fp-pages) and click the **Use this template** button to clone the repo
* Clone your new repo to your desktop `git clone your-repo-url`
* Open the cloned repo and install the npm packages by running `npm i`
* Once this is completed run `npm start` this will launch a local instance of the FP-Pages in the default browser
* Open the repo in VSCODE or your favorite IDE/editor and edit the content inside your `src` folder; changes will will livereload in the browser.
* Read the docs for more info

### ENV Config

* Open the `sample.env` and save as `.env`
* Edit/update the env values to match your own

**ENV Variables**

``` env
NODE_ENV=development
MAP_URL='Sitemap: https://www.mysite.dev/sitemap.xml'
CONTACT_EMAIL=xxxxxx@yourdomain.com
WEBFORM_SUCCESS=https://web3forms.com/success
NETLIFY_SUCCESS=/thank-you
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

**TODO**

* Official Launch
* Full documentation
* Examples

-----

#### Licence (MIT)

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
