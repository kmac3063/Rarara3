(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{129:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(19),i=n.n(r),s=n(12),a=n.n(s),d=n(18),l=n.n(d),o=n(22),j=n(13),u=n(8),b=(n(127),n(130)),h=n(4),f=function(e){var t=e.id,n=(e.go,e.fetchedUser,e.callFriend);return Object(h.jsxs)(u.i,{id:t,children:[Object(h.jsx)(u.j,{children:"\u0412\u044b\u0431\u0438\u0440\u0430\u0439 \u0434\u0440\u0443\u0433\u0430"}),Object(h.jsx)(u.e,{onClick:n,before:Object(h.jsx)(b.a,{}),children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0430"})]})},O=(n.p,n(131)),x=function(e){var t,n=e.id,c=e.fetchedUser,r=e.go;return Object(h.jsx)(u.i,{id:n,children:Object(h.jsx)(u.g,{children:Object(h.jsx)(u.l,{icon:Object(h.jsx)(O.a,{}),header:"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043c, "+(t=c,(null==t||null==t.first_name?"\u041f\u0440\u0438\u044f\u0442\u0435\u043b\u044c":c.first_name)+"!"),action:Object(h.jsx)(u.d,{size:"m",onClick:r,"data-to":"Home",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0434\u0440\u0443\u0437\u0435\u0439"}),children:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0444\u0438\u043d\u0430\u043b\u0430 \u0445\u0430\u043a\u0430\u0442\u043e\u043d\u0430."})})})},m=n(132),p=n(133),g=n(134),y=function(e){var t=e.id,n=e.go,r=e.fetchedUser,i=e.friend,s=e.meShacking,a=(e.coord,e.speed,e.setMeShacking),d=Object(c.useState)(!1),l=Object(j.a)(d,2),o=l[0],b=l[1],f=Object(c.useState)(!0),O=Object(j.a)(f,2),x=O[0],y=O[1];return Object(c.useEffect)((function(){var e=setInterval((function(){if(null!==i){var e="http://104.248.245.109/get_handshake?id="+i.id.toString();fetch(e).then((function(e){return e.json()})).then((function(e){y((function(){return e.friend_id.toString()===r.id.toString()})),b((function(){return"true"===e.shake||"1"===e.shake||1===e.shake}))})).catch((function(e){console.log("Failed fetch ",e)}))}}),500),t=setInterval((function(){a((function(e){if(null===r||null===i)return e;return console.log("body: "+JSON.stringify({id:r.id.toString(),friend_id:i.id.toString(),shake:e?"true":"false"})),fetch("true",{method:"POST"}),e}))}),500);return function(){console.log("unmount"),clearTimeout(e),clearTimeout(t)}}),[]),Object(h.jsxs)(u.i,{id:t,children:[Object(h.jsx)(u.j,{left:Object(h.jsx)(u.k,{onClick:n,"data-to":"Home"}),children:"\u0422\u0435\u0442-\u0430-\u0442\u0435\u0442"}),Object(h.jsx)(u.g,{header:Object(h.jsx)(u.h,{mode:"secondary",children:"\u0412\u044b"}),children:Object(h.jsxs)(u.f,{style:{display:"flex"},children:[Object(h.jsx)(u.d,{size:"l",stretched:!0,mode:"commerce",style:{marginRight:8},children:"\u0412\u044b \u0432 \u0442\u0435\u0442-\u0430-\u0442\u0435\u0442"}),s?Object(h.jsx)(u.d,{size:"l",stretched:!0,mode:"commerce",children:"\u0412\u044b \u0442\u0440\u044f\u0441\u0435\u0442\u0435"}):Object(h.jsx)(u.d,{size:"l",stretched:!0,mode:"secondary",children:"\u0412\u044b \u043d\u0435 \u0442\u0440\u044f\u0441\u0435\u0442\u0435"})]})}),Object(h.jsx)(u.g,{header:Object(h.jsx)(u.h,{mode:"secondary",children:(null!==i?i.first_name:"...")+" "+(null!==i?i.last_name:"")}),children:Object(h.jsxs)(u.f,{style:{display:"flex"},children:[x?Object(h.jsx)(u.d,{size:"l",stretched:!0,mode:"commerce",style:{marginRight:8},children:"\u0412 \u0442\u0435\u0442-\u0430-\u0442\u0435\u0442"}):Object(h.jsx)(u.d,{size:"l",stretched:!0,mode:"secondary",style:{marginRight:8},children:"\u041d\u0435 \u0432 \u0442\u0435\u0442-\u0430-\u0442\u0435\u0442"}),o?Object(h.jsx)(u.d,{size:"l",stretched:!0,mode:"commerce",children:"\u0422\u0440\u044f\u0441\u0435\u0442"}):Object(h.jsx)(u.d,{size:"l",stretched:!0,mode:"secondary",children:"\u041d\u0435 \u0442\u0440\u044f\u0441\u0435\u0442"})]})}),Object(h.jsx)(u.n,{}),s&&x&&o?Object(h.jsxs)(u.f,{style:{margin:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",textAlign:"center",padding:32},children:[Object(h.jsx)(u.c,{children:Object(h.jsx)(m.a,{})}),Object(h.jsx)(u.e,{children:"\u0412\u044b \u0442\u0440\u044f\u0441\u0435\u0442\u0435 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e!"}),Object(h.jsx)(u.c,{children:Object(h.jsx)(m.a,{})})]}):Object(h.jsx)(u.l,{icon:s?Object(h.jsx)(p.a,{fill:"DC143C"}):Object(h.jsx)(g.a,{fill:"DC143C"}),header:"\u0422\u0440\u044f\u0441\u044c\u0442\u0438 \u043d\u0443\u0436\u043d\u043e \u0441\u0438\u043b\u044c\u043d\u043e!"})]})},S=function(){arguments.length>0&&void 0!==arguments[0]||allowedList;return function(){var e=Object(c.useState)("WelcomeScreen"),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(null),s=Object(j.a)(i,2),d=s[0],b=s[1],O=Object(c.useState)(Object(h.jsx)(u.m,{size:"large"})),m=Object(j.a)(O,2),p=m[0],g=m[1],S=Object(c.useState)(null),v=Object(j.a)(S,2),k=(v[0],v[1]),z=Object(c.useState)(null),A=Object(j.a)(z,2),C=A[0],_=A[1],W=Object(c.useState)(null),w=Object(j.a)(W,2),I=w[0],U=w[1],K=Object(c.useState)(0),V=Object(j.a)(K,2),F=V[0],T=V[1],D=Object(c.useState)({x:0,y:0,z:0}),E=Object(j.a)(D,2),H=E[0],J=E[1],M=Object(c.useState)(10),R=Object(j.a)(M,2);R[0],R[1];Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(null),e.next=3,a.a.send("VKWebAppGetUserInfo");case 3:t=e.sent,a.a.send("VKWebAppAccelerometerStart",{refresh_rate:200}),b(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value="client_light",k(r.value),document.body.attributes.setNamedItem(r)}if("VKWebAppAccelerometerChanged"===n){var i=c.x,s=c.y,a=c.z,d=Math.sqrt(i*i+s*s+a*a);U((function(){return d>11})),T((function(){return d})),J((function(){return{x:i,y:s,z:a}}))}}));var t=setInterval((function(){var e=H,t=null;setTimeout((function(){t=H,e.x===t.x&&e.y===t.y&&e.z===t.z&&a.a.send("VKWebAppAccelerometerStart",{refresh_rate:200})}),500)}),1e3);return function(){e.apply(this,arguments)}(),function(){null!==t&&clearTimeout(t)}}),[]);var G=function(e){r(e.currentTarget.dataset.to)},N=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.a.send("VKWebAppGetFriends",{}).then((function(e){_((function(){return e.users[0]})),r((function(){return"Friend"}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(u.a,{children:Object(h.jsx)(u.b,{children:Object(h.jsxs)(u.o,{activePanel:n,popout:p,children:[Object(h.jsx)(x,{id:"WelcomeScreen",fetchedUser:d,go:G}),Object(h.jsx)(f,{id:"Home",fetchedUser:d,go:G,callFriend:N}),Object(h.jsx)(y,{id:"Friend",fetchedUser:d,go:G,friend:C,meShacking:I,setMeShacking:U,coord:H,speed:F})]})})})}()};a.a.send("VKWebAppInit"),i.a.render(Object(h.jsx)(S,{}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.c735d680.chunk.js.map