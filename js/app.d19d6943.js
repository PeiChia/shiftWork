(function(t){function e(e){for(var s,d,o=e[0],l=e[1],i=e[2],b=0,u=[];b<o.length;b++)d=o[b],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&u.push(r[d][0]),r[d]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(u.length)u.shift()();return n.push.apply(n,i||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=d(d.s=a[0]))}return t}var s={},r={app:0},n=[];function d(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.m=t,d.c=s,d.d=function(t,e,a){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)d.d(a,s,function(e){return t[e]}.bind(null,s));return a},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/shiftWork/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},"52ff":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=a("5f5b");a("ab8b"),a("2dd8");s["default"].use(r["a"]);var n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("router-view")],1)},d=[],o=function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{staticStyle:{"background-color":"#f03b0e"},attrs:{type:"dark"}},[e("b-navbar-brand",{staticClass:"mx-auto"},[e("b",[t._v("排班小工具")])])],1)],1)},l=[],i=a("2877"),c={},b=Object(i["a"])(c,o,l,!1,null,null,null),u=b.exports,f={components:{NavBar:u}},j=f,p=(a("9142"),Object(i["a"])(j,n,d,!1,null,null,null)),m=p.exports,_=a("8c4f"),h=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"shift"}},[e("b-container",{staticClass:"ml-2 mr-2"},[e("b-row",{staticClass:"mt-3"},[e("b-col",{attrs:{cols:"4"}},[e("h5",[t._v("請選擇日期區段")])]),e("b-col",{attrs:{cols:"8"}},[e("h5",[t._v("班表資訊")])])],1),e("b-row",[e("b-col",{attrs:{cols:"4"}},[e("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[e("b-form-group",{attrs:{id:"start_date_group",label:"開始時間：","label-for":"start_date"}},[e("b-form-datepicker",{attrs:{id:"start_date",disabled:t.okStatus},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),e("b-form-group",{attrs:{id:"end_date_group",label:"結束時間：","label-for":"end_date"}},[e("b-form-datepicker",{attrs:{id:"end_date",disabled:t.okStatus},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),e("b-button",{staticClass:"mr-2",attrs:{pill:"",type:"submit",variant:"primary",disabled:t.okStatus}},[t._v("OK")]),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],staticClass:"mr-2",attrs:{pill:"",variant:"primary",disabled:t.addStatus}},[t._v("Add")]),e("b-button",{staticClass:"mr-2",attrs:{pill:"",type:"reset",variant:"danger"}},[t._v("Reset All")]),e("b-button",{attrs:{pill:"",variant:"info",disabled:t.exportStatus}},[e("ExportCSV",{attrs:{data:t.exportCsv,name:"shift.csv"}},[t._v("Export to CSV")])],1)],1)],1),e("b-col",{attrs:{cols:"8"}},[e("b-card",{staticClass:"mb-5"},[e("b-card-text",[0==t.rows?e("label",[t._v("目前無資料")]):t._e(),e("b-table",{attrs:{striped:"",hover:"",items:t.dates,busy:t.isBusy,"per-page":t.perPage,"current-page":t.currentPage},scopedSlots:t._u([{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center text-danger my-2"},[e("b-spinner",{staticClass:"align-middle mr-2"}),e("strong",[t._v("Loading...")])],1)]},proxy:!0}])})],1),e("b-card-text",[e("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last",pills:""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1),e("AddData",{attrs:{dates:t.dates},on:{orgnizeData:t.orgnizeData}})],1)},v=[],S=(a("caad"),a("68af")),y={diffDays(t,e){return e.diff(t,"days")},writeDates(t,e){let a=this.diffDays(t,e),s=[];for(let r=0;r<=a;r++){let e=0==r?t.format("MM/DD/YYYY"):t.add(1,"days").format("MM/DD/YYYY");s.push({date:e,type:""})}return s},mapData(t){let e=[];return e=t.map(t=>{let e=S.map(e=>e.Subject==t.type&&""!==t.type).indexOf(!0);if(e>=0)return S[e].Start_Date=t.date,S[e].End_Date=t.date,{Subject:S[e].Subject,"Start Date":t.date,"Start Time":S[e].Start_Time,"End Date":t.date,"End Time":S[e].End_Time,"All Day Event":S[e].All_Day_Event}}),e}},D=function(){var t=this,e=t._self._c;return e("div",[e("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"請選擇班別類型與日期"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleSubmit}},[e("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"班別類型："}},[e("b-form-select",{attrs:{options:t.shiftType,"text-field":"Subject","value-field":"Subject"},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Please select an option --")])]},proxy:!0}]),model:{value:t.typeSelected,callback:function(e){t.typeSelected=e},expression:"typeSelected"}})],1),e("b-form-group",{attrs:{label:"日期："},scopedSlots:t._u([{key:"default",fn:function({ariaDescribedby:a}){return[e("b-form-checkbox-group",{attrs:{id:"date-checkbox-group",options:t.datesArray,"aria-describedby":a},model:{value:t.dateSelected,callback:function(e){t.dateSelected=e},expression:"dateSelected"}})]}}])})],1)])],1)},g=[],E={props:["dates"],data(){return{shiftType:S,typeSelected:null,dateSelected:[],orgnizeData:[]}},computed:{datesArray(){return this.dates.map(t=>t.date)}},methods:{resetModal(){this.typeSelected=null,this.dateSelected=[]},handleSubmit(){this.dates.forEach(t=>{this.dateSelected.includes(t.date)&&(t.type=this.typeSelected)}),this.orgnizeData=y.mapData(this.dates),this.$emit("orgnizeData",this.orgnizeData)}}},k=E,x=Object(i["a"])(k,D,g,!1,null,null,null),A=x.exports,w=a("2347"),T=a.n(w),M=a("c1df"),z=a.n(M),P={components:{AddData:A,ExportCSV:T.a},data(){return{startDate:"",endDate:"",dates:[],isBusy:!1,rows:0,perPage:30,currentPage:1,okStatus:!1,addStatus:!0,exportStatus:!0,exportCsv:[]}},methods:{onSubmit(){event.preventDefault(),this.okStatus=!0,this.addStatus=!1;let t=z()(this.startDate),e=z()(this.endDate);this.rows=y.diffDays(t,e)+1,this.dates=y.writeDates(t,e),this.isBusy=!0,setTimeout(()=>{this.isBusy=!1},500)},onReset(){this.startDate="",this.endDate="",this.rows=0,this.dates=[],this.exportCsv=[],this.okStatus=!1,this.addStatus=!0,this.exportStatus=!0},orgnizeData(t){this.exportCsv=t}},watch:{exportCsv:{handler:function(t){t.includes(void 0)?this.exportStatus=!0:this.exportStatus=!1},deep:!0}}},O=P,C=Object(i["a"])(O,h,v,!1,null,"4842bff3",null),B=C.exports;s["default"].use(_["a"]);const F=[{path:"/",name:"Shift",component:B}],L=new _["a"]({mode:"history",base:"/shiftWork/",routes:F});var Y=L,N=a("2f62");s["default"].use(N["a"]);var R=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["default"].config.productionTip=!1,new s["default"]({router:Y,store:R,render:t=>t(m)}).$mount("#app")},"68af":function(t){t.exports=JSON.parse('[{"Subject":"AB(07:00-15:00)","Start_Date":"","Start_Time":"07:00 AM","End_Date":"","End_Time":"03:00 PM","All_Day_Event":"FALSE"},{"Subject":"BC(08:00-16:00)","Start_Date":"","Start_Time":"08:00 AM","End_Date":"","End_Time":"04:00 PM","All_Day_Event":"FALSE"},{"Subject":"DB(10:00-18:00)","Start_Date":"","Start_Time":"10:00 AM","End_Date":"","End_Time":"06:00 PM","All_Day_Event":"FALSE"},{"Subject":"EC(11:00-19:00)","Start_Date":"","Start_Time":"11:00 AM","End_Date":"","End_Time":"07:00 PM","All_Day_Event":"FALSE"},{"Subject":"FB(12:00-20:00)","Start_Date":"","Start_Time":"12:00 PM","End_Date":"","End_Time":"08:00 PM","All_Day_Event":"FALSE"},{"Subject":"HB(14:00-22:00)","Start_Date":"","Start_Time":"02:00 PM","End_Date":"","End_Time":"10:00 PM","All_Day_Event":"FALSE"},{"Subject":"JB(16:00-24:00)","Start_Date":"","Start_Time":"04:00 PM","End_Date":"","End_Time":"11:59 PM","All_Day_Event":"FALSE"},{"Subject":"CB(09:00-17:00)","Start_Date":"","Start_Time":"09:00 AM","End_Date":"","End_Time":"05:00 PM","All_Day_Event":"FALSE"},{"Subject":"IA(15:00-23:00)","Start_Date":"","Start_Time":"03:00 PM","End_Date":"","End_Time":"11:00 PM","All_Day_Event":"FALSE"},{"Subject":"RA(00:00-08:00)","Start_Date":"","Start_Time":"12:00 AM","End_Date":"","End_Time":"08:00 AM","All_Day_Event":"FALSE"},{"Subject":"放假","Start_Date":"","Start_Time":"","End_Date":"","End_Time":"","All_Day_Event":"TRUE"}]')},9142:function(t,e,a){"use strict";a("52ff")}});
//# sourceMappingURL=app.d19d6943.js.map