document.getElementById("modal_main").className = "modal modal_active";
const close = document.getElementsByClassName('modal__close');
let arr = Array.from(close);
const success = document.getElementsByClassName("show-success");
let successArr = Array.from(success)


arr[0].onclick = function() {
    document.getElementById("modal_main").className = "modal";
}

successArr[0].onclick = function () {
    document.getElementById("modal_success").className = "modal modal_active";
}



