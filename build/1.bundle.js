webpackJsonp([1,25],{112:function(e,t,n){"use strict";(function(e){function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(2)),i=l(n(221)),o=l(n(57)),r=l(n(782));!function(){var t=n(1).enterModule;t&&t(e)}();var c=function(){return a.default.createElement(o.default,null,a.default.createElement("div",{id:"post"},a.default.createElement("hgroup",{className:"mB-60"},a.default.createElement("h5",{className:"c-minor"},"Oct 15, 2017"),a.default.createElement("h1",{className:"c-blocker"},"ES6 Overview - Tail Call Optimization (TCO)"),a.default.createElement("hr",null)),a.default.createElement(i.default,{source:r.default})))},s=c,u=s;t.default=u,function(){var t=n(1).default,l=n(1).leaveModule;t&&(t.register(c,"Es6OverviewTailCallOptimizationTco","E:\\Dropbox\\Projects\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewTailCallOptimizationTco\\index.jsx"),t.register(s,"default","E:\\Dropbox\\Projects\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewTailCallOptimizationTco\\index.jsx"),l(e))}()}).call(t,n(7)(e))},782:function(e,t){e.exports="### Tail Call Optimization (TCO)\n\n**TCO** makes it possible to implement recursive function calls without being worried about call stack overflow.\n  1. TCO is a JavaScript engine implementation feature, it cannot be implemented via a transpiler if the browser does not support it.\n  2. Works only in `strict mode`\n\n```javascript\nfunction a() {\n  return b() // tail call\n}\n\nfunction b() {\n  return 'Hello World'\n}\n\na() // => Hello World\n```\n"}});