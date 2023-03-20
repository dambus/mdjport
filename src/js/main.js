const mobileMenuToggle = document.querySelector(".toggle-menu");
const mobileNavItems = document.querySelector(".mobile-nav-items");
const mobileNavItem = document.querySelectorAll(".mobile-nav-items--item");
const toggleCSSClasses = (el, ...cls) =>
  cls.map((cl) => el.classList.toggle(cl));

mobileNavItem.forEach(function (currentValue, currentIndex, listObj) {
  listObj[currentIndex].addEventListener("click", function () {
    mobileMenuToggle.click();
  });
});

mobileMenuToggle.addEventListener("click", function () {
  mobileMenuToggle.classList.toggle("active");
  toggleCSSClasses(mobileNavItems, "hidden", "no-opacity");
  // toggleCSSClasses([...mobileNavItem], "from-right");
  // console.log(mobileNavItem);
  mobileNavItem.forEach(function (currentValue, currentIndex, listObj) {
    toggleCSSClasses(listObj[currentIndex], "no-opacity");
  });
});
