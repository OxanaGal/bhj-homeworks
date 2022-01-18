//'use strict';

let click = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");

function cookieClicker(){
    click.textContent ++;
    cookieImg.width === 200 ? cookieImg.width = 150 : cookieImg.width = 200;
    
}

cookieImg.onclick = cookieClicker;