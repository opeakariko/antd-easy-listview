!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("antd"),require("@ant-design/icons"),require("@wangdahoo/antd-easy-form"),require("classnames")):"function"==typeof define&&define.amd?define(["exports","react","antd","@ant-design/icons","@wangdahoo/antd-easy-form","classnames"],t):t((e=e||self).AntdEasyForm={},e.React,e.antd,e.icons,e.AndtEasyForm,e.classNames)}(this,(function(e,t,n,r,a,i){"use strict";var o="default"in t?t.default:t;function c(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){c(i,r,a,o,u,"next",e)}function u(e){c(i,r,a,o,u,"throw",e)}o(void 0)}))}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;var d=t.forwardRef((function(e,a){var i=e.title,c=e.backText,l=m(t.useState(!1),2),s=l[0],f=l[1];return t.useImperativeHandle(a,(function(){return{setVisible:function(e){return f(e)}}})),o.createElement(n.Modal,{title:function(t){return o.createElement("div",null,o.createElement(n.Button,{type:"link",icon:o.createElement(r.ArrowLeftOutlined,null),style:{paddingLeft:0},onClick:u(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.onBack||"function"!=typeof e.onBack){t.next=3;break}return t.next=3,e.onBack();case 3:f(!1);case 4:case"end":return t.stop()}}),t)})))},c||"返回"),e.onDelete?o.createElement(n.Button,{type:"link",icon:o.createElement(r.DeleteOutlined,null),style:{paddingLeft:0},onClick:function(){var t;n.Modal.confirm({centered:!0,title:"提示",content:"确定删除该".concat(e.itemName,"？"),onOk:(t=u(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.onDelete){t.next=3;break}return t.next=3,e.onDelete();case 3:f(!1);case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})}},"删除"):null,o.createElement(n.Divider,{type:"vertical"}),o.createElement("span",{style:{paddingLeft:15}},t))}(i),visible:s,className:"elv-fullscreen-modal",footer:null,closable:!1},e.children)})),g=function(){return{itemName:"",className:"",extraWidth:"auto",extraSearchPlaceholder:"请输入关键字",tableClassName:"",tableColumns:[],tableOperations:["update","delete"],tableWrapper:"card",tableScroll:void 0,filters:[],createItemEnabled:!0,batchDeleteEnabled:!1,createItem:function(){return Promise.resolve()},deleteItem:function(){return Promise.resolve()},updateItem:function(){return Promise.resolve()},fetchItems:function(){return Promise.resolve({items:[],total:0,pageNum:1,pageSize:10})},batchDeleteItems:function(){return Promise.resolve()},createFormItems:function(){return[]},updateFormItems:function(){return[]},formLabelWidth:100,detailTitle:"",creationTitle:"",exportEnabled:!1,exportItems:void 0}},y=n.Layout.Content,v=n.Input.Search;var h=g;e.createListView=function(e){if(!e.itemName)throw new Error("itemName 不能为空");var c=e=Object.assign({},g(),e||{}),s=c.itemName,p=c.className,h=c.extraWidth,b=c.extraSearchPlaceholder,x=c.extraAddOn,w=c.tableClassName,E=c.tableColumns,S=c.tableOperations,k=c.tableWrapper,O=c.tableScroll,R=c.filters,C=c.createItemEnabled,N=c.batchDeleteEnabled,I=c.createItem,z=c.deleteItem,j=c.updateItem,P=c.fetchItems,D=c.batchDeleteItems,B=c.createFormItems,L=c.updateFormItems,T=c.formLabelWidth,A=c.detailTitle,W=c.createDetailComponent,F=c.creationTitle,V=c.createCreationComponent,M=c.exportEnabled,q=c.exportItems;return function(c){var g=m(t.useState([]),2),_=g[0],H=g[1],U=m(t.useState({total:0,pageNum:1,pageSize:10}),2),$=U[0],G=U[1],J=m(t.useState(""),2),K=J[0],Q=J[1],X=m(t.useState(!1),2),Y=X[0],Z=X[1],ee=m(t.useState(""),2),te=ee[0],ne=ee[1],re=m(t.useState(0),2),ae=re[0],ie=re[1],oe=m(t.useState([]),2),ce=oe[0],ue=oe[1],le=m(t.useState(null),2),se=le[0],fe=le[1],me=m(t.useState(R.filter((function(e){return"string"!=typeof e})).reduce((function(e,t){return f(f({},e),{},l({},t.name,f(f({},t),{},{value:t.options[0].value})))}),{})),2),pe=me[0],de=me[1],ge=m(t.useState([]),2),ye=ge[0],ve=ge[1],he=t.useRef(null),be=t.useRef(null);function xe(e,t){return e.map((function(e){if("string"==typeof e)return e;var n=(t||pe)[e.name].value;return"".concat(e.name,"=").concat(null==n?"":n)}))}var we={fixed:!0,columnWidth:40,onChange:function(e,t){ve(t.filter((function(e){return void 0!==e})))}};function Ee(){return(Ee=u(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.length)){e.next=10;break}if("string"==typeof(r=t[n])||!r.getOptions){e.next=7;break}return e.next=6,r.getOptions(c);case 6:r.options=e.sent;case 7:n++,e.next=1;break;case 10:de(t.filter((function(e){return"string"!=typeof e})).reduce((function(e,t){return f(f({},e),{},l({},t.name,f(f({},t),{},{value:t.options[0].value})))}),{}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Se(e,t,n,r){return ke.apply(this,arguments)}function ke(){return(ke=u(regeneratorRuntime.mark((function e(t,n,r,a){var i,o,u,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={keyword:t,filters:n,pageNum:r,pageSize:a},e.next=3,P(i,c);case 3:o=e.sent,u=o.items,l=o.total,H(u||[]),G({total:l,pageNum:r,pageSize:a});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(){return Re.apply(this,arguments)}function Re(){return(Re=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se(K,xe(R),$.pageNum,$.pageSize);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(){return(Ce=u(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f(f({},pe),{},l({},t,f(f({},pe[t]),{},{value:n}))),e.next=3,Se(K,xe(R,r),1,$.pageSize);case 3:de(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ne(e){if(W)return fe(null),void setTimeout((function(){fe(e),null!==he.current&&he.current.setVisible(!0)}));fe(e),ne("编辑".concat(s)),Z(!0),ie(2)}function Ie(){return(Ie=u(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==ae){e.next=4;break}return e.next=3,I(t,c);case 3:n.message.success("添加".concat(s,"成功"));case 4:if(2!==ae){e.next=8;break}return e.next=7,j(t,c);case 7:n.message.success("保存".concat(s,"成功"));case 8:return Z(!1),e.next=11,Se(K,xe(R),1,$.pageSize);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.useEffect((function(){c.created&&c.created(),function(e){Ee.apply(this,arguments)}(R),Se(K,xe(R),$.pageNum,$.pageSize),ue(De(E,Pe))}),[c]);var ze,je,Pe=function(e,t){return o.createElement("div",{className:"operations"},S.indexOf("update")>-1?o.createElement(n.Button,{type:"link",size:"small",icon:o.createElement(r.EditOutlined,null),onClick:function(){return Ne(t)}},"编辑"):null,S.indexOf("delete")>-1?o.createElement(n.Button,{type:"link",danger:!0,size:"small",icon:o.createElement(r.DeleteOutlined,null),onClick:function(){return function(e){var t;n.Modal.confirm({centered:!0,title:"提示",content:"确定删除该".concat(s,"？"),onOk:(t=u(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(e,c);case 2:return n.message.success("删除".concat(s,"成功")),t.next=5,Se(K,xe(R),1,$.pageSize);case 5:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})}(t)}},"删除"):null)},De=function(e,t){return e.concat(S.length>0?[{title:"操作",key:"operations",align:"center",width:S.length>1?160:80,render:t}]:[]).map((function(e){return f(f({},e),{},{ellipsis:!0},e.detailLink?{render:function(e,t){return o.createElement(n.Button,{type:"link",onClick:function(){return Ne(t)},style:{padding:0,height:20}},e)}}:{})}))},Be=o.createElement("div",{style:{display:"flex",width:h}},Object.keys(pe).map((function(e,t){return o.createElement("div",{key:t},o.createElement("span",null,pe[e].labelText),o.createElement(n.Select,{style:f(f({},pe[e].selectStyle||{}),{},{margin:"0 15px 0 5px"}),value:pe[e].value,onChange:function(t){return function(e,t){return Ce.apply(this,arguments)}(e,t)}},pe[e].options.map((function(e,t){return o.createElement(n.Select.Option,{key:t,value:e.value},e.text)}))))})),o.createElement(v,{placeholder:b,style:{flex:1},value:K,onChange:function(e){return Q(e.target.value)},onSearch:u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se(K,xe(R),1,$.pageSize);case 2:case"end":return e.stop()}}),e)}))),enterButton:o.createElement(n.Button,{type:"primary",icon:o.createElement(r.SearchOutlined,null)},"搜索")}),o.createElement(n.Button,{type:"primary",icon:o.createElement(r.ReloadOutlined,null),style:{marginLeft:10},onClick:Oe},"刷新"),C?o.createElement(n.Button,{type:"primary",icon:o.createElement(r.PlusOutlined,null),style:{marginLeft:10},onClick:function(){V?setTimeout((function(){null!==be.current&&be.current.setVisible(!0)})):(ne("添加".concat(s)),Z(!0),ie(1))}},"添加"):null,N?o.createElement(n.Button,{type:"primary",danger:!0,disabled:0===ye.length,icon:o.createElement(r.DeleteOutlined,null),style:{marginLeft:10},onClick:function(){var e;n.Modal.confirm({centered:!0,title:"提示",content:"确定删除选中的".concat(s,"？"),onOk:(e=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(ye,c);case 2:return n.message.success("批量删除".concat(s,"成功")),ve([]),e.next=6,Se(K,xe(R),1,$.pageSize);case 6:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}},"删除"):null,M&&q?o.createElement(n.Button,{type:"default",icon:o.createElement(r.ExportOutlined,null),style:{marginLeft:10},onClick:function(){var e={keyword:K,filters:xe(R)};q&&q(e,c)}},"导出"):null,x&&x(c)),Le=o.createElement(n.Table,{className:i("table-items",w),columns:ce,dataSource:_,pagination:{total:$.total,current:$.pageNum,pageSize:$.pageSize,showTotal:function(e,t){var n=m(t,2),r=n[0],a=n[1];return"共 ".concat(e," 条记录，当前 ").concat(r," ~ ").concat(a)},showSizeChanger:!0,onChange:(je=u(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se(K,xe(R),t,n||$.pageSize);case 2:case"end":return e.stop()}}),e)}))),function(e,t){return je.apply(this,arguments)}),onShowSizeChange:(ze=u(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(f(f({},$),{},{pageSize:n})),e.next=3,Se(K,xe(R),1,n);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return ze.apply(this,arguments)})},rowSelection:N?we:void 0,scroll:O});return o.createElement(n.Layout,{className:i("elv-list-view",p)},o.createElement(y,null,"none"!==k?o.createElement(n.Card,{title:!1===e.title?null:e.title||"".concat(s,"列表"),extra:Be},Le):o.createElement("div",{className:"table-wrapper"},o.createElement("div",{className:"list-extra-wrapper"},o.createElement("div",{className:"flex-1"}),o.createElement("div",null,Be)),Le),o.createElement(n.Drawer,{title:te,width:800,placement:"right",onClose:function(){return Z(!1)},visible:Y},o.createElement("div",{style:{padding:"0 50px"}},Y?o.createElement(a.Form,{labelWidth:T,items:1===ae?B&&B(c):L&&L(se,c),onSubmit:function(e){return Ie.apply(this,arguments)}}):null)),null!==se?o.createElement(d,{title:A,ref:he,onBack:function(){return Se(K,xe(R),1,$.pageSize)},itemName:s,onDelete:z?u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(se,c);case 2:return n.message.success("删除".concat(s,"成功")),e.next=5,Se(K,xe(R),1,$.pageSize);case 5:case"end":return e.stop()}}),e)}))):void 0},W?W(se,c,(function(){he.current&&(he.current.setVisible(!1),Oe())})):null):null,V?o.createElement(d,{title:F,ref:be,onBack:function(){return Se(K,xe(R),1,$.pageSize)},itemName:s},V?V(c,(function(){he.current&&(he.current.setVisible(!1),Oe())})):null):null))}},e.createListViewOptions=h,Object.defineProperty(e,"__esModule",{value:!0})}));
