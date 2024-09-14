let times = document.querySelector(".time");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let days = document.querySelector(".days");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

times.style.justifyContent = 'center';
times.style.width = '800px'
times.style.display = 'flex';
times.style.gap = '10px';
times.style.fontSize = '150px';
times.style.marginTop = '';
times.style.color = 'yellow';
times.style.background = 'black';

days.style.justifyContent = 'center';
days.style.width = '800px'
days.style.display = 'flex';
days.style.gap = '10px';
days.style.fontSize = '50px';
days.style.color = 'yellow';
days.style.background = 'black';

function updateTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let d = date.getDate();
    let month = date.getMonth() + 1;
    let y = date.getFullYear();

    hour.innerHTML = `${padZero(h)} : ${padZero(m)} : ${padZero(s)}`;
    days.innerHTML = `${padZero(d)} . ${padZero(month)} . ${y}`;
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

setInterval(updateTime, 10);