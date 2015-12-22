'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convert;

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _htmlEntities = require('html-entities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isRTL(string) {
  var regexString = '[֑-߿יִ-﷽ﹰ-ﻼ]';
  var rtlDirCheck = new RegExp(regexString);
  return rtlDirCheck.test(string);
}

function convert(markdownString) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var ltrMarkup = (0, _marked2.default)(markdownString, options);
  var $ = _cheerio2.default.load(ltrMarkup);
  var elems = $('*');
  elems.filter(function (index, elem) {
    // Filter RTL containers with text content
    return elem.type === 'tag' && elem.children[0].type === 'text' && isRTL(elem.children[0].data);
  }).each(function (index, elem) {
    // If there is no siblings, go for the parents
    if (elem.next === null && elem.prev === null) {
      (0, _cheerio2.default)(elem).parent().attr('dir', 'rtl');
    } else {
      (0, _cheerio2.default)(elem).attr('dir', 'rtl');
    }
  });
  return _htmlEntities.AllHtmlEntities.decode($.html());
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
