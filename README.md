[![Build Status](https://travis-ci.org/mamal72/rtl-md.svg?branch=master)](https://travis-ci.org/mamal72/rtl-md)
[![npm version](https://badge.fury.io/js/rtl-md.svg)](https://badge.fury.io/js/rtl-md)
# rtl-md
**rtl-md** is a markdown parser with RTL languages detection. This module converts the `Markdown` to `HTML` and fixes the elements direction based on the contents of them. This module made in order to help users publish their RTL markdown contents easily, without having to write boring HTML. Now, I can write and publish my `README.md` files in RTL languages too just like LTR languages!


# Installation
```bash
npm install --save rtl-md
```

# Usage
```js
import rmd from 'rtl-md';
const md = `# Some Markdown!
## Some english ltr stuff here and then, some rtl maybe.

بنی آدم اعضای یکدیگرند

که در آفرینش ز یک گوهرند

[سعدی شیرازی](https://en.wikiquote.org/wiki/Saadi)
`
const html = rmd(md);

// The output
/*
<h1 id="some-markdown-">Some Markdown!</h1>
<h2 id="some-english-ltr-stuff-here-and-then-some-rtl-maybe-">Some english ltr stuff here and then, some rtl maybe.</h2>
<p dir="rtl">بنی آدم اعضای یکدیگرند</p>
<p dir="rtl">که در آفرینش ز یک گوهرند</p>
<p dir="rtl"><a href="https://en.wikiquote.org/wiki/Saadi">سعدی شیرازی</a></p>
*/
```


# Ideas || Issues
Just fill an issue and describe it. I'll check it ASAP!


# Contribution
You can fork the repository, improve or fix some part of it and then send the pull requests back if you want to see them here. I really appreciate that. :heart:

Remember to lint your code before sending pull requests. Run the Grunt lint task with the following command and fix the lint errors if you get any.
```bash
grunt lint
```
