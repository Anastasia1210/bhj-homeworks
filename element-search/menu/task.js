const links = document.querySelectorAll('.menu__link');


[...links].forEach(link=>link.addEventListener('click', (event) => {
        
    let item =link.parentNode.children[1];
    
    if (item.className === "menu menu_sub") {
    item.className = 'menu menu_sub menu_active';
    event.preventDefault();
    }
    
}));



