(this["webpackJsonpvic-countdown"]=this["webpackJsonpvic-countdown"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/minhand.e33f41ee.png"},function(e,t,a){e.exports=a.p+"static/media/sechand.2804fed3.png"},function(e,t,a){e.exports=a.p+"static/media/hourhand.fb5f536c.png"},function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),r=a.n(o),i=(a(15),a(1)),c=a(2),s=a(3),u=a(4),m=(a(16),function(e){var t=e.label;return 1!==e.value&&(t+="s"),l.a.createElement("div",null,l.a.createElement("p",null,e.value," ",t))}),p=(a(17),a(7)),v=a.n(p),h=a(8),d=a.n(h),f=a(9),w=a.n(f),b=function(e){var t="rotate("+6*e.time.seconds.value+"deg)",a="rotate("+(30*e.time.hours.value+e.time.mins.value/2)+"deg)",n="rotate("+6*e.time.mins.value+"deg)",o={position:"absolute",width:"30px",height:"600px",top:"0px",left:"285px",background:"url("+d.a+")",zIndex:3,transform:t},r={position:"absolute",width:"30px",height:"600px",top:"0px",left:"285px",background:"url("+v.a+")",zIndex:2,transform:n},i={position:"absolute",width:"30px",height:"600px",top:"0px",left:"285px",background:"url("+w.a+")",zIndex:1,transform:a};return l.a.createElement("div",null,l.a.createElement("ul",{className:"clock"},l.a.createElement("li",{style:o}),l.a.createElement("li",{style:i}),l.a.createElement("li",{style:r})))},g=function(e){var t={days:{value:0,label:"Day"},hours:{value:0,label:"Hour"},mins:{value:0,label:"Minute"},seconds:{value:0,label:"Second"}},a=e.timeNow,n="",o=(e.dateIwant-a)/1e3/60/60/24;n="0."+(o=o.toString().split("."))[1];var r=24*parseFloat(n);n="0."+(r=r.toString().split("."))[1];var i=60*parseFloat(n);n="0."+(i=i.toString().split("."))[1];var c=60*parseFloat(n);return c=c.toString().split("."),t.days.value=Math.floor(o[0]),t.hours.value=Math.floor(r[0]),t.mins.value=Math.floor(i[0]),t.seconds.value=Math.floor(c[0]),l.a.createElement("div",null,Object.values(t).map((function(e){return l.a.createElement(m,{key:e.value,value:e.value,label:e.label})})),l.a.createElement(b,{time:t}))},x=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={timeNow:Date.now(),dateIwant:new Date("2020/06/04")},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g,{timeNow:this.state.timeNow,dateIwant:this.state.dateIwant}))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({timeNow:Date.now()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={names:["Vic","Vivian","Vicki","Venessa","Forbes","Vincent"]},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.names.length-1,t=parseInt(Math.random()*e);return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Hello ",this.state.names[t]),l.a.createElement("p",null,"You have this much time left..."),l.a.createElement(x,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.b421b7f5.chunk.js.map