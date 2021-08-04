const links = document.querySelectorAll('.font-size');
const books = document.querySelectorAll('.book__content');

let arr = Array.from(links);

let index = 0;

const activeLink = n => {
    for (link of links) {
        link.classList.remove("_active")
    }
    links[n].classList.add("_active");
}

const fontSize = ind => {
  if (ind === 0){
        books[ind].classList.add("book_fs-small")
    } else if (ind === 2){
    books[ind].classList.add("book_fs-big");
}
}

links.forEach((item, indexLink) => {
    item.addEventListener('click', () => {
        index = indexLink;
        activeLink(index);
        fontSize(index);
    })
});
