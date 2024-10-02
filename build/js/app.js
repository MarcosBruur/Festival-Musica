document.addEventListener("DOMContentLoaded",(e=>{crearGaleria(),navegacionFija(),resaltarEnlace(),scrollNav()}));const navegacionFija=()=>{const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival");window.addEventListener("scroll",(()=>{t.getBoundingClientRect().bottom<1?e.classList.add("fixed"):e.classList.remove("fixed")}))},crearGaleria=()=>{const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=16;t++){const a=document.createElement("PICTURE");a.innerHTML=`\n            <source srcset="build/img/gallery/thumb/${t}.avif" type="image/avif">\n            <source srcset="build/img/gallery/thumb/${t}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${t}.jpg" alt="imagen galeria">\n            `,a.src=`src/img/gallery/thumb/${t}.jpg`,a.alt="Imagen de galeria",e.appendChild(a),a.onclick=()=>{ampliarImagen(t)}}},ampliarImagen=e=>{const t=document.createElement("IMG");t.width="300",t.height="200",t.loading="lazy",t.src=`src/img/gallery/full/${e}.jpg`,t.alt="Imagen de galeria";const a=document.createElement("DIV");a.classList.add("modal"),a.appendChild(t),a.onclick=()=>{cerrarModal()};const l=document.querySelector("body");l.classList.add("overflow-hidden"),l.appendChild(a)},cerrarModal=()=>{const e=document.querySelector(".modal");e.classList.add("fade-out");document.querySelector("body").classList.remove("overflow-hidden"),setTimeout((()=>{e?.remove()}),250)},resaltarEnlace=()=>{document.addEventListener("scroll",(()=>{const e=document.querySelectorAll("section"),t=document.querySelectorAll(".navegacion-principal a");let a="";e.forEach((e=>{const t=e.offsetTop,l=e.clientHeight;window.scrollY>=t-l/3&&(a=e.id)})),t.forEach((e=>{e.classList.remove("active"),e.getAttribute("href")==="#"+a&&e.classList.add("active")}))}))},scrollNav=()=>{document.querySelectorAll(".navegacion-principal a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}))}))};