parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"W80x":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const{apiFetch:e,components:{Popover:t},element:{Component:s,Fragment:a,createElement:r},i18n:{__:o},url:{addQueryArgs:l}}=wp;class n extends s{constructor(){super(...arguments),this.state={search:"",items:[],error:""},this.searchItemName=this.searchItemName.bind(this),this.selectItemName=this.selectItemName.bind(this)}searchItemName(t){const{search:s}=this.state,{component:a,objectQueryArgs:r}=this.props;this.setState({search:t}),t.length<s.length&&this.setState({items:[]});let o="/buddypress/v1/"+a,n={};t&&(n.search=encodeURIComponent(t)),r&&(n=Object.assign(n,r)),e({path:l(o,n)}).then(e=>{this.setState({items:e})},e=>{this.setState({error:e.message})})}selectItemName(e,t){const{onSelectItem:s}=this.props;return e.preventDefault(),this.setState({search:"",items:[],error:""}),s({itemID:t})}render(){const{search:e,items:s}=this.state;let l,{ariaLabel:n,placeholder:m,useAvatar:c,slugValue:i}=this.props;return n||(n=o("Item's name","buddypress")),m||(m=o("Enter Item's name here…","buddypress")),s.length&&(l=s.map(e=>r("button",{type:"button",key:"editor-autocompleters__item-item-"+e.id,role:"option","aria-selected":"true",className:"components-button components-autocomplete__result editor-autocompleters__user",onClick:t=>this.selectItemName(t,e.id)},c&&r("img",{key:"avatar",className:"editor-autocompleters__user-avatar",alt:"",src:e.avatar_urls.thumb.replaceAll("&#038;","&")}),r("span",{key:"name",className:"editor-autocompleters__user-name"},e.name),i&&null!==i(e)&&r("span",{key:"slug",className:"editor-autocompleters__user-slug"},i(e))))),r(a,null,r("input",{type:"text",value:e,className:"components-placeholder__input","aria-label":n,placeholder:m,onChange:e=>this.searchItemName(e.target.value)}),0!==s.length&&r(t,{className:"components-autocomplete__popover",focusOnMount:!1,position:"bottom left"},r("div",{className:"components-autocomplete__results"},l)))}}var m=n;exports.default=m;
},{}],"iA92":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./autocompleter"));function t(e){return e&&e.__esModule?e:{default:e}}var r={AutoCompleter:e.default};exports.default=r;
},{"./autocompleter":"W80x"}],"Ee8M":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"blockComponents",{enumerable:!0,get:function(){return e.default}});var e=t(require("./components"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./components":"iA92"}]},{},["Ee8M"], "bpBlock")
//# sourceMappingURL=/block-components.js.map