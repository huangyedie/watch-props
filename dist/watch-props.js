!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=void 0},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n(0),o=n.n(r),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function c(t){return function(e){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.state={},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,o.a.PureComponent),i(n,[{key:"componentDidUpdate",value:function(t){var e=this,n=this.state.__watchState,r=this.state.__watchObject;r&&n&&Object.keys(r).forEach(function(o){n[o]!==t[o]&&r[o]&&"function"==typeof r[o]&&r[o].call(e.child,n[o],t[o])})}},{key:"componentDidMount",value:function(){var t=this.child.watch;t&&("function"==typeof t?this.setState({__watchObject:t.call(this.child)}):"object"===(void 0===t?"undefined":u(t))&&this.setState({__watchObject:t}))}},{key:"render",value:function(){var e=this;return o.a.createElement(t,Object.assign({ref:function(t){return e.child=t}},this.props))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.__watchObject;if(n&&"object"===(void 0===n?"undefined":u(n))){var r={};return Object.keys(n).forEach(function(t){r[t]=e[t]}),r}}(e,t),r=e.__watchObject;return n&&r?e.__watchState&&function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.keys(t);for(var r in n){var o=n[r];if(t[o]!==e[o])return!1}return!0}(n,e.__watchState)?null:{__watchState:n}:null}}]),n}()}}]);