const phrases = document.getElementsByClassName('rotator__case');

    setInterval(() => {
      for (item of phrases) {
        item.classList.toggle('rotator__case_active')}
    }, 1000);
    







