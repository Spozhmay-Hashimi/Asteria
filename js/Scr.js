// ===== Video Modal - Stop video when closed =====
const videoModal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");

if (videoModal && videoPlayer) {
  videoModal.addEventListener("hidden.bs.modal", function () {
    const videoSrc = videoPlayer.src;
    videoPlayer.src = "";
    videoPlayer.src = videoSrc;
  });
}

// ===== Smooth Scroll for navbar links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===== Navbar background on scroll =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 14, 39, 0.95)";
    navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.background = "rgba(10, 14, 39, 0.85)";
    navbar.style.boxShadow = "none";
  }
});

// ===== Reveal animations on scroll =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document
  .querySelectorAll(".mission-card, .explore-card, .news-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });
