const menuButton = document.getElementById('menu-btn');
const headerMenu = document.getElementById('header-menu');
let menuOpened = false;

menuButton.addEventListener("click", () => {
    if (!menuOpened) {
        menuButton.classList.add("opened");
        headerMenu.classList.add("opened");
        menuOpened = true;
    } else {
        menuButton.classList.remove("opened");
        headerMenu.classList.remove("opened");
        menuOpened = false;
    }
});