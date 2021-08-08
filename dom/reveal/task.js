const div = Array.from(document.getElementsByClassName('reveal'));

 function isFullyVisible (el) {
       const element = el.getBoundingClientRect();
       let top = element.top;
       let bottom = element.bottom;
       return ((top>= 0) && (bottom <= this.window.innerHeight))
    
};

window.addEventListener('scroll', () => {
    for (item of div) {
    if (isFullyVisible(item)) {
        item.classList.add("reveal_active")
    }
}
})

