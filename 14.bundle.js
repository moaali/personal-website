webpackJsonp([14,38],{769:function(e,n){e.exports="### Modules\n\n#### `export`\n##### Syntax\n``` javascript\nexport default expression\nexport { name1, name2 as alias, name3 as default, ... }\nexport let multiple, names\n```\n\n##### Notes\n- Only one default value can be exported from the same script.\n- The name of the default export can be omitted (i.e. you can export anonymous function).\n\n\n##### `import`\n##### Syntax\n``` javascript\nimport defaultName from './module'\nimport * as namespace from './module'\nimport { name1, name2 as alias, ... } from './module'\nimport defaultName, * as namespace from './module'\nimport defaultName, { name1, name2 as alias, ... } from './module'\nimport  './module'\n```\n\n##### Notes\n- Importing something that wasn't exported will fail.\n- If your module code will run once you can ignore all naming rules and just `import './filename'`.\n"},99:function(e,n,t){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(2)),l=a(t(221)),r=a(t(57)),s=a(t(769));!function(){var n=t(1).enterModule;n&&n(e)}();var u=function(){return o.default.createElement(r.default,null,o.default.createElement("div",{id:"post"},o.default.createElement("hgroup",{className:"mB-60"},o.default.createElement("h5",{className:"c-minor"},"Jun 24, 2017"),o.default.createElement("h1",{className:"c-blocker"},"ES6 Overview - Modules"),o.default.createElement("hr",null)),o.default.createElement(l.default,{source:s.default})))},m=u,i=m;n.default=i,function(){var n=t(1).default,a=t(1).leaveModule;n&&(n.register(u,"Es6OverviewModules","E:\\Dropbox\\Projects\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewModules\\index.jsx"),n.register(m,"default","E:\\Dropbox\\Projects\\personal-website\\src\\screens\\Blog\\components\\Es6OverviewModules\\index.jsx"),a(e))}()}).call(n,t(7)(e))}});