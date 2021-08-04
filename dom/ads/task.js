const phrases = document.getElementsByClassName('rotator__case');

    setInterval(() => {
      for (let i = 0; i < phrases.length; i++) {
        phrases[i].classList.toggle('rotator__case_active')}
    }, 1000);
    







