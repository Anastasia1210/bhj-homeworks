const items = document.querySelectorAll('.has-tooltip');
let tooltip = document.createElement('div');
tooltip.className = "tooltip";
tooltip.innerHTML = 'kflkfvkjfv';

items.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        tooltip.className = 'tooltip_active';
       // console.log(item.title);
       // console.log(tooltip.className);
        tooltip.innerText = item.title;
       // console.log (tooltip.innerText);
        item.insertAdjacentHTML("afterEnd", tooltip);
        
    })
});
