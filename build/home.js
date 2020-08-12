!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=55)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.throttle=function(e,t){var n=null;return function(){for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=this;clearTimeout(n),n=setTimeout(function(){e.apply(i,r)},t)}},t.getScrollTop=function(){var e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},t.getLink=function(e){return(""+e).length>1&&/^\/[^\/]/.test(""+e)?""+window.rootPath+e:e}},function(e,t,n){e.exports=n(14)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={rootPath:"",port:8080,domain:"openkruise.io",defaultSearch:"google",defaultLanguage:"en-us","en-us":{pageMenu:[{key:"home",text:"HOME",link:"/en-us/index.html"},{key:"docs",text:"DOCS",link:"/en-us/docs/what_is_openkruise.html"},{key:"blog",text:"BLOG",link:"/en-us/blog/index.html"}],disclaimer:{title:"Disclaimer",content:"OpenKruise is an open-source project under Apache License 2.0."},documentation:{title:"Documentation",list:[{text:"What is OpenKruise",link:"/en-us/docs/what_is_openkruise.html"},{text:"Components",link:"/en-us/docs/components.html"},{text:"Contribution",link:"https://github.com/openkruise/kruise/blob/master/CONTRIBUTING.md"}]},resources:{title:"Resources",list:[]},copyright:"Copyright © 2019 The OpenKruise Authors, The Kubernetes Authors"},"zh-cn":{pageMenu:[{key:"home",text:"首页",link:"/zh-cn/index.html"},{key:"docs",text:"文档",link:"/zh-cn/docs/what_is_openkruise.html"},{key:"blog",text:"博客",link:"/zh-cn/blog/index.html"}],disclaimer:{title:"Disclaimer",content:"OpenKruise is an open-source project under Apache License 2.0."},documentation:{title:"文档",list:[{text:"OpenKruise 是什么",link:"/zh-cn/docs/what_is_openkruise.html"},{text:"组件",link:"/zh-cn/docs/components.html"},{text:"贡献指南",link:"https://github.com/openkruise/kruise/blob/master/CONTRIBUTING.md"}]},resources:{title:"资源",list:[]},copyright:"Copyright © 2019 The OpenKruise Authors, The Kubernetes Authors"}}},function(e,t){e.exports=ReactDOM},function(e,t,n){var a,r;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=n.apply(null,a);i&&e.push(i)}else if("object"===r)for(var l in a)o.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}var o={}.hasOwnProperty;void 0!==e&&e.exports?(n.default=n,e.exports=n):(a=[],void 0!==(r=function(){return n}.apply(t,a))&&(e.exports=r))}()},,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),c=a(u),s=n(2),d=a(s),f=n(3),m=a(f),p=n(1);n(12);var g={logo:d.default.string.isRequired,language:d.default.oneOf(["zh-cn","en-us"])},h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.logo,n=e.language,a=m.default[n];return c.default.createElement("footer",{className:"footer-container"},c.default.createElement("div",{className:"footer-body"},c.default.createElement("img",{src:(0,p.getLink)(t)}),c.default.createElement("div",{className:"cols-container"},c.default.createElement("div",{className:"col col-12"},c.default.createElement("h3",null,a.disclaimer.title),c.default.createElement("p",null,a.disclaimer.content)),c.default.createElement("div",{className:"col col-6"},c.default.createElement("dl",null,c.default.createElement("dt",null,a.documentation.title),a.documentation.list.map(function(e,t){return c.default.createElement("dd",{key:t},c.default.createElement("a",{href:(0,p.getLink)(e.link),target:e.target||"_self"},e.text))}))),c.default.createElement("div",{className:"col col-6"},c.default.createElement("dl",null,c.default.createElement("dt",null,a.resources.title),a.resources.list.map(function(e,t){return c.default.createElement("dd",{key:t},c.default.createElement("a",{href:(0,p.getLink)(e.link),target:e.target||"_self"},e.text))})))),c.default.createElement("div",{className:"copyright"},c.default.createElement("span",null,a.copyright))))}}]),t}(c.default.Component);h.propTypes=g,t.default=h},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),s=a(c),d=n(2),f=a(d),m=n(5),p=a(m),g=n(3),h=a(g),y=n(1);n(13);var b=[{text:"中",value:"en-us"},{text:"En",value:"zh-cn"}],v={baidu:{logo:"https://img.alicdn.com/tfs/TB1n6DQayLaK1RjSZFxXXamPFXa-300-300.png",url:"https://www.baidu.com/s?wd="},google:{logo:"https://img.alicdn.com/tfs/TB1REfuaCzqK1RjSZFjXXblCFXa-300-300.jpg",url:"https://www.google.com/search?q="}},E=function(){},k={currentKey:f.default.string,logo:f.default.string.isRequired,type:f.default.oneOf(["primary","normal"]),language:f.default.oneOf(["en-us","zh-cn"]),onLanguageChange:f.default.func},_={type:"primary",language:"en-us",onLanguageChange:E},w=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onInputChange=function(e){n.setState({searchValue:e.target.value})},n.onKeyDown=function(e){13===e.keyCode&&n.goSearch()},n.toggleMenu=function(){n.setState({menuBodyVisible:!n.state.menuBodyVisible})},n.switchLang=function(){var e=void 0;e="zh-cn"===n.state.language?"en-us":"zh-cn",n.setState({language:e}),n.props.onLanguageChange(e)},n.switchSearch=function(){var e=void 0;e="baidu"===n.state.search?"google":"baidu",n.setState({search:e})},n.toggleSearch=function(){n.setState({searchVisible:!n.state.searchVisible})},n.goSearch=function(){var e=n.state,t=e.search,a=e.searchValue;window.open(""+v[t].url+window.encodeURIComponent(a+" site:"+h.default.domain))},n.state={menuBodyVisible:!1,language:e.language,search:h.default.defaultSearch,searchValue:"",inputVisible:!1},n}return l(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({language:e.language})}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.logo,a=e.onLanguageChange,o=e.currentKey,i=this.state,l=i.menuBodyVisible,u=i.language,c=i.search,d=i.searchVisible;return s.default.createElement("header",{className:(0,p.default)(r({"header-container":!0},"header-container-"+t,!0))},s.default.createElement("div",{className:"header-body"},s.default.createElement("a",{href:(0,y.getLink)("/"+u+"/index.html")},s.default.createElement("img",{className:"logo",alt:h.default.name,title:h.default.name,src:(0,y.getLink)(n)})),h.default.defaultSearch?s.default.createElement("div",{className:(0,p.default)(r({search:!0},"search-"+t,!0))},s.default.createElement("span",{className:"icon-search",onClick:this.toggleSearch}),d?s.default.createElement("div",{className:"search-input"},s.default.createElement("img",{src:v[c].logo,onClick:this.switchSearch}),s.default.createElement("input",{autoFocus:!0,onChange:this.onInputChange,onKeyDown:this.onKeyDown})):null):null,a!==E?s.default.createElement("span",{className:(0,p.default)(r({"language-switch":!0},"language-switch-"+t,!0)),onClick:this.switchLang},b.find(function(e){return e.value===u}).text):null,s.default.createElement("div",{className:(0,p.default)({"header-menu":!0,"header-menu-open":l})},s.default.createElement("img",{className:"header-menu-toggle",onClick:this.toggleMenu,src:"primary"===t?(0,y.getLink)("/img/system/menu_white.png"):(0,y.getLink)("/img/system/menu_gray.png")}),s.default.createElement("ul",null,h.default[u].pageMenu.map(function(e){var n;return s.default.createElement("li",{className:(0,p.default)((n={"menu-item":!0},r(n,"menu-item-"+t,!0),r(n,"menu-item-"+t+"-active",o===e.key),n)),key:e.key},s.default.createElement("a",{href:(0,y.getLink)(e.link),target:e.target||"_self"},e.text))})))))}}]),t}(s.default.Component);w.propTypes=k,w.defaultProps=_,t.default=w},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=a(l),c=n(11),s=a(c),d=n(3),f=a(d),m=function(e){function t(){var e,n,a,i;r(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.onLanguageChange=function(e){var t=window.location.pathname,n=void 0;n="zh-cn"===e?"en-us":"zh-cn";var a=t.replace(window.rootPath+"/"+n,window.rootPath+"/"+e);s.default.set("docsite_language",e,{expires:365,path:""}),window.location=a},a.getLanguage=function(){var e=void 0;e=window.rootPath?window.location.pathname.split("/")[2]:window.location.pathname.split("/")[1];var t=a.props.lang||e||s.default.get("docsite_language")||f.default.defaultLanguage;return"en-us"!==t&&"zh-cn"!==t&&(t=f.default.defaultLanguage),t!==s.default.get("docsite_language")&&s.default.set("docsite_language",t,{expires:365,path:""}),t},i=n,o(a,i)}return i(t,e),t}(u.default.Component);t.default=m},,function(e,t,n){var a,r;!function(o){var i=!1;if(a=o,void 0!==(r="function"==typeof a?a.call(t,n,t,e):a)&&(e.exports=r),i=!0,e.exports=o(),i=!0,!i){var l=window.Cookies,u=window.Cookies=o();u.noConflict=function(){return window.Cookies=l,u}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var a in n)t[a]=n[a]}return t}function t(n){function a(t,r,o){var i;if("undefined"!=typeof document){if(arguments.length>1){if(o=e({path:"/"},a.defaults,o),"number"==typeof o.expires){var l=new Date;l.setMilliseconds(l.getMilliseconds()+864e5*o.expires),o.expires=l}o.expires=o.expires?o.expires.toUTCString():"";try{i=JSON.stringify(r),/^[\{\[]/.test(i)&&(r=i)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var u="";for(var c in o)o[c]&&(u+="; "+c,!0!==o[c]&&(u+="="+o[c]));return document.cookie=t+"="+r+u}t||(i={});for(var s=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,f=0;f<s.length;f++){var m=s[f].split("="),p=m.slice(1).join("=");this.json||'"'!==p.charAt(0)||(p=p.slice(1,-1));try{var g=m[0].replace(d,decodeURIComponent);if(p=n.read?n.read(p,g):n(p,g)||p.replace(d,decodeURIComponent),this.json)try{p=JSON.parse(p)}catch(e){}if(t===g){i=p;break}t||(i[g]=p)}catch(e){}}return i}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,n){a(t,"",e(n,{expires:-1}))},a.withConverter=t,a}return t(function(){})})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function a(){}function r(){}var o=n(15);r.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,r,i){if(i!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={"zh-cn":{brand:{brandName:"OpenKruise",briefIntroduction:"面向自动化场景的 Kubernetes 应用负载扩展控制器",buttons:[{text:"快速开始",link:"/zh-cn/docs/quick_start.html",type:"primary"},{text:"GitHub",link:"https://github.com/openkruise/kruise",type:"normal",target:"_blank"}]},introduction:{title:"OpenKruise是什么",desc:"Kruise是OpenKruise项目的核心。它是一组控制器，可在应用程序工作负载管理上扩展和补充Kubernetes核心控制器。",img:"/img/kruise-overall.png"},functions:{title:"",list:[]},features:{title:"",list:[]},users:{title:"",desc:"",list:[]}},"en-us":{brand:{brandName:"OpenKruise",briefIntroduction:"A Kubernetes automation suite for workload management",buttons:[{text:"GET STARTED",link:"/en-us/docs/quick_start.html",type:"primary"},{text:"GITHUB",link:"https://github.com/openkruise/kruise",type:"normal",target:"_blank"}]},introduction:{title:"Introduction",desc:"OpenKruise is a suite that provides workload automations in Kubernetes. It fills the gap between the upstream controller capabilities and the real production requirements. There are two major categories that OpenKruise focuses on: workload management and controller management. The kruise repo collects all useful workload controllers. They are built primarily based on Kubernetes CRD extensions. The platform repo provides a framework to manage multiple controllers in the aspects of upgrading, sharding, tooling, monitoring etc (to be released). ",img:"/img/kruise-overall.png"},functions:{title:"Highlights (many more in Github)",list:[{img:"/img/inplace.png",title:"Inplace Update",content:"It is a new methodology to update container image. Unlike the Pod recreation based container image update methodology used in Deployment and StatefulSet, inplace update only restarts the specific container with the new image and the Pod will not be recreated. It leads to much faster update process and much less side effects on other sub-systems such as scheduler, CNI or CSI."},{img:"/img/sidecar.png",title:"Sidecar Container Management",content:"Sidecar containers are defined in a new Custom Resource (CR). Kruise controller will inject them into all matching Pods during Pod creation. Besides that, the sidecar container images can also be inplace updated through updating the container Spec in the CR. The ability of separating main container management and sidecar container management greatly eases the developer collaborations."},{img:"/img/united.png",title:"Multi-Domain Deployment",content:"UnitedDeployment is a new Custom Resource Definition (CRD) used to achieve high availability in a cluster that consists of multiple domains. It manages multiple homogeneous workloads, and each workload is dedicated to a single domain. Pod distribution across domains is determined by the replica number of each workload. A domain, identified by a node label, can be an availability zone (AZ) or a group of homogeneous nodes."}]},features:{title:"Why OpenKruise",list:[{img:"/img/feature_adaptable.png",title:"Kubernetes native",content:["Leverage CRDs for extension","Support Stateful/Stateless/Job workloads and various operators"]},{img:"/img/feature_production_grade.png",title:"Production grade",content:["Used in production managing tens of thousands Pods","Support large scale clusters with thousands of nodes"]},{img:"/img/feature_easy_to_use.png",title:"Easy to use",content:["Easy install/uninstall","Selective controller installation"]},{img:"/img/feature_rich.png",title:"Rich set of management strategies",content:["Selective Pod upgrade/deletion","Upgrade sequence management","Graceful Pod offline during upgrade"]}]},users:{title:"Who is using OpenKruise",desc:r.default.createElement("span",null,"Please provide your information on ",r.default.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/openkruise/kruise/issues/289"}," Wanted: who is using openkruise")," to help improving the project."),list:[]}}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=a(o),l=n(5),u=a(l);n(56);var c=function(e){return i.default.createElement("div",{className:(0,u.default)(r({bone:!0},"bone-"+e.type,!0))})};t.default=c},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=a(o),l=n(2),u=a(l),c=n(5),s=a(c),d=n(1);n(57);var f={type:u.default.oneOf(["primary","normal"]),link:u.default.string,target:u.default.string},m={type:"primary",link:"",target:"_self"},p=function(e){return i.default.createElement("a",{className:(0,s.default)(r({button:!0},"button-"+e.type,!0)),target:e.target||"_self",href:(0,d.getLink)(e.link)},e.children)};p.propTypes=f,p.defaultProps=m,t.default=p},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(1),i=function(e){var t=e.feature;return r.default.createElement("li",{className:"feature-list-item"},r.default.createElement("img",{src:(0,o.getLink)(t.img)}),r.default.createElement("div",null,r.default.createElement("h4",null,t.title),r.default.createElement("ul",null,t.content.map(function(e,t){return r.default.createElement("li",{key:t},e)}))))};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(1),i=function(e){var t=e.func;return e.imgFirst?r.default.createElement("div",{className:"func-item"},r.default.createElement("div",{className:"col img"},r.default.createElement("img",{src:(0,o.getLink)(t.img)})),r.default.createElement("div",{className:"col"},r.default.createElement("div",{className:"vertical-middle"},r.default.createElement("h4",null,t.title),r.default.createElement("p",null,t.content)))):r.default.createElement("div",{className:"func-item"},r.default.createElement("div",{className:"col"},r.default.createElement("div",{className:"vertical-middle"},r.default.createElement("h4",null,t.title),r.default.createElement("p",null,t.content))),r.default.createElement("div",{className:"col img"},r.default.createElement("img",{src:(0,o.getLink)(t.img)})))};t.default=i},,,,function(e,t){},,,,,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),c=a(u),s=n(4),d=a(s),f=n(1),m=n(8),p=a(m),g=n(40),h=a(g),y=n(7),b=a(y),v=n(9),E=a(v),k=n(39),_=a(k),w=n(45),O=a(w),C=n(44),x=a(C),N=n(38),P=a(N);n(49);var j=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={headerType:"primary"},n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){(0,f.getScrollTop)()>66?e.setState({headerType:"normal"}):e.setState({headerType:"primary"})})}},{key:"render",value:function(){var e=this.getLanguage(),t=P.default[e],n=this.state.headerType,a="primary"===n?"/img/kruise_white.png":"/img/kruise_colorful.png";return c.default.createElement("div",{className:"home-page"},c.default.createElement("section",{className:"top-section",id:"top-section"},c.default.createElement("div",{className:"mask"}),c.default.createElement(p.default,{currentKey:"home",type:n,logo:a,language:e,onLanguageChange:this.onLanguageChange}),c.default.createElement("div",{className:"vertical-middle"},c.default.createElement("div",{className:"product-name"},c.default.createElement("h2",null,t.brand.brandName)),c.default.createElement("p",{className:"product-desc"},t.brand.briefIntroduction),c.default.createElement("div",{className:"button-area"},t.brand.buttons.map(function(e){return c.default.createElement(h.default,{type:e.type,key:e.type,link:e.link,target:e.target},e.text)})))),c.default.createElement("section",{className:"introduction-section"},c.default.createElement("div",{className:"introduction-body"},c.default.createElement("div",{className:"introduction"},c.default.createElement("h3",null,t.introduction.title),c.default.createElement("p",null,t.introduction.desc)),c.default.createElement("img",{src:(0,f.getLink)(t.introduction.img)}))),c.default.createElement("section",{className:"function-section"},c.default.createElement("h3",null,t.functions.title),c.default.createElement(_.default,{type:"dark"}),c.default.createElement("div",null,t.functions.list.map(function(e,t){return c.default.createElement(O.default,{func:e,key:t,imgFirst:t%2==0})}))),c.default.createElement("section",{className:"feature-section"},c.default.createElement("div",{className:"feature-section-body"},c.default.createElement("h3",null,t.features.title),c.default.createElement(_.default,{type:"light"}),c.default.createElement("ul",{className:"feature-list"},t.features.list.map(function(e,t){return c.default.createElement(x.default,{feature:e,key:t})})))),c.default.createElement("section",{className:"users-section"},c.default.createElement("h3",null,t.users.title),c.default.createElement(_.default,{type:"dark"}),c.default.createElement("p",null,t.users.desc),c.default.createElement("div",{className:"users"},t.users.list.map(function(e,t){return c.default.createElement("div",{className:"user-item",key:t},c.default.createElement("img",{src:e}))}))),c.default.createElement(b.default,{logo:"/img/kruise_gray.png",language:e}))}}]),t}(E.default);document.getElementById("root")&&d.default.render(c.default.createElement(j,null),document.getElementById("root")),t.default=j},function(e,t){},function(e,t){}]);