/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={408:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),f=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function v(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var S=_.prototype=new v;S.constructor=_,b(S,m.prototype),S.isPureReactComponent=!0;var w=Array.isArray,E=Object.prototype.hasOwnProperty,O={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o,u={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,o)&&!R.hasOwnProperty(o)&&(u[o]=t[o]);var f=arguments.length-2;if(1===f)u.children=n;else if(1<f){for(var a=Array(f),l=0;l<f;l++)a[l]=arguments[l+2];u.children=a}if(e&&e.defaultProps)for(o in f=e.defaultProps)void 0===u[o]&&(u[o]=f[o]);return{$$typeof:r,type:e,key:c,ref:i,props:u,_owner:O.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var $=/\/+/g;function g(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,u,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var f=!1;if(null===e)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f)return c=c(f=e),e=""===u?"."+g(f,0):u,w(c)?(o="",null!=e&&(o=e.replace($,"$&/")+"/"),C(c,t,o,"",(function(e){return e}))):null!=c&&(k(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||f&&f.key===c.key?"":(""+c.key).replace($,"$&/")+"/")+e)),t.push(c)),1;if(f=0,u=""===u?".":u+":",w(e))for(var a=0;a<e.length;a++){var l=u+g(i=e[a],a);f+=C(i,t,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(i=e.next()).done;)f+=C(i=i.value,t,o,l=u+g(i,a++),c);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return f}function P(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},D={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:O};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=c,t.PureComponent=_,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=b({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=O.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(a in t)E.call(t,a)&&!R.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==f?f[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){f=Array(a);for(var l=0;l<a;l++)f[l]=arguments[l+2];o.children=f}return{$$typeof:r,type:e.type,key:u,ref:c,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:x}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},294:(e,t,r)=>{e.exports=r(408)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}(()=>{var e=r(294);function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function c(e,r){if(r&&("object"===t(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}const f=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(p,t);var r,f,a,l,s=(a=p,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=i(a);if(l){var r=i(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return c(this,e)});function p(){return n(this,p),s.apply(this,arguments)}return r=p,(f=[{key:"render",value:function(){return e.createElement("div",null,e.createElement("h1",null,"Hello World!"))}}])&&o(r.prototype,f),Object.defineProperty(r,"prototype",{writable:!1}),p}(e.Component);e.render(e.createElement(f,null),document.getElementById("root"))})()})();