window.addEventListener('load', calculateTime);

function calculateTime(){
    let date = new Date();
    let month = date.getMonth();
    let dayNumber = date.getDay();
    let dayHour = date.getHours();
    let dayMinute = date.getMinutes();
    let daySecond = date.getSeconds();
    let year = date.getFullYear();
    let ampm = hour >= 12? 'PM': 'AM';
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    hour = hour%12;
    hour = hour ? hour : '12';
    hour < 10 ? hour = '0' + hour : hour;
    minute < 10 ? minute = '0' + minute : minute;
    second < 10 ? second = '0' + second : second;
    document.getElementById('year').innerHTML = year;
    document.getElementById('month').innerHTML = monthNames[month];
    document.getElementById('day').innerHTML = dayNames[dayNumber];
    document.getElementById('hour').innerHTML = dayHour;
    document.getElementById('minute').innerHTML = dayMinute;
    document.getElementById('second').innerHTML = daySecond;
    document.getElementById('ampm').innerHTML = ampm;

    setTimeout(calculateTime, 200);
}


