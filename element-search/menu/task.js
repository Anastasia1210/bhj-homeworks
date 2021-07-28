const element = document.getElementsByClassName("menu__link");
const list = document.getElementsByClassName("menu menu_sub");
const tag = document.getElementsByTagName('a');
let arr = Array.from(element);


for (let i=0; i<arr.length; i++) {
    arr[i].addEventListener('click', showSub);
    //arr[i].addEventListener('click', hideSub, false);
}

function showSub(){
    if(tag.parentElement === list) {
        list.className = 'menu menu_sub menu_active';
    }
    else {
        return false;
    }
}

//function hideSub () {
  //  if ()
//}

