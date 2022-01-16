'use strict';

const countDownTimer = setInterval(function() {
    let countDownStart = document.getElementById('timer');
    countDownStart.textContent --;
    if(countDownStart.textContent <= 0){
        alert("Вы победили в конкурсе!");
        clearInterval(countDownTimer);
    }  
}, 1000)
