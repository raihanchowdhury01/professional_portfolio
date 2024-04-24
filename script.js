

const bar = document.querySelector("#bars");
const crosse = document.querySelector("#xMark");
const barClass = document.querySelector(".bars");
const crosseClass = document.querySelector(".xMark");
const openM = document.querySelector(".menuBar");
const closeM = document.querySelector(".menuBar");

bar.addEventListener("click", ()=>{
    barClass.classList.add("active");
    crosseClass.classList.add("cActive");
    openM.classList.add("activeMenu");
})
crosse.addEventListener("click", ()=>{
    barClass.classList.remove("active");
    crosseClass.classList.remove("cActive");
    closeM.classList.remove("activeMenu");
})