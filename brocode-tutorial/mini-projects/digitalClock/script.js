
const clock = document.getElementById("clock");
const AMPM = document.getElementById("period");


updateTime();

function updateTime() {
    const now = new Date();
    const UTCHours = now.getUTCHours();
    const ESTHours = (UTCHours - 5 + 24) % 24;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hours12 = ESTHours % 12 || 12;
    const period = ESTHours >= 12 ? "PM" : "AM";

    clock.innerHTML = `${hours12}:${minutes}:${seconds}`
    AMPM.textContent = period;
}

setInterval(updateTime, 1000);