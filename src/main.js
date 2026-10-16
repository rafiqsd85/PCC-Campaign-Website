
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

