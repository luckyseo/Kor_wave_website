
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

