"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[599],{2592:function(e,t,n){var r=n(2265);let l=r.createContext(void 0);t.Z=l},4379:function(e,t,n){n.d(t,{Z:function(){return formControlState}});function formControlState({props:e,states:t,muiFormControl:n}){return t.reduce((t,r)=>(t[r]=e[r],n&&void 0===e[r]&&(t[r]=n[r]),t),{})}},9592:function(e,t,n){n.d(t,{Z:function(){return useFormControl}});var r=n(2265),l=n(2592);function useFormControl(){return r.useContext(l.Z)}},4281:function(e,t,n){n.d(t,{Z:function(){return material_GlobalStyles_GlobalStyles}});var r=n(3428);n(2265);var l=n(9538),o=n(7437);function GlobalStyles(e){let{styles:t,defaultTheme:n={}}=e,r="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?n:e):t;return(0,o.jsx)(l.xB,{styles:r})}var i=n(5270),esm_GlobalStyles_GlobalStyles=function({styles:e,themeId:t,defaultTheme:n={}}){let r=(0,i.Z)(n),l="function"==typeof e?e(t&&r[t]||r):e;return(0,o.jsx)(GlobalStyles,{styles:l})},a=n(3794),u=n(3469),material_GlobalStyles_GlobalStyles=function(e){return(0,o.jsx)(esm_GlobalStyles_GlobalStyles,(0,r.Z)({},e,{defaultTheme:a.Z,themeId:u.Z}))}},8599:function(e,t,n){n.d(t,{rA:function(){return O},Ej:function(){return F},ZP:function(){return j},_o:function(){return inputOverridesResolver},Gx:function(){return rootOverridesResolver}});var r=n(791),l=n(3428),o=n(8948),i=n(2265),a=n(7042),u=n(5600),s=n(4887),d=n(5137),c=n(8221),p=n(1091),f=n(8078),m=n(7437);let h=["onChange","maxRows","minRows","style","value"];function getStyleValue(e){return parseInt(e,10)||0}let y={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function isEmpty(e){return null==e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}let b=i.forwardRef(function(e,t){let{onChange:n,maxRows:o,minRows:a=1,style:u,value:b}=e,v=(0,r.Z)(e,h),{current:S}=i.useRef(null!=b),g=i.useRef(null),Z=(0,d.Z)(t,g),x=i.useRef(null),w=i.useRef(0),[C,R]=i.useState({outerHeightStyle:0}),z=i.useCallback(()=>{let t=g.current,n=(0,c.Z)(t),r=n.getComputedStyle(t);if("0px"===r.width)return{outerHeightStyle:0};let l=x.current;l.style.width=r.width,l.value=t.value||e.placeholder||"x","\n"===l.value.slice(-1)&&(l.value+=" ");let i=r.boxSizing,u=getStyleValue(r.paddingBottom)+getStyleValue(r.paddingTop),s=getStyleValue(r.borderBottomWidth)+getStyleValue(r.borderTopWidth),d=l.scrollHeight;l.value="x";let p=l.scrollHeight,f=d;a&&(f=Math.max(Number(a)*p,f)),o&&(f=Math.min(Number(o)*p,f)),f=Math.max(f,p);let m=f+("border-box"===i?u+s:0),h=1>=Math.abs(f-d);return{outerHeightStyle:m,overflow:h}},[o,a,e.placeholder]),updateState=(e,t)=>{let{outerHeightStyle:n,overflow:r}=t;return w.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==r)?(w.current+=1,{overflow:r,outerHeightStyle:n}):e},k=i.useCallback(()=>{let e=z();isEmpty(e)||R(t=>updateState(t,e))},[z]);return(0,p.Z)(()=>{let e,t;let syncHeightWithFlushSync=()=>{let e=z();isEmpty(e)||s.flushSync(()=>{R(t=>updateState(t,e))})},handleResize=()=>{w.current=0,syncHeightWithFlushSync()},n=(0,f.Z)(handleResize),r=g.current,l=(0,c.Z)(r);return l.addEventListener("resize",n),"undefined"!=typeof ResizeObserver&&(t=new ResizeObserver(handleResize)).observe(r),()=>{n.clear(),cancelAnimationFrame(e),l.removeEventListener("resize",n),t&&t.disconnect()}},[z]),(0,p.Z)(()=>{k()}),i.useEffect(()=>{w.current=0},[b]),(0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)("textarea",(0,l.Z)({value:b,onChange:e=>{w.current=0,S||k(),n&&n(e)},ref:Z,rows:a,style:(0,l.Z)({height:C.outerHeightStyle,overflow:C.overflow?"hidden":void 0},u)},v)),(0,m.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:x,tabIndex:-1,style:(0,l.Z)({},y.shadow,u,{paddingTop:0,paddingBottom:0})})]})});var v=n(3655),S=n(4379),g=n(2592),Z=n(9592),x=n(5843),w=n(7927),C=n(8702),R=n(7663),z=n(7613),k=n(4281),A=n(5454),B=n(7044);let E=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],rootOverridesResolver=(e,t)=>{let{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,"small"===n.size&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${(0,C.Z)(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},inputOverridesResolver=(e,t)=>{let{ownerState:n}=e;return[t.input,"small"===n.size&&t.inputSizeSmall,n.multiline&&t.inputMultiline,"search"===n.type&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},useUtilityClasses=e=>{let{classes:t,color:n,disabled:r,error:l,endAdornment:o,focused:i,formControl:a,fullWidth:s,hiddenLabel:d,multiline:c,readOnly:p,size:f,startAdornment:m,type:h}=e,y={root:["root",`color${(0,C.Z)(n)}`,r&&"disabled",l&&"error",s&&"fullWidth",i&&"focused",a&&"formControl",f&&"medium"!==f&&`size${(0,C.Z)(f)}`,c&&"multiline",m&&"adornedStart",o&&"adornedEnd",d&&"hiddenLabel",p&&"readOnly"],input:["input",r&&"disabled","search"===h&&"inputTypeSearch",c&&"inputMultiline","small"===f&&"inputSizeSmall",d&&"inputHiddenLabel",m&&"inputAdornedStart",o&&"inputAdornedEnd",p&&"readOnly"]};return(0,u.Z)(y,B.u,t)},F=(0,x.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:rootOverridesResolver})(({theme:e,ownerState:t})=>(0,l.Z)({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${B.Z.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&(0,l.Z)({padding:"4px 0 5px"},"small"===t.size&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),O=(0,x.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:inputOverridesResolver})(({theme:e,ownerState:t})=>{let n="light"===e.palette.mode,r=(0,l.Z)({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),o={opacity:"0 !important"},i=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return(0,l.Z)({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${B.Z.formControl} &`]:{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${B.Z.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},"small"===t.size&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===t.type&&{MozAppearance:"textfield"})}),I=(0,m.jsx)(k.Z,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),M=i.forwardRef(function(e,t){var n;let u=(0,w.Z)({props:e,name:"MuiInputBase"}),{"aria-describedby":s,autoComplete:d,autoFocus:c,className:p,components:f={},componentsProps:h={},defaultValue:y,disabled:x,disableInjectingGlobalStyles:C,endAdornment:k,fullWidth:B=!1,id:M,inputComponent:j="input",inputProps:H={},inputRef:N,maxRows:W,minRows:L,multiline:T=!1,name:_,onBlur:G,onChange:V,onClick:P,onFocus:U,onKeyDown:$,onKeyUp:D,placeholder:K,readOnly:q,renderSuffix:X,rows:J,slotProps:Q={},slots:Y={},startAdornment:ee,type:et="text",value:en}=u,er=(0,r.Z)(u,E),el=null!=H.value?H.value:en,{current:eo}=i.useRef(null!=el),ei=i.useRef(),ea=i.useCallback(e=>{},[]),eu=(0,R.Z)(ei,N,H.ref,ea),[es,ed]=i.useState(!1),ec=(0,Z.Z)(),ep=(0,S.Z)({props:u,muiFormControl:ec,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ep.focused=ec?ec.focused:es,i.useEffect(()=>{!ec&&x&&es&&(ed(!1),G&&G())},[ec,x,es,G]);let ef=ec&&ec.onFilled,em=ec&&ec.onEmpty,eh=i.useCallback(e=>{(0,A.vd)(e)?ef&&ef():em&&em()},[ef,em]);(0,z.Z)(()=>{eo&&eh({value:el})},[el,eh,eo]),i.useEffect(()=>{eh(ei.current)},[]);let ey=j,eb=H;T&&"input"===ey&&(eb=J?(0,l.Z)({type:void 0,minRows:J,maxRows:J},eb):(0,l.Z)({type:void 0,maxRows:W,minRows:L},eb),ey=b),i.useEffect(()=>{ec&&ec.setAdornedStart(!!ee)},[ec,ee]);let ev=(0,l.Z)({},u,{color:ep.color||"primary",disabled:ep.disabled,endAdornment:k,error:ep.error,focused:ep.focused,formControl:ec,fullWidth:B,hiddenLabel:ep.hiddenLabel,multiline:T,size:ep.size,startAdornment:ee,type:et}),eS=useUtilityClasses(ev),eg=Y.root||f.Root||F,eZ=Q.root||h.root||{},ex=Y.input||f.Input||O;return eb=(0,l.Z)({},eb,null!=(n=Q.input)?n:h.input),(0,m.jsxs)(i.Fragment,{children:[!C&&I,(0,m.jsxs)(eg,(0,l.Z)({},eZ,!(0,v.X)(eg)&&{ownerState:(0,l.Z)({},ev,eZ.ownerState)},{ref:t,onClick:e=>{ei.current&&e.currentTarget===e.target&&ei.current.focus(),P&&P(e)}},er,{className:(0,a.Z)(eS.root,eZ.className,p,q&&"MuiInputBase-readOnly"),children:[ee,(0,m.jsx)(g.Z.Provider,{value:null,children:(0,m.jsx)(ex,(0,l.Z)({ownerState:ev,"aria-invalid":ep.error,"aria-describedby":s,autoComplete:d,autoFocus:c,defaultValue:y,disabled:ep.disabled,id:M,onAnimationStart:e=>{eh("mui-auto-fill-cancel"===e.animationName?ei.current:{value:"x"})},name:_,placeholder:K,readOnly:q,required:ep.required,rows:J,value:el,onKeyDown:$,onKeyUp:D,type:et},eb,!(0,v.X)(ex)&&{as:ey,ownerState:(0,l.Z)({},ev,eb.ownerState)},{ref:eu,className:(0,a.Z)(eS.input,eb.className,q&&"MuiInputBase-readOnly"),onBlur:e=>{G&&G(e),H.onBlur&&H.onBlur(e),ec&&ec.onBlur?ec.onBlur(e):ed(!1)},onChange:(e,...t)=>{if(!eo){let t=e.target||ei.current;if(null==t)throw Error((0,o.Z)(1));eh({value:t.value})}H.onChange&&H.onChange(e,...t),V&&V(e,...t)},onFocus:e=>{if(ep.disabled){e.stopPropagation();return}U&&U(e),H.onFocus&&H.onFocus(e),ec&&ec.onFocus?ec.onFocus(e):ed(!0)}}))}),k,X?X((0,l.Z)({},ep,{startAdornment:ee})):null]}))]})});var j=M},7044:function(e,t,n){n.d(t,{u:function(){return getInputBaseUtilityClass}});var r=n(6520),l=n(5702);function getInputBaseUtilityClass(e){return(0,l.Z)("MuiInputBase",e)}let o=(0,r.Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);t.Z=o},5454:function(e,t,n){function hasValue(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function isFilled(e,t=!1){return e&&(hasValue(e.value)&&""!==e.value||t&&hasValue(e.defaultValue)&&""!==e.defaultValue)}function isAdornedStart(e){return e.startAdornment}n.d(t,{B7:function(){return isAdornedStart},vd:function(){return isFilled}})}}]);