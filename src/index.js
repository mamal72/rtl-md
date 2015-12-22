import marked from 'marked';
import cheerio from 'cheerio';
import { AllHtmlEntities as HtmlEntities } from 'html-entities';

function isRTL(string) {
  const regexString = '[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]';
  const rtlDirCheck = new RegExp(regexString);
  return rtlDirCheck.test(string);
}

export default function convert(markdownString, options = {}) {
  const ltrMarkup = marked(markdownString, options);
  const $ = cheerio.load(ltrMarkup);
  const elems = $('*');
  elems.filter((index, elem) => {
    // Filter RTL containers with text content
    return elem.type === 'tag' && elem.children[0].type === 'text' && isRTL(elem.children[0].data);
  }).each((index, elem) => {
    // If there is no siblings, go for the parents
    if (elem.next === null && elem.prev === null) {
      cheerio(elem).parent().attr('dir', 'rtl');
    } else {
      cheerio(elem).attr('dir', 'rtl');
    }
  });
  return HtmlEntities.decode($.html());
}
