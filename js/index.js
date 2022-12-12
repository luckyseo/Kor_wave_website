
const images=[
        "greeting/citystreet.jpg",
        "greeting/kbg.jpg",
        "greeting/colorfulbkg.jpg",
        "greeting/seoulNight.jpg",
        "greeting/metroRiver.jpg"
    ]
const image = images[Math.floor(Math.random()*images.length)]
console.log(image)
const bgimg = document.querySelector("body")
//bgimg.src = `img/${image}`
bgimg.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.9),rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url('img/${image}')`
bgimg.style.backgroundRepeat=`no-repeat`
bgimg.style.backgroundPosition= `center`
bgimg.style.backgroundAttachment= `fixed `
bgimg.style.backgroundSize = "cover";



//document.querySelector("#StartPage").setAttribute("background-image",`img/${image}`)
console.log(bgimg.style.backgroundImage)

/*menu nav bar design */

const navMenu = document.querySelectorAll(".nav_menu")

function showUnderline(event){
    event.target.style.boxShadow= "0px 6px 7px -4px whitesmoke";
}
function eraseUnderline(event){
    event.target.style.boxShadow= "none";

}
navMenu.forEach((menu)=>(menu).addEventListener("mouseenter",showUnderline))
navMenu.forEach((menu)=>(menu).addEventListener("mouseleave",eraseUnderline))


const bar = document.querySelectorAll(".Asia-Oceania .bar");
const bar2 =document.querySelectorAll(".America .bar");
const bar3 =document.querySelectorAll(".EU .bar");
const bar4 =document.querySelectorAll(".Africa .bar");

const colorBar=["orange","red","violet","hotpink","darkblue"]
for(let i=0; i<bar.length;i++){
    let width = parseFloat(bar[i].getAttribute("data-percentage"))
    bar[i].style.width = `${width}%`
    bar[i].innerText = `${width}%`
    bar[i].style.backgroundColor = colorBar[0]
    bar[i].style.borderRadius = "0px 5px 5px 0px"
}

for(let i=0; i<bar2.length;i++){
    let width = parseFloat(bar2[i].getAttribute("data-percentage"))
    bar2[i].style.width = `${width}%`
    bar2[i].innerText = `${width}%`
    bar2[i].style.backgroundColor = colorBar[1]
    bar2[i].style.borderRadius = "0px 5px 5px 0px"
}
for(let i=0; i<bar3.length;i++){
    let width = parseFloat(bar3[i].getAttribute("data-percentage"))
    bar3[i].style.width = `${width}%`
    bar3[i].innerText = `${width}%`
    bar3[i].style.backgroundColor = colorBar[2]
    bar3[i].style.borderRadius = "0px 5px 5px 0px"
}
for(let i=0; i<bar4.length;i++){
    let width = parseFloat(bar4[i].getAttribute("data-percentage"))
    bar4[i].style.width = `${width}%`
    bar4[i].innerText = `${width}%`
    bar4[i].style.backgroundColor = colorBar[3]
    bar4[i].style.borderRadius = "0px 5px 5px 0px"
}