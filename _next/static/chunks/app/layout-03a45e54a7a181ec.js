(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1752:function(e,t,r){Promise.resolve().then(r.bind(r,8124))},3737:function(e,t){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.apply(void 0,e)}function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s(!0===e[0],!1,e)}function o(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s(!0===e[0],!0,e)}function i(e){if(Array.isArray(e)){for(var t=[],r=0;r<e.length;++r)t.push(i(e[r]));return t}if(!a(e))return e;var t={};for(var r in e)t[r]=i(e[r]);return t}function a(e){return e&&"object"==typeof e&&!Array.isArray(e)}function s(e,t,r){var n;(e||!a(n=r.shift()))&&(n={});for(var o=0;o<r.length;++o){var s=r[o];if(a(s)){for(var u in s)if("__proto__"!==u&&"constructor"!==u&&"prototype"!==u){var l=e?i(s[u]):s[u];n[u]=t?function e(t,r){if(!a(t))return r;for(var n in r)"__proto__"!==n&&"constructor"!==n&&"prototype"!==n&&(t[n]=a(t[n])&&a(r[n])?e(t[n],r[n]):r[n]);return t}(n[u],l):l}}}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.isPlainObject=t.clone=t.recursive=t.merge=t.main=void 0,e.exports=t=r,t.default=r,t.main=r,r.clone=i,r.isPlainObject=a,r.recursive=o,t.merge=n,t.recursive=o,t.clone=i,t.isPlainObject=a},3965:function(e,t,r){"use strict";var n,o=(n=r(3737))&&n.__esModule?n:{default:n};function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}t.zD=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.states,r=void 0===t?u:t,n=e.immutablejs,i=e.namespace,l=void 0===i?s:i,c=e.namespaceSeparator,d=void 0===c?"_":c,f=e.preloadedState,h=e.disableWarnings,y=p(void 0!==h&&h);m(r)||(console.error(a,"'states' parameter in 'load()' method was passed a non-array value. Setting default value instead. Check your 'load()' method."),r=u),v(l)||(console.error(a,"'namespace' parameter in 'load()' method was passed a non-string value. Setting default value instead. Check your 'load()' method."),l=s),v(d)||(console.error(a,"'namespaceSeparator' parameter in 'load()' method was passed a non-string value. Setting default value instead. Check your 'load()' method."),d="_"),!0===(void 0!==n&&n)&&y("Support for Immutable.js data structures has been deprecated as of version 2.0.0. Please use version 1.4.0 if you require this functionality.");var b=new g(y),S=void 0===f?{}:f;if(0===r.length){var w=b.getItem(l);w&&(S=w)}else r.forEach(function(e){var t=l+d+e,r=b.getItem(t);r?S=o.default.recursive(S,function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return function e(t,r){var n,o;return 0===t.length?r:e(t.slice(1),(n={},(o=t[0])in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n))}(e.split(".").reverse(),t)}(e,r)):y("Invalid load '"+t+"' provided. Check your 'states' in 'load()'. If this is your first time running this app you may see this message. To disable it in future use the 'disableWarnings' flag, see documentation.")});return S},t.a1=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.states,r=void 0===t?u:t,n=e.ignoreStates,o=void 0===n?l:n,d=e.namespace,f=void 0===d?s:d,y=e.namespaceSeparator,b=void 0===y?"_":y,S=e.debounce,w=void 0===S?0:S,P=e.disableWarnings,C=void 0!==P&&P;return function(e){return function(t){return function(n){function d(){0===r.length?A.setItem(f,_):r.forEach(function(e){var t,r=f+b+e,n=(t=_,1<e.split(".").length?h(e.split("."),t):h([e],t));n?A.setItem(r,n):A.removeItem(r)})}var y,S,P,_,O=p(C),k=t(n);m(r)||(console.error(a,"'states' parameter in 'save()' method was passed a non-array value. Setting default value instead. Check your 'save()' method."),r=u),m(o)||(console.error(a,"'ignoreStates' parameter in 'save()' method was passed a non-array value. Setting default value instead. Check your 'save()' method."),o=l),0<o.length&&(o=o.filter(function(e){return v(e)?e:void console.error(a,"'ignoreStates' array contains a non-string value. Ignoring this value. Check your 'ignoreStates' array.")})),v(f)||(console.error(a,"'namespace' parameter in 'save()' method was passed a non-string value. Setting default value instead. Check your 'save()' method."),f=s),v(b)||(console.error(a,"'namespaceSeparator' parameter in 'save()' method was passed a non-string value. Setting default value instead. Check your 'save()' method."),b="_"),"number"==typeof(y=w)&&isFinite(y)&&Math.floor(y)===y||(console.error(a,"'debounce' parameter in 'save()' method was passed a non-integer value. Setting default value instead. Check your 'save()' method."),w=0),_=0<o.length?(S=o,Object.entries(P=e.getState()).reduce(function(e,t){var r=function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),2!==i.length);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}}(t,2)||function(e,t){if(e){if("string"==typeof e)return i(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,2):void 0}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=r[0];return r[1],-1===S.indexOf(n)&&(e[n]=P[n]),e},{})):e.getState();var A=new g(O);return w?(c.get(r+f)&&clearTimeout(c.get(r+f)),c.set(r+f,setTimeout(function(){d(r,f)},w))):d(r,f),k}}}};var a="[Redux-LocalStorage-Simple]",s="redux_localstorage_simple",u=[],l=[],c=new Map;function d(e){console.warn(a,e)}function f(){}var p=function(e){return e?f:d};function h(e,t){return void 0===t?null:1===e.length?t[e[0]]:h(e.slice(1),t[e[0]])}function g(e){this.warnFn=e||d}function m(e){return"[object Array]"===Object.prototype.toString.call(e)}function v(e){return"string"==typeof e}Object.defineProperty(g.prototype,"length",{get:function(){try{return localStorage.length}catch(e){this.warnFn(e)}return 0},configurable:!0,enumerable:!0}),g.prototype.key=function(e){try{return localStorage.key(e)}catch(e){this.warnFn(e)}return null},g.prototype.setItem=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){this.warnFn(e)}},g.prototype.getItem=function(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){this.warnFn(e)}return null},g.prototype.removeItem=function(e){try{localStorage.removeItem(e)}catch(e){this.warnFn(e)}}},8124:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(7437),o=r(1444),i=r(6804),a=r(2351),s=r(7682),u=r(1039),l=r(6486),c=r(3965);let d=(0,i.UY)({[s.FD.reducerPath]:s.FD.reducer,[u.tK.name]:u.tK.reducer,[l.lr.name]:l.lr.reducer}),f=(()=>{let e=(0,c.zD)({states:["users","app"]});return(0,a.xC)({reducer:d,middleware:e=>e({serializableCheck:!1}).concat(s.FD.middleware,(0,c.a1)({states:["users","app"]})),preloadedState:e})})(),p=e=>{let{children:t}=e;return(0,n.jsx)(o.zt,{store:f,children:t})};function h(e){let{children:t,params:{lang:r}}=e;return(0,n.jsx)(p,{children:(0,n.jsx)("html",{lang:r,children:(0,n.jsx)("body",{children:t})})})}r(1930)},98:function(e,t,r){"use strict";r.d(t,{E:function(){return o}});var n=r(2351);let o=(0,n.wc)({creators:{asyncThunk:n.eU}})},1039:function(e,t,r){"use strict";r.d(t,{tK:function(){return s},KA:function(){return g},w1:function(){return p},so:function(){return f},rq:function(){return h},QO:function(){return c},Wg:function(){return u},sG:function(){return d},xp:function(){return l}});var n=r(98);let o={en:r(6293),ru:r(1217)},i=e=>o[e],a={lang:"ru",dictionary:i("ru"),isOpenProfileList:!1,currentProfile:{}},s=(0,n.E)({name:"app",initialState:a,reducers:{setLang(e,t){e.lang=t.payload,e.dictionary=i(t.payload)},setStateProfileList(e){e.isOpenProfileList=!e.isOpenProfileList},setCurrentProfile(e,t){e.currentProfile=t.payload},setProfileAfterLogout(e,t){let{currentProfile:r,remainingUsers:n}=t.payload,o=n.find(e=>e.email!==r.email);e.currentProfile=o||{}}},selectors:{selectLang:e=>e.lang,selectDictionary:e=>e.dictionary,selectStateProfileList:e=>e.isOpenProfileList,selectCurrentProfile:e=>e.currentProfile}}),{setLang:u,setStateProfileList:l,setCurrentProfile:c,setProfileAfterLogout:d}=s.actions,{selectLang:f,selectDictionary:p,selectStateProfileList:h,selectCurrentProfile:g}=s.selectors},7682:function(e,t,r){"use strict";r.d(t,{FD:function(){return i},YA:function(){return a},_y:function(){return s}});var n=r(8507),o=r(6074);let i=(0,n.LC)({reducerPath:"authApi",baseQuery:(0,o.ni)({baseUrl:"http://localhost:3000/api"}),endpoints:e=>({login:e.mutation({query:e=>({url:"auth",method:"POST",body:e})}),logout:e.mutation({query:e=>({url:"logout",method:"POST",body:e})})})}),{useLoginMutation:a,useLogoutMutation:s}=i},6486:function(e,t,r){"use strict";r.d(t,{YN:function(){return a},av:function(){return o},h8:function(){return i},lr:function(){return n}});let n=(0,r(98).E)({name:"users",initialState:{users:[]},reducers:{setUser(e,t){e.users.map(e=>t.payload.map(t=>e.email===t.email))?e.users=t.payload:e.users=[...e.users,...t.payload]},deleteUser(e,t){e.users=e.users.filter(e=>e.name!==t.payload.name)}},selectors:{selectUsers:e=>e.users}}),{setUser:o,deleteUser:i}=n.actions,{selectUsers:a}=n.selectors},1930:function(){},6293:function(e){"use strict";e.exports=JSON.parse('{"authCoach":{"title":"Auth Coach","description":"Authentication for coaches.","loginButton":"Login","registerButton":"Register"},"auth":{"title":"Login to Sirius Future","loginFailed":"Failed to login","forgotPassword":"I forgot my password","loginAsCoach":"Login as a coach","noAccount":"Don\'t have an account?","register":"Register","email":"E-mail","password":"Password","rememberMe":"Remember me","login":"Login"},"dashboard":{"achievement":{"title":"Achievements","description":"Your achievements"},"checkConnection":{"title":"Check Connection","description":"Check your internet connection"},"home":{"title":"Home","welcomeMessage":"Welcome to your dashboard"},"library":{"title":"Library","description":"Your personal library"},"payment":{"title":"Payment","description":"Manage your payments"},"questions":{"title":"Questions","description":"Frequently asked questions"},"settings":{"title":"Settings","description":"Manage your settings"},"schedule":{"title":"Schedule","description":"Your schedule"},"training":{"title":"Training","description":"Your training sessions"}},"register":{"title":"Register","description":"Create a new account","registerButton":"Register"},"resetPassword":{"title":"Reset Password","description":"Reset your password","resetButton":"Reset"}}')},1217:function(e){"use strict";e.exports=JSON.parse('{"authCoach":{"title":"Авторизация Тренера","description":"Авторизация для тренеров.","loginButton":"Войти","registerButton":"Регистрация"},"auth":{"title":"Вход в Sirius Future","loginFailed":"Не удалось войти","forgotPassword":"Я забыл пароль","loginAsCoach":"Войти как тренер","noAccount":"Нет аккаунта?","register":"Зарегистрироваться","email":"E-mail","password":"Пароль","rememberMe":"Запомнить меня","login":"Войти"},"dashboard":{"achievement":{"title":"Достижения","description":"Ваши достижения"},"checkConnection":{"title":"Проверка соединения","description":"Проверьте ваше интернет-соединение"},"home":{"title":"Главная","welcomeMessage":"Добро пожаловать в ваш кабинет"},"library":{"title":"Библиотека","description":"Ваша личная библиотека"},"payment":{"title":"Оплата","description":"Управление вашими платежами"},"questions":{"title":"Вопросы","description":"Часто задаваемые вопросы"},"settings":{"title":"Настройки","description":"Управление вашими настройками"},"schedule":{"title":"Расписание","description":"Ваше расписание"},"training":{"title":"Тренировки","description":"Ваши тренировочные сессии"}},"register":{"title":"Регистрация","description":"Создание нового аккаунта","registerButton":"Зарегистрироваться"},"resetPassword":{"title":"Сброс пароля","description":"Сбросьте ваш пароль","resetButton":"Сбросить"}}')}},function(e){e.O(0,[257,460,507,971,23,744],function(){return e(e.s=1752)}),_N_E=e.O()}]);