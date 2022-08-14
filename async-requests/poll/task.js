

function create(t) {
  return document.createElement(t);
};
function append(a, b) {
  a.appendChild(b);
};



function sendResult(id, idAnswer){
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("readystatechange", ()=>{
		if(xhr.readyState === xhr.DONE){
			alert("Спасибо, ваш голос засчитан!");
			const title = document.getElementById("poll__title");
			const answers = document.getElementById("poll__answers");
			answers.remove();
			const json = JSON.parse(xhr.responseText);
			let summ=0;
			json.stat.forEach((stat)=>{
				summ += stat.votes;
			});
			json.stat.forEach((stat)=>{
				title.innerHTML += `<br>${stat.answer} <b>${((stat.votes/summ)*100).toFixed(2)}%</b>`
			});
		}
	});
	xhr.open("POST","https://netology-slow-rest.herokuapp.com/poll.php");
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(`vote=${id}&answer=${idAnswer}`);
}


function addPool(json){
	const title = document.getElementById("poll__title");
	const answers = document.getElementById("poll__answers");
	title.innerHTML = json.data.title;
	json.data.answers.forEach((answer, idAnswer)=>{
		const answer_btn = create("button");
		answer_btn.classList.add("poll__answer");
		answer_btn.textContent = answer;
		answer_btn.addEventListener("click", ()=>{
			sendResult(json.id, idAnswer);
		})
		append(answers, answer_btn);
	});
}

const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", ()=>{
	if(xhr.readyState === xhr.DONE){
		addPool(JSON.parse(xhr.responseText));
	}
});
xhr.open("GET","https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();