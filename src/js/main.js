const mobileMenuToggle = document.querySelector(".toggle-menu");
const mobileNavItems = document.querySelector(".mobile-nav--items");

mobileMenuToggle.addEventListener("click", function () {
  mobileMenuToggle.classList.toggle("active");
  // mobileNavItems.classList.toggle("no-opacity");
  // mobileNavItems.classList.toggle("hidden");
  // mobileNavItems.classList.toggle("from-right");
  // mobileNavItems.classList.toggle("no-opacity");
  const toggleCSSClasses = (el, ...cls) =>
    cls.map((cl) => el.classList.toggle(cl));
  toggleCSSClasses(mobileNavItems, "no-opacity", "hidden", "from-right");
});
