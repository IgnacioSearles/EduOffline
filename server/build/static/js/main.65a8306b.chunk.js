(this.webpackJsonpeduoffline=this.webpackJsonpeduoffline||[]).push([[0],{100:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(22),i=c.n(a),r=c(5),o=c(8),j=(c(50),c(2)),l=c(9),b=c(45),u=c(18),d=c.n(u);function O(e,t){return d.a.post(""+e,t)}function h(e,t,c){return d.a.post(""+e,Object(b.a)({nombre:c.nombre,token:c.token},t))}function m(e){return d.a.get(""+e)}function x(e,t){return d.a.get(""+e+"?nombre=".concat(t.nombre,"&token=").concat(t.token))}c(73);var p=c(7),f=c(4),v=[{nombre:"Inicio",link:"/",icono:f.l},{nombre:"Libros",link:"/libros",icono:f.c},{nombre:"Clases",link:"/clases",icono:f.o},{nombre:"Proyectos",link:"/proyectos",icono:f.m},{nombre:"Recursos",link:"/recursos",icono:f.b},{nombre:"Mensajes",link:"/mensajes",icono:f.g}],N=c(0);var g=function(){return Object(l.c)((function(e){return e.usuario}))?Object(N.jsx)("nav",{className:"sideBar",children:Object(N.jsx)("ul",{className:"sideBarList",children:v.map((function(e){return Object(N.jsx)(r.b,{className:"sideBarLink",to:e.link,children:Object(N.jsxs)("li",{className:"sideBarItem",id:window.location.pathname.split("/")[1]===e.link.split("/")[1]?"sideBarActive":"",children:[Object(N.jsx)(p.a,{icon:e.icono,className:"sideBarIcon"}),Object(N.jsx)("p",{children:e.nombre})]})},e.nombre)}))})}):Object(N.jsx)(o.a,{to:"/ingresar"})};c(80);var k=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)({}),i=Object(j.a)(a,2),b=i[0],u=i[1],d=Object(l.c)((function(e){return e.usuario})),O=Object(o.g)();return Object(s.useEffect)((function(){d&&x("/usuarios/ultimos/",d).then((function(e){n(e.data)})).catch((function(e){O.push("/ingresar")}))}),[O,d]),Object(s.useEffect)((function(){m("/info/cantidades/").then((function(e){u(e.data)}))}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsx)("main",{children:Object(N.jsxs)("div",{className:"inicioColumns",children:[Object(N.jsxs)("div",{className:"inicioInfo",children:[Object(N.jsx)("h2",{children:"EduOffline cuenta con:"}),Object(N.jsxs)("p",{className:"inicioText",children:["- ",Object(N.jsx)("b",{className:"inicioNum",children:b.cantidadRecursos})," recursos."]}),Object(N.jsxs)("p",{className:"inicioText",children:["- ",Object(N.jsx)("b",{className:"inicioNum",children:b.cantidadClases})," clases grabadas."]}),Object(N.jsxs)("p",{className:"inicioText",children:["- ",Object(N.jsx)("b",{className:"inicioNum",children:b.cantidadLibros})," libros."]}),Object(N.jsxs)("p",{className:"inicioText",children:["- ",Object(N.jsx)("b",{className:"inicioNum",children:b.cantidadProyectos})," proyectos."]})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:"\xdaltimo contenido usado:"}),Object(N.jsx)("div",{className:"inicioUltimosList",children:c.map((function(e){return Object(N.jsx)(r.b,{className:"linkListLink",to:e,children:Object(N.jsxs)("div",{className:"linkListTarjeta",children:["mp4"===e.split("/").reverse()[0].split(".")[1]?Object(N.jsx)(p.a,{className:"linkListIcon",icon:f.o}):Object(N.jsx)(p.a,{className:"linkListIcon",icon:f.c}),Object(N.jsx)("h4",{children:decodeURIComponent(e.split("/").reverse()[0].split(".")[0])})]})},e)}))})]})]})})]})};var y=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){m("/clases/materias/").then((function(e){n(e.data)}))}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsxs)("main",{children:[Object(N.jsx)("h2",{className:"listTitle",children:"Materias:"}),Object(N.jsx)("div",{className:"linkListContainer",children:c.map((function(e){return Object(N.jsx)(r.b,{className:"linkListLink",to:"/clases/".concat(e.nombre),children:Object(N.jsxs)("div",{className:"linkListTarjeta",children:[Object(N.jsx)(p.a,{className:"linkListIcon",icon:f.d}),Object(N.jsx)("h4",{children:e.nombre.split(".")[0]})]})},e.nombre)}))})]})]})};var C=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){m("/libros/archivos/").then((function(e){return n(e.data)}))}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsxs)("main",{children:[Object(N.jsx)("h2",{className:"listTitle",children:"Libros:"}),Object(N.jsx)("div",{className:"linkListContainer",children:c.map((function(e){return Object(N.jsx)(r.b,{className:"linkListLink",to:"/libros/".concat(e.nombre),children:Object(N.jsxs)("div",{className:"linkListTarjeta",children:[Object(N.jsx)(p.a,{className:"linkListIcon",icon:f.c}),Object(N.jsx)("h4",{children:e.nombre.split(".")[0]})]})},e.nombre)}))})]})]})};c(81);var L=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(j.a)(a,2),r=i[0],o=i[1];return Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsxs)("main",{children:[Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m("/recursos/archivo/?busqueda=".concat(c)).then((function(e){o(e.data[0].document.recurso)})).catch((function(e){console.log(e)}))},className:"recursosInput",children:[Object(N.jsx)("input",{type:"text",className:"input bigInput",placeholder:"Busque un recurso",onChange:function(e){return n(e.target.value)}}),Object(N.jsx)("button",{className:"button",type:"submit",children:Object(N.jsx)(p.a,{icon:f.p})})]}),Object(N.jsx)("div",{className:"visorPdfFrame",children:Object(N.jsx)("iframe",{className:"visorPdf",allow:"fullscreen",title:"Visor de recursos",src:r?"".concat("","/archivos/recursos/").concat(r):"about:blank"})})]})]})};c(82);var S=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(j.a)(a,2),o=i[0],b=i[1],u=Object(l.c)((function(e){return e.usuario}));function O(e){var t;(t="/mensajes/borrarporid/?nombre=".concat(u.nombre,"&token=").concat(u.token,"&_id=").concat(e),d.a.delete(""+t)).then((function(t){return b(e)})).catch((function(e){return console.log(e)}))}return Object(s.useEffect)((function(){null!=u&&x("/mensajes/obtener",u).then((function(e){return n(e.data)})).catch((function(e){return console.log(e)}))}),[o,u]),Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsxs)("main",{children:[Object(N.jsx)("div",{style:{margin:"0.75rem 0"},children:Object(N.jsx)(r.b,{className:"button mensajeNew",to:"/mensajes/escribir",children:"Nuevo Mensaje"})}),Object(N.jsx)("div",{className:"listaMensajes",children:c.map((function(e){return Object(N.jsxs)("div",{className:"mensajeLinea",children:[Object(N.jsx)(r.b,{id:e.leido?"mensajeLeido":"",className:"linkListLink isMensajeContent",to:"/mensajes/mostrar/".concat(e._id),children:Object(N.jsxs)("div",{className:"mensajeRow",children:[Object(N.jsxs)("div",{className:"mensajeInfoLeft",children:[Object(N.jsx)("div",{style:{marginRight:"0.5rem"},children:e.leido?Object(N.jsx)(p.a,{icon:f.i}):Object(N.jsx)(p.a,{icon:f.h})}),Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{className:"mensajeEmisor",children:e.emisor}),Object(N.jsx)("p",{className:"mensajeAsunto",children:e.asunto})]})]}),Object(N.jsx)("p",{className:"mensajeFecha",children:e.fecha})]})}),Object(N.jsx)("button",{className:"mensajeDeleteBtn",onClick:function(){return O(e._id)},children:Object(N.jsx)(p.a,{icon:f.q})})]},e._id)}))})]})]})};c(83);var I=function(){var e=Object(l.c)((function(e){return e.usuario}));return Object(N.jsxs)("nav",{className:"navBar",children:[Object(N.jsx)("h2",{children:"EduOffline"}),Object(N.jsx)("h5",{children:e?"Hola, ".concat(e.nombre):""})]})};c(84);var E=function(e){return{type:"SET_USUARIO",usuario:e}};var T=function(){var e=Object(o.g)(),t=Object(s.useState)(""),c=Object(j.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)(""),b=Object(j.a)(i,2),u=b[0],d=b[1],h=Object(s.useState)(""),m=Object(j.a)(h,2),x=m[0],p=m[1],f=Object(l.b)();return Object(N.jsx)("div",{className:"ingresarSetMiddle",children:Object(N.jsxs)("div",{className:"ingresarCard",children:[Object(N.jsx)("h3",{className:"ingresarHeader",children:"Ingresar"}),Object(N.jsxs)("form",{className:"ingresarForm",onSubmit:function(t){return function(t){t.preventDefault(),O("/usuarios/ingresar",{nombre:n,clave:u}).then((function(t){var c=t.data;f(E(c.usuario)),e.push("/")})).catch((function(e){console.log(e),p(e.response.data.mensaje)}))}(t)},children:[Object(N.jsx)("input",{type:"text",className:"input",onChange:function(e){return a(e.target.value)},placeholder:"Ingresar Nombre",required:!0}),Object(N.jsx)("input",{type:"password",className:"input",onChange:function(e){return d(e.target.value)},placeholder:"Ingresar Clave",required:!0}),Object(N.jsx)("p",{className:"ingresarError",children:x}),Object(N.jsx)("button",{className:"button",children:"Ingresar"})]}),Object(N.jsx)("div",{className:"ingresarRegistrarse",children:Object(N.jsx)(r.b,{to:"/registrarse",children:"Crear Una Cuenta"})})]})})};c(85);var w=function(){var e=Object(o.g)(),t=Object(s.useState)(""),c=Object(j.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)(""),r=Object(j.a)(i,2),l=r[0],b=r[1],u=Object(s.useState)(""),d=Object(j.a)(u,2),h=d[0],m=d[1],x=Object(s.useState)(""),p=Object(j.a)(x,2),f=p[0],v=p[1];return Object(N.jsx)("div",{className:"registrarseSetMiddle",children:Object(N.jsxs)("div",{className:"registrarseCard",children:[Object(N.jsx)("h3",{className:"registrarseHeader",children:"Crear una cuenta"}),Object(N.jsxs)("form",{className:"registrarseForm",onSubmit:function(t){return function(t){t.preventDefault(),h!==f&&a("Aseg\xfarese de que repita la clave correctamente."),O("/usuarios/registrarse",{nombre:l,clave:h}).then((function(t){e.push("/")})).catch((function(e){console.log(e),a(e.response.data.mensaje)}))}(t)},children:[Object(N.jsx)("input",{type:"text",onChange:function(e){return b(e.target.value)},className:"input",placeholder:"Ingresar Nombre",required:!0}),Object(N.jsx)("input",{type:"password",onChange:function(e){return m(e.target.value)},className:"input",placeholder:"Ingresar Clave",required:!0}),Object(N.jsx)("input",{type:"password",onChange:function(e){return v(e.target.value)},className:"input",placeholder:"Repetir Clave",required:!0}),Object(N.jsx)("p",{className:"registrarseError",children:n}),Object(N.jsx)("button",{className:"button",children:"Crear Cuenta"})]})]})})};var M=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(o.h)().materia;return Object(s.useEffect)((function(){m("/clases/videos/?materia=".concat(a)).then((function(e){n(e.data)}))}),[a]),Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsxs)("main",{children:[Object(N.jsxs)("h2",{className:"listTitle",children:["Videos ",a,":"]}),Object(N.jsx)("div",{className:"linkListContainer",children:c.map((function(e){return Object(N.jsx)(r.b,{className:"linkListLink",to:"/clases/".concat(a,"/").concat(e),children:Object(N.jsxs)("div",{className:"linkListTarjeta",children:[Object(N.jsx)(p.a,{className:"linkListIcon",icon:f.o}),Object(N.jsx)("h4",{children:e.split(".")[0]})]})},e)}))})]})]})};c(86);var D=function(){var e=Object(o.h)(),t=e.materia,c=e.video,n=Object(l.c)((function(e){return e.usuario})),a=Object(o.g)();return Object(s.useEffect)((function(){n&&h("/usuarios/ultimos",{recurso:window.location.pathname},n).catch((function(e){a.push("/ingresar")}))}),[n,a]),Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsxs)("main",{children:[Object(N.jsxs)("div",{className:"tituloVolver",children:[Object(N.jsx)("h2",{children:c.split(".")[0]}),Object(N.jsxs)(r.b,{to:"/clases/".concat(t),className:"button",style:{textDecoration:"none"},children:[Object(N.jsx)(p.a,{icon:f.a}),"Volver"]})]}),Object(N.jsx)("video",{className:"videoPlayer",src:"".concat("","/archivos/clases/").concat(t,"/").concat(c),controls:!0})]})]})};var _=function(){var e=Object(o.h)().libro,t=Object(l.c)((function(e){return e.usuario})),c=Object(o.g)();return Object(s.useEffect)((function(){t&&h("/usuarios/ultimos",{recurso:window.location.pathname},t).catch((function(e){c.push("/ingresar")}))}),[t,c]),Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsxs)("main",{children:[Object(N.jsx)("h2",{children:e.split(".")[0]}),Object(N.jsx)("div",{className:"visorPdfFrame",children:Object(N.jsx)("iframe",{title:e.split(".")[0],className:"visorPdf",src:"".concat("","/archivos/libros/").concat(e)})})]})]})};var A=function(){var e=Object(s.useState)({}),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(o.g)(),i=Object(l.c)((function(e){return e.usuario})),r=Object(o.h)().id;return Object(s.useEffect)((function(){i&&m("/mensajes/obtenerporid/?nombre=".concat(i.nombre,"&token=").concat(i.token,"&_id=").concat(r)).then((function(e){return n(e.data)})).catch((function(e){return a.push("/ingresar")}))}),[a,r,i]),Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsxs)("main",{children:[Object(N.jsx)("h2",{className:"mensajeMainTitulo",children:c.asunto}),Object(N.jsxs)("div",{className:"mensajeInfo",children:[Object(N.jsx)("p",{className:"mensajeEmisor",children:c.emisor}),Object(N.jsx)("p",{className:"mensajeFecha",children:c.fecha})]}),Object(N.jsx)("div",{className:"mensajeMostrarCuerpoDiv",children:Object(N.jsx)("span",{className:"mensajeMostrarCuerpo",children:c.cuerpo})})]})]})};c(87);var P=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(j.a)(a,2),r=i[0],b=i[1],u=Object(s.useState)(""),d=Object(j.a)(u,2),O=d[0],m=d[1],x=Object(s.useState)(""),v=Object(j.a)(x,2),k=v[0],y=v[1],C=Object(l.c)((function(e){return e.usuario})),L=Object(o.g)();return Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsx)("main",{children:Object(N.jsxs)("div",{className:"escribirMensajeTarjeta",children:[Object(N.jsx)("h2",{className:"escribirMensajeTitulo",children:"Nuevo Mensaje"}),Object(N.jsxs)("form",{className:"escribirMensajeForm",autoComplete:"off",onSubmit:function(e){e.preventDefault(),O.split(";").forEach((function(e){h("/mensajes/enviar",{asunto:r,receptor:e,cuerpo:k,fecha:(new Date).toLocaleDateString()},C).then((function(e){return L.push("/mensajes")})).catch((function(e){return n(e.response.data.mensaje)}))}))},children:[Object(N.jsx)("label",{className:"label",for:"asunto",children:"Asunto:"}),Object(N.jsx)("input",{type:"text",className:"input",placeholder:"Asunto",name:"asunto",onChange:function(e){return b(e.target.value)}}),Object(N.jsx)("label",{className:"label",for:"destinatarios",children:"Destinatarios (separados por ;):"}),Object(N.jsx)("input",{type:"text",className:"input",placeholder:"Destinatarios",name:"destinatarios",onChange:function(e){return m(e.target.value)}}),Object(N.jsx)("label",{className:"label",for:"cuerpo",children:"Cuerpo:"}),Object(N.jsx)("textarea",{className:"input escribirMensajeCuerpo",placeholder:"Cuerpo",name:"cuerpo",onChange:function(e){return y(e.target.value)}}),Object(N.jsx)("button",{className:"button",type:"submit",children:Object(N.jsx)(p.a,{icon:f.n})})]}),Object(N.jsx)("p",{className:"mensajeError",children:c})]})})]})},B=c(42),R=c.n(B),q=(c(93),c(94),c(95),c(96),c(97),c(98),c(99),{c_cpp:"cpp",javascript:"js",java:"java",html:"html",python:"py"});var F=function(e){var t=e.codigoInicial,c=e.extensionArchivo,n=Object(s.useState)(c||"c_cpp"),a=Object(j.a)(n,2),i=a[0],r=a[1],o=Object(s.useState)(t),l=Object(j.a)(o,2),b=l[0],u=l[1];return Object(N.jsxs)("div",{className:"editorCodigo",children:[Object(N.jsxs)("div",{children:[Object(N.jsxs)("select",{className:"select",onChange:function(e){return r(e.target.value)},children:[Object(N.jsx)("option",{value:"c_cpp",children:"C++"}),Object(N.jsx)("option",{value:"javascript",children:"Javascript"}),Object(N.jsx)("option",{value:"java",children:"Java"}),Object(N.jsx)("option",{value:"html",children:"HTML"}),Object(N.jsx)("option",{value:"python",children:"Python"})]}),Object(N.jsx)("a",{className:"button nounderline",href:"data:text/plain;charset=utf-8,".concat(encodeURIComponent(b)),download:"codigo.".concat(q[i]),children:"Descargar Como Archivo"})]}),Object(N.jsx)(R.a,{mode:i,theme:"terminal",className:"editorCodigoEditor",width:"auto",onChange:function(e){u(e)},editorProps:{$blockScrolling:!0},value:b})]})};c(100);var U=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){m("/proyectos/proyectos/").then((function(e){n(e.data)}))}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsx)("main",{children:Object(N.jsxs)("div",{className:"proyectosMainDiv",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"listTitle",children:"Proyectos STEM:"}),Object(N.jsx)("div",{className:"linkListContainerIs2",children:c.map((function(e){return Object(N.jsx)(r.b,{className:"linkListLink",to:"/proyectos/".concat(e.nombre),children:Object(N.jsxs)("div",{className:"linkListTarjeta",children:[Object(N.jsx)(p.a,{className:"linkListIcon",icon:f.f}),Object(N.jsx)("h4",{children:e.nombre.split(".")[0]})]})},e.nombre)}))}),Object(N.jsx)("h2",{className:"listTitle",children:"Software:"}),Object(N.jsx)("ul",{className:"proyectosSoftwareList",children:Object(N.jsxs)("li",{children:["- ",Object(N.jsx)("a",{href:"".concat("","/archivos/ArduinoIDE.zip"),download:!0,children:"Arduino IDE"})," para Windows (64-bit/32-bit)."]})})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"listTitle",children:"Editor de codigo:"}),Object(N.jsx)(F,{})]})]})})]})},V={pdf:f.k,ino:f.e,zip:f.j};var H=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(o.h)().proyecto;return Object(s.useEffect)((function(){m("/proyectos/recursos/?proyecto=".concat(a)).then((function(e){n(e.data)}))}),[a]),Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsxs)("main",{children:[Object(N.jsxs)("h2",{className:"listTitle",children:["Documentos ",a,":"]}),Object(N.jsx)("div",{className:"linkListContainer",children:c.map((function(e){return Object(N.jsx)(r.b,{className:"linkListLink",to:"/proyectos/".concat(a,"/").concat(e),children:Object(N.jsxs)("div",{className:"linkListTarjeta",children:[Object(N.jsx)(p.a,{className:"linkListIcon",icon:V[e.split(".")[1]]}),Object(N.jsx)("h4",{children:e.split(".")[0]})]})},e)}))})]})]})},J={cpp:"c_cpp",ino:"c_cpp",h:"c_cpp",hpp:"c_cpp",js:"javascript",java:"java",html:"html",py:"python"};var z=function(){var e=Object(o.h)(),t=e.proyecto,c=e.doc,n=Object(s.useState)(""),a=Object(j.a)(n,2),i=a[0],l=a[1],b=Object(s.useState)(!1),u=Object(j.a)(b,2),d=u[0],O=u[1];return Object(s.useEffect)((function(){m("/archivos/proyectos/".concat(t,"/").concat(c)).then((function(e){l(e.data),O(!0)}))}),[c,t]),Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{}),Object(N.jsxs)("main",{children:[Object(N.jsxs)("div",{className:"tituloVolver",children:[Object(N.jsx)("h2",{children:c.split(".")[0]}),Object(N.jsxs)(r.b,{to:"/proyectos/".concat(t),className:"button",style:{textDecoration:"none"},children:[Object(N.jsx)(p.a,{icon:f.a}),"Volver"]})]}),"pdf"===c.split(".")[1]||J[c.split(".")[1]]?"":Object(N.jsx)("p",{children:"Descarga Completa"}),J[c.split(".")[1]]?"":Object(N.jsx)("div",{className:"visorPdfFrame",children:Object(N.jsx)("iframe",{title:c.split(".")[0],className:"visorPdf",src:"".concat("","/archivos/proyectos/").concat(t,"/").concat(c)})}),J[c.split(".")[1]]&&d?Object(N.jsx)(F,{codigoInicial:i,extensionArchivo:J[c.split(".")[1]]}):""]})]})};var W=function(){return Object(N.jsx)("div",{children:Object(N.jsxs)(r.a,{children:[Object(N.jsx)(I,{}),Object(N.jsxs)(o.d,{children:[Object(N.jsx)(o.b,{exact:!0,path:"/ingresar",component:T}),Object(N.jsx)(o.b,{exact:!0,path:"/registrarse",component:w}),Object(N.jsx)(o.b,{exact:!0,path:"/",component:k}),Object(N.jsx)(o.b,{exact:!0,path:"/libros",component:C}),Object(N.jsx)(o.b,{exact:!0,path:"/libros/:libro",component:_}),Object(N.jsx)(o.b,{exact:!0,path:"/clases",component:y}),Object(N.jsx)(o.b,{exact:!0,path:"/clases/:materia",component:M}),Object(N.jsx)(o.b,{exact:!0,path:"/clases/:materia/:video",component:D}),Object(N.jsx)(o.b,{exact:!0,path:"/proyectos",component:U}),Object(N.jsx)(o.b,{exact:!0,path:"/proyectos/:proyecto",component:H}),Object(N.jsx)(o.b,{exact:!0,path:"/proyectos/:proyecto/:doc",component:z}),Object(N.jsx)(o.b,{exact:!0,path:"/recursos",component:L}),Object(N.jsx)(o.b,{exact:!0,path:"/mensajes",component:S}),Object(N.jsx)(o.b,{exact:!0,path:"/mensajes/escribir",component:P}),Object(N.jsx)(o.b,{exact:!0,path:"/mensajes/mostrar/:id",component:A})]})]})})},$=c(16),G=c(23),K=c(43),Q=c.n(K);var X=Object($.a)({usuario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USUARIO":return t.usuario;default:return e}}}),Y={key:"usuario",storage:Q.a},Z=Object(G.a)(Y,X),ee=c(44),te=(c.p,c(103),Object($.b)(Z)),ce=Object(G.b)(te);i.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(l.a,{store:te,children:Object(N.jsx)(ee.a,{loading:null,persistor:ce,children:Object(N.jsx)(W,{})})})}),document.getElementById("root"))},50:function(e,t,c){},73:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},99:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.65a8306b.chunk.js.map