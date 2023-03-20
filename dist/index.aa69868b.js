const mobileMenuToggle = document.querySelector(".toggle-menu");
const mobileNavItems = document.querySelector(".mobile-nav-items");
const mobileNavItem = document.querySelectorAll(".mobile-nav-items--item");
const toggleCSSClasses = (el, ...cls)=>cls.map((cl)=>el.classList.toggle(cl));
mobileMenuToggle.addEventListener("click", function() {
    mobileMenuToggle.classList.toggle("active");
    toggleCSSClasses(mobileNavItems, "hidden", "no-opacity");
    // toggleCSSClasses([...mobileNavItem], "from-right");
    console.log(mobileNavItem);
    mobileNavItem.forEach(function(currentValue, currentIndex, listObj) {
        setTimeout(()=>{
            console.log("evo ga");
            toggleCSSClasses(listObj[currentIndex], "no-opacity");
        }, 1000);
    });
    console.log("zasto vovo ne radi?");
});

//# sourceMappingURL=index.aa69868b.js.map
