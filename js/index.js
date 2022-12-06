
const images=[
        "greeting/citystreet.jpg",
        "greeting/kbg.jpg",
        "greeting/namsan.jpg",
        "greeting/seoulNight.jpg",
        "greeting/metroRiver.jpg"
    ]
const image = images[Math.floor(Math.random()*images.length)]
console.log(image)
const bgimg = document.querySelector("body")
//bgimg.src = `img/${image}`
bgimg.style.backgroundImage = `linear-gradient(to top right, black, transparent), url('img/${image}')`
bgimg.style.backgroundRepeat=`no-repeat`
bgimg.style.backgroundPosition= `center`
bgimg.style.backgroundAttachment= `fixed `
bgimg.style.backgroundSize = "cover";



//document.querySelector("#StartPage").setAttribute("background-image",`img/${image}`)
console.log(bgimg.style.backgroundImage)


