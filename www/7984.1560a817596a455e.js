"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7984],{7984:(C,c,r)=>{r.r(c),r.d(c,{Tab4PageModule:()=>P});var a=r(1075),d=r(177),g=r(4341),v=r(1307),u=r(8986),m=r(467),p=r(454),e=r(4438),h=r(2617);function f(t,s){if(1&t){const n=e.RV6();e.j41(0,"ion-card",7),e.bIt("click",function(){const i=e.eBV(n).$implicit,l=e.XpG();return e.Njj(l.openModal(i.imdbID))}),e.nrm(1,"img",8),e.j41(2,"ion-card-header")(3,"ion-card-title",9),e.EFF(4),e.k0s(),e.j41(5,"ion-card-subtitle"),e.EFF(6),e.k0s()()()}if(2&t){const n=s.$implicit;e.R7$(),e.Y8G("src",n.Poster,e.B4B),e.R7$(3),e.JRh(n.Title.length>17?n.Title.substring(0,17)+"...":n.Title),e.R7$(2),e.JRh(n.Year)}}const T=[{path:"",component:(()=>{var t;class s{constructor(o,i,l){this.movieService=o,this.loadingCtrl=i,this.modalCtrl=l,this.movies=[],this.searchInput=""}getData(o){var i=this;return(0,m.A)(function*(){const l=yield i.loadingCtrl.create({message:"Consultando "+o+" ..."});l.present(),i.movies=yield i.movieService.searchSeries(o),l.dismiss()})()}openModal(o){var i=this;return(0,m.A)(function*(){(yield i.modalCtrl.create({component:p.j,componentProps:{imdbID:o}})).present()})()}}return(t=s).\u0275fac=function(o){return new(o||t)(e.rXU(h.R),e.rXU(a.Xi),e.rXU(a.W3))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-tab4"]],decls:12,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["placeholder","Buscar series",3,"ionInput","debounce"],[1,"movies-container"],["class","movie-card",3,"click",4,"ngFor","ngForOf"],[1,"movie-card",3,"click"],[3,"src"],[1,"movie-title"]],template:function(o,i){1&o&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," Series "),e.k0s()()(),e.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e.EFF(8,"Series"),e.k0s()()(),e.j41(9,"ion-searchbar",4),e.bIt("ionInput",function(M){return i.getData(M.detail.value)}),e.k0s(),e.j41(10,"div",5),e.DNE(11,f,7,3,"ion-card",6),e.k0s()()),2&o&&(e.Y8G("translucent",!0),e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(5),e.Y8G("debounce",1500),e.R7$(2),e.Y8G("ngForOf",i.movies))},dependencies:[a.b_,a.ME,a.HW,a.tN,a.W9,a.eU,a.S1,a.BC,a.ai,a.Gw,d.Sq],styles:[".movies-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.movie-card[_ngcontent-%COMP%]{max-width:40vw;height:auto}.movie-title[_ngcontent-%COMP%]{font-size:1rem}"]}),s})()}];let b=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[u.iI.forChild(T),u.iI]}),s})(),P=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[a.bv,d.MD,g.YN,v.S,b]}),s})()}}]);