

// action button and others design
const bar = document.querySelector("#bars");
const crosse = document.querySelector("#xMark");
const barClass = document.querySelector(".bars");
const crosseClass = document.querySelector(".xMark");
const openM = document.querySelector(".menuBar");
const closeM = document.querySelector(".menuBar");

bar.addEventListener("click", () => {
    barClass.classList.add("active");
    crosseClass.classList.add("cActive");
    openM.classList.add("activeMenu");
})
crosse.addEventListener("click", () => {
    barClass.classList.remove("active");
    crosseClass.classList.remove("cActive");
    closeM.classList.remove("activeMenu");
})

// navbar sticky design
const navbar = document.querySelector(".navBar");
const menubar = document.querySelector(".menuBar");
const check = navbar.offsetTop;
const menu = navbar.offsetTop;
window.addEventListener("scroll", () => {
    if (window.pageYOffset > check) {
        navbar.classList.add("sticky");
        menubar.classList.add("stick");
    } else {
        navbar.classList.remove("sticky");
        menubar.classList.remove("stick");
    }
})

// IntersectionObserve animation design
const content = document.querySelector(".about")
const experience = document.getElementById("experience");
const project = document.getElementById("project");
let counter = 0;
let projects = 0;
const observer = new IntersectionObserver((items) => {
    console.log(items);
    items.forEach(item => {
        if (item.isIntersecting) {
            content.classList.add("aboutAnim");
            setInterval(() => {
                if (counter === 3) {
                    clearInterval();
                } else {
                    counter++;
                    experience.innerHTML = counter;
                }
            }, 100);
            setInterval(() => {
                if (projects === 20) {
                    clearInterval();
                } else {
                    projects++;
                    project.innerHTML = projects;
                }
            }, 100);
        } else {
            content.classList.remove("aboutAnim");
        }
    })
}, {
    threshold: 0.5
});

observer.observe(content);

// about section counter design


