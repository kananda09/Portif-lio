let userHasScrolled = false;

window.addEventListener("scroll", () => {
  userHasScrolled = true;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (userHasScrolled && entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else if (!entry.isIntersecting) {
        entry.target.classList.remove("animate"); // Remove ao sair da tela
      }
    });
  },
  {
    rootMargin: "-80px 0px",
    threshold: 0.1,
  }
);

document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});
