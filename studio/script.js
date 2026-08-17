const main = document.querySelector("main");
const videoBox = document.querySelector(".main-video");
const video = document.querySelector(".v1");
const modeChange = document.querySelector(".mode-change");
const Menu = document.querySelector("#menu");
main.addEventListener("mousemove", (e) => {

    video.style.visibility = "visible";

    videoBox.style.left = (e.clientX) + "px";
    videoBox.style.top = (e.clientY) + "px";

});
main.addEventListener("mouseleave", () => {
    video.style.visibility = "hidden";
});
let isDarkMode = false;
// modeChange.addEventListener("click", () => {
//  isDarkMode = !isDarkMode;

//    if (isDarkMode) {
//         modeChange.textContent = "Dark Mode";
//         document.body.style.color = "white";
//         document.body.style.backgroundColor = "black";

//     }
//     else {
//         isDarkMode = false;
//         modeChange.textContent = "Light Mode";
//         document.body.style.color = "black";
//         document.body.style.backgroundColor = "white";

//     }


//     // if (document.body.classList.contains("dark-mode")) {
//     //     modeChange.innerHTML = "<b>Dark Mode</b>";
//     //     document.body.style.color = "white";
//     //     document.body.style.backgroundColor = "black";
//     // } else {
//     //     modeChange.innerHTML = "<b>Light Mode</b>";
//     //     document.body.style.color = "black";
//     //     document.body.style.backgroundColor = "white";
//     //  }
// });
modeChange.addEventListener("click", () => {
    setTimeout(() => {
        document.body.classList.toggle("dark-mode");
        if (modeChange.textContent === "Light-Mode") {
            modeChange.textContent = "Dark-Mode";
        }
        else {
            modeChange.textContent = "Light-Mode";
        }
    }, 250)
});
const navMenu = document.querySelector("#navMenu");
const navMenuLinks = document.querySelectorAll(".nav-menu-link");

Menu.addEventListener("click", () => {
    if (navMenu) {
        navMenu.classList.toggle("active");
        const isOpen = navMenu.classList.contains("active");
        Menu.textContent = isOpen ? "Close" : "Menu";
        document.body.style.overflow = isOpen ? "hidden" : "";
    }
});

navMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu) {
            navMenu.classList.remove("active");
            Menu.textContent = "Menu";
            document.body.style.overflow = "";
        }
    });
});

