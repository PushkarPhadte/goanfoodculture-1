document.addEventListener("DOMContentLoaded", () => {
  // === Image Reveal Animation ===
  const revealImgs = document.querySelectorAll(".gallery img");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  revealImgs.forEach(img => observer.observe(img));

  // === Typing Banner Animation ===
  const bannerTarget = document.getElementById("animated-text");
  if (bannerTarget) {
    const bannerText = "Celebrating Culture Through Cuisine";
    let i = 0;
    
    function typeBanner() {
      if (i < bannerText.length) {
        bannerTarget.textContent += bannerText.charAt(i);
        i++;
        setTimeout(typeBanner, 60);
      }
    }
    
    typeBanner();
  }

  // === Back to Top Button ===
  const topBtn = document.getElementById("back-to-top");
  if (topBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        topBtn.classList.add("show");
      } else {
        topBtn.classList.remove("show");
      }
    });

    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // === Theme Toggle ===
  const btn = document.getElementById("theme-toggle");
  const html = document.documentElement;
  
  if (btn) {
    // Load saved theme or default to dark
    const currentTheme = localStorage.getItem("theme") || "dark";
    html.classList.toggle("light", currentTheme === "light");
    btn.textContent = currentTheme === "light" ? "🌙 Dark mode" : "☀️ Light mode";

    // Toggle theme on click
    btn.addEventListener("click", () => {
      const isLight = html.classList.toggle("light");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      btn.textContent = isLight ? "🌙 Dark mode" : "☀️ Light mode";
    });
  }
});
