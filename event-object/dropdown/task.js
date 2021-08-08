const dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'));
const items = document.getElementsByClassName('dropdown__item');
const dropdownList = document.querySelectorAll('.dropdown__list');
const links = document.querySelectorAll('.dropdown__link');


for (i=0; i<dropdownValue.length; i++) {
dropdownValue[i].addEventListener('click', () => {
    for(i=0; i<dropdownList.length; i++){
    dropdownList[i].classList.add('dropdown__list_active');
    }
});
}

for (link of links) {
    let b = link.parentElement.parentElement.parentElement.children[0];
        link.addEventListener('click', () => {
        b.textContent = link.textContent;
        })
        
}


