
const images=[
        "greeting/citystreet.jpg",
        "greeting/kbg.jpg",
        "greeting/namsan.jpg",
        "greeting/seoulNight.jpg",
        "greeting/metroRiver.jpg"
    ]
const image = images[Math.floor(Math.random()*5)]

document.querySelector("#StartPage").setAttribute("background-image",`img/${image}`)




