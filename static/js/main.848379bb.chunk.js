(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=n(5),i=n(1),s=n(2),p=n(4),d=n(3),u=n(17),m=function(){return o.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},o.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Todo App"),o.a.createElement("p",{style:{fontSize:"19px"}},"Add to-do item(s)"))},h=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.todo,n=t.completed,a=t.id,r=t.title;return o.a.createElement("li",{className:"item"},o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.props.handleChangeProps(a)}}),o.a.createElement("button",{onClick:function(){return e.props.deleteItemProps(a)}},"Delete"),o.a.createElement("span",{style:n?{forntStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},r))}}]),n}(o.a.Component),f=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.todos.map((function(t){return o.a.createElement(h,{key:t.id,todo:t,handleChangeProps:e.props.handleChangeProps,deleteItemProps:e.props.deleteItemProps})})))}}]),n}(o.a.Component),b=n(8),v=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.handleChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addItemProps(e.state.title),e.setState({title:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},o.a.createElement("input",{type:"text",placeholder:"Add Item...",name:"title",value:this.state.title,onChange:this.handleChange,className:"input-text"}),o.a.createElement("input",{type:"submit",value:"Submit",className:"input-submit"}))}}]),n}(a.Component),j=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:Object(u.a)(),title:"Setup development environment",completed:!0},{id:Object(u.a)(),title:"Develop website and add content",completed:!1},{id:Object(u.a)(),title:"Deploy to live server",completed:!1}]},e.handleChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.deleteItem=function(t){e.setState({todos:Object(l.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addItem=function(t){var n={id:Object(u.a)(),title:t,completed:!1};e.setState({todos:[].concat(Object(l.a)(e.state.todos),[n])})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(m,null),o.a.createElement(v,{addItemProps:this.addItem}),o.a.createElement(f,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteItemProps:this.deleteItem}))}}]),n}(o.a.Component);n(14);c.a.render(o.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.848379bb.chunk.js.map