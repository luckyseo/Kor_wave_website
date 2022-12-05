const clock = document.querySelector(".clock span:last-child")

function getClock(){
    const date=new Date();
    const hours = String(date.getHours()).padStart(2,0);
    const minutes = String(date.getMinutes()).padStart(2,0);
    const seconds = String(date.getSeconds()).padStart(2,0);

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//getclock() 바로 호출가능 . 없으면 00:00상태로 1초 정도 소요 후 데이터를 가져옴
getClock()
setInterval(getClock,1000)