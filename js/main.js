// BRK Isen - Grundgerüst Skript

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
    });
  }

  // Footer-Jahr automatisch aktualisieren
  var yearEl = document.querySelector("[data-current-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Spenden-Flyout
  var donateFlyout = document.querySelector(".donate-flyout");
  var donateToggle = document.querySelector(".donate-toggle");
  var donatePanel = document.querySelector(".donate-panel");

  if (donateFlyout && donateToggle && donatePanel) {
    var setOpen = function (open) {
      donatePanel.hidden = !open;
      donateToggle.setAttribute("aria-expanded", String(open));
    };

    donateToggle.addEventListener("click", function () {
      setOpen(donatePanel.hidden);
    });

    document.addEventListener("click", function (event) {
      if (!donatePanel.hidden && !donateFlyout.contains(event.target)) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !donatePanel.hidden) {
        setOpen(false);
        donateToggle.focus();
      }
    });
  }
});
