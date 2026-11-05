/* Shop details live here. Replace the placeholders before the site goes public. */
const SITE = {
  name: "Valor Afro Cut",
  phoneDisplay: "(555) 010-0142",
  phoneTel: "+15550100142",
  email: "hello@valorafrocut.com",
  instagram: "https://instagram.com/valorafrocut",
  instagramHandle: "@valorafrocut",
  address: ["281 Livingstone Street West", "Barrie, ON L4N 7C7"],
  hours: [
    ["Monday – Thursday", "10:00 AM – 7:00 PM"],
    ["Friday – Saturday", "9:00 AM – 7:00 PM"],
    ["Sunday", "11:00 AM – 5:00 PM"],
  ],
};

const NAV = [
  ["#top", "top", "Home"],
  ["#visit", "visit", "Book Now"],
];

const SERVICE_PICKS = {
  "afro-shape": "Afro Shape — $45",
  fade: "Signature Fade — $40",
  "cut-beard": "Cut and Beard — $65",
  beard: "Beard Sculpt — $30",
  waves: "Wave Session — $35",
  kids: "Kids Cut — $30",
  retwist: "Loc Retwist — $80",
  ritual: "Valor Ritual — $140",
};

const INSTAGRAM_ICON = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm11.2 1.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>`;

function el(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function renderHeader() {
  const page = document.body.dataset.page;
  const links = NAV.map(([href, id, label]) => {
    const current = id === page ? ' aria-current="page"' : "";
    return `<a href="${href}"${current}>${label}</a>`;
  }).join("");

  const header = el(`
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="#top">
          <img src="images/logo.png" alt="Valor Afro Cut">
        </a>
        <nav class="nav" id="site-nav" aria-label="Primary">
          ${links}
        </nav>
        <div class="header-tools">
          <a class="icon-link js-instagram" aria-label="Valor Afro Cut on Instagram">${INSTAGRAM_ICON}</a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
            <span class="sr-only">Menu</span>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `);

  document.getElementById("header").replaceWith(header);
}

function renderFooter() {
  const links = NAV.map(([href, , label]) => `<a href="${href}">${label}</a>`).join("");
  const footer = el(`
    <footer class="site-footer">
      <div class="footer-inner">
        <a class="brand" href="#top">
          <img src="images/logo.png" alt="Valor Afro Cut">
        </a>
        <nav class="footer-nav" aria-label="Footer">${links}</nav>
        <div class="footer-meta">
          <a class="js-phone"></a>
          <a class="js-email"></a>
          <a class="js-instagram">${SITE.instagramHandle}</a>
        </div>
        <p class="copyright">© <span data-year></span> Valor Afro Cut. All rights reserved.</p>
      </div>
    </footer>
  `);
  document.getElementById("footer").replaceWith(footer);
}

function renderHireDialog() {
  const dialog = el(`
    <dialog class="hire-dialog" id="hire-dialog" aria-labelledby="hire-title">
      <form class="sheet" data-form="hiring" novalidate>
        <div class="dialog-head">
          <div>
            <p class="eyebrow">The team</p>
            <h2 id="hire-title">Are you a barber?</h2>
          </div>
          <button class="close-dialog" type="button" data-close-dialog aria-label="Close">×</button>
        </div>
        <p class="dialog-copy">If your work is clean and you respect textured hair, send a note and a couple of recent cuts. We read every one.</p>
        <div class="fields">
          <label>Name*
            <input name="name" required autocomplete="name" placeholder="Your name">
          </label>
          <label>Phone number*
            <input name="phone" type="tel" required autocomplete="tel" placeholder="Phone number">
          </label>
          <label>Email*
            <input name="email" type="email" required autocomplete="email" placeholder="Your email address">
          </label>
          <label>Instagram
            <input name="instagram" placeholder="@yourhandle">
          </label>
          <label>Message*
            <textarea name="message" required placeholder="Where you have worked, and the cuts you want to be known for."></textarea>
          </label>
        </div>
        <p class="form-error" role="alert" hidden></p>
        <button class="btn btn-fill" type="submit">Submit</button>
        <div class="form-success" hidden>
          <h3>Application ready to send.</h3>
          <p>Your email app should open with this note addressed to the shop. If it does not, email <a class="js-email"></a>.</p>
        </div>
      </form>
    </dialog>
  `);
  document.body.append(dialog);
}

function renderMobileBar() {
  const bar = el(`
    <div class="mobile-bar">
      <a class="btn btn-light" href="#visit">Book now</a>
      <a class="btn btn-light js-phone" data-label="Call"></a>
    </div>
  `);
  document.body.append(bar);
}

function fillSiteBits(root = document) {
  root.querySelectorAll(".js-phone").forEach((node) => {
    node.href = `tel:${SITE.phoneTel}`;
    if (!node.dataset.label) node.textContent = SITE.phoneDisplay;
    else node.textContent = node.dataset.label;
  });
  root.querySelectorAll(".js-email").forEach((node) => {
    node.href = `mailto:${SITE.email}`;
    node.textContent = SITE.email;
  });
  root.querySelectorAll(".js-instagram").forEach((node) => {
    node.href = SITE.instagram;
    if (node.classList.contains("icon-link")) {
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    } else if (!node.querySelector("svg")) {
      node.textContent = node.textContent || SITE.instagramHandle;
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    } else {
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    }
  });
  root.querySelectorAll(".js-address").forEach((node) => {
    node.innerHTML = SITE.address.map((line) => `<span>${line}</span>`).join("");
  });
  root.querySelectorAll(".js-hours").forEach((node) => {
    node.innerHTML = SITE.hours
      .map(([day, time]) => `<li><span>${day}</span><span>${time}</span></li>`)
      .join("");
  });
  root.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

function setupHire() {
  const dialog = document.getElementById("hire-dialog");
  if (!dialog) return;
  document.querySelectorAll("[data-open-hire]").forEach((button) => {
    button.addEventListener("click", () => dialog.showModal());
  });
  dialog.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => dialog.close());
  });
}

function fieldValue(form, name) {
  const field = form.elements[name];
  return field ? String(field.value).trim() : "";
}

function setupForms() {
  const subjects = {
    book: "Chair request — Valor Afro Cut",
    contact: "Message — Valor Afro Cut",
    advertise: "Advertising inquiry — Valor Afro Cut",
    hiring: "Barber application — Valor Afro Cut",
  };

  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const error = form.querySelector(".form-error");
      const success = form.querySelector(".form-success");
      const email = fieldValue(form, "email");
      const requiredOk = [...form.querySelectorAll("[required]")].every((field) => field.value.trim());
      const emailOk = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!requiredOk || !emailOk) {
        error.hidden = false;
        error.textContent = emailOk
          ? "Fill in every required field."
          : "Enter a valid email address.";
        return;
      }

      error.hidden = true;
      const lines = [...new FormData(form).entries()]
        .filter(([, value]) => String(value).trim())
        .map(([key, value]) => `${key}: ${value}`);
      const subject = subjects[form.dataset.form] || "Valor Afro Cut";
      const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

      form.querySelectorAll("label, .btn, .fields").forEach((node) => {
        node.hidden = true;
      });
      if (success) success.hidden = false;
      window.location.href = mailto;
    });
  });
}

function pickService(key) {
  const value = SERVICE_PICKS[key];
  if (!value) return;
  const input = [...document.querySelectorAll('input[name="service"]')].find((field) => field.value === value);
  if (input) input.checked = true;
}

function setupServicePicks() {
  document.querySelectorAll("[data-pick]").forEach((link) => {
    link.addEventListener("click", () => pickService(link.dataset.pick));
  });
  const day = document.querySelector('input[name="day"]');
  if (day) day.min = new Date().toISOString().slice(0, 10);
}

function setupScrollSpy() {
  const links = [...document.querySelectorAll(".nav a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length) return;

  const mark = () => {
    const line = window.scrollY + 160;
    let current = sections[0];
    [...sections]
      .sort((a, b) => a.offsetTop - b.offsetTop)
      .forEach((section) => {
        if (section.offsetTop <= line) current = section;
      });
    links.forEach((link) => {
      if (link.getAttribute("href") === `#${current.id}`) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };

  window.addEventListener("scroll", mark, { passive: true });
  window.addEventListener("hashchange", mark);
  window.addEventListener("load", mark);
  mark();
}

renderHeader();
renderFooter();
renderMobileBar();
fillSiteBits();
setupMenu();
setupForms();
setupServicePicks();
setupScrollSpy();
