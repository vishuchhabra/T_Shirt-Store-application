(this.webpackJsonpprojfrontend=this.webpackJsonpprojfrontend||[]).push([[0],{19:function(e,t,a){},24:function(e,t,a){e.exports=a(34)},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a(6),l=a(3),s=(a(19),a(4)),m=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},i=function(e,t){return e.location.pathname===t?{color:"#FFFFFF"}:{color:"#2ecc72"}},u=Object(o.g)((function(e){var t=e.history;return c.a.createElement("div",{className:"mb-5"},c.a.createElement("ul",{className:"nav nav-tabs bg-dark fixed-top"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.c,{style:i(t,"/"),className:"nav-link",to:"/"},c.a.createElement("h4",null," Home"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.c,{style:i(t,"/cart"),className:"nav-link",to:"/cart"},c.a.createElement("h4",null,"Cart"))),m()&&0===m().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.c,{style:i(t,"/user/dashboard"),className:"nav-link",to:"/user/dashboard"},c.a.createElement("h4",null,"Dashboard"))),m()&&1===m().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.c,{style:i(t,"/admin/dashboard"),className:"nav-link",to:"/admin/dashboard"},c.a.createElement("h4",null,"Dashboard"))),!m()&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.c,{style:i(t,"/signup"),className:"nav-link",to:"/signup"},c.a.createElement("h4",null,"Signup"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.c,{style:i(t,"/signin"),className:"nav-link",to:"/signin"},c.a.createElement("h4",null,"Sign In")))),m()&&c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{style:{color:"#f1c40f"},className:"nav-link  ",onClick:function(){!function(e){if("undefined"!==typeof window)localStorage.removeItem("jwt"),e(),fetch("".concat(s.API,"/signout"),{method:"GET"}).then((function(e){return console.log("signout success")})).catch((function(e){return console.log(e)}))}((function(){t.push("/")}))}},c.a.createElement("h4",null,"Signout")))))})),d=function(e){var t=e.title,a=void 0===t?"My Title":t,n=e.description,r=void 0===n?"My Desription":n,o=e.className,l=void 0===o?"bg-dark text-white p-4":o,s=e.children;return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"jumbotron bg-dark text-white text-center"},c.a.createElement("h2",{className:"font-weight-bold text-lg text-success"}," ",a),c.a.createElement("p",{className:"lead"},r)),c.a.createElement("div",{className:l},s)),c.a.createElement("footer",{className:"footer bg-dark mt-auto py-3"},c.a.createElement("div",{className:"container-fluid bg-success text-white text-center py-3"},c.a.createElement("h5",null,"Feel Free To Reach Out ......"),c.a.createElement("a",{href:"mailto:vishuchhabra1016@gmail.com"},c.a.createElement("button",{className:"btn btn-warning btn-lg"},c.a.createElement("h6",null,"Contact Us")))),c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"text-success"},"An Amazing ",c.a.createElement("span",{className:"text-white"},"T-Shirt")," Store"))))},p=function(e){var t=e.product,a=t?"".concat(s.API,"/product/photo/").concat(t._id):"https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";return c.a.createElement("div",{className:"rounded border border-success p-2"},c.a.createElement("img",{src:a,alt:"photo",style:{maxHeight:"100%",maxWidth:"100%"},className:"mb-3 rounded"}))},f=a(1),E=function(e){var t=e.product,a=e.addtoCart,r=void 0===a||a,s=e.removeFromCart,i=void 0!==s&&s,u=e.setReload,d=void 0===u?function(e){return e}:u,E=e.reload,g=void 0===E?void 0:E,b=Object(n.useState)(!1),h=Object(l.a)(b,2),N=h[0],v=h[1],j=Object(n.useState)(t.count),y=Object(l.a)(j,2),O=(y[0],y[1],t?t.name:"A Photo From Pexels"),w=t?t.description:"Default Description ",S=t?t.price:"Default Price",x=function(){!function(e,t){var a=[];if(void 0!==typeof window&&m()){var n=m().user._id;localStorage.getItem("".concat(n))&&(a=JSON.parse(localStorage.getItem("".concat(n)))),a.push(Object(f.a)(Object(f.a)({},e),{},{count:1})),localStorage.setItem("".concat(n),JSON.stringify(a)),t()}else window.location.href="/#/signin"}(t,(function(){return v(!0)}))};return c.a.createElement("div",{className:"card text-white bg-dark border border-white "},c.a.createElement("div",{className:"card-header text-success"}," ",c.a.createElement("h3",null,O)),c.a.createElement("div",{className:"card-body"},function(e){if(e)return c.a.createElement(o.a,{to:"/cart"})}(N),c.a.createElement(p,{product:t}),c.a.createElement("p",{className:"lead bg-success font-weight-normal text-wrap"},w),c.a.createElement("p",{className:"btn btn-success rounded  btn-sm px-4"},"$ ",S),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},function(e){return e&&c.a.createElement("button",{onClick:x,className:"btn btn-block btn-outline-success mt-2 mb-2"},"Add to Cart")}(r)),c.a.createElement("div",{className:"col-12"},function(e){return e&&c.a.createElement("button",{onClick:function(){!function(e){var t=[];if(void 0!==typeof window&&m()){var a=m().user._id;localStorage.getItem("".concat(a))&&(t=JSON.parse(localStorage.getItem("".concat(a)))),t.map((function(a,n){a._id===e&&t.splice(n,1)})),localStorage.setItem("".concat(a),JSON.stringify(t))}}(t._id),d(!g)},className:"btn btn-block btn-outline-danger mt-2 mb-2"},"Remove from cart")}(i)))))},g=a(4).API;function b(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),m=(s[0],s[1]),i=function(){fetch("".concat(g,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?m(e.error):r(e)}))};return Object(n.useEffect)((function(){i()}),[]),c.a.createElement(d,{title:"Your Store",description:"Welcome To The T-shirt Store"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("h3",{className:"text-white"},"Hey , We Are Selling Here .....")),c.a.createElement("div",{className:"row"},a.map((function(e,t){return c.a.createElement("div",{key:t,className:"col-lg-4 mb-4 mt-4"},c.a.createElement(E,{product:e}))})))))}var h=a(9),N=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(l.a)(e,2),a=t[0],o=t[1],m=a.name,i=a.email,u=a.password,p=a.error,E=a.success,g=function(e){return function(t){o(Object(f.a)(Object(f.a)({},a),{},Object(h.a)({error:!1},e,t.target.value)))}},b=function(e){var t;e.preventDefault(),o(Object(f.a)(Object(f.a)({},a),{},{error:!1})),(t={name:m,email:i,password:u},fetch("".concat(s.API,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?o(Object(f.a)(Object(f.a)({},a),{},{error:e.error,success:!1})):o(Object(f.a)(Object(f.a)({},a),{},{name:"",email:"",password:"",error:"",success:!0}))})).catch(console.log("Error in signup"))};return c.a.createElement(d,{title:"SignUp Here...",description:"Put your credentials here"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-success",style:{display:E?"":"none"}},"New Account was created Successfully, Please ",c.a.createElement(r.c,{to:"/signin"}," Login Here")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger ",style:{display:p?"":"none"}},p))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Name"),c.a.createElement("input",{className:"form-control",onChange:g("name"),type:"text",value:m})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Email"),c.a.createElement("input",{className:"form-control",onChange:g("email"),type:"email",value:i})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Password"),c.a.createElement("input",{onChange:g("password"),className:"form-control",type:"password",value:u})),c.a.createElement("button",{onClick:b,className:"btn btn-success btn-block"},"Submit")))))},v=function(){var e=Object(n.useState)({email:"",password:"",error:"",loading:!1,didRedirect:!1}),t=Object(l.a)(e,2),a=t[0],r=t[1],i=a.email,u=a.password,p=a.error,E=a.loading,g=a.didRedirect,b=m().user,N=function(e){return function(t){r(Object(f.a)(Object(f.a)({},a),{},Object(h.a)({error:!1},e,t.target.value)))}},v=function(e){e.preventDefault(),r(Object(f.a)(Object(f.a)({},a),{},{error:!1,loading:!0})),function(e){return fetch("".concat(s.API,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:i,password:u}).then((function(e){e.error?r(Object(f.a)(Object(f.a)({},a),{},{error:e.error,loading:!1})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){r(Object(f.a)(Object(f.a)({},a),{},{didRedirect:!0}))}))})).catch(console.log("signin request failed"))};return c.a.createElement(d,{title:"Login Here..",description:"Put your credentials here"},E&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"Loading...")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",style:{display:p?"":"none"}},p))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Email"),c.a.createElement("input",{onChange:N("email"),value:i,className:"form-control",type:"email"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Password"),c.a.createElement("input",{onChange:N("password"),value:u,className:"form-control",type:"password"})),c.a.createElement("button",{onClick:v,className:"btn btn-success btn-block"},"Submit")))),g?b&&1===b.role?c.a.createElement(o.a,{to:"/admin/dashboard"}):c.a.createElement(o.a,{to:"/user/dashboard"}):m()?c.a.createElement(o.a,{to:"/"}):void 0)},j=a(15),y=function(e){var t=e.component,a=Object(j.a)(e,["component"]);return c.a.createElement(o.b,Object.assign({},a,{render:function(e){return m()&&1===m().user.role?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},O=function(e){var t=e.component,a=Object(j.a)(e,["component"]);return c.a.createElement(o.b,Object.assign({},a,{render:function(e){return m()?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},w=function(){return c.a.createElement(d,{title:"UserDashBoard ",description:"Your Profile..."},c.a.createElement("h5",null,"User Dashboard is In Construction Mode....."))},S=function(){var e=m().user,t=e.name,a=e.email;e.role;return c.a.createElement(d,{title:"WelCome To Admin Area",description:"Manage All Of Your Products Here",className:"container bg-success p-4"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"card-header bg-dark text-white "},"Admin Navigation"),c.a.createElement("ul",{className:"List-group"},c.a.createElement("li",{className:"List-group-item"},c.a.createElement(r.c,{to:"/admin/create/category",className:"nav-link text-success "}," Create Categories")),c.a.createElement("li",{className:"List-group-item"},c.a.createElement(r.c,{to:"/admin/categories",className:"nav-link text-success "}," Manage Categories")),c.a.createElement("li",{className:"List-group-item"},c.a.createElement(r.c,{to:"/admin/create/product",className:"nav-link text-success "}," Create Product")),c.a.createElement("li",{className:"List-group-item"},c.a.createElement(r.c,{to:"/admin/products",className:"nav-link text-success "}," Manage Products")),c.a.createElement("li",{className:"List-group-item"},c.a.createElement(r.c,{to:"/admin/orders",className:"nav-link text-success "}," Create Orders"))))),c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"card mb-4"},c.a.createElement("h4",{className:"card-header"},"Admin Information"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge  badge-success mr-2"},"Name:")," ",t),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge  badge-success mr-2"},"Email:")," ",a),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-danger"},"Admin Area")))))))},x=function(){return fetch("".concat(s.API,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},C=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(!1),u=Object(l.a)(i,2),p=u[0],f=u[1],E=Object(n.useState)(!1),g=Object(l.a)(E,2),b=g[0],h=g[1],N=Object(n.useState)(!1),v=Object(l.a)(N,2),j=v[0],y=v[1],O=m(),w=O.user,S=O.token,x=function(e){f(""),o(e.target.value)},C=function(e){e.preventDefault(),f(""),h(!1),y(!0),function(e,t,a){return fetch("".concat(s.API,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(w._id,S,{name:a}).then((function(e){e.error?(f(!0),y(!1)):(f(""),h(!0),o(""),y(!1))}))};return c.a.createElement(d,{title:"Create New Category...",description:"Add New Category For New T-shirts",className:"container bg-success p-4"},c.a.createElement("div",{className:"row bg-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},j&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"Loading...")),function(){if(b)return c.a.createElement("h4",{className:"text-success"},"Category Created Successfully")}(),function(){if(p)return c.a.createElement("h4",{className:"text-danger"},"Failed To Create Category")}(),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"},"Enter Name"),c.a.createElement("input",{type:"text",className:"form-control my-3",onChange:x,value:a,autoFocus:!0,required:!0,placeholder:"For Ex. Summer"}),c.a.createElement("button",{onClick:C,className:"btn btn-outline-success"},"Create Category"))),c.a.createElement("div",{className:"mt-5"},c.a.createElement(r.c,{className:"btn btn-sm btn-success mb-3",to:"/admin/dashboard"},"Admin Home")))))},k=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=m(),u=i.user,p=i.token,f=function(){x().then((function(e){e.error?console.log(e.error):o(e)}))};Object(n.useEffect)((function(){f()}),[]);var E=function(e){(function(e,t,a){return fetch("".concat(s.API,"/category/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,u._id,p).then((function(e){e.error?console.log(e.error):f()}))};return c.a.createElement(d,{title:"Welcome Admin",description:"Manage Categories Here"},c.a.createElement("h3",{className:"mb-4"},"Go  To Admin Home!!!"),c.a.createElement(r.c,{className:"btn btn-danger",to:"/admin/dashboard"},c.a.createElement("span",{className:""},"Admin Home")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h3",{className:"text-center text-white my-3"},"Total Categories"),a.map((function(e,t){return c.a.createElement("div",{key:t,className:"row text-center mb-2 "},c.a.createElement("div",{className:"col-4"},c.a.createElement("h3",{className:"text-white text-left"}," ",e.name)),c.a.createElement("div",{className:"col-4"},c.a.createElement(r.c,{className:"btn btn-success",to:"/admin/category/update/".concat(e._id)},c.a.createElement("span",{className:""},"Update"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{onClick:function(){E(e._id)},className:"btn btn-danger"},"Delete")))})))))},A=function(){var e=m(),t=e.user,a=e.token,o=Object(n.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),i=Object(l.a)(o,2),u=i[0],p=i[1],E=u.name,g=u.description,b=u.price,N=u.stock,v=u.categories,j=(u.category,u.loading),y=u.error,O=u.createdProduct,w=u.getaRedirect,S=u.formData;Object(n.useEffect)((function(){x().then((function(e){e.error?p(Object(f.a)(Object(f.a)({},u),{},{error:e.error})):p(Object(f.a)(Object(f.a)({},u),{},{categories:e,formData:new FormData}))}))}),[]);var C=function(e){e.preventDefault(),p(Object(f.a)(Object(f.a)({},u),{},{error:"",loading:!0})),function(e,t,a){return fetch("".concat(s.API,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t._id,a,S).then((function(e){e.error?p(Object(f.a)(Object(f.a)({},u),{},{error:e.error,loading:!1,getaRedirect:!0})):p(Object(f.a)(Object(f.a)({},u),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name,getaRedirect:!0}))}))},k=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;S.set(e,a),p(Object(f.a)(Object(f.a)({},u),{},Object(h.a)({},e,a)))}};return c.a.createElement(d,{title:"Add Product Here!",description:"Welcome!! Add Product details...",className:"container bg-success p-4"},c.a.createElement(r.c,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home"),c.a.createElement("div",{className:"row bg-dark text-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},j&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"Loading...")),void(w&&setTimeout((function(){window.location.href="#/admin/dashboard"}),1e3)),function(){if(y)return c.a.createElement("h4",{className:"text-danger"},"Failed To Create Product")}(),c.a.createElement("div",{className:"alert alert-success mt-3",style:{display:O?"":"none"}},c.a.createElement("h4",null,O," Created Successfully")),c.a.createElement("form",null,c.a.createElement("span",null,"Post Photo"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"btn btn-block btn-success"},c.a.createElement("input",{onChange:k("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:k("name"),name:"photo",className:"form-control",placeholder:"Name",value:E})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:k("description"),name:"photo",className:"form-control",placeholder:"Description",value:g})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:k("price"),type:"number",className:"form-control",placeholder:"Price",value:b})),c.a.createElement("div",{className:"form-group"},c.a.createElement("select",{onChange:k("category"),className:"form-control",placeholder:"Category"},c.a.createElement("option",null,"Select"),v&&v.map((function(e,t){return c.a.createElement("option",{key:t,value:e._id},e.name)})))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:k("stock"),type:"number",className:"form-control",placeholder:"Stock",value:N})),c.a.createElement("button",{type:"submit",onClick:C,className:"btn btn-outline-success mb-3"},"Create Product")))))},P=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=m(),u=i.user,p=i.token,f=function(){fetch("".concat(s.API,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?console.log(e.error):o(e)}))};Object(n.useEffect)((function(){f()}),[]);var E=function(e){(function(e,t,a){return fetch("".concat(s.API,"/product/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,u._id,p).then((function(e){e.error?console.log(e.error):f()}))};return c.a.createElement(d,{title:"Welcome Admin",description:"Manage Products Here"},c.a.createElement("h3",{className:"mb-4"},"Go  To Admin Home!!!"),c.a.createElement(r.c,{className:"btn btn-danger",to:"/admin/dashboard"},c.a.createElement("span",{className:""},"Admin Home")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h3",{className:"text-center text-white my-3"},"All Products "),a.map((function(e,t){return c.a.createElement("div",{key:t,className:"row text-center mb-2 "},c.a.createElement("div",{className:"col-4"},c.a.createElement("h3",{className:"text-white text-left"},e.name)),c.a.createElement("div",{className:"col-4"},c.a.createElement(r.c,{className:"btn btn-success",to:"/admin/product/update/".concat(e._id)},c.a.createElement("span",{className:""},"Update"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{onClick:function(){E(e._id)},className:"btn btn-danger"},"Delete")))})))))},T=function(e){var t=e.match,a=m(),o=a.user,i=a.token,u=Object(n.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),p=Object(l.a)(u,2),E=p[0],g=p[1],b=E.name,N=E.description,v=E.price,j=E.stock,y=E.categories,O=(E.category,E.loading),w=E.error,S=E.createdProduct,C=E.getaRedirect,k=E.formData,A=function(e){(function(e){return fetch("".concat(s.API,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?g(Object(f.a)(Object(f.a)({},E),{},{error:e.error})):(g(Object(f.a)(Object(f.a)({},E),{},{name:e.name,description:e.description,price:e.price,category:e.category._id,stock:e.stock,formData:new FormData})),P())}))},P=function(){x().then((function(e){e.error?g(Object(f.a)(Object(f.a)({},E),{},{error:e.error})):g({categories:e,formData:new FormData})}))};Object(n.useEffect)((function(){A(t.params.productId)}),[]);var T=function(e){e.preventDefault(),g(Object(f.a)(Object(f.a)({},E),{},{error:"",loading:!0})),function(e,t,a,n){return fetch("".concat(s.API,"/product/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.productId,o._id,i,k).then((function(e){e.error?g(Object(f.a)(Object(f.a)({},E),{},{error:e.error,loading:!1,getaRedirect:!0})):g(Object(f.a)(Object(f.a)({},E),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name,getaRedirect:!0}))}))},I=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;k.set(e,a),g(Object(f.a)(Object(f.a)({},E),{},Object(h.a)({},e,a)))}};return c.a.createElement(d,{title:"Update Product Here!",description:"Welcome To Product Updation Section",className:"container bg-success p-4"},c.a.createElement(r.c,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home"),c.a.createElement("div",{className:"row bg-dark text-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},O&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"Loading...")),void(C&&setTimeout((function(){window.location.href="#/admin/dashboard"}),1e3)),c.a.createElement("div",{className:"alert alert-success mt-3",style:{display:S?"":"none"}},c.a.createElement("h4",null,S," Updated Successfully")),function(){if(w)return c.a.createElement("h4",{className:"text-danger"},"Failed To Update This Product")}(),c.a.createElement("form",null,c.a.createElement("span",null,"Post photo"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"btn btn-block btn-success"},c.a.createElement("input",{onChange:I("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:I("name"),name:"photo",className:"form-control",placeholder:"Name",value:b})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:I("description"),name:"photo",className:"form-control",placeholder:"Description",value:N})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:I("price"),type:"number",className:"form-control",placeholder:"Price",value:v})),c.a.createElement("div",{className:"form-group"},c.a.createElement("select",{onChange:I("category"),className:"form-control",placeholder:"Category"},c.a.createElement("option",null,"Select"),y&&y.map((function(e,t){return c.a.createElement("option",{key:t,value:e._id},e.name)})))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:I("stock"),type:"number",className:"form-control",placeholder:"Stock",value:j})),c.a.createElement("button",{type:"submit",onClick:T,className:"btn btn-outline-success mb-3"},"Update Product")))))},I=function(e){var t=e.match,a=Object(n.useState)(""),o=Object(l.a)(a,2),i=o[0],u=o[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),E=f[0],g=f[1],b=Object(n.useState)(!1),h=Object(l.a)(b,2),N=h[0],v=h[1],j=Object(n.useState)(!1),y=Object(l.a)(j,2),O=y[0],w=y[1],S=m(),x=S.user,C=S.token,k=function(e){g(""),u(e.target.value)},A=function(e){e.preventDefault(),g(""),v(!1),w(!0),function(e,t,a,n){return console.log("chack here man","".concat(s.API,"/category/").concat(e,"/").concat(t)),fetch("".concat(s.API,"/category/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(n)}).then((function(e){return console.log(n),e.json()})).catch((function(e){return console.log(e)}))}(t.params.categoryId,x._id,C,{name:i}).then((function(e){e.error?(g(!0),w(!1)):(g(""),v(!0),u(""),w(!1))}))};return c.a.createElement(d,{title:"Update Category Here",description:"Add New Name For Category",className:"container bg-success p-4"},c.a.createElement("div",{className:"row bg-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},O&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"Loading...")),function(){if(N)return c.a.createElement("h4",{className:"text-success"},"Category Updated Successfully")}(),function(){if(E)return console.log(E),c.a.createElement("h4",{className:"text-danger"},"Failed To Update Category")}(),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"},"Rename Category Name "),c.a.createElement("input",{type:"text",className:"form-control my-3",onChange:k,value:i,autoFocus:!0,required:!0,placeholder:"For Ex. Summer"}),c.a.createElement("button",{onClick:A,className:"btn btn-outline-success"},"Update Category"))),c.a.createElement("div",{className:"mt-5"},c.a.createElement(r.c,{className:"btn btn-sm btn-success mb-3",to:"/admin/dashboard"},"Admin Home")))))},D=a(22),F=a.n(D),_=function(e){var t=e.products,a=e.setReload,o=void 0===a?function(e){return e}:a,i=e.reload,u=void 0===i?void 0:i,d=Object(n.useState)({loading:!1,success:!1,error:"",address:""}),p=Object(l.a)(d,2),f=(p[0],p[1],m()&&m().token,m()&&m().user._id,function(){var e=0;return t&&t.map((function(t){e+=t.price})),e}),E=function(e){var a={token:e,products:t};return fetch("".concat(s.API,"/stripepayment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){var t=e.status;console.log("Payment Successfully Completed"),console.log("STATUS",t);!function(e){if(void 0!==typeof window&&m()){var t=m().user._id;localStorage.removeItem("".concat(t));localStorage.setItem("".concat(t),JSON.stringify([])),e()}}((function(){console.log("Did we git as crash")})),o(!u)})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",null,c.a.createElement("h4",{className:"text-white"},"price ",f()),c.a.createElement("br",null),c.a.createElement("br",null),m()?c.a.createElement(F.a,{stripeKey:"pk_test_1orIpbCKUzj4YO8Q1Lk4y9ML00UrTsyKgI",token:E,amount:100*f(),name:"Buy T-  Shirts",shippingAddress:!0,billingAddress:!0},c.a.createElement("button",{className:"btn btn-success"},"Pay With Stripe"),"  "):c.a.createElement(r.c,{to:"/signin"},c.a.createElement("button",{className:"btn btn-warning"},"Signin")))},H=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),i=s[0],u=s[1];Object(n.useEffect)((function(){r(function(){if(void 0!==typeof window&&m()){var e=m().user._id;if(localStorage.getItem("".concat(e)))return JSON.parse(localStorage.getItem("".concat(e)))}}())}),[i]);return c.a.createElement(d,{title:"Your Cart",description:"Ready to CheckOut"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-5"},c.a.createElement("div",null,c.a.createElement("h4",null,"Your Cart items !!! "),a&&a.map((function(e,t){return c.a.createElement("div",{className:"text-center mb-4"},c.a.createElement(E,{key:t,product:e,addtoCart:!1,removeFromCart:!0,setReload:u,reload:i}))})))),c.a.createElement("div",{className:"col-2"}),c.a.createElement("div",{className:"col-5"},c.a.createElement(_,{products:a,setReload:u}))))},U=function(){return c.a.createElement(d,{title:"WelCome Admin",description:"At Here Admin Can Manage All The Orders"},c.a.createElement("h5",null,"Create Order for admin is in Progress...."))},R=function(){return c.a.createElement(r.a,null,c.a.createElement(r.b,null,c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"/",exact:!0,component:b}),c.a.createElement(o.b,{path:"/signup",exact:!0,component:N}),c.a.createElement(o.b,{path:"/signin",exact:!0,component:v}),c.a.createElement(O,{path:"/cart",exact:!0,component:H}),c.a.createElement(O,{path:"/user/dashboard",exact:!0,component:w}),c.a.createElement(y,{path:"/admin/dashboard",exact:!0,component:S}),c.a.createElement(y,{path:"/admin/create/category",exact:!0,component:C}),c.a.createElement(y,{path:"/admin/categories",exact:!0,component:k}),c.a.createElement(y,{path:"/admin/create/product",exact:!0,component:A}),c.a.createElement(y,{path:"/admin/products",exact:!0,component:P}),c.a.createElement(y,{path:"/admin/product/update/:productId",exact:!0,component:T}),c.a.createElement(y,{path:"/admin/category/update/:categoryId",exact:!0,component:I}),c.a.createElement(y,{path:"/admin/orders",exact:!0,component:U}))))},L=a(23);a.n(L).a.render(c.a.createElement(R,null),document.getElementById("root"))},4:function(e,t,a){"use strict";a.r(t),a.d(t,"API",(function(){return n}));var n="/api"}},[[24,1,2]]]);
//# sourceMappingURL=main.1a5dd2b1.chunk.js.map