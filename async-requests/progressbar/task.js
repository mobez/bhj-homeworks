const form = document.getElementById("form");
const progress = document.getElementById("progress");

let progressAct = {cnt: 0, load: 0};
let timerId = null;

function checkProgress(){
	if (progressAct.load > progressAct.cnt){
		progressAct.cnt += 0.005;
		progress.value = progressAct.cnt;
	}
	if (progressAct.cnt >= 1) timerId = null;
	else timerId = setTimeout(checkProgress, 1);
}



form.addEventListener("submit", (e)=>{
	e.preventDefault();
	progress.value = "0.0";
	progressAct = {cnt: 0, load: 0};
	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.addEventListener('readystatechange', function(e) {
		switch(this.readyState){
			case 0:
			break;
			case 1:
				//console.log("Вызван open");
			break;
			case 2:
				//console.log("Получены заголовки");
			break;
			case 3:
				//console.log("загружается тело (получен очередной пакет данных)");
			break;
			case 4:
				//console.log("запрос завершён");
			break;
		}
	});
	xhr.upload.onprogress = function(e) {
    progressAct.load = e.loaded / e.total;
  }

	xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
	xhr.send(formData);
	if (!timerId) timerId = setTimeout(checkProgress, 10);
});


