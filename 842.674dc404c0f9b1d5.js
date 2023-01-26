"use strict";(self.webpackChunkturbo_todo=self.webpackChunkturbo_todo||[]).push([[842],{4244:(Z,L,a)=>{function p(v=new Date){return{day:v.getDate(),month:v.getMonth()+1,year:v.getFullYear()}}function E(v,l=p()){return l.year>v.year||l.month>v.month||l.day>v.day}a.d(L,{RR:()=>E,lJ:()=>p})},6833:(Z,L,a)=>{a.d(L,{Z:()=>v,q:()=>l});var p=a(5890),E=a(1331),U=a(3994);const b=(0,E.MT)({name:"history"},(0,p.h4)());(0,U.xi)(b,{key:"history-data",storage:U.n4});var w=a(1571);class v{constructor(){this.historyEntries$=b.pipe((0,p.WK)())}}v.\u0275fac=function(C){return new(C||v)},v.\u0275prov=w.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"});class l{archive(C){let R={id:Math.random().toString(),date:C.date,tasks:C.tasks.map(q=>q.id)};b.update((0,p.dP)(R))}clear(){b.update((0,p.M3)())}}l.\u0275fac=function(C){return new(C||l)},l.\u0275prov=w.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})},2661:(Z,L,a)=>{a.d(L,{F:()=>U});var p=a(1342),E=a(1571);class U{constructor(){this.snapshot$=p.G.pipe()}}U.\u0275fac=function(V){return new(V||U)},U.\u0275prov=E.Yz7({token:U,factory:U.\u0275fac,providedIn:"root"})},2065:(Z,L,a)=>{a.d(L,{Z:()=>w});var p=a(4244),E=a(1342),U=a(1571),b=a(6833),V=a(3440);class w{constructor(l,D){this.historyService=l,this.todoRepository=D,D.activeTasks$.subscribe(C=>{this.updateSnapshot(C)})}renewStore(){let l={...E.G.getValue()};this.historyService.archive(l),E.G.update(D=>({date:(0,p.lJ)(),tasks:[]})),this.todoRepository.releaseAllTasks()}updateSnapshot(l){E.G.update(D=>({...D,tasks:l}))}checkConsistency(){let l=E.G.getValue().date;(0,p.RR)(l)&&this.renewStore()}}w.\u0275fac=function(l){return new(l||w)(U.LFG(b.q),U.LFG(V.e))},w.\u0275prov=U.Yz7({token:w,factory:w.\u0275fac,providedIn:"root"})},1342:(Z,L,a)=>{a.d(L,{G:()=>b});var p=a(1331),E=a(3994),U=a(4244);const b=(0,p.MT)({name:"snapshot"},(0,p.vl)({date:(0,U.lJ)(),tasks:[]}));(0,E.xi)(b,{key:"snapshot-data",storage:E.n4})},3440:(Z,L,a)=>{a.d(L,{e:()=>x});var p=a(1331),E=a(5890),U=a(3994),b=(()=>{return(d=b||(b={})).CATEGORY="CATEGORY",d.GROUP="GROUP",d.TASK="TASK",b;var d})(),V=a(4004);const v={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let l;const D=new Uint8Array(16);function C(){if(!l&&(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(D)}const R=[];for(let d=0;d<256;++d)R.push((d+256).toString(16).slice(1));const O=function $(d,c,g){if(v.randomUUID&&!c&&!d)return v.randomUUID();const j=(d=d||{}).random||(d.rng||C)();if(j[6]=15&j[6]|64,j[8]=63&j[8]|128,c){g=g||0;for(let z=0;z<16;++z)c[g+z]=j[z];return c}return function q(d,c=0){return(R[d[c+0]]+R[d[c+1]]+R[d[c+2]]+R[d[c+3]]+"-"+R[d[c+4]]+R[d[c+5]]+"-"+R[d[c+6]]+R[d[c+7]]+"-"+R[d[c+8]]+R[d[c+9]]+"-"+R[d[c+10]]+R[d[c+11]]+R[d[c+12]]+R[d[c+13]]+R[d[c+14]]+R[d[c+15]]).toLowerCase()}(j)};var _;!function(d){let c,g;!function(j){function X(k){return(0,E._L)(k,{ref:E.LN})}j.on=function z(k){return(0,E.g3)({id:k,active:!0},{ref:E.LN})},j.off=function Q(k){return X([k])},j.setActive=function nt(k,it){return(0,E.jB)([k],{active:it},{ref:E.LN})},j.offAll=X}(c=d.Reducers||(d.Reducers={})),(g=d.Functions||(d.Functions={})).isActive=function z(Q,nt){let X=nt.getValue().UIEntities[Q];return!!X&&X.active}}(_||(_={}));var T=a(1571);const K=(0,p.MT)({name:"task"},(0,E.h4)(),(0,E.KN)());(0,U.xi)(K,{key:"task-data",storage:U.n4});class x{constructor(){this.uiStates$=K.pipe((0,E.OR)({ref:E.LN})),this.category$=K.pipe((0,E.dQ)(c=>c.type===b.CATEGORY)),this.group$=K.pipe((0,E.dQ)(c=>c.type===b.GROUP)),this.task$=K.pipe((0,E.dQ)(c=>c.type===b.TASK)),this.categoryItems$=K.combine({entities:this.category$,UIEntities:this.uiStates$}).pipe((0,E.yh)()),this.groupItems$=K.combine({entities:this.group$,UIEntities:this.uiStates$}).pipe((0,E.yh)()),this.taskItems$=K.combine({entities:this.task$,UIEntities:this.uiStates$}).pipe((0,E.yh)()),this.activeTasks$=this.taskItems$.pipe((0,V.U)(c=>c.filter(g=>g.active)))}addCategory(c){this.addItem(c,b.CATEGORY)}addGroup(c,g){this.addItem(c,b.GROUP,g)}addTask(c,g){this.addItem(c,b.TASK,g)}updateItem(c,g){K.update((0,E.jB)([c],j=>({...j,name:g})))}removeItem(c){if(_.Functions.isActive(c,K))return;let g=this.getValue().entities[c];K.update((0,E._L)(c)),g.parent&&K.update(_.Reducers.setActive(g.parent,this.hasChild(g.parent)))}doneTask(c){K.update(_.Reducers.on(c))}undoneTask(c){K.update(_.Reducers.off(c))}releaseAllTasks(){let c=this.getActiveItemIds(b.TASK);K.update(_.Reducers.offAll(c))}addItem(c,g,j){const z={id:O(),name:c,type:g,parent:j};K.update((0,E.dP)(z)),j&&K.update(_.Reducers.on(j))}hasChild(c){return this.getItems().some(g=>g.parent==c)}getActiveItemIds(c){return this.getActiveItems(c).map(g=>g.id)}getActiveItems(c){let g=this.getValue().UIIds;return this.getItems(c).filter(j=>g.includes(j.id))}getItems(c){let g=Object.values(this.getValue().entities);return c?g.filter(j=>j.type==c):g}getValue(){return K.getValue()}}x.\u0275fac=function(c){return new(c||x)},x.\u0275prov=T.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"})},5890:(Z,L,a)=>{a.d(L,{KN:()=>$,LN:()=>et,M3:()=>T,OR:()=>ft,WK:()=>at,_L:()=>O,dP:()=>K,dQ:()=>yt,g3:()=>ut,h4:()=>q,jB:()=>rt,yh:()=>A});var p=a(1331),E=a(9635),U=a(1884),b=a(4004);function V(e,n){const t={},r=[];for(const s of e){const o=s[n];r.push(o),t[o]=s}return{ids:r,asObject:t}}function D(e,n){return e.config[n.idKeyRef]}class C{constructor(n){this.idKeyRef="idKey",this.entitiesKey=n.entitiesKey,this.idsKey=n.idsKey,this.idKeyRef=n.idKeyRef}}function R(e){const n=e?`idKey${(0,p.kC)(e)}`:"idKey",t=new C({entitiesKey:e?`${e}Entities`:"entities",idsKey:e?`${e}Ids`:"ids",idKeyRef:n});return{[`${e}EntitiesRef`]:t,[`with${(0,p.kC)(e)}Entities`]:function r(s){let o={},f=[];const y=s?.idKey||"id";return null!=s&&s.initialValue&&({ids:f,asObject:o}=V(s.initialValue,y)),{props:{[t.entitiesKey]:o,[t.idsKey]:f},config:{[n]:y}}}}}const{withEntities:q,EntitiesRef:h}=R(""),{UIEntitiesRef:et,withUIEntities:$}=R("UI");function O(e,n={}){return function(t){const{ref:{idsKey:r,entitiesKey:s}=h}=n,o=(0,p.Eq)(e),f=Object.assign({},t[s]),y=t[r].filter(P=>!o.includes(P));for(const P of o)Reflect.deleteProperty(f,P);return Object.assign({},t,{[s]:f,[r]:y})}}function T(e={}){return function(t){const{ref:{idsKey:r,entitiesKey:s}=h}=e;return Object.assign({},t,{[s]:{},[r]:[]})}}function K(e,n={}){return function(t,r){const{prepend:s=!1,ref:o=h}=n,{entitiesKey:f,idsKey:y}=o,P=D(r,o),M=(0,p.Eq)(e);if(!M.length)return t;(0,p.r8)()&&(function x(e,n,t,r){e.forEach(s=>{const o=s[n];if(t[r][o])throw Error(`Entity already exists. ${n} ${o}`)})}(M,P,t,f),function d(e,n){const t=new Set;e.forEach(r=>{const s=r[n];if(t.has(s))throw Error(`Duplicate entity id provided. ${n} ${s}`);t.add(s)})}(M,P));const{ids:B,asObject:N}=V(M,P);return Object.assign({},t,{[f]:Object.assign({},t[f],N),[y]:s?[...B,...t[y]]:[...t[y],...B]})}}function X(e,n={}){return function(t){const{ref:{entitiesKey:r}=h}=n;return Reflect.has(t[r],e)}}function st(e,n){return(0,p.mf)(e)?e(n):Object.assign({},n,e)}function rt(e,n,t={}){return function(r){const{ref:{entitiesKey:s}=h}=t,o={};for(const f of(0,p.Eq)(e))o[f]=st(n,r[s][f]);return Object.assign({},r,{[s]:Object.assign({},r[s],o)})}}function ut(e,n={}){return function(t,r){const{prepend:s=!1,ref:o=h}=n,{entitiesKey:f,idsKey:y}=o,P=D(r,o),M={},B=[],N=(0,p.Eq)(e);if(!N.length)return t;for(const H of N){const G=H[P];X(G,n)(t)?M[G]=Object.assign({},t[f][G],H):(B.push(G),M[G]=H)}const F=B.length?{[y]:s?[...B,...t[y]]:[...t[y],...B]}:{};return Object.assign({},t,F,{[f]:Object.assign({},t[f],M)})}}function tt(e){return(0,U.x)((n,t)=>n[e]===t[e])}function at(e={}){const{ref:{entitiesKey:n,idsKey:t}=h}=e;return(0,E.z)(tt(n),(0,b.U)(r=>r[t].map(s=>r[n][s])))}function ft(e={}){const{ref:{entitiesKey:n}=h}=e;return(0,p.Ys)(t=>t[n])}function yt(e,n){const{ref:{entitiesKey:t,idsKey:r}=h,pluck:s}=n||{};return(0,E.z)(tt(t),(0,p.Ys)(o=>{const f=[];return o[r].forEach((y,P)=>{const M=o[t][y];e(M,P)&&f.push(function l(e,n){return e&&n?(0,p.mf)(n)?n(e):e[n]:e}(M,s))}),f}),(0,p.it)())}function A(e="id"){return(0,b.U)(n=>n.entities.map(t=>Object.assign({},t,n.UIEntities[t[e]])))}(0,p.U4)("activeId",{initialValue:void 0}),(0,p.v8)("activeIds",{initialValue:[]})},3994:(Z,L,a)=>{a.d(L,{n4:()=>R,xi:()=>l});var p=a(9646),E=a(7579),U=a(6063);class b extends E.x{constructor(O=1/0,_=1/0,T=U.l){super(),this._bufferSize=O,this._windowTime=_,this._timestampProvider=T,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=_===1/0,this._bufferSize=Math.max(1,O),this._windowTime=Math.max(1,_)}next(O){const{isStopped:_,_buffer:T,_infiniteTimeWindow:K,_timestampProvider:Y,_windowTime:x}=this;_||(T.push(O),!K&&T.push(Y.now()+x)),this._trimBuffer(),super.next(O)}_subscribe(O){this._throwIfClosed(),this._trimBuffer();const _=this._innerSubscribe(O),{_infiniteTimeWindow:T,_buffer:K}=this,Y=K.slice();for(let x=0;x<Y.length&&!O.closed;x+=T?1:2)O.next(Y[x]);return this._checkFinalizedStatuses(O),_}_trimBuffer(){const{_bufferSize:O,_timestampProvider:_,_buffer:T,_infiniteTimeWindow:K}=this,Y=(K?1:2)*O;if(O<1/0&&Y<T.length&&T.splice(0,T.length-Y),!K){const x=_.now();let d=0;for(let c=1;c<T.length&&T[c]<=x;c+=2)d=c;d&&T.splice(0,d+1)}}}var V=a(2076),w=a(5684),v=a(3900);function l($,O){var _;const T={source:g=>g,preStoreInit:g=>g,key:null!=(_=O.key)?_:`${$.name}@store`,runGuard:()=>typeof window<"u"},K=Object.assign({},T,O);if(null==K.runGuard||!K.runGuard())return{initialized$:(0,p.of)(!1),unsubscribe(){}};const{storage:Y}=O,x=new b(1),d=(0,V.D)(Y.getItem(K.key)).subscribe(g=>{g&&$.update(j=>K.preStoreInit(Object.assign({},j,g))),x.next(!0),x.complete()}),c=K.source($).pipe((0,w.T)(1),(0,v.w)(g=>Y.setItem(K.key,g))).subscribe();return{initialized$:x.asObservable(),unsubscribe(){c.unsubscribe(),d.unsubscribe()}}}function D($){if($)return{getItem(O){const _=$.getItem(O);return(0,p.of)(_&&JSON.parse(_))},setItem:(O,_)=>($.setItem(O,JSON.stringify(_)),(0,p.of)(!0)),removeItem:O=>($.removeItem(O),(0,p.of)(!0))}}const R=D((()=>{try{if(typeof localStorage<"u")return localStorage}catch{}})());D((()=>{try{if(typeof sessionStorage<"u")return sessionStorage}catch{}})())},1331:(Z,L,a)=>{a.d(L,{Eq:()=>z,MT:()=>j,U4:()=>tt,Ys:()=>ct,it:()=>ut,kC:()=>k,mf:()=>Q,r8:()=>yt,v8:()=>at,vl:()=>mt});var p=a(1135),E=a(7579),U=a(9751),b=a(9635),V=a(9300),w=a(5698),v=a(4004),l=a(1884);const C=new p.X(!1),R=C.asObservable().pipe((0,V.h)(i=>!i),(0,w.q)(1)),h={};new class et{registerPreStoreUpdate(u){h.preStoreUpdate=u}registerPreStateInit(u){h.preStateInit=u}};const O=new Map,_=new E.x;_.asObservable();class g extends p.X{constructor(u){super(u.state),this.storeDef=u,this.batchInProgress=!1,this.context={config:this.getConfig()},this.state=this.getInitialState(u.state),this.initialState=this.getValue(),function K(i){O.set(i.name,i),_.next({type:"add",store:i})}(this)}get name(){return this.storeDef.name}getInitialState(u){return h.preStateInit?h.preStateInit(u,this.name):u}getConfig(){return this.storeDef.config}query(u){return u(this.getValue())}update(...u){const S=this.getValue();let m=u.reduce((A,I)=>I(A,this.context),S);h.preStoreUpdate&&(m=h.preStoreUpdate(S,m,this.name)),m!==S&&(this.state=m,C.getValue()?this.batchInProgress||(this.batchInProgress=!0,R.subscribe(()=>{super.next(this.state),this.batchInProgress=!1})):super.next(this.state))}getValue(){return this.state}reset(){this.update(()=>this.initialState)}combine(u){let S=!0;const m={};return new U.y(A=>{for(const[I,W]of Object.entries(u))A.add(W.subscribe(J=>{m[I]=J,S=!0}));return this.subscribe({next(){S&&(A.next(m),S=!1)},error(I){A.error(I)},complete(){A.complete()}})})}destroy(){(function Y(i){O.delete(i.name),_.next({type:"remove",store:i})})(this),this.reset()}next(u){this.update(()=>u)}error(){}complete(){}}function j(i,...u){const{state:S,config:m}=function D(...i){const u={config:{},state:{}};for(const{config:S,props:m}of i)Object.assign(u.config,S),Object.assign(u.state,m);return u}(...u),{name:A}=i;return new g({name:A,state:S,config:m})}function z(i){return Array.isArray(i)?i:[i]}function Q(i){return"function"==typeof i}function k(i){return i.charAt(0).toUpperCase()+i.slice(1)}function it(i){return"object"==typeof i&&!Array.isArray(i)&&null!==i}function ct(i){return(0,b.z)((0,v.U)(i),(0,l.x)())}function ut(){return(0,l.x)((i,u)=>i===u||i.length===u.length&&!u.some((m,A)=>i[A]!==m))}function tt(i,{initialValue:u,config:S}){let m=u;const A=k(i);return{[`with${A}`]:(I=m)=>({props:{[i]:I},config:S}),[`set${A}InitialValue`](I){m=I},[`set${A}`]:I=>function(W){const J=Q(I)?I(W):I;return J===W[i]?W:Object.assign({},W,{[i]:J})},[`update${A}`]:I=>function(W){const J=Q(I)?I(W):I;return J===W[i]?W:Object.assign({},W,{[i]:it(J)?Object.assign({},W[i],J):J})},[`reset${A}`]:()=>function(I){return Object.assign({},I,{[i]:m})},[`select${A}`]:()=>ct(I=>I[i]),[`get${A}`]:I=>I[i]}}function at(i,u){const S=k(i),m=tt(i,u);return Object.assign({},m,{[`add${S}`]:A=>function(I){return Object.assign({},I,{[i]:ft(I[i],A)})},[`remove${S}`]:A=>function(I){return Object.assign({},I,{[i]:gt(I[i],A)})},[`toggle${S}`]:A=>function(I){return Object.assign({},I,{[i]:dt(I[i],A)})},[`update${S}`]:(A,I)=>function(W){return Object.assign({},W,{[i]:Et(W[i],A,I)})},[`in${S}`]:A=>I=>function ot(i,u){return i.includes(u)}(I[i],A)})}function ft(i,u){return[...i,...z(u)]}function gt(i,u){const S=z(u);return i.filter(m=>!S.includes(m))}function dt(i,u){const S=z(u),m=[...i];return S.forEach(A=>{const I=m.indexOf(A);I>-1?m.splice(I,1):m.push(A)}),m}function Et(i,u,S){return i.map(m=>m===u?S:m)}function mt(i){return{props:i,config:void 0}}function yt(){return true}}}]);