(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-108bc08c"],{"748e":function(t,e,n){"use strict";n("b77d")},"80da":function(t,e,n){"use strict";n.r(e);n("b0c0");var u=n("7a23"),a={class:"about"},c=Object(u["g"])("h2",null,"Events in action",-1);function o(t,e,n,o,l,r){return Object(u["p"])(),Object(u["d"])("div",a,[Object(u["g"])("section",null,[c,Object(u["g"])("button",{onClick:e[1]||(e[1]=function(t){return r.addCounter(2)})},"Add 2"),Object(u["g"])("button",{onClick:e[2]||(e[2]=function(t){return r.reduceCounter(2)})},"Remove 2"),Object(u["g"])("p",null,"Result: "+Object(u["w"])(l.counter),1),Object(u["C"])(Object(u["g"])("input",{type:"text",placeholder:"Enter your name!","onUpdate:modelValue":e[3]||(e[3]=function(t){return l.name=t})},null,512),[[u["y"],l.name]]),Object(u["C"])(Object(u["g"])("input",{type:"text",placeholder:"Enter your lastname!","onUpdate:modelValue":e[4]||(e[4]=function(t){return l.lastName=t})},null,512),[[u["y"],l.lastName]]),Object(u["g"])("button",{onClick:e[5]||(e[5]=function(){return r.resetInput&&r.resetInput.apply(r,arguments)})},"Reset input"),Object(u["g"])("p",null,"Your name from computed: "+Object(u["w"])(r.fullName),1),Object(u["g"])("p",null,"Your name from watch: "+Object(u["w"])(l.fullname),1)])])}var l={data:function(){return{counter:0,name:"",lastName:"",fullname:""}},computed:{fullName:function(){return""===this.name||""===this.lastName?"":this.name+" "+this.lastName}},watch:{counter:function(t){t>50&&(this.counter=0)},name:function(t){""===t||""===this.lastName?this.fullname="":this.fullname=t+" "+this.lastName},lastName:function(t){this.fullname=""===t?"":this.name+" "+t}},methods:{addCounter:function(t){this.counter+=t},reduceCounter:function(t){this.counter>0&&(this.counter-=t)},setName:function(t){this.name=t.target.value},resetInput:function(){this.name="",this.lastName=""}}};n("748e");l.render=o;e["default"]=l},b77d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-108bc08c.9beb5a44.js.map