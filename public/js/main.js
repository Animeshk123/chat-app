const socket = io();
let name;

const logo = sel('.chatBox_header_info_logo');
const nameop = sel('.chatBox_header_info_info p');

do {
  name = prompt('enter a user name');
  logo.innerHTML = name.charAt(0).toUpperCase();
  nameop.innerHTML = `<p>${name}</p>`
}while (!name) {}

function sel(el) {
  return document.querySelector(el);
}

const Threedot = sel('.chatBox_header_opt span');
const SendBtn = sel('#send span');
const textarea = sel('#text');

const dot = new TouchBoxOuter(Threedot, 'rgba(155,155,155,0.5)', 7, '300ms');
const btn = new TouchBoxOuter(SendBtn, 'rgba(155,155,155,0.5)', 8, '300ms');

Threedot.addEventListener('click', () => {
  dot._init();
})
SendBtn.addEventListener('click', () => {
  btn._init();
  sendMessage(textarea.value);
})

window.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    sendMessage(e.target.value);
  }
})

function sendMessage(msg) {
  if (msg) {
    //updateHtml
    updateHtml(msg.trim());
    sel('.chatBox_body').scrollTop = sel('.chatBox_body').scrollHeight;
    //updateserver
    socket.emit('message', {
      text: textarea.value.trim(), user: name
    });
    textarea.value = '';
  } else {
    alert('message cannot be empty');
  }
}


function updateHtml(text) {
  let div = document.createElement('div');
  div.className = 'send message';
  div.innerHTML = `<p>${text}</p>`;
  sel('.chatBox_body').appendChild(div);
}


socket.on('new', (msg) => {
  let div = document.createElement('div');
  div.className = 'recived message';
  div.innerHTML = `<p>${msg.text}</p>`;
  sel('.chatBox_body').appendChild(div);
  sel('.chatBox_body').scrollTop = sel('.chatBox_body').scrollHeight;
})

