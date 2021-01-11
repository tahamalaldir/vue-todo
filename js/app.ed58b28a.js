(function(t){function e(e){for(var n,s,a=e[0],d=e[1],l=e[2],u=0,f=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var d=o[a];0!==r[d]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-todo/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=d;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},4211:function(t,e,o){"use strict";var n=o("b2ef"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app text-monospace",class:this.$store.state.mode},[o("b-container",[o("toggle"),o("b-row",[o("b-col",[o("h1",{staticClass:"font-weight-bold"},[t._v("Todos")])])],1),o("b-row",{staticClass:"mt-3"},[o("add-todo")],1),o("b-row",{staticClass:"mt-5 pb-5"},[o("todos",{attrs:{title:"Continues",todos:t.$store.state.todos.continues}}),o("todos",{attrs:{title:"Completed",dizayn:t.dizayn,todos:t.$store.state.todos.completed}})],1)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-col",[o("b-input-group",{staticClass:"w-75 mx-auto"},[o("b-form-input",{staticClass:"mr-2",attrs:{size:"lg",placeholder:"Enter something to do..."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}},model:{value:t.todo,callback:function(e){t.todo=e},expression:"todo"}}),o("b-input-group-append",[o("button",{staticClass:"btn buttonAdd",attrs:{disabled:!t.todo},on:{click:t.onSubmit}},[t._v(" Add a Todo ")])])],1)],1)},a=[],d={name:"AddTodo",data:function(){return{todo:""}},methods:{onSubmit:function(){this.$store.commit("addTodo",this.todo),this.todo=""}}},l=d,c=(o("4211"),o("2877")),u=Object(c["a"])(l,s,a,!1,null,null,null),f=u.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toggle-wrapper"},[o("button",{staticClass:"btn toggleBtn",on:{click:t.handleToggle}},["light"===this.$store.state.mode?o("b-icon",{staticClass:"toggle",attrs:{icon:"moon","aria-hidden":"true"}}):o("b-icon",{staticClass:"toggle",attrs:{icon:"brightness-high","aria-hidden":"true"}})],1)])},m=[],b={name:"Toggle",methods:{handleToggle:function(){this.$store.commit("toggle")}}},g=b,h=(o("ef93"),Object(c["a"])(g,p,m,!1,null,null,null)),v=h.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-col",{staticClass:"mt-5 pr-4",attrs:{md:"12"}},[o("h1",{staticClass:"font-weight-bold"},[!t.todos.length>0?o("b-icon",{attrs:{icon:"list"}}):o("b-icon",{attrs:{icon:"list-nested"}}),t._v(" "+t._s(t.title)+" Todos ")],1),t.todos.length?t._e():o("h3",{staticClass:"mb-2 mt-5 text-muted"},[t._v(" "+t._s(t.title)+" To Do Not Found "),o("b-icon",{attrs:{icon:"exclamation-circle-fill",variant:"danger"}})],1),o("b-card-group",{attrs:{columns:""}},t._l(t.todos,(function(e){return o("todos-card",{key:e.id,style:t.dizayn,attrs:{todo:e,title:t.title}})})),1)],1)},_=[],x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-card",{staticClass:"text-center ",attrs:{"border-variant":"warning","bg-variant":"secondary","text-variant":"light"}},[o("b-card-text",[t._v(" "+t._s(t.todo.text)+" ")]),o("b-card-footer",[o("b-button",{staticClass:"mr-2",attrs:{variant:"outline-danger"},on:{click:function(e){return t.handleDelete(t.todo)}}},[o("b-icon",{attrs:{icon:"x",scale:"2","aria-hidden":"true"}})],1),"Continues"===t.title?o("b-button",{staticClass:"ml-2",attrs:{variant:"outline-success"},on:{click:function(e){return t.handleCompleted(t.todo)}}},[o("b-icon",{attrs:{icon:"check",scale:"2","aria-hidden":"true"}})],1):t._e()],1)],1)},C=[],S={name:"TodosCard",props:{title:String,todo:Object},methods:{handleDelete:function(t){this.$store.commit("deleteTodo",t.id)},handleCompleted:function(t){this.$store.commit("completedTodo",t)}}},T=S,O=Object(c["a"])(T,x,C,!1,null,null,null),w=O.exports,k={name:"Todos",components:{TodosCard:w},props:{title:String,todos:Array,dizayn:String}},j=k,$=Object(c["a"])(j,y,_,!1,null,null,null),I=$.exports,E=o("2f62"),P={name:"App",components:{Todos:I,AddTodo:f,Toggle:v},data:function(){return{dizayn:"text-decoration: line-through;"}},watch:{todos:{handler:function(){localStorage.setItem("todos",JSON.stringify(this.todos))},deep:!0},mode:{handler:function(){localStorage.setItem("mode",JSON.stringify(this.mode))},deep:!0}},computed:Object(E["b"])(["todos","mode"])},z=P,A=(o("034f"),Object(c["a"])(z,r,i,!1,null,null,null)),J=A.exports,N=o("5f5b"),M=o("b1e0"),D=(o("f9e3"),o("2dd8"),o("9612"));o("7db0"),o("c740"),o("a434");n["default"].use(E["a"]);var B=new E["a"].Store({state:{todos:{continues:[],completed:[]},mode:"light"},mutations:{addTodo:function(t,e){var o=D["b"].v4();t.todos.continues.push({text:e,id:o})},deleteTodo:function(t,e){if(t.todos.continues.find((function(t){return t.id===e}))){var o=t.todos.continues.findIndex((function(t){return t.id==e}));o>-1&&t.todos.continues.splice(o,1)}else if(t.todos.completed.find((function(t){return t.id===e}))){var n=t.todos.completed.findIndex((function(t){return t.id==e}));n>-1&&t.todos.completed.splice(n,1)}},completedTodo:function(t,e){var o=t.todos.continues.findIndex((function(t){return t.id==e.id}));o>-1&&(t.todos.continues.splice(o,1),t.todos.completed.push(e))},initialiseStore:function(t){localStorage.getItem("todos")&&(t.todos=JSON.parse(localStorage.getItem("todos"))),localStorage.getItem("mode")&&(t.mode=JSON.parse(localStorage.getItem("mode")))},toggle:function(t){"dark"===t.mode?t.mode="light":"light"===t.mode&&(t.mode="dark")}},actions:{},getters:{getTodos:function(t){return t.todos}}});n["default"].use(D["a"]),n["default"].use(N["a"]),n["default"].use(M["a"]),n["default"].config.productionTip=!1,new n["default"]({store:B,render:function(t){return t(J)},beforeCreate:function(){this.$store.commit("initialiseStore")}}).$mount("#app")},"85ec":function(t,e,o){},a229:function(t,e,o){},b2ef:function(t,e,o){},ef93:function(t,e,o){"use strict";var n=o("a229"),r=o.n(n);r.a}});
//# sourceMappingURL=app.ed58b28a.js.map