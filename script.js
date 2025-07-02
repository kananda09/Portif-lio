const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate"); // Remove ao sair da tela, se quiser
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


console.log('Script carregado — navbar fixa responsiva funcionando!');

