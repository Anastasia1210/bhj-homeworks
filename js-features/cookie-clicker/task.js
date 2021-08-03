const image = document.getElementById("cookie");
const counterID = document.getElementById("clicker__counter");
let counter = 0;
let start = Date.now();

    function timeKiller() {
               
      counter++;
      console.log(counter);
      image.addEventListener('mousedown', () => {
        image.width = 300;
      });
      image.addEventListener('mouseup', () => {
        image.width = 200;
      })
      
      let end = Date.now();
      let speedCounter= (1 / ((end - start) / 1000)).toFixed(3);
    
      start = end;
      
      counterID.textContent = counter + " Скорость клика: " + speedCounter;
      return counter;
    }
    
image.onclick = timeKiller;
