// timer vars
let hr = min = secs = ms = 0,
    startTimer;

// buttons
const start_btn = document.getElementById('start')
const pause_btn = document.getElementById('pause')
const reset_btn = document.getElementById('reset')

// listen to click event then call a function
start_btn.addEventListener("click", startFunc)
pause_btn.addEventListener("click", pauseFunc)
reset_btn.addEventListener("click", resetFunc)

// functions
function startFunc(){
    start_btn.classList.add("active");
    pause_btn.classList.remove("pause_active");

    // timer logic

}
function pauseFunc(){
    start_btn.classList.remove("active");
    pause_btn.classList.add("pause_active");
}
function resetFunc(){
    start_btn.classList.remove("active");
    pause_btn.classList.remove("pause_active");
}
