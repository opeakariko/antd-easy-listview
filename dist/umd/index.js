!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@wangdahoo/antd-easy-form/dist/index.css"),require("react"),require("antd"),require("@ant-design/icons"),require("@wangdahoo/antd-easy-form/src"),require("classnames")):"function"==typeof define&&define.amd?define(["exports","@wangdahoo/antd-easy-form/dist/index.css","react","antd","@ant-design/icons","@wangdahoo/antd-easy-form/src","classnames"],t):t((e=e||self).AntdEasyForm={},null,e.React,e.antd,e.icons,e.src,e.classNames)}(this,(function(e,t,n,r,a,i,o){"use strict";var c="default"in n?n.default:n;function u(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){u(i,r,a,o,c,"next",e)}function c(e){u(i,r,a,o,c,"throw",e)}o(void 0)}))}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;var g=n.forwardRef((function(e,t){var a=e.title,i=e.backText,o=p(n.useState(!1),2),u=o[0],s=o[1];return n.useImperativeHandle(t,(function(){return{setVisible:function(e){return s(e)}}})),c.createElement(r.Modal,{title:function(t){return c.createElement("div",null,c.createElement(r.Button,{type:"link",icon:"arrow-left",style:{paddingLeft:0},onClick:l(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.onBack||"function"!=typeof e.onBack){t.next=3;break}return t.next=3,e.onBack();case 3:s(!1);case 4:case"end":return t.stop()}}),t)})))},i||"返回"),e.onDelete?c.createElement(r.Button,{type:"link",icon:"delete",style:{paddingLeft:0},onClick:function(){var t;r.Modal.confirm({centered:!0,title:"提示",content:"确定删除该".concat(e.itemName,"？"),onOk:(t=l(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.onDelete){t.next=3;break}return t.next=3,e.onDelete();case 3:s(!1);case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})}},"删除"):null,c.createElement(r.Divider,{type:"vertical"}),c.createElement("span",{style:{paddingLeft:15}},t))}(a),visible:u,className:"fullscreen",footer:null,closable:!1},e.children)})),y=function(){return{itemName:"",className:"",extraWidth:600,extraSearchPlaceholder:"请输入关键字",tableClassName:"",tableColumns:[],tableOperations:["update","delete"],tableWrapper:"card",filters:[],createItem:function(){return Promise.resolve()},deleteItem:function(){return Promise.resolve()},updateItem:function(){return Promise.resolve()},fetchItems:function(){return Promise.resolve({items:[],total:0,pageNum:1,pageSize:10})},createFormItems:function(){return[]},updateFormItems:function(){return[]},formLabelWidth:100,detailTitle:"",creationTitle:""}},h=r.Layout.Content,v=r.Input.Search;var b=y;e.createListView=function(e){if(!e.itemName)throw new Error("itemName 不能为空");var t=e=Object.assign({},y(),e||{}),u=t.itemName,s=t.className,f=t.extraWidth,d=t.extraSearchPlaceholder,b=t.tableClassName,w=t.tableColumns,x=t.tableOperations,S=t.tableWrapper,k=t.filters,E=t.createItem,O=t.deleteItem,R=t.updateItem,C=t.fetchItems,N=t.createFormItems,j=t.updateFormItems,P=t.formLabelWidth,z=t.detailTitle,I=t.createDetailComponent,B=t.creationTitle,L=t.createCreationComponent;return function(e){var t=p(n.useState([]),2),y=t[0],D=t[1],T=p(n.useState({total:0,pageNum:1,pageSize:10}),2),A=T[0],W=T[1],q=p(n.useState(""),2),F=q[0],M=q[1],V=p(n.useState(!1),2),_=V[0],H=V[1],U=p(n.useState(""),2),$=U[0],G=U[1],J=p(n.useState(0),2),K=J[0],Q=J[1],X=p(n.useState([]),2),Y=X[0],Z=X[1],ee=p(n.useState(null),2),te=ee[0],ne=ee[1],re=n.useRef(null),ae=n.useRef(null);function ie(e,t,n,r){return oe.apply(this,arguments)}function oe(){return(oe=l(regeneratorRuntime.mark((function t(n,r,a,i){var o,c,u,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={keyword:n,filters:r,pageNum:a,pageSize:i},t.next=3,C(o,e);case 3:c=t.sent,u=c.items,l=c.total,D(u||[]),W({total:l,pageNum:a,pageSize:i});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ce(){return(ce=l(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(F,k,A.pageNum,A.pageSize);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e){if(I)return ne(null),void setTimeout((function(){ne(e),null!==re.current&&re.current.setVisible(!0)}));ne(e),G("编辑".concat(u)),H(!0),Q(2)}function le(){return(le=l(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!==K){t.next=4;break}return t.next=3,E(n,e);case 3:r.message.success("添加".concat(u,"成功"));case 4:if(2!==K){t.next=8;break}return t.next=7,R(n,e);case 7:r.message.success("保存".concat(u,"成功"));case 8:return H(!1),t.next=11,ie(F,k,1,A.pageSize);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n.useEffect((function(){e.created&&e.created(),ie(F,k,A.pageNum,A.pageSize),Z(pe(w,me))}),[e]);var se,fe,me=function(t,n){return c.createElement("div",{className:"operations"},x.indexOf("update")>-1?c.createElement(r.Button,{type:"link",size:"small",icon:c.createElement(a.EditOutlined,null),onClick:function(){return ue(n)}},"编辑"):null,x.indexOf("delete")>-1?c.createElement(r.Button,{type:"link",danger:!0,size:"small",icon:c.createElement(a.DeleteOutlined,null),onClick:function(){return function(t){var n;r.Modal.confirm({centered:!0,title:"提示",content:"确定删除该".concat(u,"？"),onOk:(n=l(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(t,e);case 2:return r.message.success("删除".concat(u,"成功")),n.next=5,ie(F,k,1,A.pageSize);case 5:case"end":return n.stop()}}),n)}))),function(){return n.apply(this,arguments)})})}(n)}},"删除"):null)},pe=function(e,t){return e.concat(x.length>0?[{title:"操作",key:"operations",align:"center",width:x.length>1?160:80,render:t}]:[]).map((function(e){return m(m({},e),{},{ellipsis:!0},e.detailLink?{render:function(e,t){return c.createElement(r.Button,{type:"link",onClick:function(){return ue(t)},style:{paddingLeft:0,paddingRight:0,height:20}},e)}}:{})}))},de=c.createElement("div",{style:{display:"flex",width:f}},c.createElement(v,{placeholder:d,style:{flex:1},value:F,onChange:function(e){return M(e.target.value)}}),c.createElement(r.Button,{type:"primary",icon:c.createElement(a.ReloadOutlined,null),style:{marginLeft:10},onClick:function(){return ce.apply(this,arguments)}},"刷新"),c.createElement(r.Button,{type:"primary",icon:c.createElement(a.PlusOutlined,null),style:{marginLeft:10},onClick:function(){L?setTimeout((function(){null!==ae.current&&ae.current.setVisible(!0)})):(G("添加".concat(u)),H(!0),Q(1))}},"添加")),ge=c.createElement(r.Table,{className:o("table-items",b),columns:Y,dataSource:y,pagination:{total:A.total,current:A.pageNum,pageSize:A.pageSize,showTotal:function(e,t){var n=p(t,2),r=n[0],a=n[1];return"共 ".concat(e," 条记录，当前 ").concat(r," ~ ").concat(a)},showSizeChanger:!0,onChange:(fe=l(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(F,k,t,n||A.pageSize);case 2:case"end":return e.stop()}}),e)}))),function(e,t){return fe.apply(this,arguments)}),onShowSizeChange:(se=l(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(m(m({},A),{},{pageSize:n})),e.next=3,ie(F,k,1,n);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return se.apply(this,arguments)})}});return c.createElement(r.Layout,{className:o("elv-list-view",s)},c.createElement(h,null,"none"!==S?c.createElement(r.Card,{title:"".concat(u,"列表"),extra:de},ge):c.createElement("div",{style:{backgroundColor:"#fff"}},c.createElement("div",{style:{paddingBottom:16}},de),ge),c.createElement(r.Drawer,{title:$,width:800,placement:"right",onClose:function(){return H(!1)},visible:_},c.createElement("div",{style:{padding:"0 50px"}},_?c.createElement(i.Form,{labelWidth:P,items:1===K?N&&N(e):j&&j(te,e),onSubmit:function(e){return le.apply(this,arguments)}}):null)),null!==te?c.createElement(g,{title:z,ref:re,onBack:function(){return ie(F,k,1,A.pageSize)},itemName:u,onDelete:l(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(te,e);case 2:return r.message.success("删除".concat(u,"成功")),t.next=5,ie(F,k,1,A.pageSize);case 5:case"end":return t.stop()}}),t)})))},I?I(te,e):null):null,L?c.createElement(g,{title:B,ref:ae,onBack:function(){return ie(F,k,1,A.pageSize)},itemName:u},L?L(e):null):null))}},e.createListViewOptions=b,Object.defineProperty(e,"__esModule",{value:!0})}));
