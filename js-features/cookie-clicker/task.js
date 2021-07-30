const image = document.getElementById("cookie");
const counterID = document.getElementById("clicker__counter");
let counter = 0;
let start = 0;

    function timeKiller() {
               
      image.width = 300;
      counter++;
      let end = (new Date()).getTime();
      let speedCounter = end - start;
      start = end;
      counterID.textContent = counter + " Скорость клика: " + speedCounter;
    }
   
image.onclick = timeKiller;
