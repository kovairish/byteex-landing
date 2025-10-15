(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();async function $(){const t=await fetch("/src/data/content.json");if(!t.ok)throw new Error("Failed to fetch content");return t.json()}function y(t){return`
    <div class="banner">
      <div class="container">
        <p class="banner__text">${t.text}</p>
      </div>
    </div>
  `}function w(t){return`
    <header class="header">
      <div class="container">
        <div class="header__logo">
          <img src="${t.logo}" alt="BYTEEXT logo">
        </div>
      </div>
    </header>
  `}function x(t){return`
    <section class="hero">
      <div class="container">
        <div class="hero__content">
          <h1 class="hero__title">${t.title}</h1>
          <ul class="hero__features">
            ${t.features.map(e=>`
              <li class="hero__feature-item">
                <img src="${e.icon}" alt="icon" class="hero__feature-icon">
                <span>${e.text}</span>
              </li>
            `).join("")}
          </ul>
          <button class="hero__cta" data-scroll="#features">
            ${t.ctaText}
            <img src="${t.ctaIcon}" alt="arrow" class="hero__cta-icon">
          </button>
        </div>
        <div class="hero__images">
          ${t.images.map((e,n)=>`
            <img src="${e}" alt="Model ${n+1}" class="hero__image">
          `).join("")}
        </div>
      </div>
      
      ${t.floatingTestimonial?`
        <div class="hero__floating-testimonial">
          <div class="floating-testimonial">
            <div class="floating-testimonial__header">
              <img src="${t.floatingTestimonial.avatar}" alt="${t.floatingTestimonial.author}" class="floating-testimonial__avatar">
              <div class="floating-testimonial__info">
                <div class="floating-testimonial__author">${t.floatingTestimonial.author}</div>
                <div class="floating-testimonial__stars">
                  ${Array(t.floatingTestimonial.rating).fill("⭐").join("")}
                </div>
                <div class="floating-testimonial__badge">${t.floatingTestimonial.badge}</div>
              </div>
            </div>
            <p class="floating-testimonial__text">${t.floatingTestimonial.text}</p>
          </div>
        </div>
      `:""}
    </section>
  `}function b(t){return`
    <section class="partners">
      <div class="container">
        <p class="partners__title">${t.title}</p>
        <div class="partners__logos">
          ${t.logos.map(e=>`
            <img src="${e}" alt="Partner logo" class="partners__logo">
          `).join("")}
        </div>
      </div>
    </section>
  `}function q(t){return`
    <section id="features" class="features">
      <div class="container">
        <div class="features__content">
          <div class="features__left">
            <h2 class="features__title">${t.title}</h2>
            <div class="features__list">
              ${t.items.map(e=>`
                <div class="feature-item">
                  <img src="${e.icon}" alt="" class="feature-item__icon">
                  <div class="feature-item__content">
                    <h3 class="feature-item__title">${e.title}</h3>
                    <p class="feature-item__description">${e.description}</p>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
          
          <div class="features__right">
            <div class="features__gallery">
              <div class="gallery__main">
                <button class="gallery__nav gallery__nav--prev" aria-label="Previous">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
                
                <img src="${t.gallery[0]}" alt="Gallery" class="gallery__main-image" id="mainGalleryImage">
                
                <button class="gallery__nav gallery__nav--next" aria-label="Next">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
              
              <div class="gallery__thumbnails">
                ${t.gallery.map((e,n)=>`
                  <img 
                    src="${e}" 
                    alt="Gallery ${n+1}" 
                    class="gallery__thumbnail ${n===0?"active":""}" 
                    data-index="${n}"
                  >
                `).join("")}
              </div>
              
              <p class="gallery__label">White Robe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function L(t){return`
    <section class="faq">
      <div class="faq__container">
        <div class="faq__content">
          <h2 class="faq__title">${t.title}</h2>
          <div class="faq__list">
            ${t.items.map((e,n)=>`
              <div class="faq-item ${n===0?"active":""}">
                <button class="faq-question">
                  <span>${e.question}</span>
                  <span class="faq-icon">${n===0?"−":"+"}</span>
                </button>
                <div class="faq-answer">
                  <p>${e.answer}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
        
        <div class="faq__images">
          <img src="${t.images}" alt="FAQ image" class="faq__image">
        </div>
      </div>
    </section>
  `}function k(t){const{title:e,paragraphs:n,cta:a,images:s}=t;return`
    <section class="third-section">
      <div class="third-section__container">
        <div class="third-section__image">
          <img src="${s}" alt="${e}">
        </div>
        
        <div class="third-section__content">
          <h2 class="third-section__title">${e}</h2>
          
          <div class="third-section__text">
            ${n.map(o=>`
              <p>${o}</p>
            `).join("")}
          </div>
          
          <a href="${a.link}" class="third-section__cta">${a.text}</a>
        </div>
      </div>
    </section>
  `}function S(t){return`
    <section class="fourth-section">
      <div class="container">
        <h2 class="fourth-section__title">${t.title}</h2>
        
        <div class="fourth-section__cards">
          ${t.cards.map(e=>`
            <div class="fourth-section__card" style="background-color: ${e.bgColor}">
              <img src="${e.icon}" alt="${e.title}" class="fourth-section__icon">
              <h3 class="fourth-section__card-title">${e.title}</h3>
              <p class="fourth-section__card-description">${e.description}</p>
            </div>
          `).join("")}
        </div>
        
        <div class="fourth-section__cta-wrapper">
          <a href="${t.cta.link}" class="fourth-section__cta">
            ${t.cta.text}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          
          <div class="fourth-section__rating">
            <div class="fourth-section__stars">
              ${Array(5).fill().map(()=>`
                <img src="${t.rating.starIcon}" alt="star" class="fourth-section__star">
              `).join("")}
            </div>
            <p class="fourth-section__rating-text">${t.rating.text}</p>
          </div>
        </div>
      </div>
    </section>
  `}function j(t){return`
    <section class="fifth-section">
      <div class="container">
        <h2 class="fifth-section__title">${t.title}</h2>
        <p class="fifth-section__description">${t.description}</p>
      </div>
      
      <div class="fifth-section__gallery">
        ${t.gallery.map(e=>`
          <img src="${e}" alt="Gallery" class="fifth-section__gallery-img">
        `).join("")}
      </div>
      
      <div class="fifth-section__testimonials">
        <button class="fifth-section__arrow fifth-section__arrow--prev" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        
        <div class="fifth-section__testimonials-wrapper">
          <div class="fifth-section__testimonials-track">
            ${t.testimonials.map((e,n)=>`
              <div class="fifth-section__testimonial" data-index="${n}">
                <div class="fifth-section__testimonial-header">
                  <div class="fifth-section__avatar">
                    
                  </div>
                  <div>
                    <div class="fifth-section__stars">
                      ${Array(5).fill().map(()=>`
                        <img src="${t.rating.starIcon}" alt="star" class="fifth-section__star">
                      `).join("")}
                    </div>
                    <p class="fifth-section__author">${e.author}</p>
                  </div>
                </div>
                <p class="fifth-section__testimonial-text">${e.text}</p>
              </div>
            `).join("")}
          </div>
        </div>
        
        <button class="fifth-section__arrow fifth-section__arrow--next" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

     
      
      <div class="container">
        <div class="fifth-section__cta-wrapper">
          <a href="${t.cta.link}" class="fifth-section__cta">
            ${t.cta.text}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          
          <div class="fifth-section__rating">
            <div class="fifth-section__stars-row">
              ${Array(3).fill().map(()=>`
                <img src="${t.rating.starIcon}" alt="star" class="fifth-section__star-large">
              `).join("")}
            </div>
            <p class="fifth-section__rating-text">${t.rating.text}</p>
          </div>
        </div>
      </div>
    </section>
  `}function I(t){return`
    <section class="green-impact">
      <div class="green-impact__container">
        <h2 class="green-impact__title">${t.title}</h2>
        <div class="green-impact__grid">
          ${t.items.map(e=>`
            <div class="green-impact__card">
              <div class="green-impact__icon">
                <img src="${e.icon}" alt="${e.description}" class="green-impact__icon-img">
              </div>
              <h3 class="green-impact__value">${e.value}</h3>
              <p class="green-impact__description">${e.description}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function E(t){return`
    <section class="find-something">
      <div class="find-something__container">
        <div class="find-something__content">
          <h2 class="find-something__title">${t.title}</h2>
          <p class="find-something__description">${t.description}</p>
          
          <div class="find-something__main-image">
            <img src="${t.image}" alt="Find something you love">
          </div>
          
          <a href="${t.cta.link}" class="find-something__cta">
            ${t.cta.text}
            <img src="${t.cta.icon}" alt="Arrow" class="find-something__cta-icon">
          </a>
          
          <div class="find-something__shipping-payment">
            <img src="${t.shippingInfo.image}" alt="${t.shippingInfo.text}" class="find-something__shipping-image">
            <img src="${t.paymentMethods.image}" alt="Payment Methods" class="find-something__payment-image">
          </div>
          
          <div class="find-something__features">
            ${t.features.map(e=>`
              <div class="find-something__feature">
                <div class="find-something__feature-icon">
                  <img src="${e.icon}" alt="">
                </div>
                <span class="find-something__feature-text">${e.text}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `}async function M(){const t=document.getElementById("app");try{const e=await $();t.innerHTML=`
      ${y(e.banner)}
      ${w(e.header)}
      ${x(e.hero)}
      ${b(e.partners)}
      ${q(e.features)}
      ${k(e.thirdSection)}
      ${S(e.fourthSection)}
      ${j(e.fifthSection)}
      ${L(e.faq)}
      ${I(e.greenImpact)}
      ${E(e.findSomething)}
    `,A()}catch(e){console.error("Failed to load content:",e),t.innerHTML="<p>Failed to load content. Please refresh.</p>"}}function A(){const t=document.querySelectorAll(".faq-item");t.forEach(i=>{const c=i.querySelector(".faq-question"),d=c.querySelector(".faq-icon");c.addEventListener("click",()=>{const h=i.classList.contains("active");t.forEach(l=>{if(l!==i){l.classList.remove("active");const _=l.querySelector(".faq-icon");_.textContent="+"}}),h?(i.classList.remove("active"),d.textContent="+"):(i.classList.add("active"),d.textContent="−")})}),document.querySelectorAll("[data-scroll]").forEach(i=>{i.addEventListener("click",c=>{c.preventDefault(),document.querySelector(i.dataset.scroll)?.scrollIntoView({behavior:"smooth"})})});const n=document.getElementById("mainGalleryImage"),a=document.querySelectorAll(".gallery__thumbnail"),s=document.querySelector(".gallery__nav--prev"),o=document.querySelector(".gallery__nav--next");if(!n||!a.length)return;let r=0;function g(i){r=i,n.src=a[i].src,a.forEach((c,d)=>{c.classList.toggle("active",d===i)})}a.forEach((i,c)=>{i.addEventListener("click",()=>{g(c)})}),s?.addEventListener("click",()=>{const i=r===0?a.length-1:r-1;g(i)}),o?.addEventListener("click",()=>{const i=r===a.length-1?0:r+1;g(i)});const f=document.querySelector(".fifth-section__arrow--prev"),v=document.querySelector(".fifth-section__arrow--next"),u=document.querySelector(".fifth-section__testimonials-track");if(f&&v&&u){let l=function(){i===0?f.classList.add("disabled"):f.classList.remove("disabled"),i>=h?v.classList.add("disabled"):v.classList.remove("disabled")},_=function(){if(c.length>0){const m=c[0].offsetWidth,p=-(i*(m+30));u.style.transform=`translateX(${p}px)`,l()}};var B=l,C=_;let i=0;const c=document.querySelectorAll(".fifth-section__testimonial"),h=Math.max(0,c.length-3);f.addEventListener("click",()=>{i>0&&(i--,_())}),v.addEventListener("click",()=>{i<h&&(i++,_())}),l()}}M();
