const listOfRadioBtns = document.querySelectorAll('.interests_active');


for(i = 0; i < listOfRadioBtns.length; i++) {
  const btn = listOfRadioBtns[i];
  const subItems = btn.parentNode.children[i].children[i];
  console.log(subItems);
    btn.addEventListener('click', e => { 
      if(btn.checked) {
        subItems.checked = true;
      }
    })
    
}

