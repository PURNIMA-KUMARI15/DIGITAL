function update() {
    let hrs = document.querySelector('.box1');
    let min = document.querySelector('.box2');
    let sec = document.querySelector('.box3');
    let currentTime = new Date();
    console.log(currentTime);

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    let am2 = document.querySelector('.am1');

    if (hrs.innerHTML < 12) {
        am2.innerHTML = 'AM';
    }
    else {
        am2.innerHTML = 'PM';
    }

}
setInterval(update, 1000);

let currentTime = new Date();

let date = document.querySelector('.date1');
realDate = (currentTime.getDate() < 10 ? "0" : "") + currentTime.getDate();
month = (currentTime.getMonth() + 1 < 10 ? "0" : "") + (currentTime.getMonth() + 1);
year = (currentTime.getFullYear() < 10 ? "0" : "") + currentTime.getFullYear();
date.innerHTML = ` ${realDate}-${month}-${year}`;

let day1 = document.querySelector('.day');
if (currentTime.getDay() === 0) {
    day1.innerHTML = 'SUNDAY';
}
if (currentTime.getDay() === 1) {
    day1.innerHTML = 'MONDAY';
}
if (currentTime.getDay() === 2) {
    day1.innerHTML = 'TUESDAY';
}
if (currentTime.getDay() === 3) {
    day1.innerHTML = 'WEDNESDAY';
}
if (currentTime.getDay() === 4) {
    day1.innerHTML = 'THURSDAY';
}
if (currentTime.getDay() === 5) {
    day1.innerHTML = 'FRIDAY';
}
if (currentTime.getDay() === 6) {
    day1.innerHTML = 'SATURDAY';
}
