const image = document.getElementById("cookie");
const counterID = document.getElementById("clicker__counter");
let counter = 0;

    function timeKiller() {
      let speedCounter = 0;
      
      let start = Date();
      image.width = 300;
      counter++;
      let end = Date();
      speedCounter = (end - start);
      counterID.textContent = counter + " Скорость клика: " + speedCounter;
    }
   
image.onclick = timeKiller;
