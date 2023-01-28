"use strict";(self.webpackChunkturbo_todo=self.webpackChunkturbo_todo||[]).push([[842],{4244:(Z,C,u)=>{function y(O=new Date){return{day:O.getDate(),month:O.getMonth()+1,year:O.getFullYear()}}function g(O,l=y()){return l.year>O.year||l.month>O.month||l.day>O.day}u.d(C,{RR:()=>g,lJ:()=>y})},1382:(Z,C,u)=>{u.d(C,{q:()=>y});var y=(()=>{return(g=y||(y={})).CATEGORY="CATEGORY",g.GROUP="GROUP",g.TASK="TASK",y;var g})()},6833:(Z,C,u)=>{u.d(C,{Z:()=>O,q:()=>l});var y=u(5890),g=u(1331),L=u(3994);const b=(0,g.MT)({name:"history"},(0,y.h4)());(0,L.xi)(b,{key:"history-data",storage:L.n4});var j=u(1571);class O{constructor(){this.historyEntries$=b.pipe((0,y.WK)())}}O.\u0275fac=function(w){return new(w||O)},O.\u0275prov=j.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"});class l{archive(w){let M={id:Math.random().toString(),date:w.date,tasks:w.tasks.map(D=>D.id)};b.update((0,y.dP)(M))}clear(){b.update((0,y.M3)())}}l.\u0275fac=function(w){return new(w||l)},l.\u0275prov=j.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})},2661:(Z,C,u)=>{u.d(C,{F:()=>j});var y=u(4004),g=u(1382),L=u(1342),b=u(1571),V=u(9070);class j{constructor(l){this.taskRepository=l,this.snapshot$=L.G.pipe(),this.taskList$=this.taskRepository.items$.pipe((0,y.U)(U=>this.restructure(U)))}restructure(l){const U=l.map(D=>({...D,children:[],empty:D.type!=g.q.TASK})),w=U.map(D=>({[D.id]:D})).reduce((D,p)=>{let tt=Object.keys(p)[0];return D[tt]=p[tt],D},{});return[...U].reverse().filter(D=>!!D.parent).forEach(D=>{let p=w[D.parent];p.children.push(D),p.empty=D.empty}),U.filter(D=>D.type==g.q.CATEGORY)}}j.\u0275fac=function(l){return new(l||j)(b.LFG(V.e))},j.\u0275prov=b.Yz7({token:j,factory:j.\u0275fac,providedIn:"root"})},2065:(Z,C,u)=>{u.d(C,{Z:()=>j});var y=u(4244),g=u(1342),L=u(1571),b=u(6833),V=u(1513);class j{constructor(l,U){this.historyService=l,this.todoRepository=U,U.activeTasks$.subscribe(w=>{this.updateSnapshot(w)})}renewStore(){let l={...g.G.getValue()};this.historyService.archive(l),g.G.update(U=>({date:(0,y.lJ)(),tasks:[]})),this.todoRepository.releaseAllTasks()}updateSnapshot(l){g.G.update(U=>({...U,tasks:l}))}checkConsistency(){let l=g.G.getValue().date;(0,y.RR)(l)&&this.renewStore()}}j.\u0275fac=function(l){return new(l||j)(L.LFG(b.q),L.LFG(V.e))},j.\u0275prov=L.Yz7({token:j,factory:j.\u0275fac,providedIn:"root"})},1342:(Z,C,u)=>{u.d(C,{G:()=>b});var y=u(1331),g=u(3994),L=u(4244);const b=(0,y.MT)({name:"snapshot"},(0,y.vl)({date:(0,L.lJ)(),tasks:[]}));(0,g.xi)(b,{key:"snapshot-data",storage:g.n4})},9070:(Z,C,u)=>{u.d(C,{e:()=>y.e});var y=u(1513)},1513:(Z,C,u)=>{u.d(C,{e:()=>$});var y=u(1331),g=u(5890),L=u(3994),b=u(1382),V=u(4004);const O={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let l;const U=new Uint8Array(16);function w(){if(!l&&(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(U)}const M=[];for(let E=0;E<256;++E)M.push((E+256).toString(16).slice(1));const v=function W(E,s,d){if(O.randomUUID&&!s&&!E)return O.randomUUID();const S=(E=E||{}).random||(E.rng||w)();if(S[6]=15&S[6]|64,S[8]=63&S[8]|128,s){d=d||0;for(let B=0;B<16;++B)s[d+B]=S[B];return s}return function D(E,s=0){return(M[E[s+0]]+M[E[s+1]]+M[E[s+2]]+M[E[s+3]]+"-"+M[E[s+4]]+M[E[s+5]]+"-"+M[E[s+6]]+M[E[s+7]]+"-"+M[E[s+8]]+M[E[s+9]]+"-"+M[E[s+10]]+M[E[s+11]]+M[E[s+12]]+M[E[s+13]]+M[E[s+14]]+M[E[s+15]]).toLowerCase()}(S)};var K;!function(E){let s,d;!function(S){function k(Q){return(0,g._L)(Q,{ref:g.LN})}S.on=function B(Q){return(0,g.g3)({id:Q,active:!0},{ref:g.LN})},S.off=function J(Q){return k([Q])},S.setActive=function nt(Q,it){return(0,g.jB)([Q],{active:it},{ref:g.LN})},S.offAll=k}(s=E.Reducers||(E.Reducers={})),(d=E.Functions||(E.Functions={})).isActive=function B(J,nt){let k=nt.getValue().UIEntities[J];return!!k&&k.active}}(K||(K={}));var x=u(1571);const _=(0,y.MT)({name:"task"},(0,g.h4)(),(0,g.KN)());(0,L.xi)(_,{key:"task-data",storage:L.n4});class ${constructor(){this.uiStates$=_.pipe((0,g.OR)({ref:g.LN})),this.items$=_.combine({entities:_.pipe((0,g.WK)()),UIEntities:this.uiStates$}).pipe((0,g.yh)()),this.categoryItems$=this.items$.pipe((0,V.U)(s=>s.filter(d=>d.type===b.q.CATEGORY))),this.groupItems$=this.items$.pipe((0,V.U)(s=>s.filter(d=>d.type===b.q.GROUP))),this.taskItems$=this.items$.pipe((0,V.U)(s=>s.filter(d=>d.type===b.q.TASK))),this.activeTasks$=this.taskItems$.pipe((0,V.U)(s=>s.filter(d=>d.active)))}addCategory(s){this.addItem(s,b.q.CATEGORY)}addGroup(s,d){this.addItem(s,b.q.GROUP,d)}addTask(s,d){this.addItem(s,b.q.TASK,d)}updateItem(s,d){_.update((0,g.jB)([s],S=>({...S,name:d})))}removeItem(s){if(K.Functions.isActive(s,_))return;let d=this.getValue().entities[s];_.update((0,g._L)(s)),d.parent&&_.update(K.Reducers.setActive(d.parent,this.hasChild(d.parent)))}doneTask(s){_.update(K.Reducers.on(s))}undoneTask(s){_.update(K.Reducers.off(s))}releaseAllTasks(){let s=this.getActiveItemIds(b.q.TASK);_.update(K.Reducers.offAll(s))}addItem(s,d,S){const B={id:v(),name:s,type:d,parent:S};_.update((0,g.dP)(B)),S&&_.update(K.Reducers.on(S)),this.order(B)}order(s){if(s.type==b.q.CATEGORY)return;const d=_.query((0,g.VN)()),S=d.length;if(S<=1)return;const B=d.findLastIndex(k=>k.parent==s.parent&&k!=s),J=d.findIndex(k=>k.id==s.parent);_.update((0,g.mf)({fromIndex:S-1,toIndex:d[B]?B+1:J+1}))}hasChild(s){return this.getItems().some(d=>d.parent==s)}getActiveItemIds(s){return this.getActiveItems(s).map(d=>d.id)}getActiveItems(s){let d=this.getValue().UIIds;return this.getItems(s).filter(S=>d.includes(S.id))}getItems(s){let d=(0,g.VN)();return s&&(d=(0,g.Dc)({filterEntity:S=>S.type==s})),_.query(d)}getValue(){return _.getValue()}}$.\u0275fac=function(s){return new(s||$)},$.\u0275prov=x.Yz7({token:$,factory:$.\u0275fac,providedIn:"root"})},5890:(Z,C,u)=>{u.d(C,{Dc:()=>J,KN:()=>W,LN:()=>tt,M3:()=>x,OR:()=>at,VN:()=>B,WK:()=>ut,_L:()=>v,dP:()=>_,g3:()=>yt,h4:()=>D,jB:()=>rt,mf:()=>ht,yh:()=>A});var y=u(1331),g=u(9635),L=u(1884),b=u(4004);function V(e,n){const t={},r=[];for(const o of e){const c=o[n];r.push(c),t[c]=o}return{ids:r,asObject:t}}function U(e,n){return e.config[n.idKeyRef]}class w{constructor(n){this.idKeyRef="idKey",this.entitiesKey=n.entitiesKey,this.idsKey=n.idsKey,this.idKeyRef=n.idKeyRef}}function M(e){const n=e?`idKey${(0,y.kC)(e)}`:"idKey",t=new w({entitiesKey:e?`${e}Entities`:"entities",idsKey:e?`${e}Ids`:"ids",idKeyRef:n});return{[`${e}EntitiesRef`]:t,[`with${(0,y.kC)(e)}Entities`]:function r(o){let c={},f=[];const h=o?.idKey||"id";return null!=o&&o.initialValue&&({ids:f,asObject:c}=V(o.initialValue,h)),{props:{[t.entitiesKey]:c,[t.idsKey]:f},config:{[n]:h}}}}}const{withEntities:D,EntitiesRef:p}=M(""),{UIEntitiesRef:tt,withUIEntities:W}=M("UI");function v(e,n={}){return function(t){const{ref:{idsKey:r,entitiesKey:o}=p}=n,c=(0,y.Eq)(e),f=Object.assign({},t[o]),h=t[r].filter(R=>!c.includes(R));for(const R of c)Reflect.deleteProperty(f,R);return Object.assign({},t,{[o]:f,[r]:h})}}function x(e={}){return function(t){const{ref:{idsKey:r,entitiesKey:o}=p}=e;return Object.assign({},t,{[o]:{},[r]:[]})}}function _(e,n={}){return function(t,r){const{prepend:o=!1,ref:c=p}=n,{entitiesKey:f,idsKey:h}=c,R=U(r,c),T=(0,y.Eq)(e);if(!T.length)return t;(0,y.r8)()&&(function $(e,n,t,r){e.forEach(o=>{const c=o[n];if(t[r][c])throw Error(`Entity already exists. ${n} ${c}`)})}(T,R,t,f),function E(e,n){const t=new Set;e.forEach(r=>{const o=r[n];if(t.has(o))throw Error(`Duplicate entity id provided. ${n} ${o}`);t.add(o)})}(T,R));const{ids:F,asObject:H}=V(T,R);return Object.assign({},t,{[f]:Object.assign({},t[f],H),[h]:o?[...F,...t[h]]:[...t[h],...F]})}}function B(e={}){const{ref:{entitiesKey:n,idsKey:t}=p}=e;return function(r){return r[t].map(o=>r[n][o])}}function J(e){const{ref:{entitiesKey:n,idsKey:t}=p,filterEntity:r=(()=>!0),mapEntity:o=(c=>c)}=e;return function(c){const f=[];for(const h of c[t]){const R=c[n][h];r(R)&&f.push(o(R))}return f}}function k(e,n={}){return function(t){const{ref:{entitiesKey:r}=p}=n;return Reflect.has(t[r],e)}}function st(e,n){return(0,y.mf)(e)?e(n):Object.assign({},n,e)}function rt(e,n,t={}){return function(r){const{ref:{entitiesKey:o}=p}=t,c={};for(const f of(0,y.Eq)(e))c[f]=st(n,r[o][f]);return Object.assign({},r,{[o]:Object.assign({},r[o],c)})}}function yt(e,n={}){return function(t,r){const{prepend:o=!1,ref:c=p}=n,{entitiesKey:f,idsKey:h}=c,R=U(r,c),T={},F=[],H=(0,y.Eq)(e);if(!H.length)return t;for(const X of H){const N=X[R];k(N,n)(t)?T[N]=Object.assign({},t[f][N],X):(F.push(N),T[N]=X)}const z=F.length?{[h]:o?[...F,...t[h]]:[...t[h],...F]}:{};return Object.assign({},t,z,{[f]:Object.assign({},t[f],T)})}}function ht(e){return function(n){const{fromIndex:t,toIndex:r,ref:{idsKey:o,entitiesKey:c}=p}=e,f=n[o].slice();return f.splice(r<0?f.length+r:r,0,f.splice(t,1)[0]),Object.assign({},n,{[c]:Object.assign({},n[c]),[o]:f})}}function ut(e={}){const{ref:{entitiesKey:n,idsKey:t}=p}=e;return(0,g.z)(function et(e){return(0,L.x)((n,t)=>n[e]===t[e])}(n),(0,b.U)(r=>r[t].map(o=>r[n][o])))}function at(e={}){const{ref:{entitiesKey:n}=p}=e;return(0,y.Ys)(t=>t[n])}function A(e="id"){return(0,b.U)(n=>n.entities.map(t=>Object.assign({},t,n.UIEntities[t[e]])))}(0,y.U4)("activeId",{initialValue:void 0}),(0,y.v8)("activeIds",{initialValue:[]})},3994:(Z,C,u)=>{u.d(C,{n4:()=>M,xi:()=>l});var y=u(9646),g=u(7579),L=u(6063);class b extends g.x{constructor(v=1/0,K=1/0,x=L.l){super(),this._bufferSize=v,this._windowTime=K,this._timestampProvider=x,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=K===1/0,this._bufferSize=Math.max(1,v),this._windowTime=Math.max(1,K)}next(v){const{isStopped:K,_buffer:x,_infiniteTimeWindow:_,_timestampProvider:Y,_windowTime:$}=this;K||(x.push(v),!_&&x.push(Y.now()+$)),this._trimBuffer(),super.next(v)}_subscribe(v){this._throwIfClosed(),this._trimBuffer();const K=this._innerSubscribe(v),{_infiniteTimeWindow:x,_buffer:_}=this,Y=_.slice();for(let $=0;$<Y.length&&!v.closed;$+=x?1:2)v.next(Y[$]);return this._checkFinalizedStatuses(v),K}_trimBuffer(){const{_bufferSize:v,_timestampProvider:K,_buffer:x,_infiniteTimeWindow:_}=this,Y=(_?1:2)*v;if(v<1/0&&Y<x.length&&x.splice(0,x.length-Y),!_){const $=K.now();let E=0;for(let s=1;s<x.length&&x[s]<=$;s+=2)E=s;E&&x.splice(0,E+1)}}}var V=u(2076),j=u(5684),O=u(3900);function l(W,v){var K;const x={source:d=>d,preStoreInit:d=>d,key:null!=(K=v.key)?K:`${W.name}@store`,runGuard:()=>typeof window<"u"},_=Object.assign({},x,v);if(null==_.runGuard||!_.runGuard())return{initialized$:(0,y.of)(!1),unsubscribe(){}};const{storage:Y}=v,$=new b(1),E=(0,V.D)(Y.getItem(_.key)).subscribe(d=>{d&&W.update(S=>_.preStoreInit(Object.assign({},S,d))),$.next(!0),$.complete()}),s=_.source(W).pipe((0,j.T)(1),(0,O.w)(d=>Y.setItem(_.key,d))).subscribe();return{initialized$:$.asObservable(),unsubscribe(){s.unsubscribe(),E.unsubscribe()}}}function U(W){if(W)return{getItem(v){const K=W.getItem(v);return(0,y.of)(K&&JSON.parse(K))},setItem:(v,K)=>(W.setItem(v,JSON.stringify(K)),(0,y.of)(!0)),removeItem:v=>(W.removeItem(v),(0,y.of)(!0))}}const M=U((()=>{try{if(typeof localStorage<"u")return localStorage}catch{}})());U((()=>{try{if(typeof sessionStorage<"u")return sessionStorage}catch{}})())},1331:(Z,C,u)=>{u.d(C,{Eq:()=>B,MT:()=>S,U4:()=>et,Ys:()=>ct,kC:()=>Q,mf:()=>J,r8:()=>Ot,v8:()=>ut,vl:()=>mt});var y=u(1135),g=u(7579),L=u(9751),b=u(9635),V=u(9300),j=u(5698),O=u(4004),l=u(1884);const w=new y.X(!1),M=w.asObservable().pipe((0,V.h)(i=>!i),(0,j.q)(1)),p={};new class tt{registerPreStoreUpdate(a){p.preStoreUpdate=a}registerPreStateInit(a){p.preStateInit=a}};const v=new Map,K=new g.x;K.asObservable();class d extends y.X{constructor(a){super(a.state),this.storeDef=a,this.batchInProgress=!1,this.context={config:this.getConfig()},this.state=this.getInitialState(a.state),this.initialState=this.getValue(),function _(i){v.set(i.name,i),K.next({type:"add",store:i})}(this)}get name(){return this.storeDef.name}getInitialState(a){return p.preStateInit?p.preStateInit(a,this.name):a}getConfig(){return this.storeDef.config}query(a){return a(this.getValue())}update(...a){const P=this.getValue();let m=a.reduce((A,I)=>I(A,this.context),P);p.preStoreUpdate&&(m=p.preStoreUpdate(P,m,this.name)),m!==P&&(this.state=m,w.getValue()?this.batchInProgress||(this.batchInProgress=!0,M.subscribe(()=>{super.next(this.state),this.batchInProgress=!1})):super.next(this.state))}getValue(){return this.state}reset(){this.update(()=>this.initialState)}combine(a){let P=!0;const m={};return new L.y(A=>{for(const[I,G]of Object.entries(a))A.add(G.subscribe(q=>{m[I]=q,P=!0}));return this.subscribe({next(){P&&(A.next(m),P=!1)},error(I){A.error(I)},complete(){A.complete()}})})}destroy(){(function Y(i){v.delete(i.name),K.next({type:"remove",store:i})})(this),this.reset()}next(a){this.update(()=>a)}error(){}complete(){}}function S(i,...a){const{state:P,config:m}=function U(...i){const a={config:{},state:{}};for(const{config:P,props:m}of i)Object.assign(a.config,P),Object.assign(a.state,m);return a}(...a),{name:A}=i;return new d({name:A,state:P,config:m})}function B(i){return Array.isArray(i)?i:[i]}function J(i){return"function"==typeof i}function Q(i){return i.charAt(0).toUpperCase()+i.slice(1)}function it(i){return"object"==typeof i&&!Array.isArray(i)&&null!==i}function ct(i){return(0,b.z)((0,O.U)(i),(0,l.x)())}function et(i,{initialValue:a,config:P}){let m=a;const A=Q(i);return{[`with${A}`]:(I=m)=>({props:{[i]:I},config:P}),[`set${A}InitialValue`](I){m=I},[`set${A}`]:I=>function(G){const q=J(I)?I(G):I;return q===G[i]?G:Object.assign({},G,{[i]:q})},[`update${A}`]:I=>function(G){const q=J(I)?I(G):I;return q===G[i]?G:Object.assign({},G,{[i]:it(q)?Object.assign({},G[i],q):q})},[`reset${A}`]:()=>function(I){return Object.assign({},I,{[i]:m})},[`select${A}`]:()=>ct(I=>I[i]),[`get${A}`]:I=>I[i]}}function ut(i,a){const P=Q(i),m=et(i,a);return Object.assign({},m,{[`add${P}`]:A=>function(I){return Object.assign({},I,{[i]:at(I[i],A)})},[`remove${P}`]:A=>function(I){return Object.assign({},I,{[i]:gt(I[i],A)})},[`toggle${P}`]:A=>function(I){return Object.assign({},I,{[i]:dt(I[i],A)})},[`update${P}`]:(A,I)=>function(G){return Object.assign({},G,{[i]:Et(G[i],A,I)})},[`in${P}`]:A=>I=>function ot(i,a){return i.includes(a)}(I[i],A)})}function at(i,a){return[...i,...B(a)]}function gt(i,a){const P=B(a);return i.filter(m=>!P.includes(m))}function dt(i,a){const P=B(a),m=[...i];return P.forEach(A=>{const I=m.indexOf(A);I>-1?m.splice(I,1):m.push(A)}),m}function Et(i,a,P){return i.map(m=>m===a?P:m)}function mt(i){return{props:i,config:void 0}}function Ot(){return true}}}]);