(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{118:function(e,t,n){var content=n(187);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(91).default)("562ac5ba",content,!0,{sourceMap:!1})},136:function(e,t,n){"use strict";var o={},r=(n(186),n(35)),component=Object(r.a)(o,(function(){var e=this._self._c;return e("div",{attrs:{id:"main-layout"}},[e("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},137:function(e,t,n){"use strict";var o=n(35),component=Object(o.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"layout",attrs:{id:"layout"}},[e("nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},138:function(e,t,n){n(139),e.exports=n(140)},179:function(e,t,n){var content=n(180);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(91).default)("4971609b",content,!0,{sourceMap:!1})},180:function(e,t,n){var o=n(90),r=n(181),c=n(182),l=n(183),f=n(184),d=n(185),h=o(!1),m=r(c),y=r(c,{hash:"#iefix"}),x=r(l),w=r(f),v=r(d,{hash:"#icomoon"});h.push([e.i,'@font-face{font-family:"icomoon";src:url('+m+");src:url("+y+') format("embedded-opentype"),url('+x+') format("truetype"),url('+w+') format("woff"),url('+v+') format("svg");font-weight:400;font-style:normal;font-display:block}[class*=" icon-"],[class^=icon-]{font-family:"icomoon"!important;speak:never;font-style:normal;font-weight:400;font-feature-settings:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-arrow-down:before{content:"\\e900"}.icon-arrow-left:before{content:"\\e901"}.icon-arrow-right:before{content:"\\e902"}.icon-arrow-up:before{content:"\\e903"}.icon-menu:before{content:"\\e904"}.icon-close:before{content:"\\e905"}.icon-cookie:before{content:"\\e906"}.icon-checkbox:before{content:"\\e907"}.icon-phone:before{content:"\\e908"}.icon-mail:before{content:"\\e909"}.icon-pet-friendly:before{content:"\\e90a"}.icon-calendar:before{content:"\\e90b"}.icon-filter:before{content:"\\e90c"}.icon-file:before{content:"\\e90d"}.icon-play:before{content:"\\e90e"}.icon-mail-sent:before{content:"\\e90f"}.icon-max-persons:before{content:"\\e910"}.icon-bathrooms:before{content:"\\e911"}.icon-bedrooms:before{content:"\\e912"}.icon-pool-size:before{content:"\\e913"}',""]),e.exports=h},182:function(e,t,n){e.exports=n.p+"fonts/icomoon.b75a387.eot"},183:function(e,t,n){e.exports=n.p+"fonts/icomoon.dad6209.ttf"},184:function(e,t,n){e.exports=n.p+"fonts/icomoon.4b45fdb.woff"},185:function(e,t,n){e.exports=n.p+"img/icomoon.dc84ace.svg"},186:function(e,t,n){"use strict";n(118)},187:function(e,t,n){var o=n(90)(!1);o.push([e.i,'[type=button],[type=reset],[type=submit],button{-webkit-font-smoothing:antialiased;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap;height:48px;width:230px;border-radius:50px;background:#0073bc;border:4px solid #73b9e5;color:#fff;font-size:16px;transition:border .25s ease-in-out}[type=button]:hover,[type=reset]:hover,[type=submit]:hover,button:hover{border-color:#0073bc}[type=button]:focus,[type=reset]:focus,[type=submit]:focus,button:focus{outline:0}[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled,button:disabled{cursor:not-allowed;opacity:.3}ol,ul{padding:0}dl,dt,ol,ul{margin:0}dt{font-weight:600}dd{margin:0}*,:after,:before{box-sizing:inherit}body,html{height:100%}body{background-color:#fff;margin:0}[v-cloak]{display:none}a,button,h1,h2,h3,h4,h5,h6,li,p{font-family:"Bellota",cursive}h1{font-style:normal;font-size:36px;line-height:48px;letter-spacing:-.9px}h3{font-size:25px;font-weight:700;line-height:32px}@media only screen and (min-width:768px){h3{font-size:36px;line-height:50px}}h4{font-size:24px;letter-spacing:-.43px;line-height:36px}p{line-height:1.5}a,p{font-size:16px}a{text-decoration:none;line-height:32px}.bold{font-weight:700}html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}body{overflow-x:hidden}*,:after,:before{box-sizing:border-box;margin:0}#main-layout{position:relative;overflow:hidden}',""]),e.exports=o},188:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return c}));n(16),n(21);var o=n(84),r=function(){return{isGameStarted:!1,attacker:1,player1:null,player2:null,winner:null,logs:[],attackInProgress:!1}},c={SET_PLAYER:function(e,data){e[data.slot]={id:data.data.id,name:data.data.name,slot:data.slot,image:data.data.sprites.other.dream_world.front_default,energy:100,hp:data.data.stats.filter((function(e){return"hp"===e.stat.name}))[0].base_stat,attack:data.data.stats.filter((function(e){return"attack"===e.stat.name}))[0].base_stat,defense:data.data.stats.filter((function(e){return"defense"===e.stat.name}))[0].base_stat,speed:data.data.stats.filter((function(e){return"speed"===e.stat.name}))[0].base_stat}},GAME_STARTED:function(e,data){e.isGameStarted=data,e.attackInProgress=!1},SET_ATTACKER:function(e,data){e.attacker=data,e.winner=null},CLEAR_LOGS:function(e){e.logs=[]},UPDATE_DEFENDER_HP:function(e,data){var t=o.a.capitalizeFirstLetter(e[data.attacker].name),n=o.a.capitalizeFirstLetter(e[data.defender].name),r=(e[data.defender].energy-data.hp).toFixed(2);r>0?(e[data.defender].energy=r,e.attacker=1==e.attacker?2:1,0==data.hp?e.logs.push("".concat(t," missed ").concat(n)):e.logs.push("".concat(t," attacked ").concat(n," for ").concat(parseInt(data.hp)," dmg"))):(e[data.defender].energy=0,e.winner=e[data.attacker],e.logs.push("".concat(n," died")))},SET_CONTINUE_GAME:function(e){e.player1=e.winner,e.player1.energy=100,e.player1.slot="player1",e.winner=null},CHANGE_ATTACK_PROGRESS:function(e,data){e.attackInProgress=data}}},27:function(e,t,n){"use strict";var o={},r=n(35),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Nažalost, nismo pronašli stranicu "),t("br"),e._v("koju ste tražili...")])])}],!1,null,"40a89bd0",null);t.a=component.exports},84:function(e,t,n){"use strict";n(29);var o=n(132);n(189).gsap.registerPlugin(o.ScrollTrigger);var r={getRandomNumber:function(e,t){return Math.floor(Math.random()*t)+e},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},setFirstAttacker:function(e,t){return e>=t?1:2},setColorByHP:function(e){return e>=50?"green":e>=30&&e<50?"orange":"red"},willYouMissTheShoot:function(){return 1==this.getRandomNumber(1,5)}};t.a=r}},[[138,14,2,15]]]);