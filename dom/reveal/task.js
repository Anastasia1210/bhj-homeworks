const div = document.getElementsByClassName('reveal');

 function isFullyVisible (el) {
    const element = el.getBoundingClientRect().top;
    let top = element.top;
    let bottom = element.bottom;
    return ((top>= 0) && (bottom <= this.window.innerHeight))
};

window.addEventListener('scroll', () => {
    if (isFullyVisible(div)) {
        div.classList.add("reveal_active")
    }
})

