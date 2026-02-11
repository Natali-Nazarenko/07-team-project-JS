import{a as g,i as h,S as A,N as E,P as $}from"./assets/vendor-DcjOYWbS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const y="https://sound-wave.b.goit.study/api";async function b(t){const{data:e}=await g.get(`${y}/artists`,{params:{page:t,limit:8}});return e}async function q(){const{data:{data:t}}=await g.get(`${y}/feedbacks`,{params:{limit:10}});return Array.isArray(t)?t:[]}const M=document.querySelector(".art-gallery");function L(t){const e=t.map(({genres:a,strArtist:r,strBiographyEN:s,strArtistThumb:n,_id:o})=>`
        <li class='artist-card'>
            <img class='art-photo' src="${n}"
            alt="${r}"
            width="640" height="393">
            <ul class="genres-list">
                ${a.map(c=>`<li class="genre">${c}</li>`).join("")}
            </ul>
            <h3 class='artist-name'>${r}</h3>
            <p class='artist-bio'>${s}</p>
            <button class='learn-more-btn' type="button" data-artist-id="${o}"><span class='btn-text'>Learn More</span>
            <svg class="right-triangle" width="24" height="24">
            <use href="../img/sprite-white.svg#right-triangle-full"></use>
            </svg>
            </button>
        </li>
    `).join("");M.insertAdjacentHTML("beforeend",e)}function l({title:t,message:e}){h.show({title:t,titleColor:"red",message:e,position:"topCenter",messageColor:"red",color:"red"})}function O({title:t,message:e}){h.show({title:t,titleColor:"blue",message:e,position:"topCenter",messageColor:"blue",color:"blue"})}const v=document.querySelector(".btn-load-more"),w=document.querySelector(".loader");function S(){w.classList.remove("hidden")}function k(){w.classList.add("hidden")}function C(){v.classList.remove("hidden")}function f(){v.classList.add("hidden")}let i=1;const F=8;async function B(){try{S();const t=await b(i);t.artists.length===0&&l({title:"Помилка",message:"Не вдалося завантажити дані"}),L(t.artists),C()}catch{l({title:"Помилка",message:"Не вдалося завантажити дані"})}finally{k()}}B();const P=document.querySelector(".btn-load-more");P.addEventListener("click",R);async function R(){f(),S(),i+=1;try{const t=await b(i);L(t.artists);const e=document.querySelector(".artist-card"),{height:a}=e.getBoundingClientRect();if(window.scrollBy({top:a,behavior:"smooth"}),i*F>=t.totalArtists){f(),O({title:"Кінець колекції",message:"Ви досягнули кінця колекції"});return}C()}catch{l({title:"Помилка",message:"Не вдалося завантажити дані"})}finally{k()}}function x(){const t="#764191",e="#FFFFFF";document.querySelectorAll(".star-rating").forEach(r=>{const s=Number(r.dataset.rating)||0;r.querySelectorAll(".star-rating__star").forEach((o,c)=>{o.style.backgroundColor=c<s?t:e})})}function N(){new A(".feedback-swiper",_)}const _={modules:[E,$],loop:!1,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"custom-bullet",bulletActiveClass:"custom-bullet-active",renderBullet(t,e){return t>2?"":`<span class="${e}"></span>`}},on:{init(){p(this),x()},slideChange(){p(this)}}};function p(t){const e=t.slides.length,a=t.activeIndex,r=document.querySelectorAll(".custom-bullet");if(!r.length||e===0)return;let s;a===0?s=0:a===e-1?s=2:s=1,r.forEach((n,o)=>n.classList.toggle("custom-bullet-active",o===s))}function I({rating:t,descr:e,name:a}){return`
    <div class="feedback-card">
      <div class="star-rating star-rating--sm" data-rating="${Math.round(t)}">
        ${'<span class="star-rating__star"></span>'.repeat(5)}
      </div>
      <p class="feedback-text">${e}</p>
      <p class="feedback-author">${a}</p>
    </div>
  `}const m=document.querySelector("#feedback-list");async function j(){if(!m)return;const t=await q();!Array.isArray(t)||t.length===0||(m.innerHTML=t.map(e=>`<div class="swiper-slide">${I(e)}</div>`).join(""),N())}window.addEventListener("DOMContentLoaded",()=>{j()});const d=document.querySelector("[data-menu]"),T=document.querySelector("[data-menu-open]"),D=document.querySelector("[data-menu-close]"),G=document.querySelectorAll("[data-mob-nav]"),H=()=>{d.classList.remove("is-hidden"),document.body.classList.add("no-scroll")},u=()=>{d.classList.add("is-hidden"),document.body.classList.remove("no-scroll")};T.addEventListener("click",H);D.addEventListener("click",u);G.forEach(t=>{t.addEventListener("click",()=>{u()})});document.addEventListener("keydown",t=>{t.key==="Escape"&&!d.classList.contains("is-hidden")&&u()});
//# sourceMappingURL=index.js.map
