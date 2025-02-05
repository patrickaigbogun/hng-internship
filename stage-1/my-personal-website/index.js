alert("my project site, have fun!");

const dayOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const d = new Date();
let day = dayOfWeek[d.getDay()];
document.getElementById("day").innerHTML = day;

function displayUTCTime(){
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} UTC`;
    document.getElementById("time").innerText = timeString;

}



displayUTCTime();