const input = document.querySelector('.tasks__input');
const task_list = Array.from(document.querySelectorAll('.tasks__list'))

let task = document.createElement('div');
task.className = 'task';
let task_title = document.createElement('div');
task_title.className = 'task__title';
task.appendChild(task_title);
let cross = document.createElement('a');
cross.href="#";
cross.className = "task__remove";
cross.innerText = '&times;';
task.appendChild(cross);

function textRecord (text) {
    task_list.push(task);
    task_title.textContent = text;
    return task_list;
}

input.addEventListener('enter', () => {
 textRecord(input.innerText);
  });

