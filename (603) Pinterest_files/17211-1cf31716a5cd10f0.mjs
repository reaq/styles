(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[17211,4394],{537347:e=>{!function(){function t(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function o(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function n(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function s(e){var t=e.a.offsetWidth,o=t+100;return e.f.style.width=o+"px",e.c.scrollLeft=o,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function i(e,o){function n(){var e=i;s(e)&&e.a.parentNode&&o(e.g)}var i=e;t(e.b,n),t(e.c,n),s(e)}function l(e,t){var o=t||{};this.family=e,this.style=o.style||"normal",this.weight=o.weight||"normal",this.stretch=o.stretch||"normal"}var r=null,a=null,d=null,c=null;function u(){return null===c&&(c=!!document.fonts),c}function h(){if(null===d){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(t){}d=""!==e.style.font}return d}function p(e,t){return[e.style,e.weight,h()?e.stretch:"","100px",t].join(" ")}l.prototype.load=function(e,t){var s=this,l=e||"BESbswy",d=0,c=t||3e3,h=(new Date).getTime();return new Promise((function(e,t){if(u()&&!function(){if(null===a)if(u()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);a=!!e&&603>parseInt(e[1],10)}else a=!1;return a}()){var _=new Promise((function(e,t){!function o(){(new Date).getTime()-h>=c?t(Error(c+"ms timeout exceeded")):document.fonts.load(p(s,'"'+s.family+'"'),l).then((function(t){1<=t.length?e():setTimeout(o,25)}),t)}()})),m=new Promise((function(e,t){d=setTimeout((function(){t(Error(c+"ms timeout exceeded"))}),c)}));Promise.race([m,_]).then((function(){clearTimeout(d),e(s)}),t)}else!function(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",(function t(){document.removeEventListener("DOMContentLoaded",t),e()})):document.attachEvent("onreadystatechange",(function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())}))}((function(){function a(){var t;(t=-1!=f&&-1!=x||-1!=f&&-1!=g||-1!=x&&-1!=g)&&((t=f!=x&&f!=g&&x!=g)||(null===r&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),r=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=r&&(f==y&&x==y&&g==y||f==w&&x==w&&g==w||f==v&&x==v&&g==v)),t=!t),t&&(b.parentNode&&b.parentNode.removeChild(b),clearTimeout(d),e(s))}var u=new o(l),_=new o(l),m=new o(l),f=-1,x=-1,g=-1,y=-1,w=-1,v=-1,b=document.createElement("div");b.dir="ltr",n(u,p(s,"sans-serif")),n(_,p(s,"serif")),n(m,p(s,"monospace")),b.appendChild(u.a),b.appendChild(_.a),b.appendChild(m.a),document.body.appendChild(b),y=u.a.offsetWidth,w=_.a.offsetWidth,v=m.a.offsetWidth,function e(){if((new Date).getTime()-h>=c)b.parentNode&&b.parentNode.removeChild(b),t(Error(c+"ms timeout exceeded"));else{var o=document.hidden;!0!==o&&void 0!==o||(f=u.a.offsetWidth,x=_.a.offsetWidth,g=m.a.offsetWidth,a()),d=setTimeout(e,50)}}(),i(u,(function(e){f=e,a()})),n(u,p(s,'"'+s.family+'",sans-serif')),i(_,(function(e){x=e,a()})),n(_,p(s,'"'+s.family+'",serif')),i(m,(function(e){g=e,a()})),n(m,p(s,'"'+s.family+'",monospace'))}))}))},e.exports=l}()},372169:(e,t,o)=>{o.d(t,{Je:()=>n,dA:()=>i,iO:()=>l,jh:()=>r,s_:()=>s,wq:()=>a});const n=350,s=134,i=16,l=2,r=236,a=20},28543:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var n=o(567831);var s=o(55259),i=o(966113);function l(e,t,o){if(!s.Z[e])throw new Error(`unknown url key: ${e}`);o||(o={});let l=s.Z[e](o);const r=function(e,t){let o=null;return e&&(o=e.advertiserId||null),!o&&t&&(o=t.id),o}(o,t);return"string"==typeof r&&(l="/advertiser/"+r+l),!!o.absolutify&&(l=(0,n.Z)(l,void 0,i.KU)),l}},21353:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(702664),s=o(28543);function i(){const e=(0,n.useSelector)((({advertiser:e})=>e));return(t,o)=>(0,s.default)(t,e,o)}},642345:(e,t,o)=>{o.d(t,{DW:()=>r,I:()=>l,oo:()=>i,vq:()=>s});const n=e=>{const t=e.toString(16);return 1===t.length?"0"+t:t},s=(e,t,o)=>"#"+n(e)+n(t)+n(o),i=e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t&&[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]},l=.18,r=(e,t,o)=>.2126*(e/255)**2.2+.7151*(t/255)**2.2+.0721*(o/255)**2.2},673270:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(249647),s=o(121093),i=o(911687),l=o(70061),r=o(785893);const a=({placementId:e})=>(0,r.jsx)(s.Z,{placementId:e,predicate:e=>{var t;return 1===(null===(t=e.display_data)||void 0===t?void 0:t.component_type)},children:({complete:e,dismiss:t,experience:{display_data:o}})=>{const s=(0,n.Z)(l.Z)(o);return(0,r.jsx)(i.Z,{displayData:s,onComplete:()=>e(),onDismiss:t})}})},502517:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var n=o(667294),s=o(773285),i=o(898781),l=o(276775),r=o(883119),a=o(785893);function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const c=5e3;class u extends n.Component{constructor(...e){super(...e),d(this,"isOnClose",this.props.onCloseEnabled&&2===this.props.actionTrigger),d(this,"state",{surveyAccepted:!1,surveyLoaded:!1,surveyLoadFailed:!1,showSurveyOnClose:this.isOnClose}),d(this,"loadSurvey",((e=!0)=>{const{onView:t}=this.props;e&&t(),this.setState({surveyLoaded:!0})})),d(this,"processIFrameMessage",(e=>{const{presentationDelay:t=c,onComplete:o,surveyLink:n,onCloseEnabled:s}=this.props,i=e.origin||e.originalEvent.origin;n.startsWith(i)&&("surveyFinished"===e.data?o():"surveyLoaded"===e.data&&(window.clearTimeout(this.loadSurveyFailureTimeout),this.isOnClose&&this.showSurveyOnLeavingPage(),s?this.actionTriggerHandler():this.loadSurveyTimeout=window.setTimeout(this.loadSurvey,t)))})),d(this,"handleShowSurvey",(()=>{this.setState({surveyAccepted:!0})}))}componentDidMount(){window.addEventListener("message",this.processIFrameMessage),this.loadSurveyFailureTimeout=window.setTimeout((()=>{this.state.surveyLoaded||(window.clearTimeout(this.loadSurveyTimeout),this.setState({surveyLoadFailed:!0}))}),15e3)}componentWillUnmount(){window.removeEventListener("message",this.processIFrameMessage),window.clearTimeout(this.loadSurveyTimeout),window.clearTimeout(this.loadSurveyFailureTimeout),this.isOnClose&&this.props.unblock()}actionTriggerHandler(){const{actionTrigger:e,presentationDelay:t=c}=this.props;switch(e){case 1:this.loadSurvey();break;case 2:this.loadSurvey(!1);break;default:this.loadSurveyTimeout=window.setTimeout(this.loadSurvey,t)}}showSurveyOnLeavingPage(){const{onView:e,block:t}=this.props;t((()=>{e(),this.setState({showSurveyOnClose:!1})}))}render(){const{surveyAccepted:e,surveyLoadFailed:t,surveyLoaded:o,showSurveyOnClose:n}=this.state;if(t)return null;const{acceptButtonText:s,bodyText:i,declineButtonText:l,onDismiss:d,subtitleText:c,surveyLink:u,titleText:h}=this.props,p=(0,a.jsx)("iframe",{style:e?{border:0,minHeight:810,paddingBottom:4,width:"100%"}:{display:"none"},src:u,title:this.props.i18n._('Pinterest Survey', 'Accessible label for survey frame', 'Accessible label for survey frame'),"data-test-id":"anket-iframe"});return o&&!n?(0,a.jsx)(r.xu,{position:"absolute",zIndex:new r.Ry(1e3),children:(0,a.jsxs)(r.u_,{accessibilityModalLabel:this.props.i18n._('Have a few minutes to take a survey?', 'User evaluation survey', 'User evaluation survey'),footer:!e&&(0,a.jsxs)(r.xu,{display:"flex",justifyContent:"end",paddingX:1,children:[(0,a.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{padding:"6px 8px"}},children:(0,a.jsx)(r.zx,{fullWidth:!0,text:l,onClick:()=>{this.setState({surveyAccepted:!1}),d()}})}),(0,a.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{padding:"6px 8px"}},children:(0,a.jsx)(r.zx,{fullWidth:!0,color:"red",text:s,onClick:this.handleShowSurvey})})]}),heading:e?"":h,onDismiss:d,role:"alertdialog",size:e?"lg":"md",padding:"none",children:[(0,a.jsx)(r.xu,{children:p}),!e&&(0,a.jsxs)(r.xu,{padding:3,children:[(0,a.jsx)(r.xv,{children:c}),(0,a.jsx)(r.xv,{children:i})]})]})}):p}}const h=function(e){const t=(0,i.ZP)(),{checkExperiment:o}=(0,s.F)(),r=(0,l.useHistory)(),[d,c]=(0,n.useState)(null),h=(0,n.useRef)(null);return(0,a.jsx)(u,{...e,i18n:t,history:(0,l.useHistory)(),onCloseEnabled:o("discovery_measurements_on_close_survey").anyEnabled,unblock:()=>{var e;h&&(null===(e=h.current)||void 0===e||e.call(h));if(d){const{location:e,action:t}=d;"PUSH"===t?r.push(`${e.pathname}${e.search}`):"POP"===t&&r.goBack()}},block:e=>{h.current=r.block(((t,o)=>(c({location:t,action:o}),e(),!1)))}})};var p=o(121093),_=o(149230),m=o(121151);function f(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class x extends n.Component{constructor(...e){super(...e),f(this,"state",{surveyLoaded:!1}),f(this,"loadSurvey",(()=>{var e,t;this.setState({surveyLoaded:!0}),null===(e=(t=this.props).view)||void 0===e||e.call(t)})),f(this,"handleDismiss",(()=>{this.props.dismiss(),this.setState({surveyLoaded:!1})})),f(this,"handleComplete",(()=>{this.props.complete(),this.setState({surveyLoaded:!1})}))}componentDidMount(){const{displayData:{delay:e}}=this.props;this.surveyTimer=window.setTimeout(this.loadSurvey,e)}componentWillUnmount(){clearTimeout(this.surveyTimer)}render(){if(!this.state.surveyLoaded)return null;const{displayData:{buttons:e,detailed_text:t,title_text:o}}=this.props;return(0,a.jsx)(m.ZP,{heading:o,accessibilityModalLabel:this.props.i18n._('Would you mind taking a survey?', 'User eval survey', 'User eval survey'),onDismiss:this.handleDismiss,size:"sm",footer:(0,a.jsx)(r.kC,{alignItems:"stretch",justifyContent:"end",children:e.map((e=>{if(e.uri){const t=e.uri,o=(0,_.Z)({url:t})?"nofollow":"none";return(0,a.jsx)(r.xu,{marginStart:1,children:(0,a.jsx)(r.zx,{role:"link",href:t,target:"blank",rel:o,fullWidth:!0,color:"red",text:e.text,onClick:this.handleComplete})},e.text)}return(0,a.jsx)(r.xu,{marginStart:1,children:(0,a.jsx)(r.zx,{fullWidth:!0,text:e.text,onClick:this.handleDismiss})},e.text)}))}),children:(0,a.jsx)(r.xu,{padding:3,children:(0,a.jsx)(r.xv,{children:t})})})}}function g(e){const t=(0,i.ZP)();return(0,a.jsx)(x,{...e,i18n:t})}const y=e=>{const{complete:t,dismiss:o,view:n,displayData:s}=e,{anket:i,buttons:l,delay:r,detailed_text:d,subtitle_text:c,title_text:u,action_trigger:p=3}=s,[_,m]=l;return i?(0,a.jsx)(h,{acceptButtonText:m.text,bodyText:d,declineButtonText:_.text,onComplete:t,onDismiss:o,onView:n,presentationDelay:r,subtitleText:c,surveyLink:m.uri,titleText:u,actionTrigger:p}):(0,a.jsx)(g,{complete:t,dismiss:o,displayData:s,view:n})},w=e=>{const{experienceId:t,displayData:o}=e,{delay:s=0}=o,i={...o,delay:0},l={...e,displayData:{...i}},r=(0,n.useRef)(),[d,c]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=["/pin-builder","/idea-pin-builder"],t=e=>window.location.pathname.includes(e),o=()=>{e.some(t)?r.current=setTimeout((()=>o()),3e3):c(!0)};return r.current=setTimeout((()=>o()),s),()=>{clearTimeout(r.current)}}),[t,s]),d?(0,a.jsx)(y,{...l}):null};function v(e){const{placementId:t,targeting:o,eligibleIds:n}=e;return(0,a.jsx)(p.Z,{placementId:t,eligibleTypes:[5],disableAutoView:!0,targeting:o,eligibleIds:n||[],children:({complete:e,dismiss:o,view:n,experience:s})=>{const i=s.display_data,l=s.experience_id;return 1000421===t?(0,a.jsx)(w,{experienceId:l,complete:e,dismiss:o,view:n,displayData:i}):(0,a.jsx)(y,{complete:e,dismiss:o,view:n,displayData:i})}})}},911687:(e,t,o)=>{o.d(t,{Z:()=>h});var n=o(164985),s=o(391254),i=o(149230),l=o(898781),r=o(444445),a=o(883119),d=o(785893);const c=(r.yF+r.lX)*r.yc-r.lX,u=Array.from(Array(r.g5-r.yc).keys()).reduce(((e,t)=>{const o=t+r.yc,n=(r.yF+r.lX)*o-r.lX;return e+(0,r.KN)(r.yF,o,o,`.banner-content {\n          width: ${n}px;\n          min-width: ${n}px;\n        }`,r.lX)}),`.banner-content {\n      width: ${c}px;\n      min-width: ${c}px;\n  }`);function h(e){const t=(0,l.ZP)(),{displayData:{backgroundColorNarrow:o,backgroundColorWide:r,backgroundImageNarrow:c,backgroundImageWide:h,canClose:p,completeButtonText:_,coverImage:m,dismissButtonText:f,iconImage:x,layoutNarrow:g,layoutWide:y,links:w=[],linkTitles:v=[],message:b,onCompleteRedirectUrl:C,onDismissRedirectUrl:j,textColorNarrow:P,textColorWide:k,titleText:T,external:A},onComplete:S,onDismiss:I}=e,{windowWidth:z}=(0,n.Z)(),E=z<=480,L=E?g:y,D=!E&&3!==L,F=E?o:r,Z=E?P:k,{altText:U,uri:W}=(E?c:h)||{},{altText:R,uri:M}=m||{},{altText:O,uri:H}=x||{},B=E&&2===L||!E&&2===L,N=E?"96px":"48px",$=E&&3===L,V=({event:e})=>{S&&S(e)},X=({event:e})=>{I&&I(e)},K=_&&!C&&(0,d.jsx)(a.zx,{text:_,onClick:V,color:"white"}),q=(0,i.Z)({url:C})?"nofollow":"none",G=_&&C&&(0,d.jsx)(a.zx,{text:_,onClick:V,href:C,role:"link",rel:q,target:A?"blank":void 0,color:"white",size:"lg"},"naglink"),Q=(0,i.Z)({url:j})?"nofollow":"none",Y=f&&j&&(0,d.jsx)(a.zx,{text:f,onClick:X,href:j,role:"link",rel:Q,target:A?"blank":void 0,color:"white",size:"lg"},"naglink"),J=f&&!j&&(0,d.jsx)(a.zx,{text:f,onClick:X,color:"white",size:"lg"}),ee=p&&(0,d.jsx)(a.hU,{accessibilityLabel:t._('Close', 'accessibility close label', 'accessibility close label'),bgColor:"lightGray",onClick:X,icon:"cancel",iconColor:"gray",size:"md"}),te=w.reduce(((e,t,o)=>{const n=t.startsWith("https://")||t.startsWith("http://")?'rel="noreferrer noopener" target="_blank"':"",s=`<a href="${t}" ${n}>${v[o]}</a>`;return e.replace(`{${o}}`,s)}),b),oe={backgroundColor:F,backgroundImage:!W||B||$?void 0:`url(${W})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"};return(0,d.jsxs)(a.xu,{direction:D?"row":"column",display:"flex",marginBottom:5,marginEnd:2,marginStart:2,marginTop:2,children:[(0,d.jsx)(s.Z,{unsafeCSS:u}),(0,d.jsx)("div",{className:"banner-content",style:{borderRadius:"16px",boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.1)",margin:"0 auto"},children:(0,d.jsxs)(a.zd,{rounding:4,width:"100%",children:[$&&M&&(0,d.jsx)(a.kC,{alignItems:"start",height:128,justifyContent:"center",width:"100%",children:(0,d.jsx)(a.Ee,{alt:R||"cover image",fit:"cover",naturalHeight:1,naturalWidth:3,src:M})}),(0,d.jsxs)(a.xu,{"aria-label":U,alignItems:"center",dangerouslySetInlineStyle:{__style:oe},direction:D?"row":"column",display:"flex",justifyContent:"between",marginTop:$?-2:0,padding:6,children:[(0,d.jsxs)(a.kC,{alignItems:"center",direction:D?"row":"column",justifyContent:"between",maxWidth:D?void 0:"560px",children:[B&&H&&(0,d.jsx)(a.xu,{alignItems:"center",direction:"column",display:"flex",justifyContent:"center",marginEnd:D?4:0,marginBottom:D?0:6,children:(0,d.jsx)(a.xu,{height:N,width:N,children:(0,d.jsx)(a.zd,{rounding:D?4:6,children:(0,d.jsx)(a.Ee,{alt:O||"icon",naturalHeight:1,naturalWidth:1,src:H})})})}),!D&&T&&(0,d.jsx)(a.xv,{align:"center",weight:"bold",children:(0,d.jsx)("div",{className:"banner-title",style:{color:Z,fontSize:"28px",marginBottom:"8px"},children:T})}),te&&(0,d.jsxs)(a.xv,{align:D?"start":"center",overflow:"normal",children:[(0,d.jsx)("style",{dangerouslySetInnerHTML:{__html:`\n                        .banner-text a {\n                          color: ${Z||""};\n                          font-weight: bold;\n                        }`}}),(0,d.jsx)("div",{className:"banner-text",dangerouslySetInnerHTML:{__html:te},style:{color:Z}})]})]}),(0,d.jsx)(a.xu,{marginBottom:D?0:-1,marginStart:D?4:0,marginTop:D?0:4,children:(0,d.jsxs)(a.kC,{alignItems:"center",justifyContent:"center",wrap:!D,gap:{row:2,column:0},children:[J||Y,K||G,ee]})})]})]})})]})}},298361:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(898781),s=o(349700),i=o(202139);function l(){const e=(0,n.ZP)();return function(t,o){const n=new Date(t),l=new Date-n,r=Math.floor(l/i.FS),a=Math.floor(l/i.UK),d=Math.floor(l/i.F4),c=Math.floor(l/i.VL),u=Math.floor(l/i.N1),h=e.ngettext('{{ minutes }} minute ago', '{{ minutes }} minutes ago', r, ' - ', ' -- '),p=e.ngettext('{{ hours }} hour ago', '{{ hours }} hours ago', a, ' - ', ' -- '),_=e.ngettext('{{ days }} day ago', '{{ days }} days ago', d, ' - ', ' -- '),m=e.ngettext('{{ weeks }} week ago', '{{ weeks }} weeks ago', c, ' - ', ' -- '),f=e.ngettext('{{ years }} year ago', '{{ years }} years ago', u, ' - ', ' -- '),x=e.ngettext('{{ minutes }}m', '{{ minutes }}m', r, 'minutes ago abbreviated', 'minutes ago abbreviated'),g=e.ngettext('{{ hours }}h', '{{ hours }}h', a, 'hours ago abbreviated', 'hours ago abbreviated'),y=e.ngettext('{{ days }}d', '{{ days }}d', d, 'days ago abbreviated', 'days ago abbreviated'),w=e.ngettext('{{ weeks }}w', '{{ weeks }}w', c, 'weeks ago abbreviated', 'weeks ago abbreviated'),v=e.ngettext('{{ years }}y', '{{ years }}y', u, 'years ago abbreviated', 'years ago abbreviated');return u>0?(0,s.nk)(o?v:f,{years:u}).join(""):c>0?(0,s.nk)(o?w:m,{weeks:c}).join(""):d>0?(0,s.nk)(o?y:_,{days:d}).join(""):a>0?(0,s.nk)(o?g:p,{hours:a}).join(""):r>0?(0,s.nk)(o?x:h,{minutes:r}).join(""):e._('Just now', ' - ', ' -- ')}}},164985:(e,t,o)=>{o.d(t,{Z:()=>n});function n(){let e=800,t=400;return"undefined"!=typeof window&&(e=window.innerHeight,t=window.innerWidth),{windowHeight:e,windowWidth:t}}},167234:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(667294),s=o(977558),i=o(883119),l=o(992813),r=o(697335),a=o(49028),d=o(785893);function c({children:e,className:t,forwardRef:o,offset:c=0,position:u,shouldShowShadow:h=!1,style:p={},top:_}){const{setIsContentHeaderPresent:m}=(0,l.i)();(0,n.useEffect)((()=>(m(!0),function(){m(!1)})),[]);const{currentScrollPosition:f,isScrolled:x,setSubheaderShadow:g}=(0,a.WQ)();(0,n.useEffect)((()=>(h&&g("contentHeader"),()=>{h&&g(null)})),[h]);let y=!1;"pending"!==_&&(y=null!=_?f>=_:x);const w=(0,r.t)(),v=(0,d.jsx)("div",{className:t,ref:o,style:{...p,top:w+c,...y&&h?{...s.Rz,zIndex:499}:{},...u&&"sticky"!==u?{position:u}:{}},children:e});return"sticky"===u?(0,d.jsx)(i.Le,{top:w+c,children:v}):v}},142103:(e,t,o)=>{o.d(t,{Z:()=>P});var n=o(667294),s=o(702664),i=o(694379),l=o(898781),r=o(349700),a=o(883119),d=o(785893);const c=({followText:e,followerCount:t,userFollowed:o})=>{const n=(0,l.ZP)();return(0,r.nk)(n._('{{ followCount }} {{ followText }}', ' - ', ' -- '),{followCount:(0,d.jsx)(a.xu,{"data-test-id":"followCount",paddingX:1,opacity:o?void 0:.8,children:(0,d.jsx)(a.xv,{color:o?"subtle":"inverse",children:(0,d.jsx)(i.Z,{value:t,shortform:!0,shortformMaximumFractionDigits:0})})},"followCount"),followText:(0,d.jsx)(a.xu,{"data-test-id":"followText",paddingX:1,children:(0,d.jsx)(a.xv,{color:o?"default":"inverse",weight:"bold",children:e})},"followText")})};var u=o(957161),h=o(829407),p=o(201155),_=o(11363),m=o(584595),f=o(407043),x=o(918301),g=o(698330),y=o(807532),w=o(946984),v=o(343341),b=o(461773);function C(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class j extends n.PureComponent{constructor(...e){super(...e),C(this,"handleButtonClick",(({event:e})=>{const{requireAuth:t,i18n:o,userFollowed:n}=this.props;if(t)return e.stopPropagation(),void t({loginModalHeader:(0,_.N4)({i18n:o,toFollow:!n})});const{shouldStopEventPropagation:s,loggingData:i}=this.props;s&&(e.preventDefault(),e.stopPropagation()),this.props.logContextEvent({event_type:101,component:13672,element:11951,object_id_str:this.props.id,view_type:this.props.viewType,view_parameter:this.props.viewParameter,...i||Object.freeze({})}),this.toggleFollowUnfollow()})),C(this,"handleClick",(({event:e})=>{const{requireAuth:t}=this.props;(t||this.props.shouldStopEventPropagation)&&e.stopPropagation(),t?t():this.toggleFollowUnfollow()})),C(this,"toggleFollowUnfollow",(()=>{const{id:e,mostRecentPinId:t,loggingData:o,userFollowed:n,viewType:s,viewParameter:i}=this.props;n?(this.props.logContextEvent({event_type:46,object_id_str:e,view_type:s,view_parameter:i,aux_data:{pin_id:t},...o||Object.freeze({})}),this.unfollow()):(this.props.logContextEvent({event_type:45,object_id_str:e,view_type:s,view_parameter:i,aux_data:{pin_id:t},...o||Object.freeze({})}),this.follow())})),C(this,"follow",(()=>{const{follow:e,id:t,onUserFollow:o,mostRecentPinId:n,setMostRecentPinId:s}=this.props;e(t,n,this.showConfirmation,this.showError),o&&o(!0),s(null)})),C(this,"showToast",(e=>{const{id:t,imageUrl:o,profileUrl:n,toastManagerContext:s,suppressToasts:i}=this.props;i||s.showOneToast((({hideToast:s})=>(0,d.jsx)(p.Z,{href:n,userId:t,imageUrl:o,handleHide:s,text:e})))})),C(this,"showConfirmation",(()=>{const e=(0,d.jsx)(a.xv,{children:this.props.i18n._('Following! Their created Pins will show up in your home feed!', 'userFollowButton.informationalToastText2', 'Text explaining that a creator\'s Pins will show up in home feed after follow')});this.showToast(e)})),C(this,"showError",(e=>{const{fullName:t,userFollowed:o,showEmailVerificationReminderModal:n}=this.props,s=o?this.props.i18n._('Error unfollowing {{ usernameComponent }}.', 'UserFollowButton.error.unfollowing', 'When there is an API error when unfollowing a user'):this.props.i18n._('Error following {{ usernameComponent }}.', 'UserFollowButton.error.following', 'When there is an API error when following a user');if(e&&e.api_error_code===m.H9)return void n();const i=(0,d.jsx)(a.xv,{children:(0,r.nk)(s,{usernameComponent:(0,d.jsx)(a.xv,{weight:"bold",inline:!0,children:t})})});this.showToast(i)})),C(this,"unfollow",(()=>{const{id:e,onUserFollow:t,unfollow:o,mostRecentPinId:n,setMostRecentPinId:s}=this.props;o(e,n,(()=>{}),this.showError),t&&t(!1),s(null)}))}renderButton(){const{button:e,followerCount:t,inline:o=!1,isOwnProfile:n,invertButtonColor:s,isSecondaryButton:i,size:l,showFollowerCount:r,userFollowed:u}=this.props,h=u?this.props.i18n._('Following', 'User follow button', 'User follow button'):this.props.i18n._('Follow', 'User follow button', 'User follow button');if(e)return e({followText:h,onClick:this.handleButtonClick,userFollowed:u});if(n)return(0,d.jsx)(a.zx,{fullWidth:!0,disabled:!0,text:this.props.i18n._('This is you', 'Button label to note that this is your Profile', 'Button label to note that this is your Profile')});if(r){const e="number"==typeof t?(0,d.jsx)(c,{followerCount:t,userFollowed:u,followText:h}):h;return(0,d.jsx)(a.iP,{onTap:this.handleClick,children:(0,d.jsx)(a.xu,{color:u?"secondary":"primary",rounding:2,paddingX:3,paddingY:3,children:(0,d.jsx)(a.kC,{alignItems:"center",justifyContent:"start",children:e})})})}return(0,d.jsx)(a.xu,{display:"inlineBlock","data-test-id":`user-${u?"unfollow":"follow"}-button`,children:(0,d.jsx)(a.zx,{accessibilityLabel:u?this.props.i18n._('Unfollow', 'userUnfollowButton.button.accessibilityLabel', 'Accessibility label for the unfollow button'):this.props.i18n._('Follow', 'userFollowButton.button.accessibilityLabel', 'Accessibility label for the follow button'),color:i||u?"gray":"red",selected:s?!u:!!u,fullWidth:o,onClick:this.handleButtonClick,size:null!=l?l:void 0,text:h})})}render(){const{showPulsar:e,userFollowed:t}=this.props;return(0,d.jsxs)(a.xu,{position:"relative",display:"flex",children:[this.renderButton(),e&&(0,d.jsx)(a.iP,{onTap:this.handleClick,children:(0,d.jsx)(a.xu,{position:"absolute",display:"inlineBlock",dangerouslySetInlineStyle:{__style:{marginLeft:-86,marginTop:-28}},children:(0,d.jsx)(a.o3,{paused:t||!1})})})]})}}function P(e){const{logContextEvent:t}=(0,f.v)(),o=(0,l.ZP)(),{id:n,setMostRecentPinId:i}=(0,y.f)(),r=(0,w.Z)(),a=(0,s.useDispatch)(),{showEmailVerificationReminderModal:c}=(0,x.y9)(),p=(0,g.mN)()(e.id),_=null==p?void 0:p.follower_count,m=p?p.explicitly_followed_by_me:e.userFollowed;return(0,h.Z)((()=>{const{id:t}=e,o=u.Z.getItem("unauthDesktopFollowId")||"";o&&o===t&&(u.Z.removeItem("unauthDesktopFollowId"),a((0,b.ZN)(o)))})),(0,d.jsx)(j,{...e,follow:(e,t,o,n)=>{a((0,b.yA)(e,t)).then(o).catch((e=>{n(e)}))},followerCount:_,i18n:o,logContextEvent:t,mostRecentPinId:n,requireAuth:r,setMostRecentPinId:i,showEmailVerificationReminderModal:c,toastManagerContext:(0,v.F9)(),unfollow:(e,t,o,n)=>{a((0,b.KF)(e,t)).then(o,n)},userFollowed:m})}},825067:(e,t,o)=>{o.d(t,{H:()=>s,W:()=>i});var n=o(425288);const{Provider:s,useMaybeHook:i}=(0,n.Z)("PinCreateDeleteContext")},777906:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(667294),s=o(865607),i=o(883119),l=o(785893);const r=function({badgeSize:e,badgeSpacing:t,fullName:o,identityIsVerified:r,isVerifiedMerchant:a,truncate:d=!1}){const c=o.split(" "),u=c.slice(0,c.length-1).join(" "),h=" ".concat(c[c.length-1]);return d?(0,l.jsxs)(i.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,l.jsx)(i.xv,{lineClamp:1,weight:"bold",children:o}),(0,l.jsx)(i.xu,{flex:"none",position:"relative",dangerouslySetInlineStyle:{__style:{top:t}},paddingX:1,children:(0,l.jsx)(s.Z,{size:e,hasVerifiedIdentity:r,isVerifiedMerchant:a})})]}):(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)("span",{children:u}),(0,l.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[h," ",(0,l.jsx)(i.xu,{display:"inlineBlock",flex:"none",position:"relative",dangerouslySetInlineStyle:{__style:{top:t}},children:(0,l.jsx)(s.Z,{size:e,hasVerifiedIdentity:r,isVerifiedMerchant:a})})]})]})}},96939:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(65675),s=o(883119),i=o(785893);function l({coverImages:e,height:t,isHovered:o,onClick:l,onMouseEnter:r,onMouseLeave:a,textType:d,text:c,url:u,width:h}){const p=e&&(e["236x"]||e["280x280"]);return(0,i.jsx)(n.Z,{backgroundColor:"gray",coverImage:p,height:t,isHovered:o,onClick:l,onMouseEnter:r,onMouseLeave:a,url:u,width:h,children:(0,i.jsx)(s.xu,{alignItems:"center",display:"flex",height:t,justifyContent:"center",padding:3,position:"absolute",top:!0,width:h||"100%",children:"text"===d?(0,i.jsx)(s.xu,{alignItems:"center",display:"flex",height:48,padding:3,children:(0,i.jsx)(s.X6,{align:"center",size:"500",color:"light",children:c})}):(0,i.jsx)(s.xu,{alignItems:"center",color:"secondary",display:"flex",height:48,padding:3,rounding:"pill",children:(0,i.jsx)(s.xv,{align:"center",weight:"bold",children:c})})})})}},534991:(e,t,o)=>{o.d(t,{Z:()=>p});var n=o(667294),s=o(121093),i=o(499128),l=o(407043),r=o(785893);const a=e=>{const{logContextEvent:t}=(0,l.v)();return(0,r.jsx)(s.Z,{eligibleIds:e.eligibleIds,placementId:e.placementId,eligibleTypes:[10],children:({complete:o,dismiss:n,experience:{display_data:s}})=>{const l=s.link||e.linkUrl;return(0,r.jsx)(i.ZP,{duration:s.duration,href:l,text:s.text||"",onClick:()=>{o(),e.onClick&&e.onClick(),e.shouldLogClicks&&e.shouldLogClicks&&t({event_type:101,object_id_str:e.objectId,component:e.thriftComponentType,element:e.thriftElementType})},onHide:()=>{e.onHide(),e.completionOnDismissal?o():n()}})}})};var d=o(343341);function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const u=2e3;class h extends n.Component{constructor(...e){super(...e),c(this,"componentDidMount",(()=>{const{delay:e=u}=this.props;this.experienceToastsTimeout=window.setTimeout((()=>this.triggerEducationToasts()),e)}))}componentWillUnmount(){window.clearTimeout(this.experienceToastsTimeout)}triggerEducationToasts(){const{toastManagerContext:e,completionOnDismissal:t,placementId:o,experienceIds:n}=this.props;e.showOneToast((({hideToast:e})=>(0,r.jsx)(a,{experienceIds:n,completionOnDismissal:t,onHide:e,placementId:o,shouldLogClicks:!1})))}render(){return null}}function p(e){return(0,r.jsx)(h,{...e,toastManagerContext:(0,d.F9)()})}c(h,"defaultProps",{completionOnDismissal:!1})},758119:(e,t,o)=>{o.d(t,{Z:()=>u});var n=o(189734),s=o.n(n),i=o(898781),l=o(19121),r=o(883119),a=o(349700),d=o(785893);function c(e){var t,o,n,s;const i=null!==(t=null!==(o=null==e?void 0:e.imageMediumUrl)&&void 0!==o?o:null==e?void 0:e.image_medium_url)&&void 0!==t?t:"";return{name:null!==(n=null!==(s=null==e?void 0:e.fullName)&&void 0!==s?s:null==e?void 0:e.full_name)&&void 0!==n?n:"",src:"https://s.pinimg.com/images/user/default_75.png"===i?void 0:i}}function u({board:e,forceViewer:t,isCompact:o,ownerOnly:n}){var u,h,p,_,m;const f=(0,i.ZP)(),x=(0,l.Z)(),g=n?[c(null==e?void 0:e.owner)]:function(e,t,o){const{collaborated_by_me:n,collaborating_users:i,owner:l}=null!=e?e:{},r=null!=i?i:[],a=[l];if(n||o){const e=r.findIndex((e=>t.isAuth&&e.id===t.id));if(-1!==e){const t=r.splice(e,1)[0];a.push(t)}else a.push(t)}const d=s()(r,"full_name");return[...a,...d]}(e,x,t).map(c),y=g.slice(0,3).map((e=>e.name));let w="";switch(g.length){case 3:w=(0,a.Wc)(`${f._('{{ first }}, {{ second }}, and {{ last }}', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.ThreeAvatars', 'List of three usernames')}`,{first:`${null!==(u=y[0])&&void 0!==u?u:""}`,second:`${null!==(h=y[1])&&void 0!==h?h:""}`,last:`${null!==(p=y[2])&&void 0!==p?p:""}`});break;case 2:w=(0,a.Wc)(`${f._('{{ first }} and {{ second }}', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.TwoAvatars', 'List of two usernames.')}`,{first:`${null!==(_=y[0])&&void 0!==_?_:""}`,second:`${null!==(m=y[1])&&void 0!==m?m:""}`});break;default:w=y.join(", ")}const v=g.length>3?(0,a.Wc)(`, ${f.ngettext('Collaborators: {{ userNames }} and {{ leftCount }} more.', 'Collaborators: {{ userNames }} and {{ leftCount }} more.', g.length - 3, 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.aboveThree', 'Accessibility label that lists the names of collaborators and a final count of non-displayed avatars')}`,{userNames:w,leftCount:""+(g.length-3)}):(0,a.Wc)(`, ${f._('Collaborators: {{ userNames }}.', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.notAboveThree', 'Accessibility label that lists the names of collaborators')}`,{userNames:w});return(0,d.jsx)(r.HE,{accessibilityLabel:v,collaborators:g,size:o?"xs":"sm"})}},915071:(e,t,o)=>{function n(e,t){return{type:"SEARCH_PIN_CLOSEUP_VIEWED",payload:{pinId:e,query:t}}}function s(e){return{type:"SEARCH_QUERY_STARTED",payload:{query:e}}}function i(e){return{type:"SEARCH_QUERY_INVALIDATED",payload:{query:e}}}o.d(t,{Y4:()=>n,g4:()=>s,sb:()=>i})},461773:(e,t,o)=>{o.d(t,{KF:()=>d,ZN:()=>l,fv:()=>a,kE:()=>u,yA:()=>r});var n=o(214494),s=o(90326);function i(e,t){return n.Z.create("UserFollowResource",{user_id:e,aux_data:t?{pin_id:t}:void 0})}function l(e,t=null){return o=>{i(e,t).callCreate().catch((()=>o((0,s.P_)(e,!1)))),o((0,s.P_)(e,!0))}}function r(e,t=null){return async o=>{o((0,s.P_)(e,!0)),await i(e,t).callCreate().catch((t=>{throw o((0,s.P_)(e,!1)),t}))}}function a(e,t=null){return o=>{i(e,t).callDelete().catch((()=>o((0,s.P_)(e,!0)))),o((0,s.P_)(e,!1))}}function d(e,t=null){return async o=>{o((0,s.P_)(e,!1)),await i(e,t).callDelete().catch((t=>{throw o((0,s.P_)(e,!0)),t}))}}const c=(e,t)=>({type:"USER_BULK_FOLLOW",payload:{ids:e,value:t}}),u=e=>t=>{e.length>0&&(n.Z.create("ApiResource",{url:"/v3/users/follow/",data:{followee_ids:e.join(",")}}).callUpdate().catch((()=>t(c(e,!1)))),t(c(e,!0)))}},90326:(e,t,o)=>{o.d(t,{Ge:()=>a,JS:()=>i,OF:()=>f,P_:()=>l,Q_:()=>u,b8:()=>h,eR:()=>m,h2:()=>d,h6:()=>c});var n=o(735422),s=o(214494);function i(e){return{type:"UPDATE_USER_PIN_COUNT",payload:e}}const l=(e,t)=>({type:"USER_FOLLOW",payload:{id:e,value:t}}),r=(e,t)=>({type:"USER_BLOCK",payload:{id:e,value:t}}),a=({id:e,orbacSubjectId:t,blockSource:o,blockContext:n})=>i=>(i(r(e,!0)),s.Z.create("UserBlockResource",{blocked_user_id:e,orbac_subject_id:t,block_source:o,block_context:n}).callCreate().catch((()=>i(r(e,!1))))),d=e=>t=>(t(r(e,!1)),s.Z.create("UserBlockResource",{blocked_user_id:e}).callDelete().catch((()=>t(r(e,!0)))));function c(e){return{type:"UPDATE_USER_SCHEDULED_PIN_COUNT",payload:e}}const u=(e,t)=>()=>s.Z.create("UserStateResource",{state:e,value:t}).callCreate(),h=(e,t,o)=>(i,l)=>{s.Z.create("ApiResource",{url:"/v3/users/me/"}).callCreate().then((()=>{o({event_type:48,object_id_str:l().session.userId}),e(),(0,n.Dm)()}),t)};const p=async(e,t,o)=>{var n;const i=await s.Z.create("VIPResource",{upload_ids:[e]}).callGet();if(null!==(n=i.resource_response)&&void 0!==n&&n.data[e]){const n=i.resource_response.data[e],{status:s,signature:l}=n;if("processing"===s||"registered"===s)setTimeout((async()=>{p(e,t,o)}),5e3);else if("succeeded"===s){const e=((e,t="150x150")=>e&&`https://i.pinimg.com/${t}/${e.substring(0,2)}/${e.substring(2,4)}/${e.substring(4,6)}/${e}.jpg`||"")(l);t(e)}else o()}else o()},_=e=>new Promise(((t,o)=>{var n,i,l,r,a;n=e,i="pinimage",l=()=>{},r=e=>{t(e)},a=e=>{o(e)},(new FormData).append("img",n),s.Z.create("VIPResource",{type:i}).callCreate().then((e=>{var t;if(null!==(t=e.resource_response)&&void 0!==t&&t.data){const{upload_id:t,upload_url:o,upload_parameters:s}=e.resource_response.data,i=new XMLHttpRequest;i.open("POST",o,!0),i.onload=()=>{var e;(e=i.status)>=200&&e<400?(l(100),p(t,r,a)):a()},i.upload.onprogress=e=>{const t=Math.round(100*e.loaded/e.total);l(t)};const d=new FormData;for(const e in s)d.append(e,s[e]);d.append("file",n),i.send(d)}}),(()=>{a()}))})),m=e=>new Promise(((t,o)=>{"string"==typeof e?e.startsWith("data")&&_(function(e,t=512){const o=e.split(";"),n=o[0].split(":")[1],s=o[1].split(",")[1],i=atob(s),l=[];for(let r=0;r<i.length;r+=t){const e=i.slice(r,r+t),o=new Array(e.length);for(let t=0;t<e.length;t+=1)o[t]=e.charCodeAt(t);const n=new Uint8Array(o);l.push(n)}return new Blob(l,{type:n})}(e)).then((e=>t(e))):o("Invalid Image")})),f=e=>()=>s.Z.create("ApiResource",{url:"/v3/register/exists/",data:{email:e}}).callGet()},201155:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(883119),s=o(785893);function i({ideaPinImages:e}){const t={1:28,2:40,3:48},o=e.map(((e,t)=>{var o,i,l;return(0,s.jsx)(n.xu,{height:48,width:28,color:"default",borderStyle:"sm",overflow:"hidden",rounding:2,dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:t}},children:(0,s.jsx)(n.Ee,{alt:"",src:null!==(o=null==e?void 0:e.url)&&void 0!==o?o:"",color:"#696969",fit:"cover",naturalHeight:null!==(i=null==e?void 0:e.height)&&void 0!==i?i:1,naturalWidth:null!==(l=null==e?void 0:e.width)&&void 0!==l?l:1})},t)}));return(0,s.jsx)(n.kC,{justifyContent:"center",children:(0,s.jsx)(n.kC,{justifyContent:"start",width:t[e.length],children:o})})}var l=o(499128),r=o(898781),a=o(784590),d=o(50286);function c({handleHide:e,text:t,userId:o,href:c,imageUrl:u}){const h=(0,r.ZP)(),p=(0,d.HG)(),_=(0,a.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:o}}),m=Array.isArray(t)?t.join(" "):t;if(0===(_.data||[]).length){const t=u?(0,s.jsx)(n.xu,{height:48,overflow:"hidden",width:48,children:(0,s.jsx)(n.Ee,{alt:h._('Image of who you followed', 'userFollowingToast.thumbnail.userImage', 'Profile thumbnail of the user you followed'),fit:"cover",naturalHeight:1,naturalWidth:1,src:u})}):void 0;return(0,s.jsx)(l.ZP,{duration:5e3,onHide:e,text:m,href:c,iconThumbnail:t,thumbnailShape:"circle"})}const f=(_.data||[]).slice(0,3).map((e=>{var t;return null===(t=e.images)||void 0===t?void 0:t[p?"236x":"170x"]})),x=(0,s.jsx)(i,{ideaPinImages:f});return(0,s.jsx)(l.ZP,{href:c,duration:5e3,onHide:e,iconThumbnail:x,text:m,thumbnailShape:"square"})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/17211-1cf31716a5cd10f0.mjs.map