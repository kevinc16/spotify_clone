(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(24),i=c.n(a),r=(c(62),c(15)),o=(c(63),c(64),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("bd28a5b8d6744af2b8c5b8b4e7b2a0f0","&redirect_uri=").concat("http://localhost:3000","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),l=c(1);var j=function(){return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("img",{src:"https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png",alt:"",className:"logo"}),Object(l.jsx)("a",{href:o,children:"LOGIN WITH SPOTIFY"})]})},d=(c(66),c(67),c(25)),b=c.n(d),u=c(93),O=Object(s.createContext)(),h=function(e){var t=e.initialState,c=e.reducer,n=e.children;return Object(l.jsx)(O.Provider,{value:Object(s.useReducer)(c,t),children:n})},x=function(){return Object(s.useContext)(O)};var m=function(){var e,t=x(),c=Object(r.a)(t,2),s=c[0].user;return c[1],Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"header__left",children:[Object(l.jsx)(b.a,{}),Object(l.jsx)("input",{type:"text",placeholder:"Search"})]}),Object(l.jsxs)("div",{className:"header__right",children:[Object(l.jsx)(u.a,{src:null===s||void 0===s||null===(e=s.images[0])||void 0===e?void 0:e.url,alt:null===s||void 0===s?void 0:s.display_name}),Object(l.jsx)("h4",{children:null===s||void 0===s?void 0:s.display_name})]})]})},f=c(41),v=c.n(f),_=c(42),p=c.n(_),g=c(43),y=c.n(g);c(73);var N=function(e){var t,c,s,n=e.track;return n&&Object(l.jsxs)("div",{className:"songRow",children:[Object(l.jsx)("img",{src:null===(t=n.album)||void 0===t||null===(c=t.images[0])||void 0===c?void 0:c.url,alt:n.name,className:"songRow__album"}),Object(l.jsxs)("div",{className:"songRow__info",children:[Object(l.jsx)("h1",{children:n.name}),Object(l.jsxs)("p",{children:[n.artists.map((function(e){return e.name})).join(", ")," -"," ",null===(s=n.album)||void 0===s?void 0:s.name]})]})]})};var S=function(){var e,t=x(),c=Object(r.a)(t,2),s=c[0].discoverWeekly;return c[1],console.log("body",s),s&&Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)(m,{}),Object(l.jsxs)("div",{className:"body__info",children:[Object(l.jsx)("img",{src:null===(e=s.images[0])||void 0===e?void 0:e.url,alt:"discoverweekly"}),Object(l.jsxs)("div",{className:"body__infoText",children:[Object(l.jsx)("strong",{children:"PLAYLIST"}),Object(l.jsx)("h2",{children:s.name}),Object(l.jsx)("p",{children:s.description})]})]}),Object(l.jsxs)("div",{className:"body__songs",children:[Object(l.jsxs)("div",{className:"body__icons",children:[Object(l.jsx)(v.a,{className:"body__shuffle"}),Object(l.jsx)(p.a,{}),Object(l.jsx)(y.a,{})]}),s.tracks.items.map((function(e){return Object(l.jsx)(N,{track:e.track},e.track.id)}))]})]})},k=(c(74),c(46)),E=c.n(k),T=c(45),w=c.n(T),I=c(47),L=c.n(I),P=c(44),R=c.n(P),W=c(48),Y=c.n(W),C=c(91),A=c(92),F=c(49),K=c.n(F),U=c(50),D=c.n(U);var M=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer__left",children:[Object(l.jsx)("img",{src:"",alt:"",className:"footer__albumLogo"}),Object(l.jsxs)("div",{className:"footer__songInfo",children:[Object(l.jsx)("h4",{children:"asdsa"}),Object(l.jsx)("p",{children:"asd"})]})]}),Object(l.jsxs)("div",{className:"footer__center",children:[Object(l.jsx)(R.a,{className:"footer__green"}),Object(l.jsx)(w.a,{className:"footer__icon"}),Object(l.jsx)(E.a,{fontSize:"large",className:"footer__green"}),Object(l.jsx)(L.a,{className:"footer__icon"}),Object(l.jsx)(Y.a,{className:"footer__green"})]}),Object(l.jsx)("div",{className:"footer__right",children:Object(l.jsxs)(C.a,{container:!0,spacing:2,children:[Object(l.jsx)(C.a,{item:!0,children:Object(l.jsx)(K.a,{})}),Object(l.jsx)(C.a,{item:!0,children:Object(l.jsx)(D.a,{})}),Object(l.jsx)(C.a,{item:!0,xs:!0,children:Object(l.jsx)(A.a,{className:"footer__volumeSlider"})})]})})]})};c(75),c(76),c(77);var V=function(e){var t=e.title,c=e.Icon;return Object(l.jsxs)("div",{className:"sidebarOption",children:[c&&Object(l.jsx)(c,{className:"sidebarOption__icon"}),c?Object(l.jsx)("h4",{children:t}):Object(l.jsx)("p",{children:t})]})},z=c(51),B=c.n(z),H=c(52),J=c.n(H);var Q=function(){var e,t=x(),c=Object(r.a)(t,2),s=c[0].playlists;return c[1],Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"",className:"sidebar__logo"}),Object(l.jsx)(V,{title:"Home",Icon:B.a}),Object(l.jsx)(V,{title:"Search",Icon:b.a}),Object(l.jsx)(V,{title:"Your Library",Icon:J.a}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{className:"sidebar__playlistTitle",children:"PLAYLISTS"}),Object(l.jsx)("hr",{}),null===s||void 0===s||null===(e=s.items)||void 0===e?void 0:e.map((function(e){return Object(l.jsx)(V,{title:e.name},e.id)}))]})};var G=function(e){return Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("div",{className:"player__body",children:[Object(l.jsx)(Q,{}),Object(l.jsx)(S,{})]}),Object(l.jsx)(M,{})]})},X=c(53),Z=new(c.n(X).a);var q=function(){var e=x(),t=Object(r.a)(e,2),c=t[0].token,n=t[1];return Object(s.useEffect)((function(){var e=function(){var e=window.location.hash.substring(1);return new URLSearchParams(e).get("access_token")}();window.location.hash="",e&&(Z.setAccessToken(e),n({type:"SET_TOKEN",token:e}),Z.getMe().then((function(e){n({type:"SET_USER",user:e})})),Z.getUserPlaylists().then((function(e){n({type:"SET_PLAYLISTS",playlists:e})})),Z.getPlaylist("37i9dQZEVXcQ0ftIaSbsxN").then((function(e){console.log("asd",e),n({type:"SET_DISCOVER_WEEKLY",discoverWeekly:e})})))}),[]),Object(l.jsx)("div",{className:"App",children:c?Object(l.jsx)(G,{spotifyObj:Z}):Object(l.jsx)(j,{})})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,95)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))},ee=c(13),te=function(e,t){switch(console.log("reducer",t),t.type){case"SET_USER":return Object(ee.a)(Object(ee.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(ee.a)(Object(ee.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(ee.a)(Object(ee.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(ee.a)(Object(ee.a)({},e),{},{discoverWeekly:t.discoverWeekly});default:return console.log("nothing"),e}};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{initialState:{token:null,user:null,playlists:[],playing:null,item:null,discoverWeekly:null},reducer:te,children:Object(l.jsx)(q,{})})}),document.getElementById("root")),$()}},[[78,1,2]]]);
//# sourceMappingURL=main.8ba4cf0f.chunk.js.map