(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),l=n.n(r),o=n(3),i=n(4),s=n(6),u=n(5),b=function(e){var t=e.tabs,n=e.selectedTab,a=e.onTabSelected;return c.a.createElement("ul",null,t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("a",{href:"/",onClick:function(t){return function(e,t){e.preventDefault(),a(t)}(t,e)}},e.title))})),n.content)},d=(n(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:d[0]},e.onTabSelected=function(t){return e.setState({selectedTab:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.selectedTab;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is\xa0",e.title),c.a.createElement(b,{tabs:d,selectedTab:e,onTabSelected:this.onTabSelected}))}}]),n}(c.a.Component);l.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.09d31338.chunk.js.map