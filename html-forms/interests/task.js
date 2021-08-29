const listOfRadioBtns = document.querySelectorAll('.interests_active');

  const btn1 = listOfRadioBtns[0];
  const items1 = btn1.parentNode.children[0].children[0];
  
  for (i = 0; i < btn1.children; i++) {
  const subItems = btn1.children[i].children[0].children[0];
    items1.addEventListener('click', e => { 
      if(items1.checked) {
        subItems.checked;
      }
    })  
  }  

  const btn2 = listOfRadioBtns[1];
  const items2 = btn2.parentNode.children[0].children[0];
  
  for (i = 0; i < btn2.children; i++) {
  const subItems = btn2.children[i].children[0].children[0];
    items2.addEventListener('click', e => { 
      if(items2.checked) {
        subItems.checked;
      }
    })  
  } 


