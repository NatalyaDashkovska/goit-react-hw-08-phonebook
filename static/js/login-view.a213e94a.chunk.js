(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{95:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(36),s=a(37),i=a(39),r=a(38),o=a(0),c=a(12),h=a(14),b=a(1),p={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},u=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,l=a.name,s=a.value;e.setState(Object(n.a)({},l,s))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,style:p.form,autoComplete:"off",children:[Object(b.jsxs)("label",{style:p.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(b.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(b.jsxs)("label",{style:p.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(b.jsx)("input",{type:"password",name:"password",value:a,onChange:this.handleChange})]}),Object(b.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}}]),a}(o.Component),m={onLogin:h.a.login};t.default=Object(c.b)(null,m)(u)}}]);
//# sourceMappingURL=login-view.a213e94a.chunk.js.map