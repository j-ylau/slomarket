(()=>{var e={};e.id=9108,e.ids=[9108],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},50852:e=>{"use strict";e.exports=require("async_hooks")},14300:e=>{"use strict";e.exports=require("buffer")},96206:e=>{"use strict";e.exports=require("console")},6113:e=>{"use strict";e.exports=require("crypto")},67643:e=>{"use strict";e.exports=require("diagnostics_channel")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},41808:e=>{"use strict";e.exports=require("net")},15673:e=>{"use strict";e.exports=require("node:events")},84492:e=>{"use strict";e.exports=require("node:stream")},47261:e=>{"use strict";e.exports=require("node:util")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},77282:e=>{"use strict";e.exports=require("process")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},35356:e=>{"use strict";e.exports=require("stream/web")},71576:e=>{"use strict";e.exports=require("string_decoder")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},29830:e=>{"use strict";e.exports=require("util/types")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},93164:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>g,tree:()=>c});var s=r(67096),i=r(16132),n=r(37284),o=r.n(n),a=r(32564),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["create-listing",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,18967)),"/Users/jlau/Code-2023/cpmarketplace/src/app/create-listing/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,96109)),"/Users/jlau/Code-2023/cpmarketplace/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/jlau/Code-2023/cpmarketplace/src/app/create-listing/page.js"],d="/create-listing/page",p={require:r,loadChunk:()=>Promise.resolve()},g=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/create-listing/page",pathname:"/create-listing",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},66747:(e,t,r)=>{Promise.resolve().then(r.bind(r,45111))},45111:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>CreateListing});var s=r(30784),i=r(9885),n=r(52694),o=r.n(n),a=r(48060),l=r.n(a),c=r(33987),u=r.n(c),d=r(16614),p=r.n(d),g=r(21971),x=r.n(g),m=r(92870),h=r.n(m),f=r(45003),j=r.n(f),b=r(62969),v=r.n(b),y=r(42153),q=r.n(y),C=r(16856),_=r.n(C),k=r(95915),w=r.n(k),S=r(64832),P=r.n(S),I=r(81932),L=r.n(I),U=r(64622),A=r(61522),T=r(76151),F=r(18282),D=r(96106),E=r(99280),G=r(94038),R=r(57114),O=r(52451),$=r.n(O);let B=["Furniture","Electronics","School Supplies","Home Decor","Clothing and Accessories","Appliances","Bicycles and Transportation","Textbooks","Sports and Fitness Equipment","Home Office","Miscellaneous"],M=["Los Angeles","San Diego","San Jose","San Francisco","San Luis Obispo","Pismo Beach","Morro Bay","Arroyo Grande","Atascadero","Paso Robles","Grover Beach","Cambria","Templeton","Nipomo","Cayucos"],ImageUploadSquare=({image:e,onRemove:t})=>s.jsx(o(),{elevation:3,sx:{width:250,height:250,backgroundImage:`url(${e.preview})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative","&:hover":{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)"}},children:s.jsx(l(),{onClick:t,sx:{position:"absolute",top:8,right:8,backgroundColor:"rgba(255, 255, 255, 0.7)",color:"black","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.9)"},zIndex:2},children:s.jsx(E.Z,{})})});function CreateListing(){let e=(0,R.useRouter)(),{getUser:t,isAuthenticated:r}=(0,F.useAuth)(),[n,o]=(0,i.useState)({title:"",description:"",created:"",price:0,location:""}),[a,c]=(0,i.useState)(null),[d,g]=(0,i.useState)([]),[m,f]=(0,i.useState)({open:!1,message:""}),[b,y]=(0,i.useState)(!1),[C,k]=(0,i.useState)([]),[S,I]=(0,i.useState)(!1),[E,O]=(0,i.useState)(null),N=(0,F.useAuth)(),z=null!==N.currentUser,[H,J]=(0,i.useState)(""),[W,V]=(0,i.useState)(!1);(0,i.useEffect)(()=>{if(N.currentUser&&N.currentUser.reloadUserInfo){let e=N.currentUser.reloadUserInfo.customAttributes;if(e)try{let t=JSON.parse(e);V(!0===t.student)}catch(e){console.error("Error parsing customAttributes",e)}}},[N.currentUser]),(0,i.useEffect)(()=>{z||e.push("/login")},[z,e]);let handleChange=e=>{let{name:t,value:r}=e.target;if("price"===t){let e=parseFloat(r);if(isNaN(e)||e<0){f({open:!0,message:"Price must be a positive number."});return}if(!/^\d+(\.\d{0,2})?$/.test(r)){f({open:!0,message:"Price must not exceed two decimal places."});return}0===e&&f({open:!0,message:"The price will be registered as 'free'."}),o({...n,price:e})}else o({...n,[t]:r})},handleSubmit=async()=>{let r=validateForm();if(r){f({open:!0,message:r});return}try{if(!e||!z){console.error("Router is not defined or user is not logged in");return}let r=t();if(!r||!r.uid){console.error("No user found");return}let s=r.uid,i={title:n.title,description:n.description,price:n.price,location:n.location,images:[],createdAt:A.EK.fromDate(new Date),sellerId:s,studentVerification:W,category:H};if(d.length){let e=await (0,D.Ix)(s,d[0].file);i.images.push(e)}let o=await (0,A.ET)((0,A.hJ)(T.db,"listings"),i);f({open:!0,message:"Listing created successfully!"}),O(o.id),I(!0),e.push(`/listing/${o.id}`)}catch(e){console.log(e),f({open:!0,message:e.message})}},validateForm=()=>n.title.trim()?n.description.trim()?null==n.price?"Price is required.":n.price<0?"Price cannot be negative.":/^\d+(\.\d{0,2})?$/.test(n.price.toString())?n.location?0===d.length?"At least one image is required.":"":"Location is required.":"Price must not exceed two decimal places.":"Description is required.":"Title is required.",removeImage=e=>{g(t=>t.filter((t,r)=>r!==e))},Z=(0,i.useCallback)(e=>{g(t=>[...t,...e.map(e=>({file:e,preview:URL.createObjectURL(e)}))])},[]),{getRootProps:K,getInputProps:X}=(0,U.useDropzone)({onDrop:Z,maxFiles:10,accept:{"image/*":[".jpeg",".jpg",".png"]}});return S?(0,s.jsxs)("div",{style:{textAlign:"center",marginTop:"50px"},children:[s.jsx($(),{src:"/../../assets/illustrations/sitting-4.svg",alt:"Listing Created",width:200,height:200}),s.jsx(u(),{variant:"h5",style:{marginTop:"20px"},children:"Listing Created Successfully!"}),s.jsx(p(),{variant:"contained",color:"primary",style:{marginTop:"20px"},onClick:()=>e.push(`/listing/${E}`),children:"View Listing"})]}):s.jsx(x(),{container:!0,justifyContent:"center",alignItems:"center",style:{padding:"40px"},children:s.jsx(x(),{item:!0,xs:12,md:8,lg:6,children:(0,s.jsxs)("form",{style:{display:"flex",flexDirection:"column"},children:[" ",s.jsx("h1",{children:"New Listing"}),N.currentUser&&s.jsx(u(),{variant:"body1",style:{marginBottom:"1rem"},children:W?"Your listing will be displayed with a student verification symbol.":"If you want to add student verification to your listing, please register your account as a student."}),s.jsx(h(),{autoFocus:!0,margin:"dense",id:"title",name:"title",label:"Listing Title",type:"text",variant:"outlined",onChange:handleChange,required:!0}),(0,s.jsxs)(x(),{container:!0,spacing:2,alignItems:"center",children:[s.jsx(x(),{item:!0,xs:4,children:s.jsx(h(),{autoFocus:!0,margin:"dense",id:"price",name:"price",label:"Price",type:"number",fullWidth:!0,variant:"outlined",onChange:handleChange,required:!0})}),s.jsx(x(),{item:!0,xs:4,children:s.jsx(j(),{id:"location",required:!0,options:M,getOptionLabel:e=>e,renderInput:e=>s.jsx(h(),{...e,label:"Choose a city",variant:"outlined",fullWidth:!0}),value:a,onChange:(e,t)=>{c(t),o({...n,location:t})}})}),s.jsx(x(),{item:!0,xs:4,children:s.jsx(j(),{id:"category",options:B,required:!0,getOptionLabel:e=>e,renderInput:e=>s.jsx(h(),{...e,label:"Category",variant:"outlined"}),value:H,onChange:(e,t)=>{J(t)}})})]}),s.jsx(h(),{autoFocus:!0,margin:"dense",id:"description",name:"description",label:"Description",type:"text",fullWidth:!0,variant:"outlined",onChange:handleChange,multiline:!0,rows:5,required:!0}),s.jsx("h3",{children:"Upload Images"}),(0,s.jsxs)(x(),{container:!0,spacing:2,alignItems:"center",children:[d.map((e,t)=>s.jsx(x(),{item:!0,children:s.jsx(ImageUploadSquare,{image:e,onRemove:()=>removeImage(t)})},t)),d.length<10&&s.jsx(x(),{item:!0,children:s.jsx(l(),{onClick:()=>{y(!0)},sx:{width:250,height:250,border:"1px dashed grey",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.04)"}},children:s.jsx(G.Z,{fontSize:"large"})})})]}),(0,s.jsxs)(v(),{open:b,onClose:()=>y(!1),children:[s.jsx(q(),{id:"responsive-dialog-title",children:"Upload Listing Image"}),s.jsx(_(),{children:(0,s.jsxs)("div",{...K(),style:{border:"1px dashed gray",padding:"6rem",cursor:"pointer"},children:[s.jsx("input",{...X()})," ",s.jsx(u(),{variant:"body1",children:"Drag & drop an image here, or click to select one"})]})}),s.jsx(w(),{children:s.jsx(p(),{autoFocus:!0,onClick:()=>{y(!1)},color:"primary",children:"Cancel"})})]}),(0,s.jsxs)("div",{align:"left",children:[s.jsx(p(),{sx:{marginTop:"3rem",backgroundColor:"grey"},variant:"contained",onClick:()=>{e.push("/")},children:"Cancel"}),s.jsx(p(),{sx:{marginTop:"3rem",marginLeft:"3rem",backgroundColor:"4FB18C"},onClick:handleSubmit,variant:"contained",children:"Create Listing"})]}),s.jsx(P(),{open:m.open,autoHideDuration:6e3,onClose:()=>f({...m,open:!1}),children:s.jsx(L(),{onClose:()=>f({...m,open:!1}),severity:"error",sx:{width:"100%"},children:m.message})})]})})})}},18967:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>l});var s=r(95153);let i=(0,s.createProxy)(String.raw`/Users/jlau/Code-2023/cpmarketplace/src/app/create-listing/page.js`),{__esModule:n,$$typeof:o}=i,a=i.default,l=a}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[657,6120,8153,1323,4359,3234,2870,2133,5915,7791,2451,5699,402,2291],()=>__webpack_exec__(93164));module.exports=r})();