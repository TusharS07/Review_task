var allChats = [];
var cssClass = ["sent", "received"];

function sendMsg() {
    const msg = $('#msg').val();
    console.log(msg);

    $('#msg').val("");
    

    const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12; // handle midnight (0 hours)

minutes = minutes < 10 ? '0' + minutes : minutes;

const formattedTime = hours + ':' + minutes + ' ' + ampm;
console.log(formattedTime); // Example output: "10:05 AM"

//store in object

let msgData = {
    "msg": msg,
    "time": formattedTime
}

allChats.push(msgData);

console.log(allChats);

var allmsg = [];
$.each(allChats, function(i, value) {
    const cssClassIndex = i % cssClass.length;

    
    allmsg = `<div class="message ${cssClass[cssClassIndex]}">
    <p>${value.msg}</p>
    <span class="time">${value.time}</span>
  </div>`

});
$('#chats').append(allmsg);


}