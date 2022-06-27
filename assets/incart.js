/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7345:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);


class I18N {
  constructor() {
    var _window$spratlyThemeS, _window$spratlyThemeS2;

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "shop_locale", ((_window$spratlyThemeS = window.spratlyThemeSettings) === null || _window$spratlyThemeS === void 0 ? void 0 : (_window$spratlyThemeS2 = _window$spratlyThemeS.shop_locale) === null || _window$spratlyThemeS2 === void 0 ? void 0 : _window$spratlyThemeS2.current) || 'en');

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "locales", {
      'default': {
        add_button: "Add",
        added_button: "Added",
        bundle_button: "Add selected item(s)",
        bundle_saved: "Saved",
        bundle_select: "Select",
        bundle_selected: "Selected",
        bundle_this_item: "This item",
        bundle_total: "Total price",
        checkout: "Checkout",
        discount_summary: "You will get <strong>{discount_value} OFF</strong> on each product",
        discount_title: "SPECIAL OFFER",
        free: "FREE",
        incart_title: "Customers also bought with \"{product_title}\"",
        prepurchase_added: "You just added",
        prepurchase_title: "Frequently bought with \"{product_title}\"",
        qty_discount_note: "on each product",
        qty_discount_title: '{item_count} item(s) get {discount_value} OFF',
        sizechart_button: "Size chart",
        field_name: 'Enter your name',
        field_email: 'Enter your email',
        field_birthday: 'Date of birth',
        discount_noti: '* Discount will be calculated and applied at checkout',
        fox_discount_noti: `* You are entitled to 1 discount offer of <span>{price}</span> (<span>{discount_title}</span>). This offer <b>can't be combined</b> with any other discount you add here!`,
        bis_open: "Notify me when available",
        bis_heading: "Back in stock alert 📬",
        bis_desc: "We will send you a notification as soon as this product is available again.",
        bis_submit: "Notify me",
        bis_email: "Your email",
        bis_name: "Your name",
        bis_phone: "Your phone number",
        bis_note: "Your note",
        bis_signup: "Email me with news and offers",
        bis_thankyou: "Thank you! We'll send you an email when this product is available!",
        preorder_discount_title: "🎁 Preorder now to get <strong>{discount_value} OFF</strong>",
        preorder_shipping_note: "🚚 Item will be delivered on or before <strong>{eta}</strong>"
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "tr", (key, _params = {}) => {
      var _locales$shop_locale;

      const {
        locales,
        shop_locale
      } = this;
      let text = ((_locales$shop_locale = locales[shop_locale]) === null || _locales$shop_locale === void 0 ? void 0 : _locales$shop_locale[key]) || locales['default'][key] || `Foxkit: translation missing for ${key}!`;
      const params = Object.keys(_params);

      if (params.length) {
        Object.entries(_params).forEach(([k, v]) => text = text.replace(`{${k}}`, v));
      }

      return text;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "setLocales", (locale, data) => {
      this.locales[locale] = data;
    });
  }

}

const i18n = window.__i18n || new I18N();
window.__i18n = window.__i18n || i18n;
/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),

/***/ 6295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2422);
/* harmony import */ var mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0__);


class JSX {
  constructor() {
    this.component = this.component.bind(this);
    return this.component;
  }

  component(tagName, attrs, ...children) {
    if (typeof tagName === 'function') {
      // Override children
      return tagName({ ...attrs,
        children
      });
    }

    if (children) {
      children = children.filter(val => val !== null);
    }

    if (attrs) {
      if (attrs.class) {
        attrs.className = attrs.class;
      }

      delete attrs.children;
    } // Normal DOM node tagName


    function createWithAttrs(tagName, attrs) {
      attrs = attrs || {};
      let elem = document.createElement(tagName);

      try {
        elem = Object.assign(elem, attrs);
      } catch {
        const attrKeys = Object.keys(attrs);

        for (let i = 0; i < attrKeys.length; i++) {
          if (attrs[i] !== 'dataSet') {
            elem.setAttribute(attrKeys[i], attrs[attrKeys[i]]);
          }
        }
      }

      return elem;
    }

    let elem = tagName !== 'fragment' ? createWithAttrs(tagName, attrs) : document.createDocumentFragment(); // Evaluate SVG DOM node tagName
    // All svg inner tags: https://developer.mozilla.org/en-US/docs/Web/SVG/Element

    const svgInnerTags = ['svg', 'path', 'rect', 'text', 'circle', 'g'];

    if (svgInnerTags.indexOf(tagName) !== -1) {
      elem = document.createElementNS('http://www.w3.org/2000/svg', tagName);

      for (const key in attrs) {
        const attrName = key === 'className' ? 'class' : key;
        elem.setAttribute(attrName, attrs[key]);
      }
    } // Populate children to created DOM Node


    for (const child of children) {
      if (Array.isArray(child)) {
        elem.append(...child);
      } else {
        elem.append(child);
      }
    } // After elements are created


    if (attrs !== null && attrs !== void 0 && attrs.dataSet) {
      for (const key in attrs.dataSet) {
        if (Object.prototype.hasOwnProperty.call(attrs.dataSet, key)) {
          elem.dataset[key] = attrs.dataSet[key];
        }
      }
    }

    if (attrs && !window.__aleartedJSXData) {
      if (Object.keys(attrs).find(key => key.match(/^data-/))) {
        console.trace(`Your "${tagName}" component uses a data-* attribute! Use dataSet instead!!`);
        alert('Do not use data-* in your JSX component! Use dataSet instead!! - Check the console.trace for more info');
        window.__aleartedJSXData = true;
      }
    }

    if (attrs !== null && attrs !== void 0 && attrs.ref) {
      // Create a custom reference to DOM node
      if (typeof attrs.ref === 'function') {
        attrs.ref(elem);
      } else {
        attrs.ref = elem;
      }
    }

    if (attrs !== null && attrs !== void 0 && attrs.on) {
      Object.entries(attrs.on).forEach(([event, handler]) => {
        elem.addEventListener(event, handler);
      });
    } // Append style attributes to created DOM node


    if (attrs !== null && attrs !== void 0 && attrs.style) {
      Object.entries(attrs.style).forEach(([property, value]) => {
        elem.style.setProperty(property, value);
      }); // Object.assign(elem.style, attrs.style);
    }

    return elem;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new JSX());

/***/ }),

/***/ 2422:
/***/ (function() {

!function () {
  function t() {
    var e = Array.prototype.slice.call(arguments),
        n = document.createDocumentFragment();
    e.forEach(function (e) {
      var t = e instanceof Node;
      n.appendChild(t ? e : document.createTextNode(String(e)));
    }), this.appendChild(n);
  }

  [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
    e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

/***/ }),

/***/ 4942:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./src/js/utilities/fetch.js
/* provided dependency */ var createElement = __webpack_require__(6295)["default"];
const requestDefaultConfigs = {
  mode: 'same-origin',
  credentials: 'same-origin',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
};
function fetch_getRequestDefaultConfigs() {
  return JSON.parse(JSON.stringify(requestDefaultConfigs));
}
const fetch_fetchJSON = (url, config = fetch_getRequestDefaultConfigs()) => {
  return fetch(url, config).then(function (response) {
    if (!response.ok) {
      throw response;
    }

    return response.json();
  });
};
const cache = new Map();
const fetchCache = (url, config = fetch_getRequestDefaultConfigs()) => {
  return new Promise((resolve, reject) => {
    let cached = cache.get(url);
    if (cached) return resolve(cached);
    fetch(url, config).then(res => {
      cached = res.text();
      cache.set(url, cached);
      resolve(cached);
    }).catch(reject);
  });
};
const sectionCache = new Map();
const fetchSection = (sectionId, fetchFromCache = false, params = {}) => {
  return new Promise((resolve, reject) => {
    const url = new URL(window.location.href);
    url.searchParams.set('section_id', sectionId);
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

    if (fetchFromCache) {
      const cached = sectionCache.get(url);
      if (cached) return resolve(cached);
    }

    fetch(url, fetch_getRequestDefaultConfigs()).then(res => res.text()).then(html => {
      const div = createElement("div", null);
      div.innerHTML = html;
      sectionCache.set(url, div);
      resolve(div);
    }).catch(reject);
  });
};
const cache2 = new Map();
const fetchJsonCache = (url, config = requestDefaultConfigs) => {
  return new Promise((resolve, reject) => {
    if (cache2.get(url)) {
      return resolve(cache2.get(url));
    }

    fetch(url, config).then(res => {
      if (res.ok) {
        const json = res.json();
        resolve(json);
        cache2.set(url, json);
        return json;
      } else {
        reject(res);
      }
    }).catch(reject);
  });
};
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-currency/currency.js
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */
const moneyFormat = '${{amount}}';
/**
 * Format money values based on your shop currency settings
 * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
 * or 3.00 dollars
 * @param  {String} format - shop money_format setting
 * @return {String} value - formatted value
 */

function formatMoney(cents, format) {
  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }

  let value = '';
  const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  const formatString = format || moneyFormat;

  function formatWithDelimiters(number, precision = 2, thousands = ',', decimal = '.') {
    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);
    const parts = number.split('.');
    const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${thousands}`);
    const centsAmount = parts[1] ? decimal + parts[1] : '';
    return dollarsAmount + centsAmount;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;

    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;

    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;

    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
}
;// CONCATENATED MODULE: ./src/js/foxkit/helpers.js
/* provided dependency */ var helpers_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var i18n = __webpack_require__(7345)["default"];



if (!String.prototype.capitalize) {
  String.prototype.capitalize = function () {
    var _this$, _this$$toUpperCase;

    return this.replace(this[0], (_this$ = this[0]) === null || _this$ === void 0 ? void 0 : (_this$$toUpperCase = _this$.toUpperCase) === null || _this$$toUpperCase === void 0 ? void 0 : _this$$toUpperCase.call(_this$));
  };
}

function handleSubscribe(data) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      data: JSON.stringify(data)
    })
  };
  return new Promise((resolve, reject) => {
    fetch(`${window.FoxKit.appURL}/api/public/subscribe?shop=${window.Shopify.shop}`, requestOptions).then(response => response.json()).then(resolve).catch(reject);
  });
}
function copyToClipboard(value, button) {
  const input = document.body.appendChild(document.createElement("input"));
  input.value = value;
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
  if (button) button.innerText = 'Copied';
}
function insertAfter(newNode, referenceNode) {
  if (!referenceNode) return;
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function productUrlByHandle(handle) {
  var _window$spratlyThemeS;

  return `${(_window$spratlyThemeS = window.spratlyThemeSettings) === null || _window$spratlyThemeS === void 0 ? void 0 : _window$spratlyThemeS.shop_domain}/products/${handle}`;
}
function addToCart(data = []) {
  return new Promise((resolve, reject) => {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
      resolve(data);
      const addedItem = data === null || data === void 0 ? void 0 : data.items[0];
      addedItem.source = 'quantity-upsell';
      window.Shopify.onItemAdded(addedItem);
    }).catch(reject);
  });
}
function changeCart(lineItem) {
  return fetchJSON('/cart/change.js', { ...getRequestDefaultConfigs(),
    method: 'POST',
    body: JSON.stringify(lineItem)
  });
}
async function getJsonProducts(handles) {
  if ((handles === null || handles === void 0 ? void 0 : handles.length) < 1) return [];
  const products = [];
  const promises = handles.map(async hdl => {
    try {
      const data = await fetchJsonCache(`/products/${hdl}.js`);
      if (data) products.push(data);
    } catch (err) {
      console.error(err);
    }
  });
  await Promise.all(promises);
  return products;
}
const maxBy = (arr, key) => arr.reduce((acc, curr) => acc[key] >= curr[key] ? acc : curr, {});
function getDiscountSummary(discount) {
  var _window$Shopify, _window$Shopify$curre, _window, _window$spratlyThemeS2;

  const discountText = helpers_createElement("span", null);
  const discountValue = (discount === null || discount === void 0 ? void 0 : discount.type) === 'PERCENTAGE' ? `${discount === null || discount === void 0 ? void 0 : discount.value}%` : formatMoney((discount === null || discount === void 0 ? void 0 : discount.value) * 100 * Number(((_window$Shopify = window.Shopify) === null || _window$Shopify === void 0 ? void 0 : (_window$Shopify$curre = _window$Shopify.currency) === null || _window$Shopify$curre === void 0 ? void 0 : _window$Shopify$curre.rate) || 1), (_window = window) === null || _window === void 0 ? void 0 : (_window$spratlyThemeS2 = _window.spratlyThemeSettings) === null || _window$spratlyThemeS2 === void 0 ? void 0 : _window$spratlyThemeS2.money_format);
  discountText.innerHTML = i18n.tr('discount_summary', {
    'discount_value': discountValue
  });
  return discountText;
}
function lightOrDark(color) {
  // Variables for red, green, blue values
  var r, g, b, hsp; // Check the format of the color, HEX or RGB?

  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;
  } // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html


  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b)); // Using the HSP value, determine whether the color is light or dark

  if (hsp > 127.5) {
    return 'light';
  } else {
    return 'dark';
  }
}
const updateCartAttributes = offer => {
  return new Promise((resolve, reject) => {
    try {
      var _window$spratlyTheme, _window$spratlyTheme$;

      if (!offer || !(offer !== null && offer !== void 0 && offer.offer_id)) return;
      const {
        attributes = {}
      } = ((_window$spratlyTheme = window.spratlyTheme) === null || _window$spratlyTheme === void 0 ? void 0 : (_window$spratlyTheme$ = _window$spratlyTheme.Cart) === null || _window$spratlyTheme$ === void 0 ? void 0 : _window$spratlyTheme$.cart) || {};
      let {
        _foxCartDiscounts
      } = attributes;
      let newAttributes = [];

      if (_foxCartDiscounts) {
        _foxCartDiscounts = JSON.parse(_foxCartDiscounts);

        const found = _foxCartDiscounts.find(d => JSON.parse(d).product_id === offer.product_id);

        if (found) return;
        newAttributes = [..._foxCartDiscounts];
      }

      newAttributes.push(JSON.stringify(offer));
      fetchJSON('/cart/update.js', { ...getRequestDefaultConfigs(),
        method: 'POST',
        body: JSON.stringify({
          attributes: {
            _foxCartDiscounts: newAttributes
          }
        })
      }).then(cart => {
        console.info('Cart attributes updated!. New cart:', cart.attributes);
        window.Shopify.onCartUpdate();
        resolve(true);
      }).catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-images/images.js
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * https://github.com/Shopify/slate.git.
 *
 */

/**
 * Preloads an image in memory and uses the browsers cache to store it until needed.
 *
 * @param {Array} images - A list of image urls
 * @param {String} size - A shopify image size attribute
 */
function preload(images, size) {
  if (typeof images === 'string') {
    images = [images];
  }

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    loadImage(getSizedImageUrl(image, size));
  }
}
/**
 * Loads and caches an image in the browsers cache.
 * @param {string} path - An image url
 */

function loadImage(path) {
  new Image().src = path;
}
/**
 * Find the Shopify image attribute size
 *
 * @param {string} src
 * @returns {null}
 */

function imageSize(src) {
  const match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

  if (match) {
    return match[1];
  } else {
    return null;
  }
}
/**
 * Adds a Shopify size attribute to a URL
 *
 * @param src
 * @param size
 * @returns {*}
 */

function getSizedImageUrl(src, size) {
  if (size === null) {
    return src;
  }

  if (size === 'master') {
    return removeProtocol(src);
  }

  const match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

  if (match) {
    const prefix = src.split(match[0]);
    const suffix = match[0];
    return removeProtocol(`${prefix[0]}_${size}${suffix}`);
  } else {
    return null;
  }
}
function removeProtocol(path) {
  return path.replace(/http(s)?:/, '');
}
;// CONCATENATED MODULE: ./src/js/components/InCartUpsell.jsx
/* provided dependency */ var InCartUpsell_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var InCartUpsell_i18n = __webpack_require__(7345)["default"];



function InCartUpSell({
  recommended_products,
  settings,
  product
}) {
  const {
    discount,
    active_discount
  } = settings;
  if (!recommended_products.length) return null;
  return InCartUpsell_createElement("div", {
    className: `f-incart`
  }, InCartUpsell_createElement("h3", {
    className: 'f-incart__title'
  }, InCartUpsell_i18n.tr('incart_title', {
    'product_title': product === null || product === void 0 ? void 0 : product.product_title
  })), active_discount ? InCartUpsell_createElement("div", {
    className: 'f-upsell__discount'
  }, InCartUpsell_createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "19",
    fill: "none",
    viewBox: "0 0 18 19"
  }, InCartUpsell_createElement("path", {
    fill: "#DA3F3F",
    d: "M17.4375 7.49219C17.8125 8.00781 18 8.59375 18 9.25s-.1875 1.2539-.5625 1.793c-.375.5156-.8555.8789-1.4414 1.0898.2578.5625.3281 1.1719.2109 1.8281-.0937.6329-.375 1.1836-.8437 1.6524-.4688.4687-1.0195.75-1.6524.8437-.6328.1172-1.2421.0469-1.8281-.2109-.1406.3984-.3516.7383-.6328 1.0195-.2812.3047-.6211.5391-1.0195.7032-.37503.1874-.78519.2812-1.2305.2812-.65625 0-1.25391-.1875-1.79297-.5625-.51562-.375-.87891-.8555-1.08984-1.4414-.58594.2578-1.19531.3281-1.82813.2109-.63281-.0937-1.18359-.375-1.65234-.8437-.46875-.4688-.76172-1.0195-.87891-1.6524-.09375-.6562-.01172-1.2656.2461-1.8281C1.41797 11.9219.9375 11.5586.5625 11.043.1875 10.5039 0 9.90625 0 9.25s.1875-1.24219.5625-1.75781c.375-.53906.85547-.91407 1.44141-1.125-.25782-.5625-.33985-1.16016-.2461-1.79297.11719-.65625.41016-1.21875.87891-1.6875.46875-.46875 1.01953-.75 1.65234-.84375.65625-.11719 1.26563-.04688 1.82813.21094.21093-.58594.57422-1.06641 1.08984-1.44141C7.74609.4375 8.34375.25 9 .25s1.2422.1875 1.7578.5625c.5391.375.9141.85547 1.125 1.44141.5625-.25782 1.1602-.32813 1.793-.21094.6562.09375 1.2187.375 1.6875.84375.4687.46875.75 1.03125.8437 1.6875.1172.63281.0469 1.23047-.2109 1.79297.5859.21093 1.0664.58594 1.4414 1.125zM7.52344 6.22656C7.3125 5.99219 7.05469 5.875 6.75 5.875s-.57422.11719-.80859.35156C5.73047 6.4375 5.625 6.69531 5.625 7s.10547.57422.31641.80859c.23437.21094.5039.31641.80859.31641s.5625-.10547.77344-.31641C7.75781 7.57422 7.875 7.30469 7.875 7s-.11719-.5625-.35156-.77344zm-.35156 6.04684l4.85152-4.85152c.2578-.25782.2578-.51563 0-.77344l-.4218-.42188c-.2578-.25781-.5157-.25781-.7735 0L5.97656 11.0781c-.25781.2578-.25781.5157 0 .7735l.42188.4218c.25781.2578.51562.2578.77344 0zm3.26952.0352c.2344.2109.5039.3164.8086.3164.3047 0 .5625-.1055.7734-.3164.2344-.2344.3516-.5039.3516-.8086 0-.3047-.1172-.5625-.3516-.7734-.2109-.2344-.4687-.3516-.7734-.3516-.3047 0-.5742.1172-.8086.3516-.2109.2109-.3164.4687-.3164.7734 0 .3047.1055.5742.3164.8086z"
  })), getDiscountSummary(discount)) : '', InCartUpsell_createElement("div", {
    className: "f-incart__products"
  }, recommended_products.map(product => {
    var _product$variants, _window$spratlyThemeS2;

    const priceNode = InCartUpsell_createElement("div", {
      className: "f-incart__product-prices prod__price"
    });
    const {
      price_max,
      price_min,
      available
    } = product;

    if (price_max === price_min) {
      var _window, _window$spratlyThemeS;

      priceNode.innerHTML = formatMoney(price_max, (_window = window) === null || _window === void 0 ? void 0 : (_window$spratlyThemeS = _window.spratlyThemeSettings) === null || _window$spratlyThemeS === void 0 ? void 0 : _window$spratlyThemeS.money_format);
    } else {
      var _window2, _window2$spratlyTheme;

      priceNode.innerHTML = `from ${formatMoney(price_min, (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$spratlyTheme = _window2.spratlyThemeSettings) === null || _window2$spratlyTheme === void 0 ? void 0 : _window2$spratlyTheme.money_format)}`;
    }

    const firstVariant = product.variants[0];
    const hasOnlyDefaultVariant = product.variants.length === 1 && firstVariant.title.toLowerCase() === 'default title';
    return InCartUpsell_createElement("div", {
      className: "f-incart__product sf-prod__block",
      dataSet: {
        view: 'card'
      }
    }, InCartUpsell_createElement("form", {
      className: "f-incart__product-inner product-form form",
      noValidate: true,
      dataSet: {
        productId: product.id,
        productHandle: product.handle
      },
      action: "/cart/add",
      method: "POST"
    }, InCartUpsell_createElement("input", {
      type: "hidden",
      name: "form_type",
      value: "product"
    }), InCartUpsell_createElement("input", {
      type: "hidden",
      name: "utf8",
      value: "\u2713"
    }), InCartUpsell_createElement("input", {
      type: "hidden",
      name: "source_event",
      value: "incart-upsell"
    }), InCartUpsell_createElement("input", {
      type: "hidden",
      name: "id",
      value: firstVariant.id
    }), InCartUpsell_createElement("input", {
      type: "hidden",
      name: "properties[_foxDiscount]",
      value: `{"discount_value": ${discount.value}, "discount_type": "${discount.type}", "offer_id": "${settings._id}", "plugin": "InCart"}`
    }), InCartUpsell_createElement("div", {
      className: "f-incart__product-image spc__main-img"
    }, InCartUpsell_createElement("a", {
      href: productUrlByHandle(product.handle)
    }, InCartUpsell_createElement("img", {
      src: product.featured_image ? getSizedImageUrl(product.featured_image, '200x') : 'https://dummyimage.com/300x/ddd/aaa',
      alt: product.title
    }))), InCartUpsell_createElement("div", {
      className: "f-incart__product-info"
    }, InCartUpsell_createElement("p", {
      className: "f-incart__product-title"
    }, InCartUpsell_createElement("a", {
      href: productUrlByHandle(product.handle)
    }, product.title)), priceNode, !hasOnlyDefaultVariant ? InCartUpsell_createElement("div", {
      className: "f-incart__product-options"
    }, InCartUpsell_createElement("select", {
      className: 'sf-product-variant-option-dropdown form-control combined-variant'
    }, (_product$variants = product.variants) === null || _product$variants === void 0 ? void 0 : _product$variants.map(variant => {
      return InCartUpsell_createElement("option", {
        value: variant.id
      }, variant === null || variant === void 0 ? void 0 : variant.title);
    }))) : '', InCartUpsell_createElement("button", {
      type: 'submit',
      className: 'f-incart__product-add add-to-cart sf__btn sf__btn-primary btn-atc relative',
      disabled: !available,
      dataSet: {
        atcText: InCartUpsell_i18n.tr('add_button')
      }
    }, InCartUpsell_createElement("span", {
      className: "atc-spinner inset-0 absolute items-center justify-center"
    }, InCartUpsell_createElement("svg", {
      className: "animate-spin medium",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none"
    }, InCartUpsell_createElement("circle", {
      className: "opacity-25",
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "4"
    }), InCartUpsell_createElement("path", {
      className: "opacity-75",
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }))), InCartUpsell_createElement("span", {
      className: "atc-text"
    }, available ? InCartUpsell_i18n.tr('add_button') : (_window$spratlyThemeS2 = window.spratlyThemeStrings) === null || _window$spratlyThemeS2 === void 0 ? void 0 : _window$spratlyThemeS2.soldOut)))));
  })));
}
;// CONCATENATED MODULE: ./src/js/modules/incart.js
/* provided dependency */ var incart_createElement = __webpack_require__(6295)["default"];




class InCart {
  constructor(settings) {
    var _window$spratlyTheme2, _window$spratlyTheme3, _window$spratlyTheme4;

    (0,defineProperty/* default */.Z)(this, "appURL", window.spratlyThemeSettings.foxkitAppURL ? `https://${window.spratlyThemeSettings.foxkitAppURL}` : '');

    (0,defineProperty/* default */.Z)(this, "cartItems", []);

    (0,defineProperty/* default */.Z)(this, "renderedProducts", []);

    (0,defineProperty/* default */.Z)(this, "init", async () => {
      var _window$spratlyTheme, _window$spratlyTheme$, _window, _window$_ThemeEvent, _window$_ThemeEvent$s;

      this.renderIncartProducts((_window$spratlyTheme = window.spratlyTheme) === null || _window$spratlyTheme === void 0 ? void 0 : (_window$spratlyTheme$ = _window$spratlyTheme.Cart) === null || _window$spratlyTheme$ === void 0 ? void 0 : _window$spratlyTheme$.cart);
      (_window = window) === null || _window === void 0 ? void 0 : (_window$_ThemeEvent = _window._ThemeEvent) === null || _window$_ThemeEvent === void 0 ? void 0 : (_window$_ThemeEvent$s = _window$_ThemeEvent.subscribe) === null || _window$_ThemeEvent$s === void 0 ? void 0 : _window$_ThemeEvent$s.call(_window$_ThemeEvent, 'ON_CART_UPDATE', this.renderIncartProducts);
    });

    (0,defineProperty/* default */.Z)(this, "fetchIncartData", (cartItems = []) => {
      const productIds = Array.from(new Set(cartItems.map(({
        product_id
      }) => product_id)));
      if (!productIds.length) return {};
      return new Promise((resolve, reject) => {
        fetch(`${this.appURL}/api/public/in-cart/?shop=${window.Shopify.shop}&productIds=${productIds}`).then(response => response.json()).then(resolve).catch(reject);
      });
    });

    (0,defineProperty/* default */.Z)(this, "renderIncartProducts", async cart => {
      const {
        items
      } = cart;
      const res = await this.fetchIncartData(items);

      if (res.ok) {
        var _window$spratlyTheme$2;

        const {
          cartDrawer
        } = (_window$spratlyTheme$2 = window.spratlyTheme.Cart) === null || _window$spratlyTheme$2 === void 0 ? void 0 : _window$spratlyTheme$2.domNodes;

        if (cartDrawer) {
          this.renderedProducts = [];
          await Promise.all(res.payload.map(async offer => {
            const products = await this.getIncartItemRecommendedProducts(offer, items);

            if (products !== null && products !== void 0 && products.length) {
              const targetItem = cartDrawer.querySelector(`[data-cart-item][data-product-id="${offer === null || offer === void 0 ? void 0 : offer.product_id}"]`);

              if (targetItem && !targetItem.dataset.hasUpsell) {
                targetItem.setAttribute('data-has-upsell', true);
                const incartComponent = incart_createElement(InCartUpSell, {
                  product: items.find(({
                    product_id
                  }) => product_id === offer.product_id),
                  recommended_products: products,
                  settings: offer
                });
                targetItem.appendChild(incartComponent);
                window.spratlyTheme.Products.initProductForms({
                  context: incartComponent
                }).catch(console.error);
              }
            }
          }));
        }
      }
    });

    (0,defineProperty/* default */.Z)(this, "getIncartItemRecommendedProducts", async (offer, cartItems) => {
      let {
        recommended_products
      } = offer;
      const handles = Array.from(new Set(cartItems.map(({
        handle
      }) => handle)));
      recommended_products = recommended_products.filter(hdl => handles.indexOf(hdl) === -1 && this.renderedProducts.indexOf(hdl) === -1);
      this.renderedProducts = this.renderedProducts.concat(recommended_products);
      const products = await getJsonProducts(recommended_products);
      return products;
    });

    this.settings = settings;
    this.cartItems = ((_window$spratlyTheme2 = window.spratlyTheme) === null || _window$spratlyTheme2 === void 0 ? void 0 : (_window$spratlyTheme3 = _window$spratlyTheme2.Cart) === null || _window$spratlyTheme3 === void 0 ? void 0 : (_window$spratlyTheme4 = _window$spratlyTheme3.cart) === null || _window$spratlyTheme4 === void 0 ? void 0 : _window$spratlyTheme4.items) || [];
    this.init().catch(console.error);
  }

}

window.FoxKit = window.FoxKit || {};
window.FoxKit.InCart = InCart;
}();
/******/ })()
;