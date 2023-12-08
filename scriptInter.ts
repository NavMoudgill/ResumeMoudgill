document.addEventListener("onload", () => {
  const cards = document.querySelectorAll(".card");
  console.log(cards);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 1 }
  );

  cards.forEach((element) => {
    observer.observe(element);
  });
});
