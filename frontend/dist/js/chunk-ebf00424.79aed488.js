(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebf00424"],{"00c7":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"marketing"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"contant"},[a("div",{staticClass:"topbox"},[e._v("本日営業数")]),a("div",{staticClass:"income"},[e._v(e._s(e.todayInfo.number))])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"contant"},[a("div",{staticClass:"topbox"},[e._v("本日見積金額")]),a("div",{staticClass:"income"},[e._v(e._s(e.todayInfo.account))])])])],1)],1),a("el-card",{staticStyle:{"margin-top":"10px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center"},attrs:{span:20}},[a("span",{staticStyle:{"padding-right":"0.5rem"}},[e._v("期間を選択してください")]),a("el-date-picker",{attrs:{type:"daterange",align:"center","unlink-panels":"","range-separator":"To","picker-options":e.pickerOptions},on:{change:e.dataChangeHandler},model:{value:e.datevalue,callback:function(t){e.datevalue=t},expression:"datevalue"}})],1),a("el-col",{attrs:{span:4}},[a("el-tooltip",{attrs:{content:"add",placement:"top",effect:"light",enterable:!1}},[a("el-button",{attrs:{type:"danger",icon:"el-icon-plus",circle:""},on:{click:function(t){e.addDataDialogFormVisible=!0}}})],1)],1)],1)],1),a("el-card",{staticClass:"table",attrs:{"body-style":{padding:"12px"}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"備考"}},[a("p",{staticStyle:{"word-break":"break-all"}},[e._v(e._s(t.row.remark))])])],1)]}}])}),a("el-table-column",{attrs:{type:"index",label:"#"}}),a("el-table-column",{attrs:{prop:"date",label:"日期"}}),a("el-table-column",{attrs:{prop:"method",label:"営業手段"}}),a("el-table-column",{attrs:{prop:"client",label:"取引先"}}),a("el-table-column",{attrs:{prop:"projectname",label:"項目名"}}),a("el-table-column",{attrs:{prop:"budget",label:"予算"}}),a("el-table-column",{attrs:{prop:"responsible",label:"担当者"}}),a("el-table-column",{attrs:{prop:"status",label:"状態"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.statusTranslate(t.row.status))+" ")]}}])}),a("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{content:"edit",placement:"top",effect:"light",enterable:!1}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.editTableData(t.row)}}})],1),a("el-tooltip",{attrs:{content:"delete",placement:"top",effect:"light",enterable:!1}},[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return e.deleteTableData(t.row.id)}}})],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":e.pageinfo.currentpage,"page-sizes":[15,50,100],"page-size":e.pageinfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageinfo.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"記録添加",visible:e.addDataDialogFormVisible,width:"40%"},on:{"update:visible":function(t){e.addDataDialogFormVisible=t},close:function(t){return e.closeDialog()}}},[a("el-form",{ref:"addDataFormRef",attrs:{model:e.addData,"label-width":"120px",rules:e.rules}},[a("el-form-item",{attrs:{label:"担当者",prop:"responsible"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:e.addData.responsible,callback:function(t){e.$set(e.addData,"responsible",t)},expression:"addData.responsible"}})],1)],1),a("el-form-item",{attrs:{label:"営業手段",prop:"method"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:e.addData.method,callback:function(t){e.$set(e.addData,"method",t)},expression:"addData.method"}})],1)],1),a("el-form-item",{attrs:{label:"項目名",prop:"projectname"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:e.addData.projectname,callback:function(t){e.$set(e.addData,"projectname",t)},expression:"addData.projectname"}})],1)],1),a("el-form-item",{attrs:{label:"取引先",prop:"client"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:e.addData.client,callback:function(t){e.$set(e.addData,"client",t)},expression:"addData.client"}})],1)],1),a("el-form-item",{attrs:{label:"予算",prop:"budget"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:e.addData.budget,callback:function(t){e.$set(e.addData,"budget",t)},expression:"addData.budget"}})],1)],1),a("el-form-item",{attrs:{label:"備考",prop:"remark"}},[a("el-col",{attrs:{span:20}},[a("el-input",{attrs:{type:"textarea",maxlength:"2000",autosize:{minRows:5}},model:{value:e.addData.remark,callback:function(t){e.$set(e.addData,"remark",t)},expression:"addData.remark"}})],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeDialog()}}},[e._v("戻　る")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.validateForm()}}},[e._v("追　加")])],1)],1),a("el-dialog",{attrs:{title:"記録編集",visible:e.editDataDialogFormVisible,width:"40%"},on:{"update:visible":function(t){e.editDataDialogFormVisible=t},close:function(t){return e.closeEditDialog()}}},[a("el-form",{ref:"editDataFormRef",attrs:{model:e.editData,"label-width":"120px",rules:e.rules}},[a("el-form-item",{attrs:{label:"状態"}},[a("el-col",{attrs:{span:20}},[a("el-select",{staticStyle:{width:"100%"},model:{value:e.editData.status,callback:function(t){e.$set(e.editData,"status",t)},expression:"editData.status"}},[a("el-option",{attrs:{label:"相談中",value:"0"}}),a("el-option",{attrs:{label:"成功",value:"1"}}),a("el-option",{attrs:{label:"失敗",value:"2"}})],1)],1)],1),a("el-form-item",{attrs:{label:"担当者",prop:"responsible"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:e.editData.responsible,callback:function(t){e.$set(e.editData,"responsible",t)},expression:"editData.responsible"}})],1)],1),a("el-form-item",{attrs:{label:"営業手段",prop:"method"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:e.editData.method,callback:function(t){e.$set(e.editData,"method",t)},expression:"editData.method"}})],1)],1),a("el-form-item",{attrs:{label:"項目名",prop:"projectname"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:e.editData.projectname,callback:function(t){e.$set(e.editData,"projectname",t)},expression:"editData.projectname"}})],1)],1),a("el-form-item",{attrs:{label:"取引先",prop:"client"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:e.editData.client,callback:function(t){e.$set(e.editData,"client",t)},expression:"editData.client"}})],1)],1),a("el-form-item",{attrs:{label:"予算",prop:"budget"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:e.editData.budget,callback:function(t){e.$set(e.editData,"budget",t)},expression:"editData.budget"}})],1)],1),a("el-form-item",{attrs:{label:"備考",prop:"remark"}},[a("el-col",{attrs:{span:20}},[a("el-input",{attrs:{type:"textarea",maxlength:"2000",autosize:{minRows:5}},model:{value:e.editData.remark,callback:function(t){e.$set(e.editData,"remark",t)},expression:"editData.remark"}})],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeEditDialog()}}},[e._v("戻　る")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.validateEditForm()}}},[e._v("保　存")])],1)],1)],1)},l=[],n=a("1da1"),i=(a("96cf"),a("ac1f"),a("00b4"),a("d9e2"),a("d401"),a("0d03"),a("c975"),a("a434"),{data:function(){var e=function(e,t,a){var r=/^[0-9]/;if(r.test(t))return a();a(new Error("Please input right budget"))};return{todayInfo:{},datevalue:"",addDataDialogFormVisible:!1,editDataDialogFormVisible:!1,formLabelWidth:"120px",fileList:[],downloadurl:"",responsibility:"",addData:{responsible:"",budget:"",projectname:"",remark:"",client:"",method:""},editData:{},pageinfo:{pagesize:15,total:0,currentpage:1},tableData:[],actionURL:"",pickerOptions:{shortcuts:[{text:"本月",onClick:function(e){e.$emit("pick",[new Date,new Date])}},{text:"一年間",onClick:function(e){var t=new Date,a=new Date((new Date).getFullYear(),0);e.$emit("pick",[a,t])}},{text:"最近六ヶ月",onClick:function(e){var t=new Date,a=new Date;a.setMonth(a.getMonth()-6),e.$emit("pick",[a,t])}}]},rules:{budget:[{required:!0,trigger:"blur"},{validator:e,trigger:"blur"}],projectname:[{required:!0,trigger:"blur"},{max:50,message:"max length is 50",trigger:"blur"}],remark:[{required:!0,trigger:"blur"},{max:2e3,message:"max length is 2000",trigger:"blur"}],client:[{required:!0,trigger:"blur"},{max:50,message:"max length is 50",trigger:"blur"}],method:[{required:!0,trigger:"blur"},{max:50,message:"max length is 50",trigger:"blur"}],responsible:[{required:!0,trigger:"blur"},{max:20,message:"max length is 50",trigger:"blur"}]}}},created:function(){this.getData(),console.log(this.tableData)},methods:{dataChangeHandler:function(e){this.getData()},getData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,l,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0===e.datevalue[0]||void 0===e.datevalue[1]){t.next=13;break}return t.next=3,e.$http.post("marketing/tabledata",{start:e.datevalue[0],end:e.datevalue[1],page:e.pageinfo});case 3:a=t.sent,r=a.data,e.tableData=r.tableData,e.pageinfo.total=r.total,e.todayInfo=r.todayinfo,e.responsibility=window.sessionStorage.getItem("user"),e.editData.responsible=e.responsibility,e.addData.responsible=e.responsibility,t.next=23;break;case 13:return t.next=15,e.$http.post("marketing/tabledata",{start:"",end:"",page:e.pageinfo});case 15:l=t.sent,n=l.data,e.tableData=n.tableData,e.pageinfo.total=n.total,e.todayInfo=n.todayinfo,e.responsibility=window.sessionStorage.getItem("user"),e.editData.responsible=e.responsibility,e.addData.responsible=e.responsibility;case 23:case"end":return t.stop()}}),t)})))()},deleteTableData:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log("delete:"+e),a.next=3,t.$http.post("marketing/delete",{id:e});case 3:if(r=a.sent,l=r.data,200!=l.code){a.next=10;break}return t.getData(),a.abrupt("return",t.$message.success("Delete data success"));case 10:return a.abrupt("return",t.$message.error("Delete data failed"));case 11:case"end":return a.stop()}}),a)})))()},editTableData:function(e){this.editDataDialogFormVisible=!0,this.editData=e,console.log(this.editData)},closeEditDialog:function(){this.editDataDialogFormVisible=!1},closeDialog:function(){this.$refs["addDataFormRef"].resetFields(),this.addDataDialogFormVisible=!1},validateForm:function(){var e=this;this.$refs["addDataFormRef"].validate((function(t){if(!t)return!1;e.addTableData()}))},validateEditForm:function(){var e=this;this.$refs["editDataFormRef"].validate((function(t){if(!t)return!1;e.uploadData()}))},uploadData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("upload data:"+e.editData),t.next=3,e.$http.post("marketing/update",e.editData);case 3:if(a=t.sent,r=a.data,200!=r.code){t.next=11;break}return e.closeEditDialog(),e.getData(),t.abrupt("return",e.$message.success("Update Data Success"));case 11:e.$message.error("Update Data Failed");case 12:case"end":return t.stop()}}),t)})))()},addTableData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("marketing/additem",e.addData);case 2:if(a=t.sent,r=a.data,200!=r.code){t.next=9;break}return t.next=7,e.$message.success("Uploaded data");case 7:t.next=10;break;case 9:e.$message.error("Data upload failed");case 10:return e.addDataDialogFormVisible=!1,e.getData(),t.abrupt("return",e.$message.success("add Tabel data"));case 13:case"end":return t.stop()}}),t)})))()},handleRemove:function(e,t){var a=t.indexOf(e);t.splice(a,1)},handleSizeChange:function(e){console.log("change pagesize to "+e),this.pageinfo.currentpage=1,this.pageinfo.pagesize=e,this.getData()},handleCurrentChange:function(e){console.log("change currentpage to "+e),this.pageinfo.currentpage=e,this.getData()},downloadfile:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.downloadurl="http://127.0.0.1:8000/api/cashflow/downloadfile/"+e;case 1:case"end":return a.stop()}}),a)})))()},statusTranslate:function(e){return 0==e?"相談中":1==e?"成功":"失敗"},tableRowClassName:function(e){var t=e.row;e.index;return 1===t.status?"success-row":2===t.status?"warning-row":""}}}),o=i,s=(a("b0fe"),a("2877")),c=Object(s["a"])(o,r,l,!1,null,null,null);t["default"]=c.exports},"649a":function(e,t,a){},b0fe:function(e,t,a){"use strict";a("649a")}}]);
//# sourceMappingURL=chunk-ebf00424.79aed488.js.map