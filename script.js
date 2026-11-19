const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  observer.observe(element);
});

const cursor = document.querySelector(".cursor-orb");
window.addEventListener("pointermove", (event) => {
  cursor.animate({
    left: `${event.clientX}px`,
    top: `${event.clientY}px`
  }, { duration: 180, fill: "forwards" });
});

document.querySelectorAll("a, .menu-item").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.style.width = "42px";
    cursor.style.height = "42px";
    cursor.style.background = "rgba(243,200,78,.45)";
  });
  element.addEventListener("mouseleave", () => {
    cursor.style.width = "18px";
    cursor.style.height = "18px";
    cursor.style.background = "transparent";
  });
});
