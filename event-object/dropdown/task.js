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

for (let i=0; i < links.length; i ++) {
    
        links[i].addEventListener('click', (n) => {
            let b = links[i].parentElement.parentElement.parentElement.children[0];
            n.preventDefault();
        b.textContent = links[i].textContent;
        links[i].parentElement.parentElement.className = 'dropdown__list';
        })
        
}


