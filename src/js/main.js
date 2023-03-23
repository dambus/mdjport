"use strict";
const { entries } = require("lodash");

const mobileMenuToggle = document.querySelector(".toggle-menu");
const mobileNavItems = document.querySelector(".mobile-nav-items");
const mobileNavItem = document.querySelectorAll(".mobile-nav-items--item");
const navBar = document.querySelector(".header");
// let navBarPosition = navBar.getBoundingClientRect().top;
const navBarLinks = document.querySelectorAll(".nav a");
// let scrollPosition = window.scrollY;
// let vHeight = window.innerHeight - 120;

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

navBarLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const makeActiveNav = (entries, observer) => {
  entries.forEach((entry) => {
    // if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
    if (entry.isIntersecting) {
      // toggle active class
      let id = entry.target.getAttribute("id");
      console.log(id);
      console.log(entry);
      let allActiveLinks = document.querySelector(".active");
      allActiveLinks.classList.remove("active");
      console.log(allActiveLinks);
      let newLink = document.querySelector(`[href='#${id}']`);
      console.log(newLink);
      newLink.classList.toggle("active");
    }
  });
};

const options = { treshold: 0.55, rootMargin: "-200px" };
const observer = new IntersectionObserver(makeActiveNav, options);
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  // console.log(section);
  observer.observe(section);
});
