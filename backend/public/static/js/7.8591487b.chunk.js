(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{43:function(t,e,r){"use strict";var n=r(0),a=r.n(n);r(47);e.a=function(t){return a.a.createElement("div",{className:"card ".concat(t.className),style:t.style},t.children)}},47:function(t,e,r){},65:function(t,e,r){},68:function(t,e,r){"use strict";r.r(e);var n=r(41),a=r(50),o=r(9),i=r(0),c=r.n(i),u=r(43),s=r(53),l=r(42),p=r(44),h=r(13),f=r(57),d=r(51),v=r(54),m=r(45),y=r(11);r(65);function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var l={};function p(){}function h(){}function f(){}var d={};c(d,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==e&&r.call(m,a)&&(d=m);var y=f.prototype=p.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(p).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=f,c(y,"constructor",f),c(f,"constructor",h),h.displayName=c(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}e.default=function(){var t=Object(i.useContext)(y.a),e=Object(i.useState)(!0),r=Object(o.a)(e,2),w=r[0],b=r[1],x=Object(m.a)(),E=x.isLoading,L=x.error,O=x.sendRequest,j=x.clearError,k=Object(v.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),N=Object(o.a)(k,3),P=N[0],S=N[1],_=N[2],T=function(){var e=Object(n.a)(g().mark((function e(r){var n,a,o;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!w){e.next=13;break}return e.prev=2,e.next=5,O("https://mern-app-ganzo.herokuapp.com/api/users/login","POST",JSON.stringify({email:P.inputs.email.value,password:P.inputs.password.value}),{"Content-Type":"application/json"});case 5:n=e.sent,t.login(n.userId,n.token),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:e.next=27;break;case 13:return(a=new FormData).append("email",P.inputs.email.value),a.append("name",P.inputs.name.value),a.append("password",P.inputs.password.value),a.append("image",P.inputs.image.value),e.prev=18,e.next=21,O("https://mern-app-ganzo.herokuapp.com/api/users/signup","POST",a);case 21:o=e.sent,t.login(o.user.id),e.next=27;break;case 25:e.prev=25,e.t1=e.catch(18);case 27:case"end":return e.stop()}}),e,null,[[2,9],[18,25]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{error:L,onClear:j}),c.a.createElement(u.a,{className:"authentication"},E&&c.a.createElement(h.a,{asOverLay:!0}),c.a.createElement("h2",null,"Login Required"),c.a.createElement("hr",null),c.a.createElement("form",{onSubmit:T},!w&&c.a.createElement(s.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[Object(d.c)()],errorText:"Please enter a name.",onInput:S}),!w&&c.a.createElement(f.a,{center:!0,id:"image",onInput:S,errorText:"Please provide an image"}),c.a.createElement(s.a,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[Object(d.a)()],errorText:"Please enter a valid email address.",onInput:S}),c.a.createElement(s.a,{element:"input",id:"password",type:"password",label:"Password",validators:[Object(d.b)(6)],errorText:"Please enter a valid password, at least 5 characters.",onInput:S}),c.a.createElement(l.a,{type:"submit",disabled:!P.isValid},w?"LOGIN":"SIGNUP")),c.a.createElement(l.a,{inverse:!0,onClick:function(){w?_(Object(a.a)(Object(a.a)({},P.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):_(Object(a.a)(Object(a.a)({},P.inputs),{},{name:void 0,image:void 0}),P.inputs.email.isValid&&P.inputs.password.isValid),b((function(t){return!t}))}},"SWITCH TO ",w?"SIGNUP":"LOGIN")))}}}]);
//# sourceMappingURL=7.8591487b.chunk.js.map