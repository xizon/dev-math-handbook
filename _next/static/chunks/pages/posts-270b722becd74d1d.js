(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{1945:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dev-math-handbook/posts",function(){return n(3040)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),a=n(1003),s=n(4465),i=n(2692),c=n(8245),u=n(9246),f=n(227),d=n(3468);let p={};function v(e,t,n,o){if(!e||!a.isLocalURL(t))return;Promise.resolve(e.prefetch(t,n,o)).catch(e=>{});let r=o&&void 0!==o.locale?o.locale:e&&e.locale;p[t+"%"+n+(r?"%"+r:"")]=!0}let h=l.default.forwardRef(function(e,t){let n,o;let{href:h,as:m,children:x,prefetch:g,passHref:j,replace:w,shallow:y,scroll:_,locale:C,onClick:b,onMouseEnter:L,onTouchStart:E,legacyBehavior:k=!0!==Boolean(!0)}=e,M=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,k&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let O=!1!==g,N=l.default.useContext(i.RouterContext),R=l.default.useContext(c.AppRouterContext);R&&(N=R);let{href:T,as:S}=l.default.useMemo(()=>{let[e,t]=a.resolveHref(N,h,!0);return{href:e,as:m?a.resolveHref(N,m):t||e}},[N,h,m]),P=l.default.useRef(T),I=l.default.useRef(S);k&&(o=l.default.Children.only(n));let F=k?o&&"object"==typeof o&&o.ref:t,[A,D,Z]=u.useIntersection({rootMargin:"200px"}),z=l.default.useCallback(e=>{(I.current!==S||P.current!==T)&&(Z(),I.current=S,P.current=T),A(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[S,F,T,Z,A]);l.default.useEffect(()=>{let e=D&&O&&a.isLocalURL(T),t=void 0!==C?C:N&&N.locale,n=p[T+"%"+S+(t?"%"+t:"")];e&&!n&&v(N,T,S,{locale:t})},[S,T,D,C,O,N]);let B={ref:z,onClick(e){k||"function"!=typeof b||b(e),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,s,i,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let v=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:s,locale:c,scroll:i}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};u?l.default.startTransition(v):v()}(e,N,T,S,w,y,_,C,Boolean(R),O)},onMouseEnter(e){k||"function"!=typeof L||L(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!O&&R)&&a.isLocalURL(T)&&v(N,T,S,{priority:!0})},onTouchStart(e){k||"function"!=typeof E||E(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!O&&R)&&a.isLocalURL(T)&&v(N,T,S,{priority:!0})}};if(!k||j||"a"===o.type&&!("href"in o.props)){let H=void 0!==C?C:N&&N.locale,U=N&&N.isLocaleDomain&&f.getDomainLocale(S,H,N.locales,N.domainLocales);B.href=U||d.addBasePath(s.addLocale(S,H,N&&N.defaultLocale))}return k?l.default.cloneElement(o,B):l.default.createElement("a",Object.assign({},M,B),n)});t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!l,[u,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!c&&!u&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=s.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=a.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},s.push(n),a.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),a.delete(o);let t=s.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&s.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let o=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(o)}},[d,c,n,t,u]);let v=o.useCallback(()=>{f(!1)},[]);return[p,u,v]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294));let r=o.default.createContext(null);t.AppRouterContext=r;let l=o.default.createContext(null);t.LayoutRouterContext=l;let a=o.default.createContext(null);t.GlobalLayoutRouterContext=a;let s=o.default.createContext(null);t.TemplateContext=s},3040:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u}});var o=n(5893),r=n(9008),l=n.n(r),a=n(1664),s=n.n(a),i=n(6416),c=n(6225),u=!0;t.default=function(e){let{currentData:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l(),{children:(0,o.jsx)("title",{children:"目录 - 程序员数学手册"})}),(0,o.jsx)("main",{children:(0,o.jsxs)("div",{className:"page",children:[(0,o.jsx)(i.Z,{}),(0,o.jsx)("section",{className:"intro intro-subpage",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("h2",{children:"目录"}),(0,o.jsx)("ol",{className:"app-posts",children:t?t.map((e,t)=>(0,o.jsx)("li",{className:"app-item",children:(0,o.jsx)(s(),{href:"/dev-math-handbook/posts/".concat(e.slug),dangerouslySetInnerHTML:{__html:"".concat(e.title)}})},t)):(0,o.jsx)(o.Fragment,{children:"Loading..."})})]})})]})}),(0,o.jsx)(c.Z,{})]})}},6225:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(5893),r=n(2806);function l(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("footer",{className:"clearfix",children:(0,o.jsx)("p",{dangerouslySetInnerHTML:{__html:r.iF}})})})}},6416:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o,r,l=n(5893),a=n(1163),s=n(7294),i=n(2418),c=n.n(i);function u(e){let{btnIcon:t}=e,n=r[e.easing],o=e.speed?e.speed:500,a=(0,s.useRef)(null),[i,u]=(0,s.useState)(!1),f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=!1;return function(){n||(e.apply(this,arguments),n=!0,setTimeout(function(){n=!1},t))}}(function(){let e=window.pageYOffset;e<window.innerHeight/2?u(!1):u(!0)},5);function d(e){e.preventDefault(),function(e){let t;let r=e.getBoundingClientRect().top,l=window.pageYOffset,a=new Date().getTime(),s=function(){var e,i,c;let u;let f=new Date().getTime()-a;switch(n){case"linear":default:u=100*f/o+0;break;case"ease-in":e=f,u=100*(e/=o)*e+0;break;case"ease-out":i=f,u=-100*(i/=o)*(i-2)+0;break;case"ease-in-out":c=f,u=(c/=o/2)<1?50*c*c+0:-50*(--c*(c-2)-1)+0}let d=u/100;window.scrollTo(0,l+r*d),f<o?t=window.requestAnimationFrame(s):window.cancelAnimationFrame(t)};t=window.requestAnimationFrame(s)}(document.body)}return(0,s.useEffect)(()=>{var e,t,n;return null===(e=a.current)||void 0===e||e.classList.remove(c()["is-active"]),window.removeEventListener("scroll",f),window.removeEventListener("touchmove",f),window.removeEventListener("scroll",f),window.removeEventListener("touchmove",f),window.addEventListener("scroll",f),window.addEventListener("touchmove",f),f(),null===(t=a.current)||void 0===t||t.removeEventListener("click",d),null===(n=a.current)||void 0===n||n.addEventListener("click",d),()=>{var e,t;null===(e=a.current)||void 0===e||e.removeEventListener("click",d),window.removeEventListener("scroll",f),window.removeEventListener("touchmove",f),null===(t=a.current)||void 0===t||t.classList.remove(c()["is-active"])}},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:c()["back-to-top"],ref:a,children:(0,l.jsx)("button",{type:"button",className:i?c()["is-active"]:"",children:t||(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("svg",{width:"40",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 300.222 300.221",children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"M299.201,93.188c-14.688-25.704-29.988-50.184-43.452-76.5c-3.06-6.12-12.852-4.284-14.688,1.836 c-7.345,26.316-16.524,58.14-15.301,85.068c0,6.12,6.732,7.344,10.404,4.284c0.612,0.612,1.836,0.612,3.061,0.612 c6.731-0.612,13.464-1.836,19.584-2.448c22.031,55.692,39.779,152.388-44.677,158.508c-8.567,0.612-15.3-1.224-20.195-4.896 c11.628-9.792,21.42-22.031,26.315-36.107c6.732-18.36-6.731-57.528-31.824-46.512c-20.195,9.18-24.479,45.899-20.808,64.26 c1.224,5.508,3.06,10.403,4.896,14.688c-1.837,1.225-3.061,1.836-4.896,3.061c-15.912,9.18-34.883,13.464-53.244,12.852 c-13.464-0.612-21.42-7.956-26.316-17.748c16.524-8.567,29.988-22.032,33.66-36.107c7.344-29.988-31.212-49.572-47.124-20.196 c-7.344,13.464-8.568,32.436-4.284,48.96c-0.612,0.612-1.836,0.612-2.448,1.224c-52.632,21.42-68.544-45.288-38.556-78.336 c2.448-3.06-0.612-7.956-4.284-5.508c-36.108,25.704-33.048,80.784,8.568,98.532c11.016,4.896,26.928,3.06,41.616-1.836 c6.732,13.464,17.748,23.868,33.66,25.704c23.868,3.06,51.408-3.673,73.44-17.137c12.852,10.404,31.212,12.853,50.184,8.568 c80.172-15.912,65.484-113.832,42.228-171.972c6.12-0.612,11.629-0.612,17.748-0.612 C297.978,105.427,302.261,98.083,299.201,93.188z M83.166,240.067c-0.612-4.283-1.224-8.567-1.224-12.852 c0-6.732,1.224-13.464,3.06-19.584c4.284-14.688,29.988-9.792,22.032,9.792C102.138,226.603,92.958,234.559,83.166,240.067z M180.473,229.664c0-8.568,3.673-39.168,16.524-39.78c9.792-0.612,9.792,26.316,9.18,30.6c-2.447,11.629-11.016,21.42-21.42,28.765 C181.697,243.127,180.473,236.395,180.473,229.664z M252.077,43.615c8.568,15.912,17.748,31.212,26.928,46.512 c-12.852,1.836-25.704,4.284-37.943,7.344C246.569,80.947,249.018,61.975,252.077,43.615z"})})})})})})})}(o=r||(r={})).linear="linear",o.easeIn="ease-in",o.easeOut="ease-out",o.easeInOut="ease-in-out";let f=e=>{let{children:t,href:n,...o}=e,r=(0,a.useRouter)(),s=e=>{e.preventDefault(),r.push(n)};return(0,l.jsx)("a",{href:n,onClick:s,...o,children:t})};function d(){let e=(0,a.useRouter)(),[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let t=t=>t!==e.asPath&&n(!0),o=t=>t===e.asPath&&setTimeout(()=>{n(!1)},2e3);return e.events.on("routeChangeStart",t),e.events.on("routeChangeComplete",o),e.events.on("routeChangeError",o),()=>{e.events.off("routeChangeStart",t),e.events.off("routeChangeComplete",o),e.events.off("routeChangeError",o)}}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,{speed:700,easing:"easeOut"}),(0,l.jsx)("header",{children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"brand",children:(0,l.jsxs)(f,{href:"/",children:[(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"/dev-math-handbook/assets/images/logo-white.png"})}),"程序员数学手册",(0,l.jsx)("small",{style:{fontSize:10,paddingLeft:20},id:"loading",children:t?"loading...":""})]})}),(0,l.jsxs)("nav",{className:"menu",children:[(0,l.jsx)(f,{href:"/",className:"/"==e.pathname?"nav-link active":"nav-link",children:"首页"}),(0,l.jsx)(f,{href:"/dev-math-handbook/posts",className:e.pathname.indexOf("/dev-math-handbook/posts")>=0?"nav-link active":"nav-link",children:"目录"}),(0,l.jsx)(f,{href:"/dev-math-handbook/about",className:e.pathname.indexOf("/dev-math-handbook/about")>=0?"nav-link active":"nav-link",children:"关于"})]})]})})]})}},2418:function(e){e.exports={"back-to-top":"styles_back-to-top__xN2cj","is-active":"styles_is-active__OlAcC"}},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},2806:function(e){"use strict";e.exports=JSON.parse('{"or":"http://localhost:3000","iF":"Copyright &copy; 程序员数学手册 2023. All rights reserved.  "}')}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1945)}),_N_E=e.O()}]);