(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{QeBL:function(e,t,a){"use strict";a.r(t);a("8z5v");var n=a("f9KS"),o=(a("K+7k"),a("5toQ")),r=(a("d5TY"),a("j6C+")),c=(a("KuLZ"),a("yhEV")),s=(a("0v/c"),a("Xrgl")),l=(a("Es4D"),a("+M86")),i=a("OkUi"),m=a.n(i),u=a("KSlc"),h=a.n(u),p=a("QHXG"),g=a.n(p),E=l["a"].Search;class d extends m.a.Component{constructor(e){super(e),this.onSearch=(e=>{h.a.push("/users?username=".concat(e,"&token=").concat(this.state.token))}),this.onChange=(e=>{this.setState({token:e.target.value})}),this.state={token:"06218f80da8d167429ac5ef2d28364f403d36747"}}componentDidMount(){}render(){var e=this.state.token;return m.a.createElement("div",null,m.a.createElement(s["a"],{style:{marginBottom:"10px"}},m.a.createElement(c["a"],{span:23},m.a.createElement(l["a"],{value:e,onChange:this.onChange,placeholder:"input github token"})),m.a.createElement(c["a"],{span:1},m.a.createElement(r["a"],{title:"token\u83b7\u53d6\u65b9\u5f0fhttps://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line"},m.a.createElement(o["a"],{type:"question-circle",style:{marginLeft:"10px",marginTop:"10px"}})))),m.a.createElement(E,{placeholder:"input username",onSearch:e=>this.onSearch(e),enterButton:!0}),m.a.createElement("div",{style:{marginTop:"10px"}},m.a.createElement(g.a,{to:"/users?username=aoping&token=".concat(e)},m.a.createElement(n["a"],{color:"magenta"},"aoping")),m.a.createElement(g.a,{to:"/users?username=tj&token=".concat(e)},m.a.createElement(n["a"],{color:"magenta"},"TJ Holowaychuk")),m.a.createElement(g.a,{to:"/users?username=yyx990803&token=".concat(e)},m.a.createElement(n["a"],{color:"magenta"},"Evan You"))))}}t["default"]=d}}]);