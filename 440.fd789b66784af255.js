"use strict";(self.webpackChunkturbo_todo=self.webpackChunkturbo_todo||[]).push([[440],{3440:(ot,Z,b)=>{b.d(Z,{e:()=>x});var U=b(1331),v=b(5890),X=b(3994),_=(()=>{return(a=_||(_={})).CATEGORY="CATEGORY",a.GROUP="GROUP",a.TASK="TASK",_;var a})(),L=b(4004);const k={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let F;const z=new Uint8Array(16);function Y(){if(!F&&(F=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!F))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return F(z)}const S=[];for(let a=0;a<256;++a)S.push((a+256).toString(16).slice(1));const g=function w(a,s,f){if(k.randomUUID&&!s&&!a)return k.randomUUID();const K=(a=a||{}).random||(a.rng||Y)();if(K[6]=15&K[6]|64,K[8]=63&K[8]|128,s){f=f||0;for(let R=0;R<16;++R)s[f+R]=K[R];return s}return function tt(a,s=0){return(S[a[s+0]]+S[a[s+1]]+S[a[s+2]]+S[a[s+3]]+"-"+S[a[s+4]]+S[a[s+5]]+"-"+S[a[s+6]]+S[a[s+7]]+"-"+S[a[s+8]]+S[a[s+9]]+"-"+S[a[s+10]]+S[a[s+11]]+S[a[s+12]]+S[a[s+13]]+S[a[s+14]]+S[a[s+15]]).toLowerCase()}(K)};var E;!function(a){let s,f;!function(K){function V(G){return(0,v._L)(G,{ref:v.LN})}K.on=function R(G){return(0,v.g3)({id:G,active:!0},{ref:v.LN})},K.off=function W(G){return V([G])},K.setActive=function q(G,nt){return(0,v.jB)([G],{active:nt},{ref:v.LN})},K.offAll=V}(s=a.Reducers||(a.Reducers={})),(f=a.Functions||(a.Functions={})).isActive=function R(W,q){let V=q.getValue().UIEntities[W];return!!V&&V.active}}(E||(E={}));var P=b(1571);const m=(0,U.MT)({name:"task"},(0,v.h4)(),(0,v.KN)());(0,X.xi)(m,{key:"task-data",storage:X.n4});class x{constructor(){this.uiStates$=m.pipe((0,v.OR)({ref:v.LN})),this.items$=m.combine({entities:m.pipe((0,v.WK)()),UIEntities:this.uiStates$}).pipe((0,v.yh)()),this.categoryItems$=this.items$.pipe((0,L.U)(s=>s.filter(f=>f.type===_.CATEGORY))),this.groupItems$=this.items$.pipe((0,L.U)(s=>s.filter(f=>f.type===_.GROUP))),this.taskItems$=this.items$.pipe((0,L.U)(s=>s.filter(f=>f.type===_.TASK))),this.activeTasks$=this.taskItems$.pipe((0,L.U)(s=>s.filter(f=>f.active)))}addCategory(s){this.addItem(s,_.CATEGORY)}addGroup(s,f){this.addItem(s,_.GROUP,f)}addTask(s,f){this.addItem(s,_.TASK,f)}updateItem(s,f){m.update((0,v.jB)([s],K=>({...K,name:f})))}removeItem(s){if(E.Functions.isActive(s,m))return;let f=this.getValue().entities[s];m.update((0,v._L)(s)),f.parent&&m.update(E.Reducers.setActive(f.parent,this.hasChild(f.parent)))}doneTask(s){m.update(E.Reducers.on(s))}undoneTask(s){m.update(E.Reducers.off(s))}releaseAllTasks(){let s=this.getActiveItemIds(_.TASK);m.update(E.Reducers.offAll(s))}addItem(s,f,K){const R={id:g(),name:s,type:f,parent:K};m.update((0,v.dP)(R)),K&&m.update(E.Reducers.on(K)),this.order(R)}order(s){if(s.type==_.CATEGORY)return;const f=m.query((0,v.VN)()),K=f.length;if(K<=1)return;const R=f.findLastIndex(V=>V.parent==s.parent&&V!=s),W=f.findIndex(V=>V.id==s.parent);m.update((0,v.mf)({fromIndex:K-1,toIndex:f[R]?R+1:W+1}))}hasChild(s){return this.getItems().some(f=>f.parent==s)}getActiveItemIds(s){return this.getActiveItems(s).map(f=>f.id)}getActiveItems(s){let f=this.getValue().UIIds;return this.getItems(s).filter(K=>f.includes(K.id))}getItems(s){let f=(0,v.VN)();return s&&(f=(0,v.Dc)({filterEntity:K=>K.type==s})),m.query(f)}getValue(){return m.getValue()}}x.\u0275fac=function(s){return new(s||x)},x.\u0275prov=P.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"})},5890:(ot,Z,b)=>{b.d(Z,{Dc:()=>W,KN:()=>w,LN:()=>et,M3:()=>P,OR:()=>ft,VN:()=>R,WK:()=>ut,_L:()=>g,dP:()=>m,g3:()=>yt,h4:()=>tt,jB:()=>it,mf:()=>ht,yh:()=>I});var U=b(1331),v=b(9635),X=b(1884),_=b(4004);function L(e,n){const t={},r=[];for(const o of e){const c=o[n];r.push(c),t[c]=o}return{ids:r,asObject:t}}function z(e,n){return e.config[n.idKeyRef]}class Y{constructor(n){this.idKeyRef="idKey",this.entitiesKey=n.entitiesKey,this.idsKey=n.idsKey,this.idKeyRef=n.idKeyRef}}function S(e){const n=e?`idKey${(0,U.kC)(e)}`:"idKey",t=new Y({entitiesKey:e?`${e}Entities`:"entities",idsKey:e?`${e}Ids`:"ids",idKeyRef:n});return{[`${e}EntitiesRef`]:t,[`with${(0,U.kC)(e)}Entities`]:function r(o){let c={},d=[];const l=o?.idKey||"id";return null!=o&&o.initialValue&&({ids:d,asObject:c}=L(o.initialValue,l)),{props:{[t.entitiesKey]:c,[t.idsKey]:d},config:{[n]:l}}}}}const{withEntities:tt,EntitiesRef:p}=S(""),{UIEntitiesRef:et,withUIEntities:w}=S("UI");function g(e,n={}){return function(t){const{ref:{idsKey:r,entitiesKey:o}=p}=n,c=(0,U.Eq)(e),d=Object.assign({},t[o]),l=t[r].filter(A=>!c.includes(A));for(const A of c)Reflect.deleteProperty(d,A);return Object.assign({},t,{[o]:d,[r]:l})}}function P(e={}){return function(t){const{ref:{idsKey:r,entitiesKey:o}=p}=e;return Object.assign({},t,{[o]:{},[r]:[]})}}function m(e,n={}){return function(t,r){const{prepend:o=!1,ref:c=p}=n,{entitiesKey:d,idsKey:l}=c,A=z(r,c),j=(0,U.Eq)(e);if(!j.length)return t;(0,U.r8)()&&(function x(e,n,t,r){e.forEach(o=>{const c=o[n];if(t[r][c])throw Error(`Entity already exists. ${n} ${c}`)})}(j,A,t,d),function a(e,n){const t=new Set;e.forEach(r=>{const o=r[n];if(t.has(o))throw Error(`Duplicate entity id provided. ${n} ${o}`);t.add(o)})}(j,A));const{ids:T,asObject:B}=L(j,A);return Object.assign({},t,{[d]:Object.assign({},t[d],B),[l]:o?[...T,...t[l]]:[...t[l],...T]})}}function R(e={}){const{ref:{entitiesKey:n,idsKey:t}=p}=e;return function(r){return r[t].map(o=>r[n][o])}}function W(e){const{ref:{entitiesKey:n,idsKey:t}=p,filterEntity:r=(()=>!0),mapEntity:o=(c=>c)}=e;return function(c){const d=[];for(const l of c[t]){const A=c[n][l];r(A)&&d.push(o(A))}return d}}function V(e,n={}){return function(t){const{ref:{entitiesKey:r}=p}=n;return Reflect.has(t[r],e)}}function rt(e,n){return(0,U.mf)(e)?e(n):Object.assign({},n,e)}function it(e,n,t={}){return function(r){const{ref:{entitiesKey:o}=p}=t,c={};for(const d of(0,U.Eq)(e))c[d]=rt(n,r[o][d]);return Object.assign({},r,{[o]:Object.assign({},r[o],c)})}}function yt(e,n={}){return function(t,r){const{prepend:o=!1,ref:c=p}=n,{entitiesKey:d,idsKey:l}=c,A=z(r,c),j={},T=[],B=(0,U.Eq)(e);if(!B.length)return t;for(const N of B){const D=N[A];V(D,n)(t)?j[D]=Object.assign({},t[d][D],N):(T.push(D),j[D]=N)}const $=T.length?{[l]:o?[...T,...t[l]]:[...t[l],...T]}:{};return Object.assign({},t,$,{[d]:Object.assign({},t[d],j)})}}function ht(e){return function(n){const{fromIndex:t,toIndex:r,ref:{idsKey:o,entitiesKey:c}=p}=e,d=n[o].slice();return d.splice(r<0?d.length+r:r,0,d.splice(t,1)[0]),Object.assign({},n,{[c]:Object.assign({},n[c]),[o]:d})}}function ut(e={}){const{ref:{entitiesKey:n,idsKey:t}=p}=e;return(0,v.z)(function Q(e){return(0,X.x)((n,t)=>n[e]===t[e])}(n),(0,_.U)(r=>r[t].map(o=>r[n][o])))}function ft(e={}){const{ref:{entitiesKey:n}=p}=e;return(0,U.Ys)(t=>t[n])}function I(e="id"){return(0,_.U)(n=>n.entities.map(t=>Object.assign({},t,n.UIEntities[t[e]])))}(0,U.U4)("activeId",{initialValue:void 0}),(0,U.v8)("activeIds",{initialValue:[]})},3994:(ot,Z,b)=>{b.d(Z,{n4:()=>S,xi:()=>F});var U=b(9646),v=b(7579),X=b(6063);class _ extends v.x{constructor(g=1/0,E=1/0,P=X.l){super(),this._bufferSize=g,this._windowTime=E,this._timestampProvider=P,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=E===1/0,this._bufferSize=Math.max(1,g),this._windowTime=Math.max(1,E)}next(g){const{isStopped:E,_buffer:P,_infiniteTimeWindow:m,_timestampProvider:M,_windowTime:x}=this;E||(P.push(g),!m&&P.push(M.now()+x)),this._trimBuffer(),super.next(g)}_subscribe(g){this._throwIfClosed(),this._trimBuffer();const E=this._innerSubscribe(g),{_infiniteTimeWindow:P,_buffer:m}=this,M=m.slice();for(let x=0;x<M.length&&!g.closed;x+=P?1:2)g.next(M[x]);return this._checkFinalizedStatuses(g),E}_trimBuffer(){const{_bufferSize:g,_timestampProvider:E,_buffer:P,_infiniteTimeWindow:m}=this,M=(m?1:2)*g;if(g<1/0&&M<P.length&&P.splice(0,P.length-M),!m){const x=E.now();let a=0;for(let s=1;s<P.length&&P[s]<=x;s+=2)a=s;a&&P.splice(0,a+1)}}}var L=b(2076),J=b(5684),k=b(3900);function F(w,g){var E;const P={source:f=>f,preStoreInit:f=>f,key:null!=(E=g.key)?E:`${w.name}@store`,runGuard:()=>typeof window<"u"},m=Object.assign({},P,g);if(null==m.runGuard||!m.runGuard())return{initialized$:(0,U.of)(!1),unsubscribe(){}};const{storage:M}=g,x=new _(1),a=(0,L.D)(M.getItem(m.key)).subscribe(f=>{f&&w.update(K=>m.preStoreInit(Object.assign({},K,f))),x.next(!0),x.complete()}),s=m.source(w).pipe((0,J.T)(1),(0,k.w)(f=>M.setItem(m.key,f))).subscribe();return{initialized$:x.asObservable(),unsubscribe(){s.unsubscribe(),a.unsubscribe()}}}function z(w){if(w)return{getItem(g){const E=w.getItem(g);return(0,U.of)(E&&JSON.parse(E))},setItem:(g,E)=>(w.setItem(g,JSON.stringify(E)),(0,U.of)(!0)),removeItem:g=>(w.removeItem(g),(0,U.of)(!0))}}const S=z((()=>{try{if(typeof localStorage<"u")return localStorage}catch{}})());z((()=>{try{if(typeof sessionStorage<"u")return sessionStorage}catch{}})())},1331:(ot,Z,b)=>{b.d(Z,{Eq:()=>R,MT:()=>K,U4:()=>Q,Ys:()=>ct,kC:()=>G,mf:()=>W,r8:()=>Ot,v8:()=>ut,vl:()=>Et});var U=b(1135),v=b(7579),X=b(9751),_=b(9635),L=b(9300),J=b(5698),k=b(4004),F=b(1884);const Y=new U.X(!1),S=Y.asObservable().pipe((0,L.h)(i=>!i),(0,J.q)(1)),p={};new class et{registerPreStoreUpdate(u){p.preStoreUpdate=u}registerPreStateInit(u){p.preStateInit=u}};const g=new Map,E=new v.x;E.asObservable();class f extends U.X{constructor(u){super(u.state),this.storeDef=u,this.batchInProgress=!1,this.context={config:this.getConfig()},this.state=this.getInitialState(u.state),this.initialState=this.getValue(),function m(i){g.set(i.name,i),E.next({type:"add",store:i})}(this)}get name(){return this.storeDef.name}getInitialState(u){return p.preStateInit?p.preStateInit(u,this.name):u}getConfig(){return this.storeDef.config}query(u){return u(this.getValue())}update(...u){const O=this.getValue();let y=u.reduce((I,h)=>h(I,this.context),O);p.preStoreUpdate&&(y=p.preStoreUpdate(O,y,this.name)),y!==O&&(this.state=y,Y.getValue()?this.batchInProgress||(this.batchInProgress=!0,S.subscribe(()=>{super.next(this.state),this.batchInProgress=!1})):super.next(this.state))}getValue(){return this.state}reset(){this.update(()=>this.initialState)}combine(u){let O=!0;const y={};return new X.y(I=>{for(const[h,C]of Object.entries(u))I.add(C.subscribe(H=>{y[h]=H,O=!0}));return this.subscribe({next(){O&&(I.next(y),O=!1)},error(h){I.error(h)},complete(){I.complete()}})})}destroy(){(function M(i){g.delete(i.name),E.next({type:"remove",store:i})})(this),this.reset()}next(u){this.update(()=>u)}error(){}complete(){}}function K(i,...u){const{state:O,config:y}=function z(...i){const u={config:{},state:{}};for(const{config:O,props:y}of i)Object.assign(u.config,O),Object.assign(u.state,y);return u}(...u),{name:I}=i;return new f({name:I,state:O,config:y})}function R(i){return Array.isArray(i)?i:[i]}function W(i){return"function"==typeof i}function G(i){return i.charAt(0).toUpperCase()+i.slice(1)}function nt(i){return"object"==typeof i&&!Array.isArray(i)&&null!==i}function ct(i){return(0,_.z)((0,k.U)(i),(0,F.x)())}function Q(i,{initialValue:u,config:O}){let y=u;const I=G(i);return{[`with${I}`]:(h=y)=>({props:{[i]:h},config:O}),[`set${I}InitialValue`](h){y=h},[`set${I}`]:h=>function(C){const H=W(h)?h(C):h;return H===C[i]?C:Object.assign({},C,{[i]:H})},[`update${I}`]:h=>function(C){const H=W(h)?h(C):h;return H===C[i]?C:Object.assign({},C,{[i]:nt(H)?Object.assign({},C[i],H):H})},[`reset${I}`]:()=>function(h){return Object.assign({},h,{[i]:y})},[`select${I}`]:()=>ct(h=>h[i]),[`get${I}`]:h=>h[i]}}function ut(i,u){const O=G(i),y=Q(i,u);return Object.assign({},y,{[`add${O}`]:I=>function(h){return Object.assign({},h,{[i]:ft(h[i],I)})},[`remove${O}`]:I=>function(h){return Object.assign({},h,{[i]:gt(h[i],I)})},[`toggle${O}`]:I=>function(h){return Object.assign({},h,{[i]:dt(h[i],I)})},[`update${O}`]:(I,h)=>function(C){return Object.assign({},C,{[i]:mt(C[i],I,h)})},[`in${O}`]:I=>h=>function st(i,u){return i.includes(u)}(h[i],I)})}function ft(i,u){return[...i,...R(u)]}function gt(i,u){const O=R(u);return i.filter(y=>!O.includes(y))}function dt(i,u){const O=R(u),y=[...i];return O.forEach(I=>{const h=y.indexOf(I);h>-1?y.splice(h,1):y.push(I)}),y}function mt(i,u,O){return i.map(y=>y===u?O:y)}function Et(i){return{props:i,config:void 0}}function Ot(){return true}}}]);