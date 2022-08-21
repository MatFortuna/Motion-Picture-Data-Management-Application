(function(e){function t(t){for(var n,s,r=t[0],l=t[1],c=t[2],v=0,d=[];v<r.length;v++)s=r[v],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,r=1;r<i.length;r++){var l=i[r];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},1:function(e,t){},"19d3":function(e,t,i){"use strict";i("726f")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("MovieView")],1)},o=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[i("MovieList")],1)])},r=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[i("div",{staticClass:"navbar-brand"},[e._m(0),i("button",{staticClass:"button navbar-item m-3 is-link",attrs:{id:"addFormBtn"},on:{click:e.addMovieShowForm}},[e._v(" Add Movie ")])])]),i("table",{staticClass:"table"},[e._m(1),i("tbody",e._l(e.movies,(function(t){return i("tr",{key:t.id},[i("td",[e._v(" "+e._s(t.name)+" ")]),i("td",[e._v(" "+e._s(t.description)+" ")]),i("td",[e._v(" "+e._s(t.releaseDate)+" ")]),i("td",[i("button",{staticClass:"btn btn-cancel editMovie",on:{click:e.editMovie}},[e._v(" Edit ")]),i("button",{staticClass:"btn btn-cancel copyMovie",on:{click:function(i){return e.copyMovie(t.id,t)}}},[e._v(" Copy ")]),i("button",{staticClass:"btn btn-cancel deleteMovie",on:{click:function(i){return e.deleteMovie(t.id)}}},[e._v(" Delete ")])])])})),0)]),i("div",{staticClass:"column is-half is-hidden",attrs:{id:"formContainer"}},[i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[e._v("Name")]),i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.movie.name,expression:"movie.name"}],staticClass:"input",attrs:{maxlength:"50",type:"text",placeholder:"Text input"},domProps:{value:e.movie.name},on:{input:function(t){t.target.composing||e.$set(e.movie,"name",t.target.value)}}})]),i("p",{staticClass:"help"},[e._v("Enter movie name here. Limit 50 characters.")])]),i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[e._v("Description")]),i("div",{staticClass:"control"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.movie.description,expression:"movie.description"}],staticClass:"textarea",attrs:{maxlength:"500",placeholder:"Textarea"},domProps:{value:e.movie.description},on:{input:function(t){t.target.composing||e.$set(e.movie,"description",t.target.value)}}})]),i("p",{staticClass:"help"},[e._v("Enter movie dscription here. Limit 500 characters.")])]),i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[e._v("Release Year")]),i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.movie.releaseDate,expression:"movie.releaseDate"}],staticClass:"input",attrs:{type:"number",minlenght:"4",maxlength:"4",placeholder:"Number input"},domProps:{value:e.movie.releaseDate},on:{input:function(t){t.target.composing||e.$set(e.movie,"releaseDate",t.target.value)}}})]),i("p",{staticClass:"help"},[e._v("Enter four digit movie release year here. Example 1992. ")])]),i("div",{staticClass:"field is-grouped"},[i("div",{staticClass:"control"},[i("button",{staticClass:"button is-link",attrs:{type:"submit"},on:{click:function(t){return e.addMovie()}}},[e._v("Submit")])]),e._m(2)])])])},c=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[i("img",{attrs:{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("tr",[i("th",{attrs:{title:"Name"}},[e._v("Name")]),i("th",{attrs:{title:"Description"}},[e._v("Description")]),i("th",{attrs:{title:"Release Year"}},[e._v("Release Year")]),i("th",{attrs:{title:"Actions"}},[e._v("Actions")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"control"},[i("button",{staticClass:"button is-link is-light"},[e._v("Cancel")])])}],u=i("bc3a"),v=i.n(u),d=v.a.create({baseURL:"https://localhost:44365/"}),p={getMovies:function(){return d.get("api/Movie")},getMovie:function(e){return d.get("api/Movie/".concat(e))},addMovie:function(e){return d.post("api/Movie",e)},updateMovie:function(e,t){return d.put("api/Movie/".concat(e),t)},copyMovie:function(e,t){return d.post("api/Movie/".concat(e),t)},delete:function(e){return d.delete("api/Movie/".concat(e))}},m={name:"MovieList",Components:{MovieService:p},props:{movies:[]},data:function(){return{movie:{name:"",description:"",releaseDate:""}}},computed:{},methods:{retrieveMovies:function(){var e=this;p.getMovies().then((function(t){e.movies=t.data}))},editMovie:function(){var e=document.querySelector("table");e.classList.add("is-hidden")},addMovieShowForm:function(){var e=document.querySelector("table");e.classList.add("is-hidden");var t=document.getElementById("formContainer");t.classList.remove("is-hidden")},addMovie:function(){var e=this;try{p.addMovie(this.movie).then((function(t){if(200===t.status){alert("Movie successfully added"),e.movie={},e.retrieveMovies();var i=document.querySelector("table");i.classList.remove("is-hidden")}}))}catch(t){alert(t)}},copyMovie:function(e,t){p.copyMovie(e,t).then((function(e){if(200===e.status){alert("Movie successfully copied");var t=document.querySelector("table");t.classList.add("is-hidden")}}))},deleteMovie:function(e){var t=this;confirm("Are you sure you want to delete this Movie? This action cannot be undone.")&&p.delete(e).then((function(e){200===e.status&&(alert("Movie successfully deleted"),t.retrieveMovies())}))}},created:function(){this.retrieveMovies()}},f=m,h=i("2877"),b=Object(h["a"])(f,l,c,!1,null,null,null),M=b.exports,_={name:"MovieView",components:{MovieList:M},props:{msg:String}},g=_,y=Object(h["a"])(g,s,r,!1,null,"e24704fe",null),C=y.exports,w={name:"app",components:{MovieView:C}},x=w,O=(i("19d3"),Object(h["a"])(x,a,o,!1,null,null,null)),S=O.exports,j=i("9d22"),k=i.n(j),E=i("8ded"),L=i.n(E);n["a"].config.productionTip=!0,new n["a"]({router:k.a,store:L.a,render:function(e){return e(S)}}).$mount("#app")},"726f":function(e,t,i){}});
//# sourceMappingURL=app.2e85ad3a.js.map