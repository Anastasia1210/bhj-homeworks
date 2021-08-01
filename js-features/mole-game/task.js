
let divs = document.getElementsByClassName('hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let arr = Array.from(divs);
let okCounter = 0;
let ngCounter = 0;

function checkMe(event) {
      
	if (event.target.classList.contains('hole_has-mole')){
        okCounter++;
        dead.textContent = okCounter;
    } else { 
        ngCounter++;
        lost.textContent = ngCounter;
    }

    if (okCounter === 10) {
       alert ("Вы выиграли");
    };

    if (ngCounter === 5) {
        alert ("You've lost!")
    };
};

arr.forEach( function(item, i, arr) { 
    item.onclick = checkMe;
});





