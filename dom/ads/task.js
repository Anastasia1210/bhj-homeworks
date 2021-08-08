const phrases = Array.from(document.getElementsByClassName('rotator__case'));
let ind = 0;

    setInterval(() => {
      for (el of phrases) {
        el.classList.remove('rotator__case_active');
      }
        phrases[ind].classList.add('rotator__case_active');
      ind++;
    if (ind === phrases.length - 1) {
      ind = 0;
    }
    
    }, 1000);
    







