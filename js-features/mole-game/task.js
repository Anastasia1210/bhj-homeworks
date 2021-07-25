
let divs = document.getElementsByClassName('hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function checkMe() {

    divs.forEach (function(item, i, divs){
    okCounter = 0;
    ngCounter = 0;
    item = document.getElementById('hole1');
    
	if (item === divs.includes("hole_has-mole")){
        okCounter++;
        dead.textContent = counter;
    } else { 
        ngCounter++;
        lost.textContent = ngCounter;
    }

    if (counter === 10) {
       alert ("Вы выиграли");
    };

    if (ngCounter === 5) {
        alert ("You've lost!")
    }
    });
};

divs.onclick = checkMe;





