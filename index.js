const mobileMenuEl = document.querySelector(".mobile-menu");
const mobileMenu = document.querySelector(".mobile-menu__item");
const bodyEl = document.querySelector("body");

const desktopMenu = document.querySelector(".desktop-subitem")

const humBurgerClickHandler = () => {
    console.log("hi")
    mobileMenuEl.classList.contains("click") ? mobileMenuEl.classList.remove("click") : mobileMenuEl.classList.add("click")

    console.log(mobileMenuEl)
    if(mobileMenu.classList.contains("menu__mobile")){
        mobileMenu.classList.remove("menu__mobile")
        bodyEl.classList.remove("hidden-overflow")
    }else{
        mobileMenu.classList.add("menu__mobile")
        bodyEl.classList.add("hidden-overflow")
    }
    console.log(mobileMenu)
    console.log(bodyEl)

}

mobileMenuEl.addEventListener("click", humBurgerClickHandler)