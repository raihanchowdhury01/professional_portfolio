

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

// skills section design
const skills = document.querySelector(".add");
const html = document.querySelector(".html5");
let htmlCounter = 0;
const css = document.getElementById("css");
let cssCounter = 0;
const js = document.getElementById("js");
let jsCounter = 0;
const py = document.getElementById("py");
let pyCounter = 0;
const sql = document.getElementById("sql");
let sqlCounter = 0;
const observeSkill = new IntersectionObserver((items)=>{
items.forEach(item =>{
    if(item.isIntersecting){
        skills.classList.add("skill");
         // html
         setInterval(() => {
            if (htmlCounter === 90) {
                clearInterval();
            } else {
                htmlCounter++;
                html.innerText = htmlCounter;
            }
        }, 20);
         // css
         setInterval(() => {
            if (cssCounter === 80) {
                clearInterval();
            } else {
                cssCounter++;
                css.innerText = cssCounter;
            }
        }, 20);
         // js
         setInterval(() => {
            if (jsCounter === 60) {
                clearInterval();
            } else {
                jsCounter++;
                js.innerText = jsCounter;
            }
        }, 20);
         // py
         setInterval(() => {
            if (pyCounter === 60) {
                clearInterval();
            } else {
                pyCounter++;
                py.innerText = pyCounter;
            }
        }, 50);
         // sql
         setInterval(() => {
            if (sqlCounter === 50) {
                clearInterval();
            } else {
                sqlCounter++;
                sql.innerText = sqlCounter;
            }
        }, 40);
    }else{
        skills.classList.remove("skill");
    }
})
}, {
    threshold: 0.1
})

observeSkill.observe(skills);