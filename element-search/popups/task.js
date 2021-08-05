document.getElementById("modal_main").className = "modal modal_active";
const modal = document.getElementsByClassName("modal");
const btn = document.getElementsByClassName("show-success");
const crosses = document.querySelectorAll('.modal__close_times');

function closeWindow () {
    modal[1].className = "modal modal_active";
    modal[0].className = 'modal';    
}

crosses.forEach(button => {
    button.addEventListener('click', () =>
        button.closest('div[id]').className = 'modal'
    ) 
})      

btn[0].onclick = function () {
   closeWindow();
}
