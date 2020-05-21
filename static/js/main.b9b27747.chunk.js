(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{15:function(e,a,t){e.exports=t(28)},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(6),o=t(3),l=t(12),s=t(1),u=t(14),i=t(2),m={allData:[],allCountriesNames:[],shownCountries:[]};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"COUNTRIES/SET_ALL_DATA":return Object(i.a)(Object(i.a)({},e),{},{allData:a.allData});case"COUNTRIES/ADD_CHOSEN_COUNTRY":return e.shownCountries.includes(a.newCountry)?e:Object(i.a)(Object(i.a)({},e),{},{shownCountries:[a.newCountry].concat(Object(u.a)(e.shownCountries))});case"COUNTRIES/SHOW_ALL_COUNTRIES":return Object(i.a)(Object(i.a)({},e),{},{shownCountries:e.allData});case"COUNTRIES/REMOVE_COUNTRY":return Object(i.a)(Object(i.a)({},e),{},{shownCountries:e.shownCountries.filter((function(e){return e!==a.country}))});case"COUNTRIES/SET_ALL_COUNTRIES_NAMES":return Object(i.a)(Object(i.a)({},e),{},{allCountriesNames:a.allCountriesNames});default:return e}},f=Object(o.c)({data:E}),p=t(5);t(26);var b=function(e){var a=Object(s.c)(),t=Object(n.useState)(!1),r=Object(p.a)(t,2),o=r[0],l=r[1];return c.a.createElement("div",{className:"col-12 py-3 border country-item"},c.a.createElement("div",{className:"row"},c.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-close",onClick:function(t){a(function(e){return{type:"COUNTRIES/REMOVE_COUNTRY",country:e}}(e.country))}},"\xd7"),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("h4",{className:"mb-3"},e.country.name," (",e.country.nativeName,")"),c.a.createElement("img",{src:e.country.flag,alt:e.country.name})),c.a.createElement("div",{className:"col"},c.a.createElement("p",null,c.a.createElement("i",{className:"far fa-building"})," Capital: ",e.country.capital),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-globe-africa"})," Area: ",e.country.area," Km\xb2"),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-users"})," Population: ",e.country.population),c.a.createElement("input",{type:"checkbox",className:"show-more-btn",onChange:function(){l((function(e){return!e}))},checked:o}),c.a.createElement("div",{className:"more-info"},c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-square-root-alt"})," Gini coefficient: ",e.country.gini||"not available"),c.a.createElement("p",null,c.a.createElement("i",{className:"fab fa-internet-explorer"})," Top Level Domain: ",e.country.topLevelDomain),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-phone-alt"})," Calling code(s):",e.country.callingCodes.map((function(e,a,t){return c.a.createElement("span",{key:e}," ",e,t.length!==a+1&&", "," ")}))||"not available"),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-clock"})," Time zone(s):",e.country.timezones.map((function(e,a,t){return c.a.createElement("span",{key:e}," ",e,t.length!==a+1&&", "," ")}))||"not available"),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-map-marked-alt"})," Borders(s):",e.country.borders.map((function(e,a,t){return c.a.createElement("span",{key:e}," ",e,t.length!==a+1&&", "," ")}))||"not available"),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-map-marked-alt"})," Currency(ies):",e.country.currencies.map((function(e,a,t){return c.a.createElement("span",{key:"".concat(e.name).concat(e.code)}," ",e.name,"(",e.code,")",t.length!==a+1&&", "," ")}))||"not available"),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-language"})," Language(s):",e.country.languages.map((function(e,a,t){return c.a.createElement("span",{key:"".concat(e.name).concat(e.nativeName)}," ",e.name,"(",e.nativeName,")",t.length!==a+1&&", "," ")}))||"not available"),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-passport"})," Regional Block(s):",e.country.regionalBlocs.map((function(e,a,t){return c.a.createElement("span",{key:"".concat(e.name).concat(e.acronym)}," ",e.name,"(",e.acronym,")",t.length!==a+1&&", "," ")}))||"not available")),c.a.createElement("button",{type:"button",id:"".concat(e.country.name,"MoreInfoBtn"),className:"btn btn-outline-secondary",onClick:function(e){l((function(e){return!e}))}},o?"Show less":"Show more"))))};var y=Object(s.b)((function(e){return{shownCountries:e.data.shownCountries}}),null)((function(e){var a=Object(s.d)(),t=e.shownCountries.map((function(e){return c.a.createElement(b,{country:e,key:e.latlng})}));return c.a.createElement("div",{id:"outputArea"},c.a.createElement("button",{type:"button",className:"btn btn-success px-4",onClick:function(){a.dispatch({type:"COUNTRIES/SHOW_ALL_COUNTRIES"})}},"Load All Data"),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},t))}));var N=function(e){var a=Object(s.c)();return c.a.createElement("div",{className:"col-12 btn btn-outline-secondary found-country-name",onClick:function(){a({type:"COUNTRIES/ADD_CHOSEN_COUNTRY",newCountry:e.country})}},e.country.name)};t(27);var d=function(){var e=Object(s.d)(),a=Object(n.useState)(""),t=Object(p.a)(a,2),r=t[0],o=t[1],l=Object(n.useState)([]),u=Object(p.a)(l,2),i=u[0],m=u[1];Object(n.useEffect)((function(){e.dispatch((function(e){fetch("https://restcountries.eu/rest/v2/").then((function(e){return e.json()})).then((function(a){e({type:"COUNTRIES/SET_ALL_DATA",allData:a});var t=a.map((function(e){return e.name}));e({type:"COUNTRIES/SET_ALL_COUNTRIES_NAMES",allCountriesNames:t})})).catch((function(e){console.log(e)}))}))}),[]);var E=i.map((function(e){return c.a.createElement(N,{country:e,key:"foundCountry".concat(e.name)})}));return c.a.createElement("div",{id:"inputArea",className:"mb-3"},c.a.createElement("input",{className:"form-control",type:"text",placeholder:"Enter country name",onChange:function(a){o(a.target.value);var t=[];e.getState().data.allData.map((function(e){""!==a.target.value&&0===e.name.toLowerCase().indexOf(a.target.value.toLowerCase())&&t.push(e)})),m(t)},value:r}),c.a.createElement("div",{className:"found-countries"},c.a.createElement("div",{className:"row m-0"},E)))};var v=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"my-3"},"Country Info App"),c.a.createElement(d,null),c.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=Object(o.d)(f,Object(o.a)(l.a)),C=c.a.createElement(s.a,{store:O},c.a.createElement(v,null));Object(r.render)(C,document.getElementById("root")),window.store=O,"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b9b27747.chunk.js.map