"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[605],{3605:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,a,c,o,i,s,u,l,p,d=t(5861),f=t(885),x=t(7757),v=t.n(x),g=t(2791),h=t(6871),m=t(4390),w=t(8617),Z=t(168),k=t(6444),y=t(501),b=(0,k.ZP)(y.rU)(r||(r=(0,Z.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding-left: 32px;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-top: 32px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),j=t(184),_=function(n){var e=n.to,t=n.children;return(0,j.jsxs)(b,{to:e,children:[(0,j.jsx)(w.jTe,{size:"24"}),t]})},P=k.ZP.div(a||(a=(0,Z.Z)(["\ndisplay: flex;\npadding: 32px 32px;\n"]))),U=k.ZP.img(c||(c=(0,Z.Z)(["\nwidth: 400px;\nmargin-right: 30px;\n"]))),S=k.ZP.div(o||(o=(0,Z.Z)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 800px;\n"]))),z=k.ZP.h1(i||(i=(0,Z.Z)(["\ntext-align: center;\nfont-size: 46px;\npadding: 16px;\n"]))),C=k.ZP.h2(s||(s=(0,Z.Z)(["\nfont-style: italic;\ntext-align: center;\npadding: 16px;\n"]))),T=k.ZP.p(u||(u=(0,Z.Z)(["\ndisplay: block;\nfont-size: 24px;\npadding: 16px;\n"]))),L=k.ZP.ul(l||(l=(0,Z.Z)(["\ndisplay: flex;\nflex-grow: 2;\njustify-content: space-evenly;\nalign-items: flex-end;\ntext-align: center;\nmargin: 0px;\npadding: 0px;\n"]))),R=(0,k.ZP)(y.rU)(p||(p=(0,Z.Z)(["\ndisplay: block;\nwidth: 250px;\nfont-size: 24px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  border: 1px solid orangered;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: orangered;\n  }\n"]))),q=function(){var n,e,t=(0,h.UO)().id,r=(0,g.useState)({}),a=(0,f.Z)(r,2),c=a[0],o=a[1],i=(0,h.TH)(),s=null!==(n=null===(e=i.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";console.log(i),(0,g.useEffect)((function(){function n(){return(n=(0,d.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,m.TP)(t);case 3:return e=n.sent,o(e),n.abrupt("return");case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),console.log(c);var u=c.poster_path,l=c.title,p=c.overview,x=c.tagline;return(0,j.jsxs)("div",{children:[(0,j.jsx)(_,{to:s,children:"Go back"}),(0,j.jsxs)(P,{children:[(0,j.jsx)(U,{src:u&&"https://image.tmdb.org/t/p/w500".concat(u),alt:l}),(0,j.jsxs)(S,{children:[(0,j.jsx)(z,{children:l}),x&&(0,j.jsxs)(C,{children:['"',x,'"']}),(0,j.jsx)(T,{children:p}),(0,j.jsxs)(L,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(R,{to:"cast",state:{from:i.state.from},children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(R,{to:"reviews",state:{from:i.state.from},children:"Reviews"})})]})]})]}),(0,j.jsx)(g.Suspense,{fallback:(0,j.jsx)("div",{children:"Loading subpage..."}),children:(0,j.jsx)(h.j3,{})})]})}},4390:function(n,e,t){t.d(e,{TP:function(){return p},gL:function(){return f},gy:function(){return l},jC:function(){return u},zv:function(){return d}});var r=t(5861),a=t(7757),c=t.n(a),o=t(4569),i=t.n(o);i().defaults.baseURL="https://api.themoviedb.org/3";var s="e2ab7616285daea8fac6003f5ccdd72f",u=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("/trending/movie/week?api_key=".concat(s));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,console.log(t.data),n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,console.log(t.data),n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=605.b7461fba.chunk.js.map