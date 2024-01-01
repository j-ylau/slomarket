(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{9245:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(3428),o=r(791),i=r(2265),a=r(7042),s=r(9613),l=r(7947),u=r(3381),c=r(5270),d=r(7437);let p=["className","component"];var h=r(5097),m=r(2310),g=r(3469),y=r(6520);let f=(0,y.Z)("MuiBox",["root"]),Z=(0,m.Z)(),v=function(e={}){let{themeId:t,defaultTheme:r,defaultClassName:h="MuiBox-root",generateClassName:m}=e,g=(0,s.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z),y=i.forwardRef(function(e,i){let s=(0,c.Z)(r),l=(0,u.Z)(e),{className:y,component:f="div"}=l,Z=(0,o.Z)(l,p);return(0,d.jsx)(g,(0,n.Z)({as:f,ref:i,className:(0,a.Z)(y,m?m(h):h),theme:t&&s[t]||s},Z))});return y}({themeId:g.Z,defaultTheme:Z,defaultClassName:f.root,generateClassName:h.Z.generate});var x=v},5210:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(791),o=r(3428),i=r(2265),a=r(7042),s=r(5600),l=r(8702),u=r(5843),c=r(7927),d=r(3308),p=r(7663),h=r(3226),m=r(6520),g=r(5702);function getLinkUtilityClass(e){return(0,g.Z)("MuiLink",e)}let y=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var f=r(5227),Z=r(9975);let v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},transformDeprecatedColors=e=>v[e]||e;var Link_getTextDecoration=({theme:e,ownerState:t})=>{let r=transformDeprecatedColors(t.color),n=(0,f.DW)(e,`palette.${r}`,!1)||t.color,o=(0,f.DW)(e,`palette.${r}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,Z.Fq)(n,.4)},x=r(7437);let b=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],useUtilityClasses=e=>{let{classes:t,component:r,focusVisible:n,underline:o}=e,i={root:["root",`underline${(0,l.Z)(o)}`,"button"===r&&"button",n&&"focusVisible"]};return(0,s.Z)(i,getLinkUtilityClass,t)},C=(0,u.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`underline${(0,l.Z)(r.underline)}`],"button"===r.component&&t.button]}})(({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:Link_getTextDecoration({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${y.focusVisible}`]:{outline:"auto"}})),w=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiLink"}),{className:s,color:l="primary",component:u="a",onBlur:h,onFocus:m,TypographyClasses:g,underline:y="always",variant:f="inherit",sx:Z}=r,w=(0,n.Z)(r,b),{isFocusVisibleRef:k,onBlur:j,onFocus:B,ref:D}=(0,d.Z)(),[M,L]=i.useState(!1),N=(0,p.Z)(t,D),P=(0,o.Z)({},r,{color:l,component:u,focusVisible:M,underline:y,variant:f}),S=useUtilityClasses(P);return(0,x.jsx)(C,(0,o.Z)({color:l,className:(0,a.Z)(S.root,s),classes:g,component:u,onBlur:e=>{j(e),!1===k.current&&L(!1),h&&h(e)},onFocus:e=>{B(e),!0===k.current&&L(!0),m&&m(e)},ref:N,ownerState:P,variant:f,sx:[...Object.keys(v).includes(l)?[]:[{color:l}],...Array.isArray(Z)?Z:[Z]]},w))});var k=w},3226:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(791),o=r(3428),i=r(2265),a=r(7042),s=r(3381),l=r(5600),u=r(5843),c=r(7927),d=r(8702),p=r(6520),h=r(5702);function getTypographyUtilityClass(e){return(0,h.Z)("MuiTypography",e)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(7437);let g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],useUtilityClasses=e=>{let{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:i,classes:a}=e,s={root:["root",i,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,l.Z)(s,getTypographyUtilityClass,a)},y=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,d.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,o.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},transformDeprecatedColors=e=>Z[e]||e,v=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiTypography"}),i=transformDeprecatedColors(r.color),l=(0,s.Z)((0,o.Z)({},r,{color:i})),{align:u="inherit",className:d,component:p,gutterBottom:h=!1,noWrap:Z=!1,paragraph:v=!1,variant:x="body1",variantMapping:b=f}=l,C=(0,n.Z)(l,g),w=(0,o.Z)({},l,{align:u,color:i,className:d,component:p,gutterBottom:h,noWrap:Z,paragraph:v,variant:x,variantMapping:b}),k=p||(v?"p":b[x]||f[x])||"span",j=useUtilityClasses(w);return(0,m.jsx)(y,(0,o.Z)({as:k,ref:t,ownerState:w,className:(0,a.Z)(j.root,d)},C))});var x=v},8415:function(e,t,r){Promise.resolve().then(r.bind(r,6125))},6125:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return About}});var n=r(7437),o=r(6691),i=r.n(o),a=r(9245),s=r(8874),l=r(3226),u=r(9050),c=r(5210);function About(){return(0,n.jsx)(a.Z,{sx:{flexGrow:1,p:12,height:"100vh"},children:(0,n.jsxs)(s.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,n.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,n.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"},children:(0,n.jsx)(i(),{src:"/college-student-packed.jpg",alt:"Image of students packing",layout:"responsive",width:750,height:750})})}),(0,n.jsxs)(s.ZP,{item:!0,xs:12,md:6,children:[(0,n.jsx)(l.Z,{variant:"h5",component:"div",color:"secondary.main",gutterBottom:!0,children:(0,n.jsx)("strong",{children:"BUY \xb7 SELL"})}),(0,n.jsx)(l.Z,{variant:"h3",component:"div",sx:{fontWeight:"bold",mb:4},children:"The easiest way to buy and sell undesired items and products"}),(0,n.jsx)(l.Z,{variant:"subtitle1",component:"div",sx:{mb:4},children:"SLOMarket: A digital marketplace by Cal Poly students, for Cal Poly students, where your old stuff finds new homes and your next treasure is just a click away."}),(0,n.jsx)(u.Z,{href:"create-listing",variant:"contained",sx:{mb:2},children:"Get Started"}),(0,n.jsxs)(l.Z,{variant:"body2",component:"div",children:["Already a member?"," ",(0,n.jsx)(c.Z,{href:"/signin",underline:"hover",children:"Sign in"})]})]})]})})}}},function(e){e.O(0,[87,691,971,472,744],function(){return e(e.s=8415)}),_N_E=e.O()}]);