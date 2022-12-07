const LoadPage = document.querySelector(".loading")
const btn = document.querySelector(".status_bar_left")
const HIDDEN = "hidden"

window.addEventListener("load",function(){
    LoadPage.classList.add("fade_out_greeting");
    LoadPage.style.display = "none";
    btn.classList.remove(HIDDEN);
})