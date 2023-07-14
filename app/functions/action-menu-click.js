export function hideMenu(navMenu, navLinks) {
  navLinks.forEach((el) => {
    el.addEventListener("click", () => {
      navMenu.classList.remove("show-menu")
    })
  })
}

export function showMenu(navMenu, toggleBtn) {
  document.addEventListener("click", (e) => {
    if (e.target === toggleBtn) navMenu.classList.toggle("show-menu")
  })
}