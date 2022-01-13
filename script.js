const hourDiv = document.querySelector('#hour')
const minDiv = document.querySelector('#minute')
const secDiv = document.querySelector('#second')
const timeFunc = ()=>{
    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let milliSec = time.getMilliseconds()
    hR = (hour*30)+(min*0.5)
    mR = (min*6)+(sec*0.1)
    sR = (sec*6)+(milliSec*0.006)

    hourDiv.style.transform = `rotate(${hR}deg)`
    minDiv.style.transform = `rotate(${mR}deg)`
    secDiv.style.transform = `rotate(${sR}deg)`
}
setInterval(timeFunc, 1)

