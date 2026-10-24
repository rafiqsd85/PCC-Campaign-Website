
import './style.css'

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");
const mobileLinks = document.querySelectorAll(".mobile-link");

// Close mobile menu
function closeMenu() {
  if (!menuButton || !mobileMenu || !menuIcon) return;

  mobileMenu.classList.add("hidden");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
  menuIcon.textContent = "☰";
}

// Toggle mobile menu
if (menuButton && mobileMenu && menuIcon) {
  menuButton.addEventListener("click", () => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      mobileMenu.classList.remove("hidden");
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute("aria-label", "Close navigation menu");
      menuIcon.textContent = "✕";
    }
  });

  // Close menu after clicking a navigation link
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu when switching to desktop screen
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });
}


// Countdown Timer
const voteDate = new Date("2026-10-29T11:00:00+06:00").getTime();

const countdownTimer = setInterval(() => {
  const now = Date.now();
  const distance = voteDate - now;

  if (distance <= 0) {
    clearInterval(countdownTimer);

    document.getElementById("countdown").innerHTML = `
      <div class="col-span-4 text-lg font-bold text-cyan-300">
        TODAY IS VOTE DAY!
      </div>
    `;
    return;
  }

  document.getElementById("days").textContent =
    String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(Math.floor((distance / 1000) % 60)).padStart(2, "0");
}, 1000);