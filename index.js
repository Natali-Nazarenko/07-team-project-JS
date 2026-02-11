import{a as d,i as y,S as q,N as B,P as N}from"./assets/vendor-DcjOYWbS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const v="https://sound-wave.b.goit.study/api";async function L(t){const{data:e}=await d.get(`${v}/artists`,{params:{page:t,limit:8}});return e}async function F(){const{data:{data:t}}=await d.get(`${v}/feedbacks`,{params:{limit:10}});return Array.isArray(t)?t:[]}const O=document.querySelector(".art-gallery");function w(t){const e=t.map(({genres:o,strArtist:a,strBiographyEN:s,strArtistThumb:n,_id:i})=>`
        <li class='artist-card'>
            <img class='art-photo' src="${n}"
            alt="${a}"
            width="640" height="393">
            <ul class="genres-list">
                ${o.map(u=>`<li class="genre">${u}</li>`).join("")}
            </ul>
            <h3 class='artist-name'>${a}</h3>
            <p class='artist-bio'>${s}</p>
            <button class='learn-more-btn' type="button" data-artist-id="${i}"><span class='btn-text'>Learn More</span>
            <svg class="right-triangle" width="24" height="24">
            <use href="/img/sprite-white.svg#right-triangle-full"></use>
            </svg>
            </button>
        </li>
    `).join("");O.insertAdjacentHTML("beforeend",e)}function l({title:t,message:e}){y.show({title:t,titleColor:"red",message:e,position:"topCenter",messageColor:"red",color:"red"})}function R({title:t,message:e}){y.show({title:t,titleColor:"blue",message:e,position:"topCenter",messageColor:"blue",color:"blue"})}const $=document.querySelector(".btn-load-more"),k=document.querySelector(".loader");function S(){k.classList.remove("hidden")}function A(){k.classList.add("hidden")}function E(){$.classList.remove("hidden")}function f(){$.classList.add("hidden")}let c=1;const P=8;async function T(){try{S();const t=await L(c);console.log(t),t.artists.length===0&&l({title:"Помилка",message:"Не вдалося завантажити дані"}),w(t.artists),E()}catch{l({title:"Помилка",message:"Не вдалося завантажити дані"})}finally{A()}}T();const _=document.querySelector(".btn-load-more");_.addEventListener("click",x);async function x(){f(),S(),c+=1;try{const t=await L(c);w(t.artists);const e=document.querySelector(".artist-card"),{height:o}=e.getBoundingClientRect();if(window.scrollBy({top:o,behavior:"smooth"}),c*P>=t.totalArtists){f(),R({title:"Кінець колекції",message:"Ви досягнули кінця колекції"});return}E()}catch{l({title:"Помилка",message:"Не вдалося завантажити дані"})}finally{A()}}function I(){const t="#764191",e="#FFFFFF";document.querySelectorAll(".star-rating").forEach(a=>{const s=Number(a.dataset.rating)||0;a.querySelectorAll(".star-rating__star").forEach((i,u)=>{i.style.backgroundColor=u<s?t:e})})}function j(){new q(".feedback-swiper",D)}const D={modules:[B,N],loop:!1,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"custom-bullet",bulletActiveClass:"custom-bullet-active",renderBullet(t,e){return t>2?"":`<span class="${e}"></span>`}},on:{init(){g(this),I()},slideChange(){g(this)}}};function g(t){const e=t.slides.length,o=t.activeIndex,a=document.querySelectorAll(".custom-bullet");if(!a.length||e===0)return;let s;o===0?s=0:o===e-1?s=2:s=1,a.forEach((n,i)=>n.classList.toggle("custom-bullet-active",i===s))}function H({rating:t,descr:e,name:o}){return`
    <div class="feedback-card">
      <div class="star-rating star-rating--sm" data-rating="${Math.round(t)}">
        ${'<span class="star-rating__star"></span>'.repeat(5)}
      </div>
      <p class="feedback-text">${e}</p>
      <p class="feedback-author">${o}</p>
    </div>
  `}const h=document.querySelector("#feedback-list");async function G(){if(!h)return;const t=await F();!Array.isArray(t)||t.length===0||(h.innerHTML=t.map(e=>`<div class="swiper-slide">${H(e)}</div>`).join(""),j())}window.addEventListener("DOMContentLoaded",()=>{G()});const p=document.querySelector("[data-menu]"),Y=document.querySelector("[data-menu-open]"),U=document.querySelector("[data-menu-close]"),z=document.querySelectorAll("[data-mob-nav]"),K=()=>{p.classList.remove("is-hidden"),document.body.classList.add("no-scroll")},m=()=>{p.classList.add("is-hidden"),document.body.classList.remove("no-scroll")};Y.addEventListener("click",K);U.addEventListener("click",m);z.forEach(t=>{t.addEventListener("click",()=>{m()})});document.addEventListener("keydown",t=>{t.key==="Escape"&&!p.classList.contains("is-hidden")&&m()});const M="https://sound-wave.b.goit.study/api";async function V(t){try{const{data:e}=await d.get(`${M}/artists/${t}`);return e}catch(e){console.log(e)}}async function J(t){try{const{data:e}=await d.get(`${M}/artists/${t}/albums`);return e.albumsList||[]}catch(e){console.log(e)}}const Q=document.querySelector(".art-gallery");Q.addEventListener("click",W);async function W(t){const e=t.target.closest(".learn-more-btn");if(!e)return;const o=e.dataset.artistId;try{et();const[a,s]=await Promise.all([V(o),J(o)]);tt(a,s)}catch{l({title:"Помилка",message:"Не вдалося завантажити інформацію про артиста"})}}function X(t){if(!t||isNaN(t))return"-";const e=Math.floor(t/1e3),o=Math.floor(e/60),a=e%60;return`${o}:${a.toString().padStart(2,"0")}`}function Z(t,e=[]){const{genres:o=[]}=t;return`
  <div class="modal-close-btn" data-close-btn>
       </div>
       <h3 class="modal-title artist-name">
         ${t.strArtist}
       </h3>
       <div class="modal-section artist-info-section">
         <div class="artist-img">
           <img src="${t.strArtistThumb}" alt="${t.strArtist}">
         </div>
         <div class="artist-info">
           <ul class="artist-info-list">
             <li class="artist-info-item">
               <p class="artist-info-name">Years active</p>
               <span class="artist-info-descr">${t.intFormedYear}-present</span>
             </li>
             <li class="artist-info-item">
               <p class="artist-info-name">Sex</p>
               <span class="artist-info-descr">${t.strGender}</span>
             </li>
             <li class="artist-info-item">
               <p class="artist-info-name">Members</p>
               <span class="artist-info-descr">${t.intMembers}</span>
             </li>
             <li class="artist-info-item">
               <p class="artist-info-name">Country</p>
               <span class="artist-info-descr">${t.strCountry}</span>
             </li>
             <li class="artist-info-item" data-artist-bio>
               <p class="artist-info-name">Biography</p>
               <p class="artist-info-descr">
                  ${t.strBiographyEN||"No biography available"}
                </p>
                <a class="see-more visually-hidden" role="button">
                  …  <span> See all</span>
                </a>
                <a class="see-less visually-hidden" role="button">
                  <span> See less</span>
                </a>
             </li>
             <li class="artist-info-item artist-info-style">
             ${o.map(a=>`<span class="artist-style">${a}</span>`).join("")}
             </li>
           </ul>
         </div>
       </div>
<div class="modal-section artist-album-section">
  <h5 class="modal-title artist-album-title">Albums</h5>
  <div class="artist-album-list">
    ${e.length?e.map(a=>{const s=Array.isArray(a.tracks)?a.tracks:[];return`
              <div class="artist-album-item">
                <table>
                  <caption>${a.strAlbum}</caption>
                  <tr>
                    <th scope="col">Track</th>
                    <th scope="col">Time</th>
                    <th scope="col">Link</th>
                  </tr>

                  ${s.length?s.map(n=>`
                          <tr>
                            <td scope="row">${n.strTrack||"-"}</td>
                            <td>${X(n.intDuration)||"-"}</td>
                            <td>
                              ${n.movie?`
                                    <a class="artist-song-link"
                                       href="${n.movie}"
                                       target="_blank">
                                      <svg class="youtube-icon" width="24" height="24">
                                        <use href="../img/sprite-white.svg#Youtube"></use>
                                      </svg>
                                    </a>
                                  `:""}
                            </td>
                          </tr>
                        `).join(""):`
                        <tr>
                          <td colspan="3">No tracks available</td>
                        </tr>
                      `}

                </table>
              </div>
            `}).join(""):"<p>No albums found</p>"}
  </div>
</div>
`}const r=document.querySelector("[data-modal]"),C=r.querySelector("[data-modal-wrapper]"),b=document.querySelector("[data-close-btn]");function tt(t,e){C.innerHTML=Z(t,e),document.body.classList.add("modal-open"),r.classList.add("is-open");const o=()=>{document.body.classList.remove("modal-open"),r.classList.remove("is-open"),r.removeEventListener("click",s),window.removeEventListener("keydown",a),b.removeEventListener("click",o)},a=n=>n.key==="Escape"&&o(),s=n=>n.target===r&&o();b.addEventListener("click",o),r.addEventListener("click",s),window.addEventListener("keydown",a)}function et(){C.innerHTML=`
    <div class="modal-backdrop">
      <div class="modal">
        <p class="loader"></p>
      </div>
    </div>
  `}
//# sourceMappingURL=index.js.map
