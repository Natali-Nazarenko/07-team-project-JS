import{a as m,i as g,S as A,N as E,P as q}from"./assets/vendor-DcjOYWbS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const h="https://sound-wave.b.goit.study/api";async function y(e){const{data:t}=await m.get(`${h}/artists`,{params:{page:e,limit:8}});return t}async function M(){const{data:{data:e}}=await m.get(`${h}/feedbacks`,{params:{limit:10}});return Array.isArray(e)?e:[]}const $=document.querySelector(".art-gallery");function b(e){const t=e.map(({genres:a,strArtist:r,strBiographyEN:s,strArtistThumb:n})=>`
        <li class='artist-card'>
            <img class='art-photo' src="${n}"
            alt="${r}"
            width="640" height="393">
            <ul class="genres-list">
                ${a.map(o=>`<li class="genre">${o}</li>`).join("")}
            </ul>
            <h3 class='artist-name'>${r}</h3>
            <p class='artist-bio'>${s}</p>
            <button class='learn-more-btn' type="button"><span class='btn-text'>Learn More</span>
            <svg class="right-triangle" width="24" height="24">
            <use href="../img/sprite-white.svg#right-triangle-full"></use>
            </svg>
            </button>
        </li>
    `).join("");$.insertAdjacentHTML("beforeend",t)}function c({title:e,message:t}){g.show({title:e,titleColor:"red",message:t,position:"topCenter",messageColor:"black",color:"red"})}function O({title:e,message:t}){g.show({title:e,titleColor:"blue",message:t,position:"topCenter",messageColor:"blue",color:"blue"})}const L=document.querySelector(".btn-load-more"),v=document.querySelector(".loader");function w(){v.classList.remove("hidden")}function k(){v.classList.add("hidden")}function S(){L.classList.remove("hidden")}function u(){L.classList.add("hidden")}let i=1;const F=8;async function B(){try{w();const e=await y(i);e.artists.length===0&&c({title:"Помилка",message:"Не вдалося завантажити дані"}),b(e.artists),S()}catch{c({title:"Помилка",message:"Не вдалося завантажити дані"})}finally{k()}}B();const P=document.querySelector(".btn-load-more");P.addEventListener("click",R);async function R(){u(),w(),i+=1;try{const e=await y(i);b(e.artists);const t=document.querySelector(".artist-card"),{height:a}=t.getBoundingClientRect();if(window.scrollBy({top:a,behavior:"smooth"}),i*F>=e.totalArtists){u(),O({title:"Кінець колекції",message:"Ви досягнули кінця колекції"});return}S()}catch{c({title:"Помилка",message:"Не вдалося завантажити дані"})}finally{k()}}function x(){const e="#764191",t="#FFFFFF";document.querySelectorAll(".star-rating").forEach(r=>{const s=Number(r.dataset.rating)||0;r.querySelectorAll(".star-rating__star").forEach((o,C)=>{o.style.backgroundColor=C<s?e:t})})}function N(){new A(".feedback-swiper",_)}const _={modules:[E,q],loop:!1,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"custom-bullet",bulletActiveClass:"custom-bullet-active",renderBullet(e,t){return e>2?"":`<span class="${t}"></span>`}},on:{init(){f(this),x()},slideChange(){f(this)}}};function f(e){const t=e.slides.length,a=e.activeIndex,r=document.querySelectorAll(".custom-bullet");if(!r.length||t===0)return;let s;a===0?s=0:a===t-1?s=2:s=1,r.forEach((n,o)=>n.classList.toggle("custom-bullet-active",o===s))}function I({rating:e,descr:t,name:a}){return`
    <div class="feedback-card">
      <div class="star-rating star-rating--sm" data-rating="${Math.round(e)}">
        ${'<span class="star-rating__star"></span>'.repeat(5)}
      </div>
      <p class="feedback-text">${t}</p>
      <p class="feedback-author">${a}</p>
    </div>
  `}const p=document.querySelector("#feedback-list");async function j(){if(!p)return;const e=await M();!Array.isArray(e)||e.length===0||(p.innerHTML=e.map(t=>`<div class="swiper-slide">${I(t)}</div>`).join(""),N())}window.addEventListener("DOMContentLoaded",()=>{j()});const l=document.querySelector("[data-menu]"),T=document.querySelector("[data-menu-open]"),D=document.querySelector("[data-menu-close]"),G=document.querySelectorAll("[data-mob-nav]"),H=()=>{l.classList.remove("is-hidden"),document.body.classList.add("no-scroll")},d=()=>{l.classList.add("is-hidden"),document.body.classList.remove("no-scroll")};T.addEventListener("click",H);D.addEventListener("click",d);G.forEach(e=>{e.addEventListener("click",()=>{d()})});document.addEventListener("keydown",e=>{e.key==="Escape"&&!l.classList.contains("is-hidden")&&d()});
//# sourceMappingURL=index.js.map
