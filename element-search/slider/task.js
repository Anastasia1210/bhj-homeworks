const prev = document.getElementsByClassName('slider__arrow slider__arrow_prev')
const next = document.getElementsByClassName('slider__arrow slider__arrow_next')
const slides = document.querySelectorAll('.slider__item')
const dots = document.querySelectorAll('.slider__dot')

let index = 0;

const activeSlide = n => {
    console.log(n);
    for(slide of slides){
        slide.classList.remove('slider__item_active')
    }
    slides[n].classList.add('slider__item_active');
}

const activeDot = n => {
    console.log(n);
    for(dot of dots){
        dot.classList.remove('_active')
    }
    dots[n].classList.add('_active');
}

const activeItems = ind => {
    activeDot(ind);
    activeSlide(ind);
}

const nextSlide = () => {
    if(index === slides.length - 1) {
        index = 0;
        activeItems(index);
    } else {
        index++;
        activeItems(index);
    }
}

const prevSlide = () => {
    if(index === 0) {
        index = slides.length - 1;
        activeItems(index);
    } else {
        index--;
        activeItems(index);
    }
}

dots.forEach((item, indexDot) => {
item.addEventListener('click', () => {
    index = indexDot;
    activeItems(index);
})
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
