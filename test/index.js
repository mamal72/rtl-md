/* eslint-env mocha */

// ES6 Modules "import" wasn't working! :/ Dunno why! :'(
const rtlMarkdown = require('../');
const chai = require('chai');

chai.should();

describe('RTL Markdown Tests:', () => {
  it('Should convert markdown to html', () => {
    const from = 'I am using __markdown__.';
    const to = '<p>I am using <strong>markdown</strong>.</p>\n';
    const converted = rtlMarkdown(from);
    converted.should.equal(to);
  });

  it('Should convert markdown that contains html code', () => {
    const html = '<div><p>Some HTML data!</p></div>';
    const converted = rtlMarkdown(html);
    converted.should.equal(html);
  });

  it('Should understand RTL languages and fix their direction if needed', () => {
    // Markdown with a RTL stuff
    const from = `# Tanha Font
A Persian (Farsi) Font

فونت (قلم) فارسی تنها

[نمایش فونت](http://rastikerdar.github.io/tanha-font/)

با تشکر از برنامه [FontForge](https://fontforge.github.io)

بر مبنای فونت [صمیم](http://rastikerdar.github.io/samim-font/) و [وزیر](http://rastikerdar.github.io/vazir-font/)


طریقه استفاده در صفحات وب:
--------------------------
<div lang="fa" dir="rtl">
کد زیر را در قسمت style یا فایل css وارد نمایید:
</div>`;

    // RTLed HTML Markup
    const to = `<h1 id="tanha-font">Tanha Font</h1>
<p>A Persian (Farsi) Font</p>
<p dir="rtl">فونت (قلم) فارسی تنها</p>
<p dir="rtl"><a href="http://rastikerdar.github.io/tanha-font/">نمایش فونت</a></p>
<p dir="rtl">با تشکر از برنامه <a href="https://fontforge.github.io">FontForge</a></p>
<p dir="rtl">بر مبنای فونت <a href="http://rastikerdar.github.io/samim-font/" dir="rtl">صمیم</a> و <a href="http://rastikerdar.github.io/vazir-font/" dir="rtl">وزیر</a></p>
<h2 id="-" dir="rtl">طریقه استفاده در صفحات وب:</h2>
<div lang="fa" dir="rtl">
کد زیر را در قسمت style یا فایل css وارد نمایید:
</div>`;

    const converted = rtlMarkdown(from);
    converted.should.equal(to);
  });
});
