const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    projectItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  });
});
