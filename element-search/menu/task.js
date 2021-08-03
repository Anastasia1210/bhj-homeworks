const links = document.getElementsByClassName("menu__link");


for (let i=0; i<links.length; i++) {
    let parent = links[i].closest;
    links[i].addEventListener('click', () => {
      if (parent.classList.contains('menu menu_sub') ) {
          parent.classList.add('menu_active')
      } else {
          return false;
      }
    });
}




