// timer variables
let hr = min = sec = millisec = `0${0}`, startTimer;

// buttons
const start_btn = document.getElementById('start')
const pause_btn = document.getElementById('pause')
const reset_btn = document.getElementById('reset')

// event listeners
start_btn.addEventListener("click", startFunc)
pause_btn.addEventListener("click", pauseFunc)
reset_btn.addEventListener("click", resetFunc)

// functions
function startFunc(){
    start_btn.classList.add("active");
    pause_btn.classList.remove("pause_active");

    // timer
    startTimer = setInterval(()=>{

        // milliseconds
        millisec++
        millisec = millisec < 10 ? `0${millisec}` : millisec;

        // seconds
        if(millisec == 100){
            sec++
            sec = sec < 10 ? `0${sec}` : sec;
            millisec = `0${0}`
        }
        // minutes
        if(sec == 60){
            min++
            min = min < 10 ? `0${min}` : min;
            sec = `0${0}`
        }
        // hours
        if(min == 60){
            hr++
            hr = hr < 10 ? `0${hr}` : hr;
            min = `0${0}`
        }

        displayTime();
    }, 10);
}

function pauseFunc(){
    start_btn.classList.remove("active");
    pause_btn.classList.add("pause_active");

    //pause timer and display
    clearInterval(startTimer);
}

function resetFunc(){
    start_btn.classList.remove("active");
    pause_btn.classList.remove("pause_active");

    // reset timer and display
    clearInterval(startTimer);
    hr = min = sec = millisec = `0${0}`
    displayTime()
}

function displayTime() {
    document.getElementById('milliseconds').innerHTML = millisec;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('hours').innerHTML = hr;
}