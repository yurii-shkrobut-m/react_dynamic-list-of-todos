(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(6),n=c.n(a),l=c(7),r=c(2),i=c(1),d=(c(12),c(13),c(14),c(0)),o=function(e){var t=e.todos,c=e.setSelectedTodo,s=e.selectedTodo;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var t=(null===s||void 0===s?void 0:s.id)===e.id;return Object(d.jsxs)("tr",{"data-cy":"todo",className:t?"has-background-info-light":"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(d.jsx)("td",{className:"is-vcentered",children:Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}):Object(d.jsx)("td",{className:"is-vcentered"}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:"has-text-".concat(e.completed?"success":"danger"),children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far fa-eye".concat(t?"-slash":"")})})})})]})}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var j=function(e){var t=e.query,c=e.setQuery,a=e.setFilterStatus;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return a(e.target.value)},children:[Object(d.jsx)("option",{value:s.All,children:"All"}),Object(d.jsx)("option",{value:s.Active,children:"Active"}),Object(d.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},u=(c(16),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})});function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(i.useState)(null),a=Object(r.a)(s,2),n=a[0],l=a[1];return Object(i.useEffect)((function(){var e;(e=t.userId,b("/users/".concat(e))).then(l).catch((function(){throw new Error("Error. Please try again later")}))}),[t.userId]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),n?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(d.jsx)("strong",{className:"has-text-".concat(t.completed?"success":"danger"),children:t.completed?"Done":"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(d.jsx)(u,{})]})},m=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)([]),m=Object(r.a)(n,2),O=m[0],x=m[1],f=Object(i.useState)(s.All),v=Object(r.a)(f,2),p=v[0],N=v[1],y=Object(i.useState)(!1),g=Object(r.a)(y,2),S=g[0],k=g[1],w=Object(i.useState)(null),C=Object(r.a)(w,2),T=C[0],A=C[1];Object(i.useEffect)((function(){k(!0),b("/todos").then(x).catch((function(){throw new Error("Error. Please try again later")})).finally((function(){return k(!1)}))}),[]);var E=Object(i.useMemo)((function(){var e=Object(l.a)(O);switch(c&&(e=e.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))),p){case s.Active:return e.filter((function(e){return!e.completed}));case s.Completed:return e.filter((function(e){return e.completed}));default:return e}}),[c,p,O]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(j,{query:c,setQuery:a,setFilterStatus:N})}),Object(d.jsxs)("div",{className:"block",children:[S&&Object(d.jsx)(u,{}),Object(d.jsx)(o,{todos:E,selectedTodo:T,setSelectedTodo:A})]})]})})}),T&&Object(d.jsx)(h,{selectedTodo:T,setSelectedTodo:A})]})};n.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.52f0afe3.chunk.js.map