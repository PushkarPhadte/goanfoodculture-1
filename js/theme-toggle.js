document.addEventListener("DOMContentLoaded", () => {
  const revealImgs = document.querySelectorAll(".gallery img");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      observer.unobserve(entry.target);
      const bannerText = "Celebrating Culture Through Cuisine";
const bannerTarget = document.getElementById("animated-text");

let i = 0;
function typeBanner() {
  if (i < bannerText.length) {
    bannerTarget.innerHTML += bannerText.charAt(i);
    i++;
    setTimeout(typeBanner, 60);
  }
}
typeBanner();
    }
  });
}, { threshold: 0.2 });

revealImgs.forEach(img => observer.observe(img));
  const btn = document.getElementById("theme-toggle");
  const html = document.documentElement;
const topBtn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) topBtn.classList.add("show");
    else topBtn.classList.remove("show");
  });
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // Load saved theme or default to dark
  const current = localStorage.getItem("theme") || "dark";
  html.classList.toggle("light", current === "light");
  btn.textContent = current === "light" ? "🌙 Dark mode" : "☀️ Light mode";

  // Toggle theme on click
  btn.addEventListener("click", () => {
    const isLight = html.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    btn.textContent = isLight ? "🌙 Dark mode" : "☀️ Light mode";
  });
});