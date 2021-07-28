const slider = document.getElementsByClassName('slider__arrow');
let arr = Array.from(slider);

slider.onclick = function(){
    for (i=0; i<arr.length; i++)
    arr[i].className = 'slider__item slider__item_active';
}