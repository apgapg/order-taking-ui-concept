import{o as f,c as p,a as r,r as m,d as g,b as e,w as d,e as a,f as v}from"./vendor.5ac2308f.js";const y=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const _ of s.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}};y();var b="/order-taking-ui-concept/assets/logo.03d6d6da.png",h=(c,n)=>{const i=c.__vccOpts||c;for(const[l,o]of n)i[l]=o;return i};const w={},x={class:"flex items-center p-2 my-1 bg-blue-50"},k=r("img",{src:b,class:"h-16"},null,-1),$=r("strong",null,"Andrew Alfred",-1),L=[k,$];function N(c,n){return f(),p("div",x,L)}var t=h(w,[["render",N]]);const O={},B={class:"p-2 bg-gray-100 font-bold shadow"};function A(c,n){return f(),p("div",B,[m(c.$slots,"default")])}var u=h(O,[["render",A]]);const V={class:"container mx-auto bg-white md:w-96 h-screen md:h-[48rem] md:mt-16 rounded relative"},C={class:"overflow-y-auto h-screen md:h-[48rem] pt-[56px]"},I=a("Biscuits"),S=a("Spices"),E=a("Halua"),H=a("Lesun"),P=r("div",{class:"font-bold py-2 shadow absolute bottom-0 w-full bg-blue-500 text-white text-center"},"View Categories",-1),j=r("div",{class:"h-[56px] font-bold text-lg p-2 shadow absolute top-0 w-full inline-flex items-center bg-white"},"Order Booking",-1),q=g({setup(c){return(n,i)=>(f(),p("div",V,[r("div",C,[r("div",null,[e(u,{class:"sticky top-0"},{default:d(()=>[I]),_:1}),e(t),e(t),e(t),e(t),e(t)]),r("div",null,[e(u,{class:"sticky top-0"},{default:d(()=>[S]),_:1}),e(t),e(t),e(t)]),r("div",null,[e(u,{class:"sticky top-0"},{default:d(()=>[E]),_:1}),e(t),e(t),e(t),e(t),e(t),e(t),e(t),e(t),e(t),e(t),e(t)]),r("div",null,[e(u,{class:"sticky top-0"},{default:d(()=>[H]),_:1}),e(t),e(t),e(t),e(t),e(t),e(t),e(t),e(t),e(t),e(t),e(t)])]),P,j]))}});v(q).mount("#app");
