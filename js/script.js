/* =========================================================
   LUMIÈRE STUDIO — SALON WEBSITE
   js/script.js
   -----------------------------------------------------------
   EVERYTHING a salon owner needs to change lives in the
   `salonConfig` object right below. Nothing else in this
   file needs to be touched to rebrand, re-price, or update
   contact details. See README.md for a full walkthrough.
   ========================================================= */

/* =========================================================
   1. SALON CONFIGURATION — EDIT THIS SECTION
   ========================================================= */
const salonConfig = {
  salonName: "Lumière Studio",

  // WhatsApp number in international format, digits only, no + or spaces.
  // Example: 91 for India + 10 digit number = "919876543210"
  whatsappNumber: "919XXXXXXXXX",

  phone: "+91 9XXXXXXXXX",
  email: "hello@lumierestudio.example",
  address: "12 Blossom Avenue, Green Park, Your City, 000001",

  // Any Google Maps share link works here (used by the "Get Directions" button).
  googleMapsUrl: "https://www.google.com/maps?q=Green+Park+Your+City",

  openingHours: [
    { days: "Monday – Saturday", hours: "10:00 AM – 8:00 PM" },
    { days: "Sunday", hours: "11:00 AM – 6:00 PM" }
  ],

  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    whatsappDirect: "" // leave blank to use whatsappNumber above
  }
};

/* =========================================================
   2. SERVICES + PRICING — single source of truth.
      Both the Services grid and the Pricing menu read from
      this one array, so a price only ever needs to change
      in one place.
   ========================================================= */
const services = [
  {
    id: "haircut",
    name: "Haircut",
    desc: "Precision cut, wash and blow-dry finish tailored to your face shape.",
    price: 299,
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "styling",
    name: "Hair Styling",
    desc: "Blow-dry, curls, or a sleek finish for events and everyday glam.",
    price: 499,
    image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "hairspa",
    name: "Hair Spa",
    desc: "Deep-conditioning ritual that repairs, hydrates and adds shine.",
    price: 899,
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "coloring",
    name: "Hair Coloring",
    desc: "Global colour, balayage or root touch-up with ammonia-free formulas.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "beard",
    name: "Beard Styling",
    desc: "Sharp shape-up, trim and hot-towel finish for a clean silhouette.",
    price: 249,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "facial",
    name: "Facial",
    desc: "Cleansing, exfoliation and massage for a fresh, even-toned glow.",
    price: 799,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "cleanup",
    name: "Cleanup",
    desc: "Quick refresh facial to lift dirt, oil and dullness in 30 minutes.",
    price: 399,
    image: "https://images.unsplash.com/photo-1596178060810-72660fbd5c1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "manicure",
    name: "Manicure",
    desc: "Nail shaping, cuticle care and polish for neat, healthy hands.",
    price: 349,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pedicure",
    name: "Pedicure",
    desc: "Soothing soak, scrub and polish to give tired feet new life.",
    price: 449,
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bridal",
    name: "Bridal Makeup",
    desc: "Full bridal look — skin prep, HD makeup, hair and draping trial included.",
    price: 8999,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop"
  }
];

/* =========================================================
   3. GALLERY IMAGES — replace the `src` values with your own
      photos in /assets/images/ whenever you're ready.
   ========================================================= */
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop", alt: "Stylist working on a client's haircut", big: true },
  { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", alt: "Salon interior with mirrors and chairs" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop", alt: "Bridal makeup application" },
  { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop", alt: "Hair colouring in progress" },
  { src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop", alt: "Pedicure treatment station" },
  { src: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=800&auto=format&fit=crop", alt: "Finished hairstyle close up" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop", alt: "Facial treatment being applied" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop", alt: "Beard styling and trim" }
];

/* =========================================================
   4. CUSTOMER REVIEWS
   ========================================================= */
const reviews = [
  { name: "Ananya R.", rating: 5, text: "Best haircut I've had in this city, hands down. The stylist actually listened before touching my hair." },
  { name: "Kabir M.", rating: 5, text: "Booked my appointment on WhatsApp in under a minute. In and out for a beard trim, sharp finish every time." },
  { name: "Priya S.", rating: 5, text: "Did my bridal makeup trial here and immediately cancelled my other bookings. Worth every rupee." },
  { name: "Devika N.", rating: 4, text: "Lovely hygienic space and the hair spa left my hair so soft. Slightly busy on weekends, so I book ahead now." },
  { name: "Rohan T.", rating: 5, text: "Honest pricing, no upselling, and they actually stick to the appointment time. Rare to find these days." }
];

/* =========================================================
   5. WHATSAPP HELPER — reused everywhere in the site
   ========================================================= */
function openWhatsApp(message) {
  const number = salonConfig.whatsappNumber.replace(/\D/g, "");
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

/* =========================================================
   6. RENDER: SERVICES GRID
   ========================================================= */
function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.innerHTML = services.map(s => `
    <article class="service-card" data-id="${s.id}">
      <div class="service-media">
        <img src="${s.image}" alt="${s.name} service at ${salonConfig.salonName}" loading="lazy">
        <span class="service-price-tag">From ₹${s.price}</span>
      </div>
      <div class="service-body">
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <button class="service-wa-btn" type="button" data-service="${s.name}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>
          Enquire on WhatsApp
        </button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".service-wa-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-service");
      openWhatsApp(`Hello, I am interested in ${name} service. Please share availability and pricing.`);
    });
  });
}

/* =========================================================
   7. RENDER: PRICING MENU (reuses `services` data)
   ========================================================= */
function renderPricingMenu() {
  const menu = document.getElementById("pricing-menu");
  if (!menu) return;

  menu.innerHTML = services.map(s => `
    <div class="menu-item">
      <span class="menu-item-name">${s.name}</span>
      <span class="menu-item-leader" aria-hidden="true"></span>
      <span class="menu-item-price">₹${s.price}${s.id === "bridal" ? " onwards" : ""}</span>
    </div>
  `).join("");
}

/* =========================================================
   8. RENDER: SERVICE <option> LIST FOR APPOINTMENT FORM
   ========================================================= */
function renderServiceOptions() {
  const select = document.getElementById("cust-service");
  if (!select) return;
  services.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s.name;
    opt.textContent = s.name;
    select.appendChild(opt);
  });
}

/* =========================================================
   9. RENDER: GALLERY + LIGHTBOX
   ========================================================= */
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  grid.innerHTML = galleryImages.map((img, i) => `
    <button type="button" class="${img.big ? "span-2" : ""}" data-index="${i}" aria-label="View larger image: ${img.alt}">
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
    </button>
  `).join("");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  function openLightbox(index) {
    const img = galleryImages[index];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }
  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  grid.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => openLightbox(Number(btn.dataset.index)));
  });
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lightbox.hidden) closeLightbox(); });
}

/* =========================================================
   10. RENDER: REVIEW SLIDER
   ========================================================= */
function initReviewSlider() {
  const track = document.getElementById("review-track");
  const dotsWrap = document.getElementById("review-dots");
  const prevBtn = document.getElementById("review-prev");
  const nextBtn = document.getElementById("review-next");
  if (!track) return;

  track.innerHTML = `<div class="review-track-inner">` + reviews.map(r => `
    <div class="review-slide">
      <div class="review-stars" aria-label="${r.rating} out of 5 stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
      <p class="review-text">"${r.text}"</p>
      <p class="review-name">${r.name}</p>
    </div>
  `).join("") + `</div>`;

  dotsWrap.innerHTML = reviews.map((_, i) => `<button type="button" aria-label="Go to review ${i + 1}" data-index="${i}"></button>`).join("");

  const inner = track.querySelector(".review-track-inner");
  const dots = [...dotsWrap.querySelectorAll("button")];
  let current = 0;
  let timer;

  function goTo(index) {
    current = (index + reviews.length) % reviews.length;
    inner.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }
  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }
  function startAuto() { timer = setInterval(next, 6000); }
  function stopAuto() { clearInterval(timer); }

  dots.forEach(d => d.addEventListener("click", () => { goTo(Number(d.dataset.index)); stopAuto(); startAuto(); }));
  nextBtn.addEventListener("click", () => { next(); stopAuto(); startAuto(); });
  prevBtn.addEventListener("click", () => { prev(); stopAuto(); startAuto(); });
  track.addEventListener("mouseenter", stopAuto);
  track.addEventListener("mouseleave", startAuto);

  goTo(0);
  startAuto();
}

/* =========================================================
   11. RENDER: CONTACT DETAILS + FOOTER (from salonConfig)
   ========================================================= */
function renderContactAndFooter() {
  const hoursHtml = salonConfig.openingHours.map(h => `${h.days}: ${h.hours}`).join("<br>");

  const contactList = document.getElementById("contact-list");
  if (contactList) {
    contactList.innerHTML = `
      <li><span class="c-label">Address</span><span>${salonConfig.address}</span></li>
      <li><span class="c-label">Phone</span><span>${salonConfig.phone}</span></li>
      <li><span class="c-label">WhatsApp</span><span>${salonConfig.phone}</span></li>
      <li><span class="c-label">Email</span><span>${salonConfig.email}</span></li>
      <li><span class="c-label">Hours</span><span>${hoursHtml}</span></li>
    `;
  }

  const directions = document.getElementById("get-directions");
  if (directions) directions.href = salonConfig.googleMapsUrl;

  const footerServices = document.querySelector("#footer-services ul");
  if (footerServices) {
    footerServices.innerHTML = services.slice(0, 6).map(s => `<li><a href="#services">${s.name}</a></li>`).join("");
  }

  const footerContact = document.getElementById("footer-contact");
  if (footerContact) {
    footerContact.innerHTML = `
      <li>${salonConfig.address}</li>
      <li>${salonConfig.phone}</li>
      <li>${salonConfig.email}</li>
    `;
  }

  document.getElementById("footer-salon-name").textContent = salonConfig.salonName;
  document.title = `${salonConfig.salonName} | Premium Hair & Beauty Salon`;

  const socialRow = document.getElementById("footer-social");
  if (socialRow) {
    const icons = {
      instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.7.53a5.4 5.4 0 0 1 2 1.3 5.4 5.4 0 0 1 1.3 2c.28.7.47 1.5.53 2.7.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 2-.53 2.7a5.4 5.4 0 0 1-1.3 2 5.4 5.4 0 0 1-2 1.3c-.7.28-1.5.47-2.7.53-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2-.25-2.7-.53a5.4 5.4 0 0 1-2-1.3 5.4 5.4 0 0 1-1.3-2c-.28-.7-.47-1.5-.53-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .53-2.7a5.4 5.4 0 0 1 1.3-2 5.4 5.4 0 0 1 2-1.3c.7-.28 1.5-.47 2.7-.53C8.4 2.2 8.8 2.2 12 2.2zm0 3.05a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zm0 11.13a4.38 4.38 0 1 1 0-8.76 4.38 4.38 0 0 1 0 8.76zm7-11.4a1.58 1.58 0 1 1-3.15 0 1.58 1.58 0 0 1 3.15 0z"/></svg>`,
      facebook: `<svg viewBox="0 0 24 24"><path d="M13.5 21v-7.9h2.66l.4-3.1h-3.06V8.1c0-.9.25-1.5 1.55-1.5h1.65V3.8c-.29-.04-1.27-.13-2.4-.13-2.38 0-4 1.45-4 4.1v2.3H7.63v3.1h2.67V21h3.2z"/></svg>`
    };
    let html = "";
    if (salonConfig.social.instagram) html += `<a href="${salonConfig.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icons.instagram}</a>`;
    if (salonConfig.social.facebook) html += `<a href="${salonConfig.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icons.facebook}</a>`;
    socialRow.innerHTML = html;
  }
}

/* =========================================================
   12. NAVIGATION: hamburger, smooth active-link tracking
   ========================================================= */
function initNav() {
  const header = document.getElementById("site-header");
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("main-nav");
  const navLinks = document.querySelectorAll("[data-nav]");

  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Open menu");
      document.body.style.overflow = "";
    });
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
  }, { passive: true });

  // active link on scroll
  const sections = [...navLinks].map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = "#" + entry.target.id;
        navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => io.observe(s));
}

/* =========================================================
   13. SCROLL REVEAL ANIMATIONS
   ========================================================= */
function initScrollReveal() {
  const targets = document.querySelectorAll(".service-card, .why-card, .about-content, .about-media, .appointment-form, .menu-card");
  targets.forEach(t => t.classList.add("reveal"));

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(t => io.observe(t));
}

/* =========================================================
   14. STAT COUNTERS (About section)
   ========================================================= */
function initStatCounters() {
  const stats = document.querySelectorAll(".stat-num[data-count]");
  if (!stats.length) return;

  function animate(el) {
    const target = Number(el.dataset.count);
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * progress);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(s => io.observe(s));
}

/* =========================================================
   15. APPOINTMENT FORM VALIDATION + WHATSAPP HANDOFF
   ========================================================= */
function initAppointmentForm() {
  const form = document.getElementById("appointment-form");
  if (!form) return;

  const fields = {
    name: { input: document.getElementById("cust-name"), error: document.getElementById("err-name") },
    mobile: { input: document.getElementById("cust-mobile"), error: document.getElementById("err-mobile") },
    service: { input: document.getElementById("cust-service"), error: document.getElementById("err-service") },
    date: { input: document.getElementById("cust-date"), error: document.getElementById("err-date") },
    time: { input: document.getElementById("cust-time"), error: document.getElementById("err-time") }
  };

  // prevent picking a date in the past
  const dateInput = fields.date.input;
  const today = new Date();
  dateInput.min = today.toISOString().split("T")[0];

  function setError(field, message) {
    fields[field].error.textContent = message;
    fields[field].input.closest(".form-row").classList.toggle("invalid", Boolean(message));
  }

  function validate() {
    let valid = true;

    if (!fields.name.input.value.trim()) {
      setError("name", "Please enter your name.");
      valid = false;
    } else setError("name", "");

    const mobileVal = fields.mobile.input.value.trim();
    if (!mobileVal) {
      setError("mobile", "Please enter your mobile number.");
      valid = false;
    } else if (!/^[0-9+\s-]{7,15}$/.test(mobileVal)) {
      setError("mobile", "Please enter a valid mobile number.");
      valid = false;
    } else setError("mobile", "");

    if (!fields.service.input.value) {
      setError("service", "Please select a service.");
      valid = false;
    } else setError("service", "");

    if (!fields.date.input.value) {
      setError("date", "Please pick a preferred date.");
      valid = false;
    } else setError("date", "");

    if (!fields.time.input.value) {
      setError("time", "Please pick a preferred time.");
      valid = false;
    } else setError("time", "");

    return valid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) {
      form.querySelector(".invalid input, .invalid select")?.focus();
      return;
    }

    const dateFormatted = new Date(fields.date.input.value + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    const timeFormatted = new Date("2000-01-01T" + fields.time.input.value).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
    const messageBox = document.getElementById("cust-message").value.trim();

    const message =
`Hello, I would like to book an appointment.

Name: ${fields.name.input.value.trim()}
Mobile: ${fields.mobile.input.value.trim()}
Service: ${fields.service.input.value}
Preferred Date: ${dateFormatted}
Preferred Time: ${timeFormatted}
Message: ${messageBox || "-"}

Please confirm my appointment.`;

    openWhatsApp(message);
  });
}

/* =========================================================
   16. HERO / DIRECT WHATSAPP BUTTONS
   ========================================================= */
function initDirectWhatsAppButtons() {
  document.getElementById("hero-whatsapp")?.addEventListener("click", () => {
    openWhatsApp("Hello, I would like to enquire about salon services and book an appointment.");
  });
  document.getElementById("appointment-whatsapp-direct")?.addEventListener("click", () => {
    openWhatsApp("Hello, I would like to enquire about salon services and book an appointment.");
  });
  document.getElementById("floating-whatsapp")?.addEventListener("click", () => {
    openWhatsApp("Hello, I would like to enquire about salon services and book an appointment.");
  });
}

/* =========================================================
   17. BACK TO TOP
   ========================================================= */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.hidden = window.scrollY < 500;
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================================================
   18. FOOTER YEAR
   ========================================================= */
function setFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderPricingMenu();
  renderServiceOptions();
  renderGallery();
  initReviewSlider();
  renderContactAndFooter();
  initNav();
  initScrollReveal();
  initStatCounters();
  initAppointmentForm();
  initDirectWhatsAppButtons();
  initBackToTop();
  setFooterYear();
});
