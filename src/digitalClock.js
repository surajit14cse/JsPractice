function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    let timeFormat = 'Am';


    let finalTime = `${hours}:${minutes}:${second}`;

    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerText = timeFormat;


}

setInterval(digitalClock, 1000);