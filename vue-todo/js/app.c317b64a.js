(function(t){function e(e){for(var n,i,s=e[0],u=e[1],c=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var u=o[s];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"0a24":function(t,e,o){"use strict";var n=o("6470"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("ToDoSubmit"),o("ToDoDisplay")],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.toDoTask,expression:"toDoTask"}],staticClass:"todo",attrs:{placeholder:"ToDo",type:"text"},domProps:{value:t.toDoTask},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addToDo(t.toDoTask)},input:function(e){e.target.composing||(t.toDoTask=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],attrs:{classs:"category",placeholder:"Category",type:"text"},domProps:{value:t.category},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addToDo(t.toDoTask)},input:function(e){e.target.composing||(t.category=e.target.value)}}}),o("button",{on:{click:function(e){return t.addToDo(t.toDoTask)}}},[t._v("Submit")])])},s=[],u={name:"ToDoSubmit",data:function(){return{toDoTask:"",category:""}},methods:{addToDo:function(t){""!=t&&this.$store.dispatch("addToDo",t),this.toDoTask="",this.category=""}}},c=u,l=(o("0a24"),o("2877")),d=Object(l["a"])(c,i,s,!1,null,"52c4a877",null),f=d.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"main"}},t._l(t.getToDos,(function(t){return o("ToDoElement",{key:t.id,attrs:{todo:t}})})),1)},m=[],v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{class:{disabledClass:t.disabled},attrs:{id:"toDo"},on:{click:function(e){t.disabled=!t.disabled}}},[t._v(t._s(t.todo.name))]),o("button",{directives:[{name:"show",rawName:"v-show",value:t.disabled,expression:"disabled"}],on:{click:function(e){return t.removeToDo(t.todo.id)}}},[t._v("X")])])},D=[],T={name:"ToDoElement",props:{todo:Object},methods:{removeToDo:function(t){this.$store.dispatch("removeToDo",t)}},data:function(){return{disabled:!1}}},y=T,b=(o("d598"),Object(l["a"])(y,v,D,!1,null,"13a17bed",null)),g=b.exports,h={name:"ToDoDisplay",components:{ToDoElement:g},computed:{getToDos:function(){return this.$store.getters.getToDos}}},k=h,O=(o("80e4"),Object(l["a"])(k,p,m,!1,null,"c79e6072",null)),_=O.exports,w={name:"App",components:{ToDoSubmit:f,ToDoDisplay:_}},x=w,j=(o("034f"),Object(l["a"])(x,r,a,!1,null,null,null)),E=j.exports,S=(o("4de4"),o("2f62"));n["a"].use(S["a"]);var P=new S["a"].Store({state:{toDoTasks:[{id:0,name:"Add color depending on category"},{id:1,name:"Think about adding new improvents"}]},mutations:{ADD_TODO:function(t,e){t.toDoTasks.push({name:e,id:t.toDoTasks.length})},REMOVE_TODO:function(t,e){t.toDoTasks=t.toDoTasks.filter((function(t){return t.id!==e}))}},actions:{addToDo:function(t,e){t.commit("ADD_TODO",e)},removeToDo:function(t,e){t.commit("REMOVE_TODO",e)}},getters:{getToDos:function(t){return t.toDoTasks}}});n["a"].config.productionTip=!1,new n["a"]({store:P,render:function(t){return t(E)}}).$mount("#app")},6470:function(t,e,o){},"795c":function(t,e,o){},"80e4":function(t,e,o){"use strict";var n=o("795c"),r=o.n(n);r.a},"85ec":function(t,e,o){},d598:function(t,e,o){"use strict";var n=o("f3fb"),r=o.n(n);r.a},f3fb:function(t,e,o){}});
//# sourceMappingURL=app.c317b64a.js.map