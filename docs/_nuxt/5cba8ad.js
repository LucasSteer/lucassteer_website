(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(t,e,n){var content=n(163);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(113).default)("736177bc",content,!0,{sourceMap:!1})},119:function(t,e,n){"use strict";var r={name:"NavLink",props:{url:{type:String,required:!0},text:{type:String,default:""}},data:function(){return{isCurrentPage:this.$route.path===this.url}}},o=n(13),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"font-semibold transition duration-200 ease-in-out hover:text-green-highlightLarge hover:underline focus:text-green-highlightLarge focus:underline tablet:text-xl tablet:tracking-widest",class:{"text-green-baseLarge":t.isCurrentPage},attrs:{href:t.url}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null).exports,c=n(84);n(112);var d={name:"DefaultLayout",components:{NavLink:l,ExternalLink:c.a}},h=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex h-screen flex-col justify-between"},[n("header",{staticClass:"flex min-h-16 flex-row items-center justify-between border-b-2 border-grey-900 px-2 py-2 tablet:min-h-initial tablet:pr-8"},[n("img",{staticClass:"hidden h-12 w-12 tablet:block",attrs:{src:"/favicon/favicon-57.png",alt:"Lucas Steer's Logo",height:"48",width:"48"}}),t._v(" "),n("nav",{staticClass:"w-full"},[n("ul",{staticClass:"flex flex-row justify-around"},[n("li",[n("NavLink",{attrs:{url:"/",text:"About Me"}})],1),t._v(" "),n("li",[n("NavLink",{attrs:{url:"/myexperiences",text:"My Experiences"}})],1),t._v(" "),n("li",[n("NavLink",{attrs:{url:"/myprojects",text:"My Projects"}})],1)])])]),t._v(" "),n("div",{staticClass:"container mx-auto"},[n("nuxt")],1),t._v(" "),n("footer",{staticClass:"min-h-16 border-t-2 border-grey-900 px-4 pt-2 tablet:flex tablet:flex-row tablet:items-center tablet:justify-between tablet:pt-0"},[n("p",{staticClass:"mb-1 text-xs"},[t._v("© 2022 Lucas Steer. All Rights Reserved.")]),t._v(" "),n("p",{staticClass:"relative text-xs"},[t._v("\n      Contact:\n      "),n("ExternalLink",{staticClass:"text-xs",attrs:{url:"mailto:lucassteer@gmail.com"}},[t._v("lucassteer@gmail.com")])],1)])])}),[],!1,null,null,null);e.a=h.exports},120:function(t,e,n){t.exports=n(121)},163:function(t,e,n){var r=n(111)((function(i){return i[1]}));r.push([t.i,'/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}*{font-size:16px;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}html{scrollbar-gutter:stable both-edges;--tw-text-opacity:1;color:rgb(45 55 72 / var(--tw-text-opacity))}@supports not (scrollbar-gutter:auto){html{overflow-y:scroll}}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.container{width:100%;}@media (min-width: 768px){.container{max-width:768px;}}@media (min-width: 1300px){.container{max-width:1300px;}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;}.absolute{position:absolute;}.relative{position:relative;}.bottom-0{bottom:0px;}.m-2{margin:0.5rem;}.mx-2{margin-left:0.5rem;margin-right:0.5rem;}.mx-auto{margin-left:auto;margin-right:auto;}.my-4{margin-top:1rem;margin-bottom:1rem;}.mb-2{margin-bottom:0.5rem;}.ml-2{margin-left:0.5rem;}.mt-4{margin-top:1rem;}.mb-1{margin-bottom:0.25rem;}.mt-56{margin-top:14rem;}.mb-4{margin-bottom:1rem;}.flex{display:flex;}.grid{display:grid;}.hidden{display:none;}.h-16{height:4rem;}.h-8{height:2rem;}.h-full{height:100%;}.h-screen{height:100vh;}.h-12{height:3rem;}.h-32{height:8rem;}.min-h-16{min-height:4rem;}.w-full{width:100%;}.w-16{width:4rem;}.w-0{width:0px;}.w-12{width:3rem;}.w-32{width:8rem;}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.flex-row{flex-direction:row;}.flex-col{flex-direction:column;}.items-center{align-items:center;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.justify-around{justify-content:space-around;}.gap-2{gap:0.5rem;}.gap-4{gap:1rem;}.gap-12{gap:3rem;}.overflow-hidden{overflow:hidden;}.rounded-lg{border-radius:0.5rem;}.rounded-full{border-radius:9999px;}.rounded-md{border-radius:0.375rem;}.border-2{border-width:2px;}.border{border-width:1px;}.border-b-2{border-bottom-width:2px;}.border-t-2{border-top-width:2px;}.border-grey-400{--tw-border-opacity:1;border-color:rgb(156 163 175 / var(--tw-border-opacity));}.border-grey-700{--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity));}.border-grey-900{--tw-border-opacity:1;border-color:rgb(17 24 39 / var(--tw-border-opacity));}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.bg-primary-base{--tw-bg-opacity:1;background-color:rgb(25 82 46 / var(--tw-bg-opacity));}.object-scale-down{-o-object-fit:scale-down;object-fit:scale-down;}.p-2{padding:0.5rem;}.p-4{padding:1rem;}.p-12{padding:3rem;}.px-4{padding-left:1rem;padding-right:1rem;}.px-2{padding-left:0.5rem;padding-right:0.5rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.py-8{padding-top:2rem;padding-bottom:2rem;}.pt-2{padding-top:0.5rem;}.pb-4{padding-bottom:1rem;}.pb-8{padding-bottom:2rem;}.pb-10{padding-bottom:2.5rem;}.text-center{text-align:center;}.align-middle{vertical-align:middle;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-base{font-size:1rem;line-height:1.5rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-xs{font-size:0.75rem;line-height:1rem;}.text-6xl{font-size:3.75rem;line-height:1;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.font-semibold{font-weight:600;}.leading-4{line-height:1rem;}.tracking-widest{letter-spacing:0.1em;}.tracking-wide{letter-spacing:0.025em;}.text-blue-baseLarge{--tw-text-opacity:1;color:rgb(25 101 163 / var(--tw-text-opacity));}.text-blue-base{--tw-text-opacity:1;color:rgb(20 74 118 / var(--tw-text-opacity));}.text-green-base{--tw-text-opacity:1;color:rgb(25 82 46 / var(--tw-text-opacity));}.text-green-baseLarge{--tw-text-opacity:1;color:rgb(32 111 62 / var(--tw-text-opacity));}.text-grey{--tw-text-opacity:1;color:rgb(45 55 72 / var(--tw-text-opacity));}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.opacity-25{opacity:0.25;}.shadow-card{--tw-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1),0 10px 6px -2px rgba(0, 0, 0, 0.05);--tw-shadow-colored:0px 0px 10px 0px var(--tw-shadow-color), 0 10px 6px -2px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-200{transition-duration:200ms;}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}.hover\\:scale-103:hover{--tw-scale-x:1.03;--tw-scale-y:1.03;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.hover\\:text-blue-highlightLarge:hover{--tw-text-opacity:1;color:rgb(66 153 225 / var(--tw-text-opacity));}.hover\\:text-blue-highlight:hover{--tw-text-opacity:1;color:rgb(30 120 194 / var(--tw-text-opacity));}.hover\\:text-green-highlight:hover{--tw-text-opacity:1;color:rgb(38 130 73 / var(--tw-text-opacity));}.hover\\:text-green-highlightLarge:hover{--tw-text-opacity:1;color:rgb(48 166 93 / var(--tw-text-opacity));}.hover\\:text-grey:hover{--tw-text-opacity:1;color:rgb(45 55 72 / var(--tw-text-opacity));}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline;}.hover\\:no-underline:hover{-webkit-text-decoration-line:none;text-decoration-line:none;}.focus\\:scale-103:focus{--tw-scale-x:1.03;--tw-scale-y:1.03;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.focus\\:text-blue-highlightLarge:focus{--tw-text-opacity:1;color:rgb(66 153 225 / var(--tw-text-opacity));}.focus\\:text-blue-highlight:focus{--tw-text-opacity:1;color:rgb(30 120 194 / var(--tw-text-opacity));}.focus\\:text-green-highlight:focus{--tw-text-opacity:1;color:rgb(38 130 73 / var(--tw-text-opacity));}.focus\\:text-green-highlightLarge:focus{--tw-text-opacity:1;color:rgb(48 166 93 / var(--tw-text-opacity));}.focus\\:text-grey:focus{--tw-text-opacity:1;color:rgb(45 55 72 / var(--tw-text-opacity));}.focus\\:underline:focus{-webkit-text-decoration-line:underline;text-decoration-line:underline;}.focus\\:no-underline:focus{-webkit-text-decoration-line:none;text-decoration-line:none;}@media (prefers-reduced-motion: reduce){.motion-reduce\\:transition-none{transition-property:none;}.motion-reduce\\:hover\\:transform-none:hover{transform:none;}}@media (min-width: 768px){.tablet\\:m-4{margin:1rem;}.tablet\\:mx-8{margin-left:2rem;margin-right:2rem;}.tablet\\:mb-4{margin-bottom:1rem;}.tablet\\:ml-0{margin-left:0px;}.tablet\\:mb-8{margin-bottom:2rem;}.tablet\\:block{display:block;}.tablet\\:flex{display:flex;}.tablet\\:h-40{height:10rem;}.tablet\\:min-h-initial{min-height:initial;}.tablet\\:w-40{width:10rem;}.tablet\\:flex-row{flex-direction:row;}.tablet\\:items-center{align-items:center;}.tablet\\:justify-between{justify-content:space-between;}.tablet\\:gap-8{gap:2rem;}.tablet\\:p-8{padding:2rem;}.tablet\\:py-4{padding-top:1rem;padding-bottom:1rem;}.tablet\\:px-8{padding-left:2rem;padding-right:2rem;}.tablet\\:pt-3{padding-top:0.75rem;}.tablet\\:pb-10{padding-bottom:2.5rem;}.tablet\\:pr-8{padding-right:2rem;}.tablet\\:pt-0{padding-top:0px;}.tablet\\:text-lg{font-size:1.125rem;line-height:1.75rem;}.tablet\\:text-base{font-size:1rem;line-height:1.5rem;}.tablet\\:text-xl{font-size:1.25rem;line-height:1.75rem;}.tablet\\:text-2xl{font-size:1.5rem;line-height:2rem;}.tablet\\:text-3xl{font-size:1.875rem;line-height:2.25rem;}.tablet\\:leading-8{line-height:2rem;}.tablet\\:leading-4{line-height:1rem;}.tablet\\:tracking-widest{letter-spacing:0.1em;}}@media (min-width: 1300px){.desktop\\:ml-auto{margin-left:auto;}.desktop\\:h-64{height:16rem;}.desktop\\:w-7\\/12{width:58.333333%;}.desktop\\:w-64{width:16rem;}.desktop\\:w-2\\/3{width:66.666667%;}.desktop\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.desktop\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}.desktop\\:text-xl{font-size:1.25rem;line-height:1.75rem;}}',""]),r.locals={},t.exports=r},23:function(t,e,n){"use strict";var r={name:"ErrorPage",props:["error"],layout:"error"},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"text-center"},[n("h1",{staticClass:"pb-10 tracking-wide"},[404===t.error.statusCode?n("span",{staticClass:"text-6xl text-green-baseLarge"},[t._v("\n      Page not found\n    ")]):n("span",{staticClass:"text-6xl text-green-baseLarge"},[t._v("\n      An error occurred\n    ")])]),t._v(" "),n("p",{staticClass:"text-xl"},[t._v("Use the navigation bar to find your way back!")]),t._v(" "),n("img",{staticClass:"mx-auto mt-56 opacity-25",attrs:{src:"/favicon/favicon-310.png",alt:""}})])}),[],!1,null,null,null);e.a=component.exports},84:function(t,e,n){"use strict";var r={name:"ExternalLink",props:{url:{type:String,default:"/"}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"font-semibold text-blue-base hover:text-blue-highlight hover:underline focus:text-blue-highlight focus:underline",attrs:{href:t.url,target:"_blank",rel:"noreferrer noopener"}},[t._t("default"),n("span",{staticClass:"sr-only"},[t._v("Opens in a new window.")])],2)}),[],!1,null,null,null);e.a=component.exports}},[[120,5,1,6]]]);