const click_cnt = document.getElementById("clicker__counter");
const img_cookie = document.getElementById("cookie");
click_cnt.insertAdjacentHTML("afterEnd","<br>Скорость клика: <span id = 'clicker__speed'>0</span>");
const click_speed =document.getElementById("clicker__speed");

img_cookie.style.width ="200px";

let date_old = new Date();
let cnt = Number(click_cnt.textContent);

img_cookie.onclick = () => {
	cnt++;
	click_cnt.textContent = cnt;
	if (img_cookie.style.width === "200px")
		img_cookie.style.width = "250px";
	else
		img_cookie.style.width = "200px";
	let date = new Date();
	click_speed.textContent = (1/((date-date_old)/1000)).toFixed(2);
	date_old = date;
}



