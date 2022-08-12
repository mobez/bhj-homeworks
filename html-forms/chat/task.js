const chat = document.querySelector(".chat-widget");
const btn_start = document.querySelector(".chat-widget__side");
const messages = document.querySelector(".chat-widget__messages");
const mess_box =document.querySelector(".chat-widget__messages-container");
const inp_txt = document.getElementById("chat-widget__input");

const text_revs = ["Вы не купили не одного товара для того, чтобы так с нами разговаривать!", "Кто тут?", "Где ваша совесть?", "К сожалению все операторы сейчас заняты. Не пешите нам больше!", "Добрый день! До свидания!", "Мы ничего не будем вам продовать!"];

let timerId = null;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function ce(t) {
  return document.createElement(t);
};
function ac(a, b) {
  a.appendChild(b);
};
function addZero(l,s){
	var text=s+'';
	while(text.length<l)text='0'+text;
	return text;
};
function mess(m = "", t = 0){
	const div = ce("div");
	const time = ce("div");
	const message = ce("div");
	const date = new Date();
	if (m.length){
		div.classList.add("message");
		if (!t) {
			div.classList.add("message_client");
		}
		time.classList.add("message__time");
		time.textContent = addZero(2,date.getHours())+":"+addZero(2,date.getMinutes());
		message.classList.add("message__text");
		message.textContent = m;
		ac(div, time);
		ac(div, message);
		ac(messages, div);
		if (mess_box.scrollHeight > mess_box.clientHeight){
			mess_box.scrollTop = mess_box.scrollHeight-mess_box.clientHeight;
		}
	}
}
function wake(){
	mess(text_revs[getRandomInt(text_revs.length)], 1);
	timerId = null;
}

btn_start.addEventListener("click", ()=>{
	chat.classList.add("chat-widget_active");
	if (!timerId) timerId = setTimeout(wake, 30000);
});

inp_txt.addEventListener("keyup",(e)=>{
	if (e.key === "Enter"){
		mess(inp_txt.value);
		mess(text_revs[getRandomInt(text_revs.length)], 1);
		inp_txt.value = "";
		if (timerId) clearTimeout(timerId);
		timerId = setTimeout(wake, 30000);
	}
});