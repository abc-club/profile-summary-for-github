(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{QeBL:function(e,a,t){"use strict";t.r(a);t("8z5v");var n=t("f9KS"),r=(t("Es4D"),t("+M86")),o=t("rOct"),c=t("OkUi"),s=t.n(c),u=t("+5lD"),l=t("KSlc"),m=t.n(l),i=t("QHXG"),p=t.n(i),h=r["a"].Search,d=class extends s.a.Component{constructor(e){super(e),this.onSearch=(e=>{m.a.push("/users?username="+e)}),this.state={username:"aoping"}}componentDidMount(){}render(){return s.a.createElement("div",null,s.a.createElement(h,{placeholder:"input username",onSearch:e=>this.onSearch(e),enterButton:!0}),s.a.createElement("div",{style:{marginTop:"10px"}},s.a.createElement(p.a,{to:"/users?username=aoping"},s.a.createElement(n["a"],{color:"magenta"},"aoping")),s.a.createElement(p.a,{to:"/users?username=tj"},s.a.createElement(n["a"],{color:"magenta"},"TJ Holowaychuk")),s.a.createElement(p.a,{to:"/users?username=yyx990803"},s.a.createElement(n["a"],{color:"magenta"},"Evan You"))))}};d=o["c"]([Object(u["c"])(e=>{var a=e.loading,t=e.app;return{loading:a,githubData:t.githubData}})],d),a["default"]=d}}]);