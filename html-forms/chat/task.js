const redBtn = document.getElementsByClassName('chat-widget__side');
const input = document.querySelector('.chat-widget__input');
const messagesArr = document.querySelector('.chat-widget__messages');
const messages = Array.from(document.querySelectorAll('.message__text'));
const time = Array.from(document.querySelectorAll('.message__time'));
const customerMessages = messages[1];
const robotMessages = messages[0];
const customerTextTime = time[1];
const robotTime = time[0];
//let customerTime = customerMessages.children[0];
//let customerText = Array.from(customerMessages.children[1]);
//let robotTime =robotMessages.children[0];
//let robotText = robotMessages.children[1];

redBtn[0].addEventListener('click', () => {
    document.querySelector('.chat-widget').classList.toggle('chat-widget_active');
})

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
    message = this.value;
    messageEmptyOrNot (message);
    robotReply(message);
    
    }
});


function messageEmptyOrNot (b) {
    let time = new Date();
    let timeStr = time.toLocaleDateString();
    if (b === ! '') {
        messagesArr.innerHTML += b + timeStr;
    } else {
        return false;
    }
     
}

function robotReply (c) {
    if (messageEmptyOrNot(c)) {
        randomRobotMessage = Math.floor(Math.random() * robotMessages.length);
        robotMessages = randomRobotMessage;
    }
    return robotMessages;
}
//messages.oninput=(e)=>customerMessages.innerHTML=e.target.value;