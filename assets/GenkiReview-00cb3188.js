var b=Object.defineProperty;var x=(t,e,o)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var v=(t,e,o)=>(x(t,typeof e!="symbol"?e+"":e,o),o);import{d as u,r as s,a as B,o as i,c,w as a,b as n,e as V,f as C,u as _,V as D,g as A,h as F,i as r,t as f,j as I,k as l,m as K,v as N}from"./index-3339df3f.js";const j={key:0},O=u({data(){return{showBack:!1,myData:""}},watch:{myData(t,e){console.log(`new: ${t}, old: ${e}`),t&&t!=localStorage.getItem("myData")&&localStorage.setItem("myData",t)},cardId(t,e){},srsItem:{handler:function(t,e){},deep:!0}},mounted(){console.log("** FlashcardViewOnly.mounted **"),window.addEventListener("keyup",t=>{switch(t.key){case"ArrowDown":this.flip();break;case"ArrowRight":this.yes();break;case"ArrowLeft":this.no();break}})},methods:{flip:function(){this.showBack=!this.showBack},swipe:function(t){switch(console.log(t+" swipe"),t){case"right":this.yes();break;case"left":this.no();break;case"bottom":this.flip();break}},yes:function(){this.showBack&&(this.myData="yes",this.showBack=!1,this.next())},no:function(){this.showBack&&(this.myData="no",this.showBack=!1,this.repeat())}}}),S=u({...O,__name:"FlashcardViewOnly",props:{next:{type:Function},repeat:{type:Function},front:{},back:{},furigana:{}},setup(t){return(e,o)=>{const d=s("v-card-text"),h=s("v-container"),p=s("v-btn"),m=s("v-col"),y=s("v-row"),k=s("v-card-actions"),g=B("touch");return i(),c(h,{style:{"max-width":"700px"}},{default:a(()=>[n(_(K),{variant:"tonal",style:{margin:"auto"}},{default:a(()=>[V((i(),c(h,{style:{"min-height":"300px",margin:"auto"},justify:"center","vertical-align":"middle",onClick:e.flip,onKeyup:C(e.flip,["down"])},{default:a(()=>[n(_(D),{style:{height:"200px"},"vertical-align":"middle","text-align":"middle"},{default:a(()=>[n(_(A),{"vertical-align":"middle",class:"text-xs-h1 text-smAndUp-h1"},{default:a(()=>[F("ruby",null,[r(f(e.front)+" ",1),e.showBack&&e.furigana?(i(),I("rt",j,f(e.furigana),1)):l("",!0)])]),_:1})]),_:1}),e.showBack?(i(),c(d,{key:0,class:"text-h3 pa-2",style:{"font-family":"'Open Sans'"}},{default:a(()=>[r(f(e.back),1)]),_:1})):l("",!0)]),_:1},8,["onClick","onKeyup"])),[[g,e.swipe,"swipe"]])]),_:1}),e.showBack?(i(),c(k,{key:0,style:{padding:"0px",margin:"0px"}},{default:a(()=>[n(h,{style:{padding:"0"}},{default:a(()=>[n(y,{class:"d-flex justify-space-between"},{default:a(()=>[n(m,{cols:"auto"},{default:a(()=>[n(p,{variant:"tonal",onClick:e.no},{default:a(()=>[r(" No ")]),_:1},8,["onClick"])]),_:1}),n(m,{cols:"auto"},{default:a(()=>[n(p,{variant:"tonal",onClick:e.yes},{default:a(()=>[r(" Yes ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})):l("",!0)]),_:1})}}});class w{constructor(e){v(this,"vocab");this.vocab=e}}const $=u({data(){return{vocab:Array(),index:0}},computed:{vocab_view:function(){return this.vocab?new w(this.vocab):new w([])},current:function(){if(this.index<this.vocab_view.vocab.length)return this.vocab_view.vocab[this.index]}},mounted(){console.log("** mounted **"),this.index=0,this.vocab=N},methods:{next:function(){console.log("** next **"),this.index+=1},repeat:function(){console.log("** repeat **"),this.index+=1}}}),G=u({...$,__name:"GenkiReview",setup(t){return(e,o)=>{const d=s("v-container");return i(),c(d,{style:{"max-width":"800px"}},{default:a(()=>[e.current?(i(),c(S,{key:0,front:e.current.Kanji,back:e.current.Meaning,next:e.next,repeat:e.repeat,furigana:e.current.Kana},null,8,["front","back","next","repeat","furigana"])):l("",!0)]),_:1})}}});export{G as default};
