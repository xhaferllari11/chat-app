var socket = io();
console.log(socket);

var a = document.querySelector('.thisP');
a.innerHTML = 'by Alban';

var userName;

var nameEl = document.querySelector('.name');
var userTextEl = document.querySelector('.user-text');
var sendTextBtnEl = document.querySelector('.msg-send');
var messagesEl = document.querySelector('.messages');
var nameMsgEl = document.querySelector('.name-msg');

sendTextBtnEl.addEventListener('click', sendMsgHandler);


function sendMsgHandler(evt){
    userName = nameEl.value;
    if (userName){
        nameMsgEl.textContent = '';
        let words = userTextEl.value;
        socket.emit('new-msg', {
            words: words,
            user: userName
        });
        userTextEl.value = '';
    } else {
        nameMsgEl.textContent = `*Enter a name`
    }
}

socket.on('new-msg',function(data){
    newMsg = document.createElement('p');
    let t = new Date();
    newMsg.innerHTML = `<strong>${data.user}:</strong> ${data.words} <small>${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}</small>`;
    messagesEl.prepend(newMsg);
});