(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{9245:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var a=r(3428),n=r(791),i=r(2265),o=r(7042),s=r(9613),l=r(7947),u=r(3381),d=r(5270),c=r(7437);let m=["className","component"];var p=r(5097),f=r(2310),h=r(3469),g=r(6520);let v=(0,g.Z)("MuiBox",["root"]),x=(0,f.Z)(),w=function(e={}){let{themeId:t,defaultTheme:r,defaultClassName:p="MuiBox-root",generateClassName:f}=e,h=(0,s.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z),g=i.forwardRef(function(e,i){let s=(0,d.Z)(r),l=(0,u.Z)(e),{className:g,component:v="div"}=l,x=(0,n.Z)(l,m);return(0,c.jsx)(h,(0,a.Z)({as:v,ref:i,className:(0,o.Z)(g,f?f(p):p),theme:t&&s[t]||s},x))});return g}({themeId:h.Z,defaultTheme:x,defaultClassName:v.root,generateClassName:p.Z.generate});var b=w},1975:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var a,n=r(3428),i=r(791),o=r(2265),s=r(7042),l=r(5600),u=r(3449),d=r(5843),c=r(7927),m=r(1711),p=r(7328),f=r(923),h=r(819),g=r(4081),v=r(4379),x=r(9592),w=r(8702),b=r(6520),Z=r(5702);function getFormHelperTextUtilityClasses(e){return(0,Z.Z)("MuiFormHelperText",e)}let y=(0,b.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var C=r(7437);let j=["children","className","component","disabled","error","filled","focused","margin","required","variant"],useUtilityClasses=e=>{let{classes:t,contained:r,size:a,disabled:n,error:i,filled:o,focused:s,required:u}=e,d={root:["root",n&&"disabled",i&&"error",a&&`size${(0,w.Z)(a)}`,r&&"contained",s&&"focused",o&&"filled",u&&"required"]};return(0,l.Z)(d,getFormHelperTextUtilityClasses,t)},U=(0,d.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.size&&t[`size${(0,w.Z)(r.size)}`],r.contained&&t.contained,r.filled&&t.filled]}})(({theme:e,ownerState:t})=>(0,n.Z)({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${y.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${y.error}`]:{color:(e.vars||e).palette.error.main}},"small"===t.size&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})),F=o.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiFormHelperText"}),{children:o,className:l,component:u="p"}=r,d=(0,i.Z)(r,j),m=(0,x.Z)(),p=(0,v.Z)({props:r,muiFormControl:m,states:["variant","size","disabled","error","filled","focused","required"]}),f=(0,n.Z)({},r,{component:u,contained:"filled"===p.variant||"outlined"===p.variant,variant:p.variant,size:p.size,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),h=useUtilityClasses(f);return(0,C.jsx)(U,(0,n.Z)({as:u,ownerState:f,className:(0,s.Z)(h.root,l),ref:t},d,{children:" "===o?a||(a=(0,C.jsx)("span",{className:"notranslate",children:"​"})):o}))});var I=r(654);function getTextFieldUtilityClass(e){return(0,Z.Z)("MuiTextField",e)}(0,b.Z)("MuiTextField",["root"]);let T=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],P={standard:m.Z,filled:p.Z,outlined:f.Z},TextField_useUtilityClasses=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},getTextFieldUtilityClass,t)},R=(0,d.ZP)(g.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),S=o.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiTextField"}),{autoComplete:a,autoFocus:o=!1,children:l,className:d,color:m="primary",defaultValue:p,disabled:f=!1,error:g=!1,FormHelperTextProps:v,fullWidth:x=!1,helperText:w,id:b,InputLabelProps:Z,inputProps:y,InputProps:j,inputRef:U,label:S,maxRows:k,minRows:A,multiline:N=!1,name:E,onBlur:M,onChange:z,onFocus:q,placeholder:J,required:O=!1,rows:H,select:_=!1,SelectProps:B,type:$,value:L,variant:V="outlined"}=r,W=(0,i.Z)(r,T),Q=(0,n.Z)({},r,{autoFocus:o,color:m,disabled:f,error:g,fullWidth:x,multiline:N,required:O,select:_,variant:V}),D=TextField_useUtilityClasses(Q),K={};"outlined"===V&&(Z&&void 0!==Z.shrink&&(K.notched=Z.shrink),K.label=S),_&&(B&&B.native||(K.id=void 0),K["aria-describedby"]=void 0);let G=(0,u.Z)(b),X=w&&G?`${G}-helper-text`:void 0,Y=S&&G?`${G}-label`:void 0,ee=P[V],et=(0,C.jsx)(ee,(0,n.Z)({"aria-describedby":X,autoComplete:a,autoFocus:o,defaultValue:p,fullWidth:x,multiline:N,name:E,rows:H,maxRows:k,minRows:A,type:$,value:L,id:G,inputRef:U,onBlur:M,onChange:z,onFocus:q,placeholder:J,inputProps:y},K,j));return(0,C.jsxs)(R,(0,n.Z)({className:(0,s.Z)(D.root,d),disabled:f,error:g,fullWidth:x,ref:t,required:O,color:m,variant:V,ownerState:Q},W,{children:[null!=S&&""!==S&&(0,C.jsx)(h.Z,(0,n.Z)({htmlFor:G,id:Y},Z,{children:S})),_?(0,C.jsx)(I.Z,(0,n.Z)({"aria-describedby":X,id:G,labelId:Y,value:L,input:et},B,{children:l})):et,w&&(0,C.jsx)(F,(0,n.Z)({id:X},v,{children:w}))]}))});var k=S},3188:function(e,t){"use strict";t.Z="/_next/static/fonts/logo.svg"},2866:function(e,t,r){Promise.resolve().then(r.bind(r,5992))},148:function(e,t,r){"use strict";r.d(t,{I8:function(){return l},db:function(){return u},tO:function(){return d}});var a=r(994);r(5073);var n=r(4086),i=r(9584),o=r(8153);let s=(0,a.ZF)({apiKey:"AIzaSyBjEHdFQZFsfN-RGa59n16XO7qQ4dhFsAo",authDomain:"slomarket-ebbd9.firebaseapp.com",projectId:"slomarket-ebbd9",storageBucket:"slomarket-ebbd9.appspot.com",messagingSenderId:"247606192779",appId:"1:247606192779:web:421bdc33c388c5c8e828e",measurementId:"G-E3DPKJ6L5V"}),l=(0,o.v0)(s),u=(0,n.ad)(s),d=(0,i.cF)(s)},5959:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return AuthProvider},useAuth:function(){return useAuth}});var a=r(7437),n=r(2265),i=r(148),o=r(8153);let s=(0,n.createContext)();function useAuth(){return(0,n.useContext)(s)}function AuthProvider(e){let{children:t}=e,[r,l]=(0,n.useState)(),[u,d]=(0,n.useState)(!0);async function isAdmin(){return await i.I8.currentUser.getIdTokenResult().then(e=>!!e.claims.admin).catch(e=>{throw e})}return(0,n.useEffect)(()=>{let e=i.I8.onAuthStateChanged(e=>{l(e),d(!1)},e=>{console.error("Authentication error:",e),d(!1)});return e},[]),(0,a.jsx)(s.Provider,{value:{currentUser:r,getUser:function(){return i.I8.currentUser},isLoggedIn:function(){return null!==i.I8.currentUser},isAdmin,login:function(e,t){return i.I8.signInWithEmailAndPassword(e,t)},signOut:function(){return i.I8.signOut()},signUp:function(e,t){return(0,o.Xb)(i.I8,e,t)}},children:!u&&t})}},5992:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Signup}});var a=r(7437),n=r(2265),i=r(8874),o=r(6055),s=r(9245),l=r(3226),u=r(7070),d=r(1975),c=r(9050),m=r(4033),p=r(5959),f=r(4145),h=r(8153),g=r(3188);function Signup(){var e,t,r;let[v,x]=(0,n.useState)({email:"",password:"",passwordConfirmation:""}),[w,b]=(0,n.useState)(),Z=(0,m.useRouter)(),{signUp:y}=(0,p.useAuth)();async function handleSignup(e){e.preventDefault();let t=e.currentTarget.reportValidity(),r=new FormData(e.currentTarget),a=r.get("email"),n=r.get("password"),i=r.get("passwordConfirmation");return n!=i?(b(),x({...v,passwordConfirmation:{error:!0,message:"Your passwords don't match."}})):!t||n.length<6?(b("Passwords must be at least 6 characters long"),x({...v,passwordConfirmation:{error:!1,message:""}})):await y(a,n).then(async e=>{let t=e.user;await (0,f.r4)(t.uid,t.email).then(async()=>{"calpoly.edu"==t.email.split("@").pop()&&await (0,h.w$)(t).catch(e=>{console.error(e),b(e.message)}),Z.push("/setup")}).catch(e=>{console.error(e),b(e.message)})}).catch(e=>{console.log(e),b(e.message)}),!1}function handleChange(e){let{field:t,value:r}=e;x({...v,[t]:r})}return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,a.jsx)(i.ZP,{item:!0,xs:12,sm:8,md:5,component:o.Z,elevation:6,square:!0,children:(0,a.jsxs)(s.Z,{sx:{width:.5,margin:"auto",textAlign:"center",height:"100vh"},children:[(0,a.jsx)("img",{src:g.Z,alt:"Logo",style:{width:"300px"}}),(0,a.jsx)(l.Z,{variant:"h5",pb:6,children:(0,a.jsx)("strong",{children:"Sign Up for an account."})}),(0,a.jsx)(u.Z,{severity:"info",children:"Use your calpoly.edu email to get a verified account!"}),(0,a.jsxs)("form",{onSubmit:handleSignup,children:[w&&(0,a.jsx)(u.Z,{severity:"error",children:w}),(0,a.jsx)(d.Z,{autoFocus:!0,margin:"dense",id:"email",label:"Email Address",type:"email",name:"email",fullWidth:!0,value:v.email,onChange:e=>handleChange({field:"email",value:e.target.value}),error:null===(e=v.email)||void 0===e?void 0:e.error}),(0,a.jsx)("br",{}),(0,a.jsx)(d.Z,{margin:"dense",id:"password",label:"Password",type:"password",name:"password",fullWidth:!0,value:v.password,onChange:e=>handleChange({field:"password",value:e.target.value})}),(0,a.jsx)("br",{}),(0,a.jsx)(d.Z,{margin:"dense",id:"passwordConfirmation",label:"Password Confirmation",type:"password",name:"passwordConfirmation",fullWidth:!0,value:v.passwordConfirmation,onChange:e=>handleChange({field:"passwordConfirmation",value:e.target.value}),error:null===(t=v.passwordConfirmation)||void 0===t?void 0:t.error,helperText:null===(r=v.passwordConfirmation)||void 0===r?void 0:r.message}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(c.Z,{type:"submit",variant:"contained",color:"primary",style:{marginTop:"20px"},children:"Sign Up"})]})]})}),(0,a.jsx)(i.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random?wallpapers)",backgroundRepeat:"no-repeat",backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"}})]})})}},4145:function(e,t,r){"use strict";r.d(t,{Ix:function(){return uploadImage},Nq:function(){return updateUser},PR:function(){return getUser},r4:function(){return createUser}});var a=r(148),n=r(4086),i=r(9584);async function uploadImage(e,t){if(t.size>5e6)throw Error("Image cannot be more than 5 MB large");if(!/\.(jpeg|jpg|png)$/i.test(t.name))throw Error("Image has an invalid extension. Allowed: jpg, png");let r="".concat(Math.floor(1e8+9e8*Math.random()),".").concat(t.name.split(".").pop()),n="images/".concat(e,"/").concat(r),o=(0,i.iH)(a.tO,n);try{await (0,i.KV)(o,t);let e=await (0,i.Jt)(o);return e}catch(e){throw console.error("Error uploading image:",e),e}}async function createUser(e,t){let r=(0,n.JU)(a.db,"users",e),i=(0,n.JU)(a.db,"users",e,"private","contact"),o=(0,n.JU)(a.db,"users",e,"private","favorites");await (0,n.pl)(r,{isAdmin:!1,isStudent:!1,isVerified:!1,name:"",profileImage:"",heroImage:"",contactInfoVisibility:!1}).catch(e=>{throw e}),await (0,n.pl)(i,{email:t,phoneNumber:"",location:""}).catch(e=>{throw e}),await (0,n.pl)(o,{favoriteListings:[],favoriteUsers:[]}).catch(e=>{throw e})}async function getUser(e){let t=(0,n.JU)(a.db,"users",e),r=(0,n.JU)(a.db,"users",e,"private","contact"),i=(0,n.JU)(a.db,"users",e,"private","favorites"),o=null,s=null,l=null;return(await (0,n.QT)(t).then(e=>{e.exists()&&(o=e.data())}).catch(e=>{throw e}),o)?(await (0,n.QT)(r).then(e=>{e.exists()&&(s=e.data())}).catch(()=>{}),await (0,n.QT)(i).then(e=>{e.exists()&&(l=e.data())}).catch(()=>{}),{...o,...s,...l}):null}async function updateUser(e,t){let{email:r,isVerified:i,isAdmin:o,name:s,phoneNumber:l,location:u,profileImage:d,heroImage:c,isStudent:m,contactInfoVisibility:p,favoriteListings:f,favoriteUsers:h}=t,g={isAdmin:o,isStudent:m,isVerified:i,name:s,profileImage:d,heroImage:c,contactInfoVisibility:p},v={email:r,phoneNumber:l,location:u},x={favoriteListings:f,favoriteUsers:h};Object.keys(g).forEach(e=>void 0===g[e]&&delete g[e]),Object.keys(v).forEach(e=>void 0===v[e]&&delete v[e]),Object.keys(x).forEach(e=>void 0===x[e]&&delete x[e]);let w=(0,n.JU)(a.db,"users",e),b=(0,n.JU)(a.db,"users",e,"private","contact"),Z=(0,n.JU)(a.db,"users",e,"private","favorites");g&&await (0,n.r7)(w,g),v&&await (0,n.r7)(b,v),x&&await (0,n.r7)(Z,x)}}},function(e){e.O(0,[358,220,87,880,980,599,214,739,971,472,744],function(){return e(e.s=2866)}),_N_E=e.O()}]);