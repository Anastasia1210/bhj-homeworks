const links = document.querySelectorAll('.menu__link');

[...links].forEach(link=>link.addEventListener('click', linkClick,false));

function linkClick(){
    
   // for (i=0; i<links.length; i++) {
        let item =this.parentNode.children[1];
        item.className = 'menu menu_sub menu_active';
    }

