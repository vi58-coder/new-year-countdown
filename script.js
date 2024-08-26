const dayEl = document.getElementById("day")
const hourEl = document.getElementById("hour")
const minEl = document.getElementById("minutes")
const secEl = document.getElementById("second")


const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime()

updateCountdown()

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now 
   

    const second = 1000;
    const minutes = second * 60;
    const hour = minutes * 60;
    const day = hour * 24;
    
    const d = Math.floor(gap/day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minutes);
    const s = Math.floor((gap % minutes) / second); 
   

    dayEl.innerText = d;
    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    setTimeout(updateCountdown, 1000)
}