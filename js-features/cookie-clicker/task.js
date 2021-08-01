const image = document.getElementById("cookie");
const counterID = document.getElementById("clicker__counter");
let counter = 0;
let start = Date.now();

    function timeKiller() {
               
      image.width = 300;
      counter++;
      let end = Date.now();
      let speedCounter= (end - start) / 1000;
    
      start = end;
      
      counterID.textContent = counter + " Скорость клика: " + speedCounter;
    }
   
image.onclick = timeKiller;
