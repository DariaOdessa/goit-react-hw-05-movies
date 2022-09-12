"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[603],{3174:function(n,e,t){t.d(e,{Z:function(){return x}});var r,a,o,i=t(501),c=t(6871),p=t(168),u=t(6444),s=u.ZP.div(r||(r=(0,p.Z)(["\nmargin-top: 32px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 320px);\n  gap: 16px;\n    \n"]))),l=u.ZP.div(a||(a=(0,p.Z)(["\nmargin-bottom: 20px;\nflex-basis: calc((100% - 32px) / 3);\nborder: 1px solid grey;\nborder-radius: 4px;\ncursor: pointer;\n\ntransition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\ntransition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n      box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),\n          0px 1px 1px rgba(0, 0, 0, 0.12);\n      transform: scale(1.03);\n  }\n\n> a {\n  text-decoration: none;\n}\n"]))),d=u.ZP.h3(o||(o=(0,p.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),f=t(184),x=function(n){var e=n.movies,t=(0,c.TH)();return(0,f.jsx)(s,{children:e.map((function(n){var e=n.poster_path,r=n.id,a=n.title;return(0,f.jsx)(l,{children:(0,f.jsxs)(i.rU,{to:"/movies/".concat(r),state:{from:t},children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e),alt:a}),(0,f.jsx)(d,{children:a})]})},r)}))})}},8603:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,o,i,c,p,u,s=t(5861),l=t(885),d=t(7757),f=t.n(d),x=t(2791),h=t(501),g=t(5264),v=t(168),m=t(6444),b=t(828),y=(m.ZP.header(r||(r=(0,v.Z)(["\n    top: 0;\n    left: 0;\n    position: sticky;\n    z-index: 1100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 64px;\n    padding-right: 24px;\n    padding-left: 24px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    color: #fff;\n    background-color: #3f51b5;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),m.ZP.form(a||(a=(0,v.Z)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n    border: 1px solid orangered;\n    margin-top: 16px;\n    margin-left: 32px;\n    "])))),w=m.ZP.button(o||(o=(0,v.Z)(["\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n\n    &:hover {\n         opacity: 1;\n    }\n"]))),Z=(0,m.ZP)(b.Yfv)(i||(i=(0,v.Z)(["\nwidth: 24px;\nheight: 48px;\nfill: orangered;\n"]))),k=m.ZP.span(c||(c=(0,v.Z)(["\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n    "]))),j=m.ZP.input(p||(p=(0,v.Z)(["\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n\n    &::placeholder {\n    font: inherit;\n    font-size: 18px;\n    }\n"]))),_=t(184),S=function(n){var e=n.handleSubmit,t=(0,x.useState)(""),r=(0,l.Z)(t,2),a=r[0],o=r[1];return(0,_.jsxs)(y,{onSubmit:function(n){e(a),""!==a?o(""):g.Notify.warning("Input is still empty, please type something!",{width:"400px",fontSize:"20px",position:"center-top",distance:"50px"})},children:[(0,_.jsx)(w,{type:"submit",children:(0,_.jsx)(k,{children:(0,_.jsx)(Z,{})})}),(0,_.jsx)(j,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){return o(n.currentTarget.value)},value:a})]})},P=t(3174),z=t(4390),U=m.ZP.p(u||(u=(0,v.Z)(["\ndisplay: block;\nfont-size: 24px;\npadding-left: 32px;\nmargin-top: 32px;\n"]))),C=function(){var n,e=(0,x.useState)(null),t=(0,l.Z)(e,2),r=t[0],a=t[1],o=(0,h.lr)(),i=(0,l.Z)(o,2),c=i[0],p=i[1],u=null!==(n=c.get("query"))&&void 0!==n?n:"";(0,x.useEffect)((function(){function n(){return(n=(0,s.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,z.gy)(u);case 3:return e=n.sent,a(e.results),n.abrupt("return");case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}u&&function(){n.apply(this,arguments)}()}),[u]);return(0,_.jsxs)("div",{children:[(0,_.jsx)(S,{handleSubmit:function(n,e){n.preventDefault(),p({nextQuery:""!==e?{query:e}:{}}),a([])}}),(null===r||void 0===r?void 0:r.length)>0&&(0,_.jsx)(P.Z,{movies:r}),0===(null===r||void 0===r?void 0:r.length)&&""!==u&&(0,_.jsx)(U,{children:"Sorry, there is no films for your results! Try to find something else!"})]})}},4390:function(n,e,t){t.d(e,{TP:function(){return l},gL:function(){return f},gy:function(){return s},jC:function(){return u},zv:function(){return d}});var r=t(5861),a=t(7757),o=t.n(a),i=t(4569),c=t.n(i);c().defaults.baseURL="https://api.themoviedb.org/3/";var p="e2ab7616285daea8fac6003f5ccdd72f",u=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("trending/movie/week?api_key=".concat(p));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("search/movie?api_key=".concat(p,"&language=en-US&query=").concat(e,"&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("movie/".concat(e,"?api_key=").concat(p,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("movie/".concat(e,"/credits?api_key=").concat(p,"&language=en-US"));case 3:return t=n.sent,console.log(t.data),n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("movie/".concat(e,"/reviews?api_key=").concat(p,"&language=en-US"));case 3:return t=n.sent,console.log(t.data),n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=603.1712ac33.chunk.js.map