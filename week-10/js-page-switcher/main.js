window.onload = () => {
  // Inputs
  const tab_switchers = document.querySelectorAll("[data-switcher]");

  // Logic
  for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];

    const page_id = tab_switcher.dataset.tab;

    tab_switcher.addEventListener("click", () => {
      document
        .querySelector(".tabs .tab.is-active")
        .classList.remove("is-active");

      // Output
      tab_switcher.parentNode.classList.add("is-active");

      // Output
      switchPage(page_id);
    });
  }
};

function switchPage(page_id) {
  // Input
  const current_page = document.querySelector(".pages .page.is-active");
  current_page.classList.remove("is-active");

  // Input & Logic
  const next_page = document.querySelector(
    `.pages .page[data-page="${page_id}"]`
  );

  // Output
  next_page.classList.add("is-active");
}
