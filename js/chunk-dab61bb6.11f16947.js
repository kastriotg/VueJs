(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dab61bb6"],{"1dde":function(e,t,n){var i=n("d039"),r=n("b622"),o=n("2d00"),a=r("species");e.exports=function(e){return o>=51||!i((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1ed7":function(e,t,n){},"4de4":function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").filter,o=n("1dde"),a=n("ae40"),d=o("filter"),u=a("filter");i({target:"Array",proto:!0,forced:!d||!u},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},5888:function(e,t,n){"use strict";n("ab4d")},"65f0":function(e,t,n){var i=n("861d"),r=n("e8b5"),o=n("b622"),a=o("species");e.exports=function(e,t){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"7db0":function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").find,o=n("44d2"),a=n("ae40"),d="find",u=!0,c=a(d);d in[]&&Array(1)[d]((function(){u=!1})),i({target:"Array",proto:!0,forced:u||!c},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(d)},ab4d:function(e,t,n){},ae40:function(e,t,n){var i=n("83ab"),r=n("d039"),o=n("5135"),a=Object.defineProperty,d={},u=function(e){throw e};e.exports=function(e,t){if(o(d,e))return d[e];t||(t={});var n=[][e],c=!!o(t,"ACCESSORS")&&t.ACCESSORS,l=o(t,0)?t[0]:u,s=o(t,1)?t[1]:void 0;return d[e]=!!n&&!r((function(){if(c&&!i)return!0;var e={length:-1};c?a(e,1,{enumerable:!0,get:u}):e[1]=1,n.call(e,l,s)}))}},b237:function(e,t,n){"use strict";n.r(t);n("b0c0");var i=n("7a23"),r=Object(i["L"])("data-v-6d6203bd");Object(i["u"])("data-v-6d6203bd");var o=Object(i["i"])("header",null,[Object(i["i"])("h1",null,"My friends")],-1);Object(i["s"])();var a=r((function(e,t,n,r,a,d){var u=Object(i["z"])("NewFriend"),c=Object(i["z"])("FriendContact");return Object(i["r"])(),Object(i["f"])("section",null,[o,Object(i["i"])(u,{onAddFriend:d.addFriend},null,8,["onAddFriend"]),Object(i["i"])("ul",null,[(Object(i["r"])(!0),Object(i["f"])(i["a"],null,Object(i["x"])(a.friends,(function(e){return Object(i["r"])(),Object(i["f"])(c,{key:e.id,id:e.id,name:e.name,"phone-number":e.phone,"email-adress":e.email,"is-favourite":e.isFavourite,onToggleFavourite:d.toggleFavouriteStatus,onDelete:d.deleteFriend},null,8,["id","name","phone-number","email-adress","is-favourite","onToggleFavourite","onDelete"])})),128))])])})),d=(n("4de4"),n("7db0"),Object(i["L"])("data-v-90285f0c"));Object(i["u"])("data-v-90285f0c");var u=Object(i["i"])("label",{for:"name"},"Name:",-1),c=Object(i["i"])("label",{for:"phone"},"Phone:",-1),l=Object(i["i"])("label",{for:"email"},"Email:",-1),s=Object(i["i"])("button",null,"Add Contact",-1);Object(i["s"])();var f=d((function(e,t,n,r,o,a){return o.addNewFriend?(Object(i["r"])(),Object(i["f"])("button",{key:0,onClick:t[1]||(t[1]=function(){return a.addFriend&&a.addFriend.apply(a,arguments)})},"Add Friend")):(Object(i["r"])(),Object(i["f"])("form",{key:1,onSubmit:t[6]||(t[6]=Object(i["K"])((function(){return a.submitData&&a.submitData.apply(a,arguments)}),["prevent"]))},[u,Object(i["I"])(Object(i["i"])("input",{type:"text",name:"name","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.enteredName=e}),required:""},null,512),[[i["E"],o.enteredName]]),c,Object(i["I"])(Object(i["i"])("input",{type:"text",name:"phone","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.enteredPhone=e}),required:""},null,512),[[i["E"],o.enteredPhone]]),l,Object(i["I"])(Object(i["i"])("input",{type:"email",name:"email","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.enteredEmail=e}),required:""},null,512),[[i["E"],o.enteredEmail]]),s,Object(i["i"])("button",{onClick:t[5]||(t[5]=function(){return a.addFriend&&a.addFriend.apply(a,arguments)})},"Close form")],32))})),b={name:"NewFriend",emits:["add-friend"],data:function(){return{enteredName:"",enteredPhone:"",enteredEmail:"",addNewFriend:!0}},methods:{submitData:function(){this.$emit("add-friend",this.enteredName,this.enteredPhone,this.enteredEmail)},addFriend:function(){this.addNewFriend=!this.addNewFriend}}};n("e747");b.render=f,b.__scopeId="data-v-90285f0c";var O=b,j=Object(i["L"])("data-v-2d27c1f9");Object(i["u"])("data-v-2d27c1f9");var m={key:0},v=Object(i["i"])("strong",null,"Phone:",-1),p=Object(i["i"])("strong",null,"Email:",-1),h=Object(i["i"])("strong",null,"Id:",-1);Object(i["s"])();var g=j((function(e,t,n,r,o,a){return Object(i["r"])(),Object(i["f"])("li",null,[Object(i["i"])("h2",null,Object(i["C"])(n.name)+" "+Object(i["C"])(n.isFavourite?"(Favourite)":""),1),Object(i["i"])("button",{onClick:t[1]||(t[1]=function(){return a.toggleFavourite&&a.toggleFavourite.apply(a,arguments)})},"Favourite"),Object(i["i"])("button",{onClick:t[2]||(t[2]=function(){return a.toggleDetails&&a.toggleDetails.apply(a,arguments)})},Object(i["C"])(o.detailsVisible?"Hide":"Show")+" Details ",1),o.detailsVisible?(Object(i["r"])(),Object(i["f"])("ul",m,[Object(i["i"])("li",null,[v,Object(i["h"])(" "+Object(i["C"])(n.phoneNumber),1)]),Object(i["i"])("li",null,[p,Object(i["h"])(" "+Object(i["C"])(n.emailAdress),1)]),Object(i["i"])("li",null,[h,Object(i["h"])(" "+Object(i["C"])(n.id),1)])])):Object(i["g"])("",!0),Object(i["i"])("button",{onClick:t[3]||(t[3]=function(t){return e.$emit("delete",n.id)})},"Delete")])})),F={name:"FriendContact",props:{id:{type:String,required:!0},name:{type:String,required:!0},phoneNumber:{type:String,required:!0},emailAdress:{type:String,required:!0},isFavourite:{type:Boolean,required:!1,default:!1}},emits:["toggle-friend","delete"],data:function(){return{detailsVisible:!1}},methods:{toggleDetails:function(){this.detailsVisible=!this.detailsVisible},toggleFavourite:function(){this.$emit("toggle-favourite",this.id)}}};n("f9c5");F.render=g,F.__scopeId="data-v-2d27c1f9";var y=F,w={name:"Lesson6",components:{NewFriend:O,FriendContact:y},data:function(){return{friends:[{id:(new Date).toISOString(),name:"John Doe",phone:"044 123 321",email:"John@doe.com",isFavourite:!1}]}},methods:{toggleFavouriteStatus:function(e){var t=this.friends.find((function(t){return t.id===e}));t.isFavourite=!t.isFavourite},addFriend:function(e,t,n){var i=(new Date).toISOString();this.friends.push({id:i,name:e,phone:t,email:n,isFavourite:!1})},deleteFriend:function(e){this.friends=this.friends.filter((function(t){return t.id!==e}))}}};n("5888");w.render=a,w.__scopeId="data-v-6d6203bd";t["default"]=w},b4ed:function(e,t,n){},b727:function(e,t,n){var i=n("0366"),r=n("44ad"),o=n("7b0b"),a=n("50c4"),d=n("65f0"),u=[].push,c=function(e){var t=1==e,n=2==e,c=3==e,l=4==e,s=6==e,f=7==e,b=5==e||s;return function(O,j,m,v){for(var p,h,g=o(O),F=r(g),y=i(j,m,3),w=a(F.length),C=0,S=v||d,A=t?S(O,w):n||f?S(O,0):void 0;w>C;C++)if((b||C in F)&&(p=F[C],h=y(p,C,g),e))if(t)A[C]=h;else if(h)switch(e){case 3:return!0;case 5:return p;case 6:return C;case 2:u.call(A,p)}else switch(e){case 4:return!1;case 7:u.call(A,p)}return s?-1:c||l?l:A}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},e747:function(e,t,n){"use strict";n("1ed7")},e8b5:function(e,t,n){var i=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==i(e)}},f9c5:function(e,t,n){"use strict";n("b4ed")}}]);
//# sourceMappingURL=chunk-dab61bb6.11f16947.js.map