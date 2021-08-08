const links = document.querySelectorAll('.font-size');
const fontType = document.getElementById('book');

let arr = Array.from(links);

const activeLink = n => {
    for (link of links) {
        link.classList.remove("font-size_active")
    }
    links[n].classList.add("font-size_active");
}

const fontSize = ind => {
    
  if (links[ind] === links[0]){
     fontType.classList.remove("book_fs-big");
     fontType.classList.add("book_fs-small");
    } else if (links[ind] === links[2]){
        fontType.classList.remove("book_fs-small");
        
        fontType.classList.add("book_fs-big");     
} else {
    fontType.classList.remove("book_fs-small");
    fontType.classList.remove("book_fs-big");
    
}
}

links.forEach((item, indexLink) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        index = indexLink;
        activeLink(index);
        fontSize(index);

        
    })
   
});
