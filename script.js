 // offer switch (false to turn off)
const offerEnabled = true;
if (!offerEnabled) {
  document.getElementById("offers").style.display = "none";
} else {
  tick();
  setInterval(tick, 1000);
}

const burgerBtn = document.getElementById("burgerBtn");
const menu = document.getElementById("menu");

if (burgerBtn && menu) {
  burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    const isOpen = menu.classList.contains("open");
    burgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when a link is clicked
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => menu.classList.remove("open"));
  });
}

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// End of Offer
const promoEnd = new Date("2026-04-01T23:59:59");

function tick() {
  const now = new Date();
  const diff = promoEnd - now;
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");

  const dd = document.getElementById("dd");
  const hh = document.getElementById("hh");
  const mm = document.getElementById("mm");
  const ss = document.getElementById("ss");

  if (dd) dd.textContent = pad(days);
  if (hh) hh.textContent = pad(hours);
  if (mm) mm.textContent = pad(mins);
  if (ss) ss.textContent = pad(secs);
  document.getElementById("offers").style.opacity = "0";
  setTimeout(() => {
  document.getElementById("offers").style.display = "none";
  }, 500);
}

tick();
setInterval(tick, 1000);