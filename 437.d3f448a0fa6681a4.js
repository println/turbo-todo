"use strict";(self.webpackChunkturbo_todo=self.webpackChunkturbo_todo||[]).push([[437],{9437:($,d,s)=>{s.r(d),s.d(d,{SettingsModule:()=>r});var u=s(6895),c=s(433),f=s(9877),t=s(1571),b=s(3440),v=s(6833),x=s(2661),y=s(2065);function Z(o,e){if(1&o&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.Q6J("value",n.id),t.xp6(1),t.Oqu(n.name)}}const p=function(){return{standalone:!0}};function M(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"label",10),t._uU(3,"Grupo"),t.qZA()(),t.TgZ(4,"div",1)(5,"div",11)(6,"select",12,13)(8,"option",14),t._uU(9,"Escolha uma categoria"),t.qZA(),t.YNc(10,Z,2,2,"option",15),t.qZA()()(),t.TgZ(11,"div",1)(12,"div",3)(13,"input",16,17),t.NdJ("ngModelChange",function(l){t.CHM(n);const _=t.oxw();return t.KtG(_.models.groupName=l)}),t.qZA()(),t.TgZ(15,"div",6)(16,"button",7),t.NdJ("click",function(){t.CHM(n);const l=t.MAs(14),_=t.MAs(7),m=t.oxw();return t.KtG(m.addGroup(l.value,_.value))}),t._uU(17,"Adicionar "),t.qZA()()()()}if(2&o){const n=e.ngIf,i=t.MAs(7),l=t.MAs(14),_=t.oxw();t.xp6(6),t.Q6J("ngModelOptions",t.DdM(7,p))("disabled",!n.length),t.xp6(4),t.Q6J("ngForOf",n),t.xp6(3),t.Q6J("ngModel",_.models.groupName)("ngModelOptions",t.DdM(8,p))("disabled",!i.value),t.xp6(3),t.Q6J("disabled",!l.value)}}function T(o,e){if(1&o&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.Q6J("value",n.id),t.xp6(1),t.Oqu(n.name)}}function C(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"label",19),t._uU(3,"Tarefa"),t.qZA()(),t.TgZ(4,"div",1)(5,"div",11)(6,"select",12,20)(8,"option",14),t._uU(9,"Escolha um grupo"),t.qZA(),t.YNc(10,T,2,2,"option",15),t.qZA()()(),t.TgZ(11,"div",1)(12,"div",3)(13,"input",21,22),t.NdJ("ngModelChange",function(l){t.CHM(n);const _=t.oxw();return t.KtG(_.models.taskName=l)}),t.qZA()(),t.TgZ(15,"div",6)(16,"button",7),t.NdJ("click",function(){t.CHM(n);const l=t.MAs(14),_=t.MAs(7),m=t.oxw();return t.KtG(m.addTask(l.value,_.value))}),t._uU(17,"Adicionar "),t.qZA()()()()}if(2&o){const n=e.ngIf,i=t.MAs(7),l=t.MAs(14),_=t.oxw();t.xp6(6),t.Q6J("ngModelOptions",t.DdM(7,p))("disabled",!n.length),t.xp6(4),t.Q6J("ngForOf",n),t.xp6(3),t.Q6J("ngModel",_.models.taskName)("ngModelOptions",t.DdM(8,p))("disabled",!i.value),t.xp6(3),t.Q6J("disabled",!l.value)}}function A(o,e){1&o&&(t.TgZ(0,"span",30),t._uU(1,"Em uso"),t.qZA())}function h(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(n);const l=t.oxw().$implicit,_=t.oxw(2);return t.KtG(_.removeItem(l.id))}),t._uU(1," Remover "),t.qZA()}}function k(o,e){1&o&&(t.TgZ(0,"span",30),t._uU(1,"Em uso"),t.qZA())}function I(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",39),t.NdJ("click",function(){t.CHM(n);const l=t.oxw(2).$implicit,_=t.oxw(4);return t.KtG(_.removeItem(l.id))}),t._uU(1," Remover "),t.qZA()}}function N(o,e){1&o&&(t.TgZ(0,"span",30),t._uU(1,"Em uso"),t.qZA())}function J(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",39),t.NdJ("click",function(){t.CHM(n);const l=t.oxw(2).$implicit,_=t.oxw(7);return t.KtG(_.removeItem(l.id))}),t._uU(1,"Remover "),t.qZA()}}function S(o,e){if(1&o&&(t.TgZ(0,"li",42)(1,"p",43),t._uU(2),t.qZA(),t.YNc(3,N,2,0,"span",27),t.YNc(4,J,2,0,"button",37),t.qZA()),2&o){const n=t.oxw().$implicit;t.xp6(2),t.hij("task: ",n.name,""),t.xp6(1),t.Q6J("ngIf",n.active),t.xp6(1),t.Q6J("ngIf",!n.active)}}function Q(o,e){if(1&o&&(t.ynx(0),t.YNc(1,S,5,3,"li",41),t.BQk()),2&o){const n=e.$implicit,i=t.oxw(3).$implicit;t.xp6(1),t.Q6J("ngIf",i.id==n.parent)}}function q(o,e){if(1&o&&(t.TgZ(0,"ul",40),t.YNc(1,Q,2,1,"ng-container",33),t.qZA()),2&o){const n=e.ngIf;t.xp6(1),t.Q6J("ngForOf",n)}}function Y(o,e){if(1&o&&(t.TgZ(0,"li",35)(1,"p",36),t._uU(2),t.qZA(),t.YNc(3,k,2,0,"span",27),t.YNc(4,I,2,0,"button",37),t.YNc(5,q,2,1,"ul",38),t.ALo(6,"async"),t.qZA()),2&o){const n=t.oxw().$implicit,i=t.oxw(4);t.xp6(2),t.hij("Grupo: ",n.name,""),t.xp6(1),t.Q6J("ngIf",n.active),t.xp6(1),t.Q6J("ngIf",!n.active),t.xp6(1),t.Q6J("ngIf",t.lcZ(6,4,i.taskRepository.taskItems$))}}function O(o,e){if(1&o&&(t.ynx(0),t.YNc(1,Y,7,6,"li",34),t.BQk()),2&o){const n=e.$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf",i.id==n.parent)}}function F(o,e){if(1&o&&(t.TgZ(0,"ol",32),t.YNc(1,O,2,1,"ng-container",33),t.qZA()),2&o){const n=e.ngIf;t.xp6(1),t.Q6J("ngForOf",n)}}function U(o,e){if(1&o&&(t.TgZ(0,"li",25)(1,"p",26),t._uU(2),t.qZA(),t.YNc(3,A,2,0,"span",27),t.YNc(4,h,2,0,"button",28),t.YNc(5,F,2,1,"ol",29),t.ALo(6,"async"),t.qZA()),2&o){const n=e.$implicit,i=t.oxw(2);t.xp6(2),t.hij("Categoria: ",n.name,""),t.xp6(1),t.Q6J("ngIf",n.active),t.xp6(1),t.Q6J("ngIf",!n.active),t.xp6(1),t.Q6J("ngIf",t.lcZ(6,4,i.taskRepository.groupItems$))}}function w(o,e){if(1&o&&(t.TgZ(0,"ol",23),t.YNc(1,U,7,6,"li",24),t.qZA()),2&o){const n=e.ngIf;t.xp6(1),t.Q6J("ngForOf",n)}}class g{constructor(e,n,i,l,_){this.taskRepository=e,this.historyQuery=n,this.historyService=i,this.snapshotQuery=l,this.snapshotService=_,this.models={categoryName:"",groupName:"",taskName:""}}addCategory(e){this.taskRepository.addCategory(e),this.models.categoryName=""}addGroup(e,n){this.taskRepository.addGroup(e,n),this.models.groupName=""}addTask(e,n){this.taskRepository.addTask(e,n),this.models.taskName=""}renameItem(e,n){this.taskRepository.updateItem(e,n)}removeItem(e){this.taskRepository.removeItem(e)}}g.\u0275fac=function(e){return new(e||g)(t.Y36(b.e),t.Y36(v.Z),t.Y36(v.q),t.Y36(x.F),t.Y36(y.Z))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-settings"]],decls:22,vars:13,consts:[[1,"container"],[1,"row"],["for","category",1,"col-sm-2","col-form-label"],[1,"col-8"],["type","text","id","category",1,"form-control","col",3,"ngModel","ngModelOptions","ngModelChange"],["categoryName","ngModel"],[1,"col-4"],["type","submit",1,"btn","btn-primary","mb-3","w-100",3,"disabled","click"],["class","container",4,"ngIf"],["class","list-group",4,"ngIf"],["for","group",1,"col-sm-2","col-form-label"],[1,"col-8","mb-2"],["ngModel","","aria-label","Default select example",1,"form-select",3,"ngModelOptions","disabled"],["categoryId","ngModel"],["selected","","value",""],[3,"value",4,"ngFor","ngForOf"],["type","text","id","group",1,"form-control","col",3,"ngModel","ngModelOptions","disabled","ngModelChange"],["groupName","ngModel"],[3,"value"],["for","task",1,"col-sm-2","col-form-label"],["groupId","ngModel"],["type","text","id","task",1,"form-control","col",3,"ngModel","ngModelOptions","disabled","ngModelChange"],["taskName","ngModel"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"d-inline-block","m-0","pe-2","fw-bold"],["class","badge rounded-pill text-bg-warning",4,"ngIf"],["type","button","class","btn btn-primary btn-sm",3,"click",4,"ngIf"],["type","a","class","list-group mt-1",4,"ngIf"],[1,"badge","rounded-pill","text-bg-warning"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["type","a",1,"list-group","mt-1"],[4,"ngFor","ngForOf"],["class","list-group-item bd-gray-200",4,"ngIf"],[1,"list-group-item","bd-gray-200"],[1,"d-inline-block","m-0","pe-2"],["type","button","class","btn btn-primary btn-sm m-0 p-1",3,"click",4,"ngIf"],["class","list-group  mt-1",4,"ngIf"],["type","button",1,"btn","btn-primary","btn-sm","m-0","p-1",3,"click"],[1,"list-group","mt-1"],["class","list-group-item bg-warning bg-opacity-50",4,"ngIf"],[1,"list-group-item","bg-warning","bg-opacity-50"],[1,"d-inline-block","m-0","p-0","pe-2"]],template:function(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"h2"),t._uU(1,"Inclus\xe3o"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"label",2),t._uU(5,"Categoria"),t.qZA()(),t.TgZ(6,"div",1)(7,"div",3)(8,"input",4,5),t.NdJ("ngModelChange",function(_){return n.models.categoryName=_}),t.qZA()(),t.TgZ(10,"div",6)(11,"button",7),t.NdJ("click",function(){t.CHM(i);const _=t.MAs(9);return t.KtG(n.addCategory(_.value))}),t._uU(12,"Adicionar "),t.qZA()()()(),t.YNc(13,M,18,9,"div",8),t.ALo(14,"async"),t.YNc(15,C,18,9,"div",8),t.ALo(16,"async"),t._UZ(17,"br"),t.TgZ(18,"h2"),t._uU(19,"Itens"),t.qZA(),t.YNc(20,w,2,1,"ol",9),t.ALo(21,"async")}if(2&e){const i=t.MAs(9);t.xp6(8),t.Q6J("ngModel",n.models.categoryName)("ngModelOptions",t.DdM(12,p)),t.xp6(3),t.Q6J("disabled",!i.value),t.xp6(2),t.Q6J("ngIf",t.lcZ(14,6,n.taskRepository.categoryItems$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(16,8,n.taskRepository.groupItems$)),t.xp6(5),t.Q6J("ngIf",t.lcZ(21,10,n.taskRepository.categoryItems$))}},dependencies:[u.sg,u.O5,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.On,u.Ov]});const R=[{path:"",children:[{path:"",pathMatch:"full",component:g,runGuardsAndResolvers:"paramsOrQueryParamsChange"}]}];class a{}a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[f.Bz.forChild(R),f.Bz]});class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[u.ez,c.u5,a]})}}]);