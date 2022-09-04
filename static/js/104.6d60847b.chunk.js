"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[104],{9104:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r,a,c,o,i=n(885),s=n(6871),u=n(2791),p=n(71),f=n(2606),h=n(3614),l=n(168),d=n(6444),m=d.ZP.p(r||(r=(0,l.Z)(["\ntext-indent:  ","px;\ncolor: ",";\n"])),(function(e){return e.theme.space[5]}),(function(e){return e.theme.colors.text})),x=d.ZP.p(a||(a=(0,l.Z)(["\nfont-weight: ",";\n"])),(function(e){return e.theme.fontWeights.bold})),v=d.ZP.p(c||(c=(0,l.Z)(["\nmargin-bottom: ","px;\nfont-size: ",";\nfont-style: italic;\n"])),(function(e){return e.theme.space[2]}),(function(e){return e.theme.fontSizes.m})),g=d.ZP.div(o||(o=(0,l.Z)(["\n box-shadow: inset 0px 8px 10px -8px rgb(77,75,77);\n  padding-top: ","px;\n"])),(function(e){return e.theme.space[4]})),_=n(4834),y=n(184),j=function(){var e=(0,s.TH)().pathname,t=(0,u.useState)({}),n=(0,i.Z)(t,2),r=n[0],a=n[1],c=(0,u.useState)(!1),o=(0,i.Z)(c,2),l=o[0],d=o[1],j=e.slice(32);return(0,u.useEffect)((function(){j&&(d(!0),function(e){f.Z.getMovieDetails(e).then((function(e){var t=e.results;a(t)})).catch((function(e){return console.log(e)})).finally(d(!1))}(j))}),[j]),(0,y.jsxs)(g,{children:[l&&(0,y.jsx)(h.Z,{}),null!==r&&void 0!==r&&r.length?r.map((function(e){var t=e.id,n=e.author,r=e.content,a=e.created_at,c=e.updated_at;return(0,y.jsxs)(_.x,{mb:5,children:[(0,y.jsxs)(_.x,{display:"flex",gridGap:"15px",flexWrap:"wrap",alignItem:"center",children:[(0,y.jsx)(p.zZ9,{size:"50px"}),(0,y.jsxs)(_.x,{children:[(0,y.jsx)(x,{children:n}),(0,y.jsxs)(_.x,{display:"flex",gridGap:"15px",mb:4,children:[(0,y.jsxs)(v,{children:["Created: ",a.slice(0,10).toLocaleString()]}),c&&(0,y.jsxs)(v,{children:["Updated: ",c.slice(0,10).toLocaleString()]})]})]})]}),(0,y.jsx)(m,{children:r})]},t)})):(0,y.jsx)(m,{children:"No Reviews"})]})}},2606:function(e,t,n){var r=n(5861),a=n(3144),c=n(5671),o=n(9340),i=n(5716),s=n(7757),u=n.n(s),p=n(4569),f=n.n(p),h=function(e){(0,o.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o)))._URL_ORIGIN="https://api.themoviedb.org/3",e._apiKey="739ddb8e241607cc9ff00a57b23f5e54",e.getTrendingMovies=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URLSearchParams({api_key:e._apiKey}),"/trending/movie/day",t.abrupt("return",f().get("".concat(e._URL_ORIGIN).concat("/trending/movie/day","?").concat(n)).then((function(e){return 200!==e.status?Promise.reject("Error: ".concat(e.message)):0===e.data.total_results?Promise.reject("Sorry, no matches found. Please try again."):e.data})).catch((function(e){return Promise.reject(e)})));case 3:case"end":return t.stop()}}),t)}))),e.getMoviesBySearchQuery=function(){var t=(0,r.Z)(u().mark((function t(n,r){var a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new URLSearchParams({query:n,page:r,api_key:e._apiKey}),"/search/movie",t.abrupt("return",f().get("".concat(e._URL_ORIGIN).concat("/search/movie","?").concat(a)).then((function(e){return 200!==e.status?Promise.reject("Error: ".concat(e.message)):0===e.data.total_results?Promise.reject("Sorry, no matches found. Please try again."):e.data})).catch((function(e){return Promise.reject(e)})));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.getMovieDetails=function(){var t=(0,r.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URLSearchParams({api_key:e._apiKey}),"/movie/",t.abrupt("return",f().get("".concat(e._URL_ORIGIN).concat("/movie/","/").concat(n,"?").concat(r)).then((function(e){return 200!==e.status?Promise.reject("Error: ".concat(e.message)):0===e.data.total_results?Promise.reject("Unfortunately, we don't have more details about this movie..."):e.data})).catch((function(e){return Promise.reject(e)})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return(0,a.Z)(n)}(n(2791).Component),l=new h;t.Z=l}}]);
//# sourceMappingURL=104.6d60847b.chunk.js.map