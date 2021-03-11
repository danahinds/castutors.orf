## FP. Pages

> FP. Pages is a UI/Frontend Toolkit for building fast, modern, secure and accessible websites with FirstPaint CSS a classless, accessibility first CSS library and Eleventy simpler, blazingly fast static site generator. Netlifly integration for easy deploys to the web with a built in Netlify contact from and Netlify CMS.

### Quick Start

* Go to the[ github repo](https://github.com/shawn-sandy/fp-pages) and click the **Use this template** button to clone the repo
* Clone the new repo to your desktop `git clone repo-url`
* Go to your new repo and clone to your desktop
* Open the cloned repo and install the npm packages by running `npm i`
* Once this is completed run `npm start` this will launch you dev-site in the default browser
* Open the repo in your favorite editor and edit the content inside your `src` folder; changes will will livereload in the browser.
* Read the docs for more info

### Config

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
```

### Creating pages

* While you can add a new page in any folder in the `src` directory the content, pages, post folders are available/configured for you out-of-box.
* You can create pages with either HTML of MARKDOWN make sure to add the [front matter to the top of the page](https://www.11ty.dev/docs/data-frontmatter/) example below

**Sample markdown post**

``` markdown
---
title: Sample markdown post
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
* Component generator

#### Licence (MIT)

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
