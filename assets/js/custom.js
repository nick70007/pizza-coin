window.addEventListener("scroll", function () {
  const header = document.querySelector("#LandingHeader");
  if (window.scrollY > 10) {
    header.classList.add("position-fixed");
  } else {
    header.classList.remove("position-fixed");
  }
});
// ==================
window.gtranslateSettings = {
  "default_language": "en",
  "languages": ["en", "es", "de", "fr", "pt", "ru", "tr", "ja", "ko", "ar", "hi", "zh-CN"],
  "wrapper_selector": ".gtranslate_wrapper",
  "flag_size": 24,
  "switcher_horizontal_position": "right",
  "alt_flags": { "en": "usa" }
};

// ====================
const countdownDate = new Date("March 25, 2025 00:00:00").getTime();
function updateTimer() {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  if (timeLeft <= 0) {
    document.querySelector('.offer-time-wrapper').innerHTML = "<h2>Offer Expired</h2>";
    return;
  }
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  function formatNumber(num) {
    return num.toString().padStart(2, "0");
  }
  function updateDisplay(id, value) {
    const formattedValue = formatNumber(value);
    const container = document.getElementById(id);
    container.innerHTML = formattedValue.split("").map(num => `<div class="td-item">${num}</div>`).join("");
  }

  updateDisplay("days", days);
  updateDisplay("hours", hours);
  updateDisplay("minutes", minutes);
  updateDisplay("seconds", seconds);
}
setInterval(updateTimer, 1000);
updateTimer();

// ========================= 
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".wallet-btn button");
  const walletInputs = document.querySelectorAll(".wallte-input");

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      buttons.forEach(btn => btn.classList.remove("active"));
      walletInputs.forEach(input => input.classList.add("hidden"));
      this.classList.add("active");
      walletInputs[index].classList.remove("hidden");
    });
  });
});

// ====================
const buyBtn = document.getElementById('buy-btn');
const stakeBtn = document.getElementById('stake-btn');
const buyWidgets = document.getElementById('buy-widgets');
const stakeWidgets = document.getElementById('stake-widgets');
function toggleActiveButton(button) {
  buyBtn.classList.remove('active');
  stakeBtn.classList.remove('active');
  button.classList.add('active');
}
buyBtn.addEventListener('click', () => {
  buyWidgets.classList.remove('d-none');
  stakeWidgets.classList.add('d-none');
  toggleActiveButton(buyBtn);
});
stakeBtn.addEventListener('click', () => {
  stakeWidgets.classList.remove('d-none');
  buyWidgets.classList.add('d-none');
  toggleActiveButton(stakeBtn);
});

// ==================
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // Target all sections
  const navLinks = document.querySelectorAll(".heading-link");

  function setActiveNav() {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60; // Adjust for header height
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => link.classList.remove("active"));
        document.querySelector(`a[href="#${sectionId}"]`).classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveNav);
});
// ==================
document.addEventListener("DOMContentLoaded", function () {
  var offcanvasElement = document.getElementById("offcanvasExample");
  var offcanvas = new bootstrap.Offcanvas(offcanvasElement);
  
  document.querySelectorAll(".heading-link").forEach(function (link) {
    link.addEventListener("click", function () {
      offcanvas.hide();
    });
  });
});