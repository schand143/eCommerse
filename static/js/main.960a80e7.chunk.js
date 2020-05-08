(this["webpackJsonpecommerse-web-app"]=this["webpackJsonpecommerse-web-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(14),a(6)),i=a(1),s=a(2),u=a(5),m=a(4),d=a(3),h=(a(15),function(e){return"$"+Number(e.toFixed(2)).toLocaleString()+" "}),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.products.map((function(t){return r.a.createElement("div",{className:"col-md-4",key:t.id},r.a.createElement("div",{className:"thumbnail text-center"},r.a.createElement("a",{href:"#".concat(t.id),onClick:function(a){return e.props.handleAddToCart(a,t)}},r.a.createElement("img",{src:"/products/".concat(t.sku,"_2.jpg"),alt:t.title}),r.a.createElement("p",null,t.title)),r.a.createElement("div",null,r.a.createElement("b",null,h(t.price)),r.a.createElement("button",{className:"btn btn-primary",onClick:function(a){return e.props.handleAddToCart(a,t)}},"Add To Cart"))))}));return r.a.createElement("div",{className:"row"},t)}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},this.props.count," product found."),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("label",null,"Order by",r.a.createElement("select",{className:"form-control",value:this.props.sort,onChange:this.props.handleChangeSort},r.a.createElement("option",{value:""}," Select "),r.a.createElement("option",{value:"lowest"}," Low to High "),r.a.createElement("option",{value:"highest"}," High to Low ")))))}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.cartItems;return r.a.createElement("div",{className:"alert alert-info"},0===t.length?"Basket is empty":r.a.createElement("div",null," ","You have ",t.length," product in the basket.",t.length>0&&r.a.createElement("div",null,r.a.createElement("ul",null,t.map((function(t){return r.a.createElement("li",null,r.a.createElement("b",null,t.title),"X ",t.count," ="," ",t.price*t.count,r.a.createElement("button",{className:"btn btn-danger",onClick:function(a){return e.props.handleRemoveFromCart(a,t)}},"X"))}))),"Total:"," ",h(t.reduce((function(e,t){return t.price*t.count}),0)),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return alert("checkout needs to implement..")}},"Checkout"))))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={products:[],filteredProducts:[],cartItems:[]},n.handleChangeSort=n.handleChangeSort.bind(Object(u.a)(n)),n.handleAddToCart=n.handleAddToCart.bind(Object(u.a)(n)),n.handleRemoveFromCart=n.handleRemoveFromCart.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;fetch("http://localhost:8000/products").then((function(e){return e.json()})).then((function(t){return e.setState({products:t,filteredProducts:t})})),localStorage.getItem("cartItems")&&this.setState({cartItems:JSON.parse(localStorage.getItem("cartItems"))})}},{key:"handleChangeSort",value:function(e){this.setState({sort:e.target.value}),this.listProducts()}},{key:"handleAddToCart",value:function(e,t){this.setState((function(e){var a=e.cartItems,n=!1;return a.forEach((function(e){e.id===t.id&&(n=!0,e.count++)})),n||a.push(Object(l.a)(Object(l.a)({},t),{},{count:1})),localStorage.setItem("cartItems",JSON.stringify(a)),a}))}},{key:"handleRemoveFromCart",value:function(e,t){this.setState((function(e){var a=e.cartItems.filter((function(e){return e.id!==t.id}));return localStorage.setItem("cartItems",a),{cartItems:a}}))}},{key:"listProducts",value:function(){this.setState((function(e){return""!==e.sort?e.products.sort((function(t,a){return"lowest"===e.sort?t.price>a.price?1:-1:t.price<a.price?1:-1})):e.products.sort((function(e,t){return e.id<t.id?1:-1})),{filteredProducts:e.products}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"E-commerce Shopping Cart"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(f,{size:this.state.size,sort:this.state.sort,handleChangeSize:this.handleChangeSize,handleChangeSort:this.handleChangeSort,count:this.state.filteredProducts.length}),r.a.createElement("hr",null),r.a.createElement(p,{products:this.state.filteredProducts,handleAddToCart:this.handleAddToCart})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(v,{cartItems:this.state.cartItems,handleRemoveFromCart:this.handleRemoveFromCart}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.960a80e7.chunk.js.map