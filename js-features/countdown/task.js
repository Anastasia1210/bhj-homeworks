const timer = function(){
    const timer = document.getElementById("timer");
     
    if (timer.textContent === '0') {
     alert ("Вы победили в конкурсе!");
    } else {
      timer.textContent = timer.textContent - 1
    } 
  
}
setInterval(timer, 1000);