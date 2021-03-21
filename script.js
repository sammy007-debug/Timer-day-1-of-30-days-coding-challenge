const startingPoint = 16;

let time = startingPoint * 60;

const countdown = document.getElementById("counter");

setInterval(updateCounter, 1000);


function updateCounter() {

    


    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;


    countdown.innerHTML = `${minutes}:${seconds}`;
    time !== 0 ? time-- : time;

    

}

function restart(){
   
    window.location.reload();
} 









