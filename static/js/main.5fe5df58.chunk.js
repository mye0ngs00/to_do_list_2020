(this.webpackJsonpto_do_list_2020=this.webpackJsonpto_do_list_2020||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={"page-template":"PageTemplate_page-template__3Hde1",content:"PageTemplate_content__21tD9"}},function(e,t,n){e.exports={"todo-input":"TodoInput_todo-input__1C4Fx","add-button":"TodoInput_add-button__2TcCV",active:"TodoInput_active__2gP84"}},function(e,t,n){e.exports={"todo-item":"TodoItem_todo-item__1yyvW",tick:"TodoItem_tick__1CCuO",text:"TodoItem_text__1vc4G",done:"TodoItem_done__321pB",delete:"TodoItem_delete__sxas-",hover:"TodoItem_hover__2DGIa"}},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(9),r=n.n(c),i=n(6),d=n(7),l=n(1),u=n(2),s=n(5),m=n(4),p=n(10),v=n.n(p),h=n(3),_=n.n(h),f=_.a.bind(v.a),g=function(e){var t=e.children;return a.a.createElement("div",{className:f("page-template")},a.a.createElement("h1",null,"Scheduler"),a.a.createElement("div",{className:f("content")},t))},b=n(11),O=n.n(b),E=_.a.bind(O.a),j=function(e){var t=e.value,n=e.onChange,o=e.onInsert;return a.a.createElement("div",{className:E("todo-input")},a.a.createElement("input",{onChange:n,value:t,onKeyPress:function(e){"Enter"===e.key&&o()}}),a.a.createElement("div",{className:E("add-button"),onClick:o},"\ucd94\uac00"))},I=n(12),T=n.n(I),k=_.a.bind(T.a),y=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.done!==e.done}},{key:"render",value:function(){var e=this.props,t=e.done,n=e.children,o=e.onToggle,c=e.onRemove;return a.a.createElement("div",{className:k("todo-item"),onClick:o},a.a.createElement("input",{className:k("tick"),type:"checkbox",checked:t,readOnly:!0}),a.a.createElement("div",{className:k("text",{done:t})},n),a.a.createElement("div",{className:k("delete"),onClick:function(e){c(),e.stopPropagation()}},"[\uc9c0\uc6b0\uae30]"))}}]),n}(a.a.Component),C=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onToggle,o=e.onRemove,c=t.map((function(e){return a.a.createElement(y,{key:e.id,done:e.done,onToggle:function(){return n(e.id)},onRemove:function(){return o(e.id)}},e.text)}));return a.a.createElement("div",null,c)}}]),n}(a.a.Component),x=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={input:"",todos:[]},e.id=1,e.getId=function(){return++e.id},e.handleToggle=function(t){var n=e.state.todos,o=n.findIndex((function(e){return e.id===t})),a=Object(d.a)(Object(d.a)({},n[o]),{},{done:!n[o].done});e.setState({todos:[].concat(Object(i.a)(n.slice(0,o)),[a],Object(i.a)(n.slice(o+1,n.length)))})},e.handleRemove=function(t){var n=e.state.todos,o=n.findIndex((function(e){return e.id===t}));e.setState({todos:[].concat(Object(i.a)(n.slice(0,o)),Object(i.a)(n.slice(o+1,n.length)))})},e.handleChange=function(t){var n=t.target.value;e.setState({input:n})},e.handleInsert=function(){var t=e.state,n=t.input,o=t.todos;e.setState({input:"",todos:[].concat(Object(i.a)(o),[{id:e.getId(),text:n,done:!1}])})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.input,n=e.todos,o=this.handleChange,c=this.handleInsert,r=this.handleToggle,i=this.handleRemove;return a.a.createElement("div",null,a.a.createElement(g,null,a.a.createElement(j,{onChange:o,onInsert:c,value:t}),a.a.createElement(C,{todos:n,onToggle:r,onRemove:i})))}}]),n}(o.Component);n(18);r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.5fe5df58.chunk.js.map